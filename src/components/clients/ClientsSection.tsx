import { clients } from './data';
import { ClientsCarousel } from './ClientsCarousel';

export const ClientsSection = () => {
  return (
    <section id="clientes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empresas que confían en nuestra experiencia y profesionalismo
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
          <ClientsCarousel clients={clients} />
        </div>
      </div>
    </section>
  );
};