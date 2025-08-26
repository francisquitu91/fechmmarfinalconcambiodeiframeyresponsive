import { Client } from './types';
import { ClientLogo } from './ClientLogo';
import { useInfiniteCarousel } from './hooks/useInfiniteCarousel';

interface ClientsCarouselProps {
  clients: Client[];
}

export const ClientsCarousel = ({ clients }: ClientsCarouselProps) => {
  const { items, currentIndex, isTransitioning } = useInfiniteCarousel(clients);
  
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 160}px)`
        }}
      >
        {items.map((client, index) => (
          <ClientLogo 
            key={`${client.name}-${index}`} 
            client={client} 
          />
        ))}
      </div>
    </div>
  );
};