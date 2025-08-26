export interface NavItem {
  name: string;
  id: string;
}

export interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick: (id: string) => void;
}

export interface NavLinksProps {
  isOpen: boolean;
  activeSection: string;
  onNavigate: (id: string) => void;
}