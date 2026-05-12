import React from 'react';
import { HeroSection } from '@/components/institutional/HeroSection';
import { TeamSection } from '@/components/institutional/TeamSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Sobre o Projeto */}
      <section id="sobre" className="py-20 px-4 bg-pan-bg dark:bg-pan-darkBg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-display font-bold text-pan-primary">Sobre o Projeto PAN</h2>
          <p className="text-xl text-pan-text dark:text-pan-darkText leading-relaxed">
            O <strong>Grupo de Apoio a Pacientes com Neuromorbidades (Grupo PAN)</strong> é uma iniciativa pública, universitária e amazônica. 
            Nossa plataforma integra cuidado multiprofissional, teleconsultas e pesquisa, 
            respeitando a diversidade e as necessidades de pessoas com Parkinson em nossa região.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border-l-4 border-pan-accent">
              <h3 className="text-xl font-bold mb-2 text-pan-primary">Gerontecnologia</h3>
              <p className="text-gray-600 dark:text-gray-400">Design focado na pessoa idosa e acessibilidade extrema.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border-l-4 border-pan-secondary">
              <h3 className="text-xl font-bold mb-2 text-pan-primary">Telessaúde</h3>
              <p className="text-gray-600 dark:text-gray-400">Telemonitoramento e suporte direto via WhatsApp e vídeo.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border-l-4 border-pan-primary">
              <h3 className="text-xl font-bold mb-2 text-pan-primary">Pesquisa (FUNATI)</h3>
              <p className="text-gray-600 dark:text-gray-400">Dados anonimizados gerando inteligência clínica local.</p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Footer Público */}
      <footer className="bg-pan-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-display font-bold">Plataforma PAN</h2>
            <p className="opacity-80">Núcleo de Saúde Digital da Pessoa Idosa / FUNATI</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pan-accent underline">Termos de Uso</a>
            <a href="#" className="hover:text-pan-accent underline">Política de Privacidade (LGPD)</a>
            <a href="#" className="hover:text-pan-accent underline">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
