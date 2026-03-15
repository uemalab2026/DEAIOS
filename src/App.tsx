import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { MonthProvider } from '@/contexts/MonthContext';
import { ToastProvider } from '@/components/ui/Toast';
import Dashboard from '@/pages/Dashboard';
import DailyEntry from '@/pages/DailyEntry';
import Leads from '@/pages/Leads';
import ChannelView from '@/pages/Channel';
import AnnualDashboard from '@/pages/Annual';
import Settings from '@/pages/Settings';
import Members from '@/pages/Members';
import Login from '@/pages/Login';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MonthProvider>
          <ToastProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              
              <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/daily-entry" element={<DailyEntry />} />
                <Route path="/leads" element={<Leads />} />
                
                <Route path="/canais/:id" element={<ChannelView />} />
                
                <Route path="/anual" element={<AnnualDashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/members" element={<Members />} />
                
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </ToastProvider>
        </MonthProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
