import React from 'react';
import { Button } from '@/components/ui/Button';

export function ClinicalRecordPanel() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-pan-primary mb-4 border-b pb-2">Prontuário Rápido</h2>
      
      <div className="space-y-4 flex-1">
        <div>
          <label className="block text-sm font-medium mb-1">Queixas do dia</label>
          <textarea 
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm focus:ring-pan-accent focus:border-pan-accent" 
            rows={3} 
            placeholder="Anotações sobre queixas..."
          ></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Escala Hoehn & Yahr Atualizada</label>
          <select className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm focus:ring-pan-accent">
            <option>Estágio 1 - Doença unilateral</option>
            <option>Estágio 2 - Doença bilateral s/ déficit de equilíbrio</option>
            <option>Estágio 3 - Doença bilateral c/ déficit leve</option>
            <option>Estágio 4 - Incapacidade grave</option>
            <option>Estágio 5 - Confinado a cadeira/cama</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Conduta / Ajuste Medicação</label>
          <textarea 
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm focus:ring-pan-accent" 
            rows={4} 
            placeholder="Alteração de horários, novas prescrições..."
          ></textarea>
        </div>
      </div>

      <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-800">
        <Button className="w-full">Salvar Prontuário</Button>
      </div>
    </div>
  );
}
