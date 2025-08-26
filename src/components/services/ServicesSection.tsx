import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServicesGrid from './ServicesGrid';
import VideoBackground from './VideoBackground';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="relative py-16 min-h-screen">
      <VideoBackground />
      
      <div className="relative container">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Nuestros Servicios
        </h2>
        <p className="text-gray-200 text-lg text-center max-w-3xl mx-auto mb-12">
          En Fechmmar ofrecemos servicios especializados para satisfacer las necesidades de navieras, 
          astilleros y empresas marítimas, garantizando excelencia y cumplimiento en cada proyecto.
        </p>
        <ServicesGrid />
      </div>
    </section>
  );
};

export default ServicesSection;