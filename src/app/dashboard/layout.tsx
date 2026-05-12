import React from 'react';
import Link from 'next/link';
import { Home, FileText, Calendar, Settings, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-pan-bg dark:bg-pan-darkBg overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        <div className="p-6">
          <h2 className="text-2xl font-display font-bold text-pan-primary">PAN</h2>
          <p className="text-sm text-gray-500">Saúde Digital</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard/patient" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pan-primary/10 text-pan-text dark:text-pan-darkText">
            <Home size={24} /> <span className="font-medium text-lg">Início</span>
          </Link>
          <Link href="/dashboard/patient/diary" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pan-primary/10 text-pan-text dark:text-pan-darkText">
            <FileText size={24} /> <span className="font-medium text-lg">Diário</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pan-primary/10 text-pan-text dark:text-pan-darkText">
            <Calendar size={24} /> <span className="font-medium text-lg">Consultas</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg">
            <LogOut size={24} /> <span className="font-medium text-lg">Sair</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        {children}
      </main>

      {/* Bottom Menu Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around p-3 z-50">
        <Link href="/dashboard/patient" className="flex flex-col items-center text-pan-primary">
          <Home size={28} />
          <span className="text-sm font-medium mt-1">Início</span>
        </Link>
        <Link href="/dashboard/patient/diary" className="flex flex-col items-center text-gray-500 hover:text-pan-primary">
          <FileText size={28} />
          <span className="text-sm font-medium mt-1">Diário</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-gray-500 hover:text-pan-primary">
          <Calendar size={28} />
          <span className="text-sm font-medium mt-1">Agenda</span>
        </Link>
      </nav>
    </div>
  );
}
