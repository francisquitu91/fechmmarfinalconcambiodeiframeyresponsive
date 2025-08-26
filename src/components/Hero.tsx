import React from 'react';
import { VideoBackground } from './hero/VideoBackground';
import { HeroContent } from './hero/HeroContent';
import { ScrollIndicator } from './hero/ScrollIndicator';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen">
      <VideoBackground videoId="iemGC0XJlx0" />
      <HeroContent />
      <ScrollIndicator />
    </section>
  );
};

export default Hero;