import { ReflectionParams } from '../types';

export const useReflectionEffect = (ctx: CanvasRenderingContext2D, params: ReflectionParams) => {
  const { width, height, time } = params;

  const drawReflections = () => {
    // Surface light reflections (only in the water part)
    for (let i = 0; i < 5; i++) {
      const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * width;
      const y = height * 0.75; // Moved down further in water area
      const radius = 50 + Math.sin(time + i) * 20;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return drawReflections;
};