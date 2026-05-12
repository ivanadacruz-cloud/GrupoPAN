"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

function RegisterForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'patient';
  const router = useRouter();
  
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', doc: '' });

  const roleNames: Record<string, string> = {
    patient: 'Paciente',
    caregiver: 'Cuidador',
    professional: 'Profissional',
    researcher: 'Pesquisador'
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lgpdAccepted) {
      alert('Você precisa aceitar os termos da LGPD para continuar.');
      return;
    }
    router.push(`/dashboard/${role}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-center text-pan-primary">
          Cadastro de {roleNames[role]}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="space-y-6">
          <Input 
            label="Nome Completo" 
            placeholder="Ex: Maria da Silva" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required 
          />
          <Input 
            label="E-mail ou Telefone" 
            type="text" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
          
          {role === 'professional' && (
            <Input 
              label="Número de Registro Profissional (Ex: CRM 1234)" 
              required 
              value={formData.doc}
              onChange={(e) => setFormData({...formData, doc: e.target.value})}
            />
          )}

          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 h-48 overflow-y-auto">
            <h4 className="font-bold mb-2">Termo de Consentimento - LGPD</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              A Plataforma PAN leva a sua privacidade a sério. Coletaremos e trataremos seus dados 
              sensíveis de saúde exclusivamente para fins de acompanhamento clínico, pesquisa 
              científica anonimizada e educação.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ao continuar, você consente com a nossa Política de Privacidade.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="lgpd" 
              className="w-6 h-6 rounded border-gray-300 text-pan-primary focus:ring-pan-accent"
              checked={lgpdAccepted}
              onChange={(e) => setLgpdAccepted(e.target.checked)}
            />
            <label htmlFor="lgpd" className="text-lg font-medium cursor-pointer">
              Eu li e concordo com os termos acima
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full text-xl mt-4" 
            disabled={!lgpdAccepted || !formData.name}
          >
            Criar Minha Conta
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-pan-bg dark:bg-pan-darkBg py-12 px-4">
      <div className="max-w-xl mx-auto">
        <Suspense fallback={<div className="text-center p-12">Carregando...</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </main>
  );
}
