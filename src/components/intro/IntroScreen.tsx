import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaterAnimation from './WaterAnimation';
import IntroContent from './IntroContent';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const INTRO_DURATION = 8000; // 8 seconds total duration
    const FADE_DURATION = 1000; // 1 second fade out

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, FADE_DURATION);
    }, INTRO_DURATION);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <WaterAnimation />
          <IntroContent duration={8000} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;