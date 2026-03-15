import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Mail, Phone, Calendar, Star, Search, Plus } from 'lucide-react';

const mockMembers = [
  { id: 1, name: 'Ana Beatriz', role: 'Vendedora Sênior', email: 'anab@diostetica.com.br', phone: '(11) 98765-4321', joined: 'Mar 2024', performance: 92, avatar: 'AB' },
  { id: 2, name: 'Carlos Eduardo', role: 'Closer', email: 'carlose@diostetica.com.br', phone: '(11) 97654-3210', joined: 'Mai 2024', performance: 88, avatar: 'CE' },
  { id: 3, name: 'Juliana Silva', role: 'Social Media', email: 'julianasa@diostetica.com.br', phone: '(11) 96543-2109', joined: 'Jan 2025', performance: 95, avatar: 'JS' },
  { id: 4, name: 'Marcos Paulo', role: 'Pré-Vendas', email: 'marcosp@diostetica.com.br', phone: '(11) 95432-1098', joined: 'Out 2024', performance: 78, avatar: 'MP' },
];

export const Members: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary tracking-tight">Equipe</h1>
          <p className="text-secondary mt-1">Gerencie os membros do seu time e acessos.</p>
        </div>
        <Button variant="primary">
          <Plus className="w-5 h-5 mr-2" />
          Convidar Membro
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input 
            type="text" 
            placeholder="Buscar membro..." 
            className="w-full bg-surface border border-border rounded-xl pl-12 pr-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-all text-sm"
          />
        </div>
        <select className="bg-surface border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-all text-sm min-w-[150px]">
          <option value="all">Todos os Cargos</option>
          <option value="sales">Vendas</option>
          <option value="marketing">Marketing</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockMembers.map((member) => (
          <Card key={member.id} className="hovererable group">
            <CardContent className="p-6">
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-elevated to-surface border border-border flex items-center justify-center text-primary font-bold text-xl group-hover:border-accent/50 transition-colors shadow-inner">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                    <Badge variant="neutral" className="mt-1">{member.role}</Badge>
                  </div>
                </div>
                <div className="relative">
                  {/* Performance indicator ring */}
                  <svg className="w-10 h-10 transform -rotate-90">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-elevated" />
                    <circle 
                      cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" fill="transparent" 
                      strokeDasharray={100} 
                      strokeDashoffset={100 - member.performance}
                      className={member.performance >= 90 ? "text-success" : member.performance >= 80 ? "text-info" : "text-warning"} 
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary">
                    {member.performance}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-secondary">
                  <Mail className="w-4 h-4 mr-3 text-muted" />
                  {member.email}
                </div>
                <div className="flex items-center text-sm text-secondary">
                  <Phone className="w-4 h-4 mr-3 text-muted" />
                  {member.phone}
                </div>
                <div className="flex items-center text-sm text-secondary">
                  <Calendar className="w-4 h-4 mr-3 text-muted" />
                  Desde {member.joined}
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" className="flex-1 text-xs">Ver Perfil</Button>
                <Button variant="outline" className="text-xs px-3 bg-surface">
                  Editar
                </Button>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Members;
