import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { MonthProvider } from './contexts/MonthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider requireAuth={false}> {/* Set requireAuth to true to enforce Supabase login locally */}
      <MonthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MonthProvider>
    </AuthProvider>
  </React.StrictMode>
);