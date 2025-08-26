import { ClientLogoProps } from './types';

export const ClientLogo = ({ client }: ClientLogoProps) => {
  const handleClick = () => {
    window.open(client.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="flex-shrink-0 w-40 h-24 mx-4 cursor-pointer transform hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-full bg-white rounded-lg shadow-md p-4 flex items-center justify-center group hover:shadow-lg transition-all duration-300">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
        />
      </div>
    </div>
  );
};