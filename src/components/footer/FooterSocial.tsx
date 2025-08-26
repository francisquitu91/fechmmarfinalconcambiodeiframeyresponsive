import { Instagram } from 'lucide-react';

export const FooterSocial = () => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-3">Síguenos</h3>
      <a
        href="https://www.instagram.com/fechmmar_/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-400 transition-colors text-gray-300"
      >
        <Instagram className="w-5 h-5" />
        <span>@fechmmar_</span>
      </a>
    </div>
  );
};