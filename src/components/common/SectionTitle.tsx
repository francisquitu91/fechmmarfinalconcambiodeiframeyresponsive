import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold text-navy-900 text-center mb-12 font-poppins">
      {children}
    </h2>
  );
};

export default SectionTitle;