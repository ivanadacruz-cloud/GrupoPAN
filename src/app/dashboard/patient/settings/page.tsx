"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function SettingsPage() {
  const [waNumber, setWaNumber] = useState('');
  const [notifications, setNotifications] = useState({
    medication: true,
    appointments: true,
    educational: true,
  });

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-pan-primary">Configurações e Alertas</h1>
        <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">Gerencie como você recebe avisos da plataforma.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-green-600">📱</span> Integração WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            A PAN utiliza o WhatsApp para enviar lembretes importantes e acessar consultas facilmente. 
            Suas mensagens são seguras e não compartilhamos seus dados.
          </p>
          
          <div className="max-w-md">
            <Input 
              label="Seu número do WhatsApp" 
              placeholder="(92) 90000-0000" 
              value={waNumber}
              onChange={(e) => setWaNumber(e.target.value)}
            />
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-lg">Quais avisos deseja receber?</h3>
            
            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer border border-transparent hover:border-pan-accent">
              <input 
                type="checkbox" 
                className="w-6 h-6 rounded text-pan-primary"
                checked={notifications.medication}
                onChange={(e) => setNotifications({...notifications, medication: e.target.checked})}
              />
              <span className="text-lg font-medium">Lembretes de Medicação Diária</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer border border-transparent hover:border-pan-accent">
              <input 
                type="checkbox" 
                className="w-6 h-6 rounded text-pan-primary"
                checked={notifications.appointments}
                onChange={(e) => setNotifications({...notifications, appointments: e.target.checked})}
              />
              <span className="text-lg font-medium">Links para Teleconsulta</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer border border-transparent hover:border-pan-accent">
              <input 
                type="checkbox" 
                className="w-6 h-6 rounded text-pan-primary"
                checked={notifications.educational}
                onChange={(e) => setNotifications({...notifications, educational: e.target.checked})}
              />
              <span className="text-lg font-medium">Dicas Semanais de Saúde (Trilhas)</span>
            </label>
          </div>

          <div className="pt-4">
            <Button className="w-full sm:w-auto text-lg px-8">Salvar Configurações</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
