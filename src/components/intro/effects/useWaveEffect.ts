import { WaveParams } from '../types';

export const useWaveEffect = (ctx: CanvasRenderingContext2D, params: WaveParams) => {
  const { width, height, time } = params;
  
  const drawWaves = () => {
    // Create gradient from white to ocean blue with more white space
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#ffffff'); // White at top
    gradient.addColorStop(0.6, '#ffffff'); // Extend white area further
    gradient.addColorStop(0.7, '#e6f2ff'); // Light blue transition
    gradient.addColorStop(0.8, '#0066cc'); // Ocean blue
    gradient.addColorStop(0.9, '#003366'); // Deep blue
    gradient.addColorStop(1, '#001a33'); // Dark blue depths

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Multiple wave layers for depth (starting lower in the canvas)
    const waves = [
      { amplitude: 15, frequency: 0.02, speed: 0.03, opacity: 0.3, yOffset: 0.8 },
      { amplitude: 10, frequency: 0.03, speed: 0.02, opacity: 0.2, yOffset: 0.85 },
      { amplitude: 8, frequency: 0.01, speed: 0.01, opacity: 0.1, yOffset: 0.9 }
    ];

    waves.forEach(wave => {
      ctx.beginPath();
      ctx.moveTo(0, height * wave.yOffset);

      for (let x = 0; x < width; x += 5) {
        const y = Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
        const baseY = height * wave.yOffset + y;
        
        ctx.lineTo(x, baseY);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      ctx.fillStyle = `rgba(0, 102, 204, ${wave.opacity})`;
      ctx.fill();
    });
  };

  return drawWaves;
};