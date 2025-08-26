import { useState, useEffect, useCallback } from 'react';
import { Client } from '../types';

export const useInfiniteCarousel = (clients: Client[], speed = 3000) => {
  const [items, setItems] = useState<Client[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize with duplicated items
  useEffect(() => {
    setItems([...clients, ...clients]);
  }, [clients]);

  const resetPosition = useCallback(() => {
    setIsTransitioning(false);
    setCurrentIndex(0);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Handle infinite loop
  useEffect(() => {
    if (currentIndex >= clients.length) {
      const timer = setTimeout(resetPosition, 500); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, clients.length, resetPosition]);

  // Auto advance
  useEffect(() => {
    const interval = setInterval(nextSlide, speed);
    return () => clearInterval(interval);
  }, [nextSlide, speed]);

  return {
    items,
    currentIndex,
    isTransitioning
  };
};