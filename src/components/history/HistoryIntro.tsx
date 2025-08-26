import React from 'react';

const HistoryIntro: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
      <div className="flex-1">
        <p className="text-gray-700 text-lg leading-relaxed">
          Fechmmar está liderada por Henry Hidalgo, Ingeniero en Construcción Naval con más de 30 años 
          de experiencia en el sector marítimo. Su amplia trayectoria profesional y su profundo 
          conocimiento en normativas nacionales e internacionales han permitido a Fechmmar consolidarse 
          como un referente en el sector naval y marítimo.
        </p>
      </div>
      <div className="flex-1 max-w-md">
        <img 
          src="https://i.ibb.co/bXq8Sf2/IMG-3366.jpg" 
          alt="Henry Hidalgo - Ingeniero en Construcción Naval"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HistoryIntro;