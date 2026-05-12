"use client";

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { VideoRoom } from '@/components/teleconsulta/VideoRoom';
import { ClinicalRecordPanel } from '@/components/teleconsulta/ClinicalRecordPanel';
import { Button } from '@/components/ui/Button';

export default function TeleconsultaPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'patient';
  const [joined, setJoined] = useState(false);

  if (!joined) {
    return (
      <main className="min-h-screen bg-pan-bg dark:bg-pan-darkBg flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center space-y-6">
          <h1 className="text-3xl font-display font-bold text-pan-primary">Sala de Teleconsulta</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Você está prestes a entrar na sua consulta. Certifique-se de que sua câmera e microfone estão funcionando.
          </p>
          <Button onClick={() => setJoined(true)} className="w-full text-xl py-6">
            Entrar na Consulta
          </Button>
        </div>
      </main>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-black overflow-hidden">
      {/* Container Principal do Vídeo */}
      <div className="flex-1 flex flex-col">
        {/* Header da Sala */}
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
          <h1 className="text-xl font-display font-bold text-pan-primary">PAN Teleconsulta</h1>
          <span className="text-sm px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Gravando Consulta
          </span>
        </header>

        {/* Sala de Vídeo */}
        <VideoRoom />
      </div>

      {/* Prontuário Lateral (Apenas visível para profissionais) */}
      {role === 'professional' && (
        <aside className="w-96 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 hidden lg:block">
          <ClinicalRecordPanel />
        </aside>
      )}
    </div>
  );
}
