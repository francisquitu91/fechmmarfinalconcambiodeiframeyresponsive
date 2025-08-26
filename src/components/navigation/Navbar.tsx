import { useState, useEffect } from 'react';
import { NavLinks } from './NavLinks';
import { MobileMenuButton } from './MobileMenuButton';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <a href="#inicio" onClick={() => handleNavigation("inicio")} className="py-2">
            <img
              src="https://i.ibb.co/YWqQfKg/2854878243.jpg"
              alt="Fechmmar Logo"
              className="h-16 w-auto" // Increased from h-12 to h-16
            />
          </a>

          <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <NavLinks 
            isOpen={isOpen}
            activeSection={activeSection}
            onNavigate={handleNavigation}
          />
        </div>
      </div>
    </nav>
  );
};