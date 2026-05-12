"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SymptomCardProps {
  symptomName: string;
  description?: string;
  onChange?: (value: number) => void;
}

const EMOJI_SCALE = [
  { value: 0, emoji: '🟢', label: 'Nenhum / Ótimo' },
  { value: 1, emoji: '🟡', label: 'Leve / Bom' },
  { value: 2, emoji: '🟠', label: 'Moderado / Regular' },
  { value: 3, emoji: '🔴', label: 'Intenso / Ruim' },
  { value: 4, emoji: '⚫', label: 'Severo / Péssimo' },
];

export function SymptomCard({ symptomName, description, onChange }: SymptomCardProps) {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  return (
    <Card className="w-full mb-4">
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-pan-text dark:text-pan-darkText">{symptomName}</h3>
          {description && <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
        </div>

        {/* Escala Visual (Botões grandes para acessibilidade) */}
        <div className="flex flex-col sm:flex-row gap-3">
          {EMOJI_SCALE.map((item) => (
            <button
              key={item.value}
              onClick={() => handleSelect(item.value)}
              className={twMerge(
                clsx(
                  "flex-1 flex flex-row sm:flex-col items-center justify-start sm:justify-center p-4 border-2 rounded-xl transition-all min-h-[64px]",
                  selectedValue === item.value 
                    ? "border-pan-accent bg-pan-accent/10 dark:bg-pan-accent/20" 
                    : "border-gray-200 hover:border-pan-primary/50 dark:border-gray-700"
                )
              )}
            >
              <span className="text-3xl mr-4 sm:mr-0 sm:mb-2">{item.emoji}</span>
              <span className="text-lg font-medium text-left sm:text-center text-pan-text dark:text-pan-darkText">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
