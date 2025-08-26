import { NavLink } from './NavLink';
import { NavLinksProps } from './types';

const navItems = [
  { name: "Inicio", id: "inicio" },
  { name: "Quiénes Somos", id: "quienes-somos" },
  { name: "Servicios", id: "servicios" },
  { name: "Historia", id: "historia" },
  { name: "Nuestros Clientes", id: "clientes" },
  { name: "ReglaMar IA", id: "reglamar" },
  { name: "Cotizar", id: "cotizar" },
];

export const NavLinks = ({ isOpen, activeSection, onNavigate }: NavLinksProps) => (
  <div
    className={`${
      isOpen ? "block absolute top-full left-0 right-0 bg-white shadow-lg" : "hidden"
    } md:flex md:items-center md:space-x-6 md:static`}
  >
    {navItems.map((item) => (
      <NavLink
        key={item.id}
        item={item}
        isActive={activeSection === item.id}
        onClick={onNavigate}
      />
    ))}
  </div>
);