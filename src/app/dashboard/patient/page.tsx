import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function PatientDashboard() {
  return (
    <div className="p-6 md:p-10 space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-pan-primary">Olá, Maria</h1>
        <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">Aqui está o seu resumo de hoje.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-pan-accent">
          <CardHeader>
            <CardTitle>Diário de Sintomas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">Você ainda não registrou seus sintomas hoje.</p>
            <Link href="/dashboard/patient/diary">
              <Button className="w-full">Registrar Agora</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-pan-secondary">
          <CardHeader>
            <CardTitle>Próxima Consulta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg font-medium">Dra. Ana Costa (Neurologista)</p>
            <p className="text-gray-600 dark:text-gray-400">Amanhã, 14:00 (Teleconsulta)</p>
            <Button variant="secondary" className="w-full">Ver Detalhes</Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Botão de Emergência Acessível */}
      <div className="pt-8">
        <Button variant="emergency" className="w-full md:w-auto text-xl py-6 px-10 rounded-xl">
          ⚠️ Estou com dificuldade agora
        </Button>
      </div>
    </div>
  );
}
