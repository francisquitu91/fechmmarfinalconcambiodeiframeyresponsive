import { NavLinkProps } from './types';

export const NavLink = ({ item, isActive, onClick }: NavLinkProps) => (
  <a
    href={`#${item.id}`}
    onClick={() => onClick(item.id)}
    className={`${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-700"
    } hover:text-blue-600 block px-4 py-2 md:inline-block transition-all duration-200`}
  >
    {item.name}
  </a>
);