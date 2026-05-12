import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-pan-primary text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Cuidado Contínuo e Inovação para Parkinson na Amazônia
          </h1>
          <p className="text-xl md:text-2xl text-pan-bg opacity-90 max-w-2xl">
            Promover educação, pesquisa e telemonitoramento em saúde com uso ético e acessível de tecnologia digital.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/auth/select-profile">
              <Button className="bg-pan-accent text-pan-darkBg hover:bg-white text-xl w-full sm:w-auto">
                Acessar Plataforma
              </Button>
            </Link>
            <Link href="#sobre">
              <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-pan-primary text-xl w-full sm:w-auto">
                Conheça o Projeto
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <div className="aspect-video bg-pan-secondary/30 rounded-2xl border-4 border-pan-secondary flex items-center justify-center">
            <span className="text-pan-bg opacity-50 font-medium">Ilustração / Foto Hero</span>
          </div>
        </div>
      </div>
    </section>
  );
}
