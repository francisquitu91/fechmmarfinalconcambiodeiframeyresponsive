import { FooterCompanyInfo } from './FooterCompanyInfo';
import { FooterContact } from './FooterContact';
import { FooterSocial } from './FooterSocial';
import { FooterPoweredBy } from './FooterPoweredBy';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <FooterCompanyInfo />
          <FooterContact />
          <FooterSocial />
        </div>
        <FooterPoweredBy />
      </div>
    </footer>
  );
};