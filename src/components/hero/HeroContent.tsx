import React from 'react';
import { ArrowRight, Anchor } from 'lucide-react';

export const HeroContent: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
      <Anchor className="text-blue-400 w-16 h-16 mb-8 animate-pulse" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
        Asesorías e inspecciones navales y marítimas
      </h1>
      <a
        href="#servicios"
        onClick={scrollToServices}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Ver Servicios
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
};