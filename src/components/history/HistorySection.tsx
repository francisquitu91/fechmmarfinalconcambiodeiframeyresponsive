import React from 'react';
import SectionTitle from '../common/SectionTitle';
import HistoryIntro from './HistoryIntro';
import Timeline from './Timeline';

const HistorySection: React.FC = () => {
  return (
    <section id="historia" className="py-16 bg-gray-50">
      <div className="container">
        <SectionTitle>Nuestra Historia</SectionTitle>
        <HistoryIntro />
        <Timeline />
      </div>
    </section>
  );
};

export default HistorySection;