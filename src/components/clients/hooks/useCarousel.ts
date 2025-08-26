import { useState, useEffect, useCallback } from 'react';
import { Client } from '../types';

export const useCarousel = (clients: Client[], speed = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  }, [clients.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, speed);
    return () => clearInterval(interval);
  }, [nextSlide, speed]);

  return {
    currentIndex,
    setCurrentIndex,
    nextSlide
  };
};