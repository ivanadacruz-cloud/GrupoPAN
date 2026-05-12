"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { User, HeartPulse, Stethoscope, GraduationCap, Shield } from 'lucide-react';

const PROFILES = [
  { id: 'patient', name: 'Sou Paciente', icon: User, desc: 'Acompanhar meus sintomas e medicação' },
  { id: 'caregiver', name: 'Sou Cuidador', icon: HeartPulse, desc: 'Ajudar a cuidar de alguém com Parkinson' },
  { id: 'professional', name: 'Sou Profissional', icon: Stethoscope, desc: 'Atender pacientes na plataforma' },
  { id: 'researcher', name: 'Sou Pesquisador', icon: GraduationCap, desc: 'Acesso a dados anonimizados' },
];

export default function SelectProfilePage() {
  return (
    <main className="min-h-screen bg-pan-bg dark:bg-pan-darkBg flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-display font-bold text-pan-primary dark:text-pan-accent">
            Bem-vindo à Plataforma PAN
          </h1>
          <p className="text-xl text-pan-text dark:text-pan-darkText">
            Como você gostaria de acessar a plataforma hoje?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROFILES.map((profile) => (
            <Link key={profile.id} href={`/auth/register?role=${profile.id}`}>
              <Card className="hover:border-pan-accent hover:shadow-md transition-all cursor-pointer h-full border-2 border-transparent">
                <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                  <div className="p-4 bg-pan-primary/10 rounded-full text-pan-primary dark:text-pan-accent">
                    <profile.icon size={48} />
                  </div>
                  <CardTitle className="text-2xl">{profile.name}</CardTitle>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {profile.desc}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
