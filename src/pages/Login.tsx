import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/Toast';
import { LayoutDashboard } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { error } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      // On success, the AuthContext will automatically update and routes will re-evaluate
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      error('Falha no Login', err.message || 'Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Card className="w-full max-w-md p-8 bg-surface/80 backdrop-blur-xl border-border/50 shadow-glass relative z-10 animate-fade-in-up">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-gradient-to-br from-elevated to-surface rounded-2xl border border-border/50 shadow-inner mb-4">
            <LayoutDashboard className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-primary tracking-tight">DEAIOS</h1>
          <p className="text-secondary mt-2 text-center text-sm">
            Bem-vindo novamente. Entre com suas credenciais.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <Input 
            label="Email Institucional"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <Input 
            label="Senha"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          
          <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
            Acessar Plataforma
          </Button>

          <div className="text-center mt-6">
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">
              Esqueceu sua senha?
            </a>
          </div>
        </form>
      </Card>
      
      {/* Mock Info Only for Demo */}
      <div className="absolute bottom-8 text-center text-muted text-xs mx-auto max-w-xs p-4 bg-surface/50 border border-border rounded-xl backdrop-blur-sm z-10">
        <span className="font-semibold text-primary block mb-1">Preview Login</span>
        Use qualquer email registrado no Supabase para acessar.
      </div>
    </div>
  );
};

export default Login;
