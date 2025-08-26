export interface Client {
  name: string;
  logo: string;
  url: string;
}

export interface ClientLogoProps {
  client: Client;
}