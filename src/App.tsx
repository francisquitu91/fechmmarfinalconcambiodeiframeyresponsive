import { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/about/AboutSection';
import ServicesSection from './components/services/ServicesSection';
import HistorySection from './components/history/HistorySection';
import { ClientsSection } from './components/clients/ClientsSection';
import IframeSection from './components/iframe/IframeSection';
import { QuoteSection } from './components/quote/QuoteSection';
import IntroScreen from './components/intro/IntroScreen';
import { Footer } from './components/footer/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      <div className={showIntro ? 'hidden' : ''}>
        <Navbar />
        <main className="min-h-screen">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <HistorySection />
          <ClientsSection />
          <IframeSection />
          <QuoteSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;