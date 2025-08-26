import { Phone, MapPin } from 'lucide-react';

export const FooterContact = () => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-3">Contacto</h3>
      <div className="space-y-2 text-gray-300">
        <a href="tel:+56992212126" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <Phone className="w-4 h-4" />
          <span>+56 9 9221 2126</span>
        </a>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Puerto Montt, Chile</span>
        </div>
      </div>
    </div>
  );
};