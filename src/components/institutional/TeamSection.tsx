import React from 'react';

const TEAM = [
  { name: 'Dr. Euler Ribeiro', role: 'Coordenador / FUNATI', expertise: 'Gerontecnologia' },
  { name: 'Ivana Cruz', role: 'Membro da Equipe', expertise: 'Projeto PAN' },
  { name: 'Vanusa Nascimento', role: 'Membro da Equipe', expertise: 'Projeto PAN' },
  { name: 'Verônica Azzolin', role: 'Membro da Equipe', expertise: 'Projeto PAN' }
];

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 px-4 bg-white dark:bg-pan-darkBg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-pan-primary mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Profissionais dedicados ao cuidado e pesquisa na Amazônia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="bg-pan-bg dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 hover:border-pan-accent transition-colors">
              <div className="w-32 h-32 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold font-display text-pan-text dark:text-pan-darkText">{member.name}</h3>
              <p className="text-lg text-pan-primary dark:text-pan-accent font-medium mt-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
