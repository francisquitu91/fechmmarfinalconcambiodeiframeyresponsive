import { useEffect, useRef } from 'react';
import { useWaveEffect } from './effects/useWaveEffect';
import { useReflectionEffect } from './effects/useReflectionEffect';
import { useBubbleEffect } from './effects/useBubbleEffect';
import { OceanAnimationProps } from './types';

const WaterAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let time = 0;
    let animationFrameId: number;

    const params = {
      width: canvas.width,
      height: canvas.height,
      time: 0
    };

    const drawWaves = useWaveEffect(ctx, params);
    const drawReflections = useReflectionEffect(ctx, params);
    const drawBubbles = useBubbleEffect(ctx, params);

    const animate = () => {
      time += 0.01;
      params.time = time;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all effects
      drawWaves();
      drawReflections();
      drawBubbles();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#001a33' }}
    />
  );
};

export default WaterAnimation;