import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1">
        <p className="text-gray-700 text-lg leading-relaxed">
          Fechmmar es una empresa chilena líder en servicios de ingeniería y soluciones marítimas. 
          Nos especializamos en construcción, mantención y reparación de embarcaciones, gestión de desechos, 
          acuicultura marina y transporte de carga. Comprometidos con la excelencia, trabajamos para garantizar 
          seguridad y sostenibilidad en cada proyecto.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;