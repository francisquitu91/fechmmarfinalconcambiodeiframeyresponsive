import React from 'react';
import AboutContent from './AboutContent';
import SectionTitle from '../common/SectionTitle';
import CompanyLogo from './CompanyLogo';

const AboutSection: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-16 bg-white">
      <div className="container">
        <SectionTitle>Nuestra Empresa</SectionTitle>
        <AboutContent />
        <CompanyLogo />
      </div>
    </section>
  );
};

export default AboutSection;