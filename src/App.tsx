import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import AnnualDashboard from './pages/Annual';
import ChannelView from './pages/Channel';
import DailyEntry from './pages/DailyEntry';
import Leads from './pages/Leads';
import Settings from './pages/Settings';
import Members from './pages/Members';
import Login from './pages/Login';
import { ToastProvider } from './components/ui/Toast';
import { useAuth } from './contexts/AuthContext';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, isLoading, requireAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle routing based on auth state
  useEffect(() => {
    if (!requireAuth) return; // Skip auth checks if disabled
    
    if (!isLoading) {
      if (!user && location.pathname !== '/login') {
        navigate('/login');
      } else if (user && location.pathname === '/login') {
        navigate('/dashboard');
      } else if (user && location.pathname === '/') {
        navigate('/dashboard');
      }
    }
  }, [user, isLoading, navigate, location, requireAuth]);

  if (isLoading && requireAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-muted text-sm font-medium animate-pulse">Carregando DEAIOS...</p>
        </div>
      </div>
    );
  }

  // If on login page, render without layout
  if (location.pathname === '/login' || (!user && requireAuth)) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-background flex text-primary font-sans">
      {/* Sidebar background overlay for mobile */}
      {!sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setSidebarOpen(true)}
        />
      )}
      
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(true)} 
      />
      
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
        <Header 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
        
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto max-w-[1600px] w-full mx-auto pb-24">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/annual" element={<AnnualDashboard />} />
            <Route path="/channel/:id" element={<ChannelView />} />
            <Route path="/daily-entry" element={<DailyEntry />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/members" element={<Members />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;