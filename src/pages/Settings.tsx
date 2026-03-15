import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Plus, HelpCircle, Mail, Key } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary tracking-tight mb-2">Configurações</h1>
          <p className="text-secondary">Gerencie suas preferências, integrações e dados da empresa.</p>
        </div>
      </div>

      {/* Perfil & Empresa */}
      <Card className="hovererable">
        <div className="p-6 border-b border-border bg-gradient-to-r from-surface to-transparent">
          <h2 className="text-xl font-heading font-bold text-primary">Perfil & Empresa</h2>
          <p className="text-sm text-secondary">Informações básicas da sua conta e clínica.</p>
        </div>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-primary block">Nome da Clínica / Empresa</label>
              <input type="text" defaultValue="Diostética Laser" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-all text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-primary block">Seu Nome</label>
              <input type="text" defaultValue="Rômulo" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-all text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-primary block">Email Principal</label>
              <input type="email" defaultValue="contato@diostetica.com" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-all text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-primary block">Moeda Padrão</label>
              <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-all text-sm">
                <option value="BRL">Real (BRL)</option>
                <option value="USD">Dólar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <Button variant="primary">Salvar Alterações</Button>
          </div>
        </CardContent>
      </Card>

      {/* Integrações */}
      <Card className="hovererable">
        <div className="p-6 border-b border-border bg-gradient-to-r from-surface to-transparent">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-heading font-bold text-primary">Integrações (Em Breve)</h2>
              <p className="text-sm text-secondary">Conecte com suas ferramentas de tráfego e atendimento.</p>
            </div>
            <Badge variant="blue">Beta</Badge>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          
          <div className="flex items-center justify-between p-4 bg-elevated/50 border border-border rounded-xl opacity-75">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Meta" className="w-5 h-5 opacity-70" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Meta Ads</h3>
                <p className="text-sm text-muted">Sincronizar gastos diários com Facebook e Instagram.</p>
              </div>
            </div>
            <Button variant="outline" size="sm" disabled>Conectar</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-elevated/50 border border-border rounded-xl opacity-75">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#25D366]/70" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">WhatsApp Business API</h3>
                <p className="text-sm text-muted">Automação de mensagens e captação de leads direta.</p>
              </div>
            </div>
            <Button variant="outline" size="sm" disabled>Conectar</Button>
          </div>

        </CardContent>
      </Card>

      {/* Segurança */}
      <Card className="hovererable">
        <div className="p-6 border-b border-border bg-gradient-to-r from-surface to-transparent">
          <h2 className="text-xl font-heading font-bold text-error">Segurança & Conta</h2>
        </div>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-secondary" />
              <div>
                <p className="font-medium text-primary">Alterar Senha</p>
                <p className="text-sm text-muted">Recomendamos atualizar sua senha periodicamente.</p>
              </div>
            </div>
            <Button variant="outline">Atualizar</Button>
          </div>
          
          <div className="pt-6 border-t border-border flex items-center justify-between">
            <div>
              <p className="font-medium text-error">Encerrar Sessão</p>
              <p className="text-sm text-muted">Sair da aplicação em todos os dispositivos locais.</p>
            </div>
            <Button variant="outline" className="text-error border-error/20 hover:bg-error/10">Sair</Button>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

// Simple icon wrapper assuming lucide-react doesn't have a direct logo for whatsapp in this setup
const MessageCircle = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
)

export default Settings;
