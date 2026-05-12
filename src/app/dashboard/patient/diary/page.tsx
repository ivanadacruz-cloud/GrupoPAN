"use client";

import React, { useState } from 'react';
import { SymptomCard } from '@/components/clinical/SymptomCard';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const SYMPTOMS_LIST = [
  { id: 'tremor', name: 'Tremor em repouso', desc: 'Agitação involuntária quando você está relaxado.' },
  { id: 'rigidity', name: 'Rigidez muscular', desc: 'Sensação de músculos duros ou difíceis de mover.' },
  { id: 'bradykinesia', name: 'Lentidão de movimentos', desc: 'Dificuldade para iniciar ou realizar movimentos (Bradicinesia).' },
  { id: 'freezing', name: 'Congelamento da marcha', desc: 'Sensação de que os pés estão colados no chão (Freezing).' }
];

export default function PatientDiaryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [symptoms, setSymptoms] = useState<Record<string, number>>({});

  const handleSymptomChange = (id: string, value: number) => {
    setSymptoms(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    // Check if all symptoms are filled
    if (Object.keys(symptoms).length < SYMPTOMS_LIST.length) {
      alert('Por favor, responda como estão todos os sintomas antes de salvar.');
      return;
    }
    
    // Mock save
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 md:p-10 flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-xl text-center border-2 border-pan-accent bg-pan-accent/5">
          <CardHeader>
            <CardTitle className="text-3xl text-pan-primary">Diário Salvo! ✅</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-6">Obrigado por registrar seus sintomas hoje. Isso ajuda muito a equipe médica.</p>
            <Button onClick={() => window.location.href = '/dashboard/patient'}>
              Voltar ao Início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-display font-bold text-pan-primary mb-2">Check-in Diário</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Como você está se sentindo neste momento?
        </p>
      </div>

      <div className="space-y-6">
        {SYMPTOMS_LIST.map((symptom) => (
          <SymptomCard 
            key={symptom.id}
            symptomName={symptom.name}
            description={symptom.desc}
            onChange={(val) => handleSymptomChange(symptom.id, val)}
          />
        ))}
      </div>

      <div className="pt-6">
        <Button onClick={handleSubmit} className="w-full text-xl py-6">
          Salvar Meu Diário de Hoje
        </Button>
      </div>
    </div>
  );
}
