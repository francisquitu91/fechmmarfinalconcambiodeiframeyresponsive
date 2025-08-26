import { BubbleParams } from '../types';

export const useBubbleEffect = (ctx: CanvasRenderingContext2D, params: BubbleParams) => {
  // Only generate bubbles in the lower portion of the screen
  const bubbles = Array.from({ length: 20 }, () => ({
    x: Math.random() * params.width,
    y: params.height * (0.8 + Math.random() * 0.2), // Start from 80% down
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5,
  }));

  const drawBubbles = () => {
    bubbles.forEach(bubble => {
      bubble.y -= bubble.speed;
      // Reset bubbles when they reach the water transition area
      if (bubble.y < params.height * 0.6) {
        bubble.y = params.height;
        bubble.x = Math.random() * params.width;
      }

      const gradient = ctx.createRadialGradient(
        bubble.x, bubble.y, 0,
        bubble.x, bubble.y, bubble.radius
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });
  };

  return drawBubbles;
};