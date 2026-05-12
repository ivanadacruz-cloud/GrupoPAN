import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ProfessionalDashboard() {
  const nextAppointments = [
    { id: '123', patient: 'Maria da Silva', time: '14:00', type: 'Teleconsulta' },
    { id: '124', patient: 'João Oliveira', time: '15:30', type: 'Teleconsulta' },
  ];

  return (
    <div className="p-6 md:p-10 space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-pan-primary">Painel do Profissional</h1>
        <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">Dra. Ana Costa (Neurologista)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-pan-secondary">
          <CardHeader>
            <CardTitle>Agenda de Hoje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {nextAppointments.length === 0 ? (
              <p>Não há consultas agendadas para hoje.</p>
            ) : (
              nextAppointments.map(appt => (
                <div key={appt.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 gap-4">
                  <div>
                    <p className="font-bold text-lg">{appt.time} - {appt.patient}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{appt.type}</p>
                  </div>
                  <Link href={`/teleconsulta/${appt.id}?role=professional`}>
                    <Button variant="primary" className="whitespace-nowrap w-full sm:w-auto">
                      Iniciar Consulta
                    </Button>
                  </Link>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-pan-accent">
          <CardHeader>
            <CardTitle>Alertas Clínicos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="font-bold text-red-700 dark:text-red-400">⚠️ João Oliveira</p>
              <p className="text-sm text-red-600 dark:text-red-300">Piora do "Freezing" nos últimos 3 dias consecutivos.</p>
            </div>
            <div className="p-4 border border-orange-200 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <p className="font-bold text-orange-700 dark:text-orange-400">🔔 Antônio Souza</p>
              <p className="text-sm text-orange-600 dark:text-orange-300">Não registrou a medicação das 08:00.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
