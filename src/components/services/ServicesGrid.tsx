import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Anchor, Ship, FileCheck, Recycle, 
  Building, Fuel, Droplets, ClipboardList, 
  Package 
} from 'lucide-react';

const services = [
  {
    title: 'Asesoría Marítima',
    description: 'Servicio de asesoría a navieras, armadores, astilleros y empresas marítimas.',
    Icon: Anchor
  },
  {
    title: 'Regularización de Matrículas',
    description: 'Regularización de matrículas de naves, cálculos, planos y proyectos.',
    Icon: FileCheck
  },
  {
    title: 'Planes de Contingencia',
    description: 'Confección de planes de contingencia por derrames de hidrocarburos.',
    Icon: ClipboardList
  },
  {
    title: 'Recepción de Desechos',
    description: 'Planes de recepción y manipulación de desechos generados por buques.',
    Icon: Recycle
  },
  {
    title: 'Construcción de Naves',
    description: 'Proyectos de construcción y transformación de naves para el transporte de combustible.',
    Icon: Ship
  },
  {
    title: 'Estudios de Combustible',
    description: 'Estudios de consumo de combustible en naves.',
    Icon: Fuel
  },
  {
    title: 'Retiro de Residuos Oleosos',
    description: 'Asesoría y trazabilidad en el retiro de residuos oleosos.',
    Icon: Droplets
  },
  {
    title: 'Control Documental',
    description: 'Control de la documentación de seguridad y reglamentación marítima.',
    Icon: ClipboardList
  },
  {
    title: 'Venta de Insumos',
    description: 'Venta de insumos marítimos.',
    Icon: Package
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          Icon={service.Icon}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;