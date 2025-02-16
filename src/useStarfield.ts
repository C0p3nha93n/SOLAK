import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  originalX: number;
  originalY: number;
}

export const useStarfield = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 3000);

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        stars.push({
          x,
          y,
          size: Math.random() * 2,
          speedX: 0,
          speedY: 0,
          originalX: x,
          originalY: y,
        });
      }

      starsRef.current = stars;
    };

    const drawStars = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';

      starsRef.current.forEach((star) => {
        const distance = Math.hypot(
          mouseRef.current.x - star.x,
          mouseRef.current.y - star.y
        );
        const force = Math.min(2000 / (distance * distance), 0.5);

        // Calculate direction from star to mouse
        const angle = Math.atan2(
          mouseRef.current.y - star.y,
          mouseRef.current.x - star.x
        );

        // Apply force
        star.speedX += Math.cos(angle) * force;
        star.speedY += Math.sin(angle) * force;

        // Apply spring force back to original position
        const springForce = 0.01;
        star.speedX += (star.originalX - star.x) * springForce;
        star.speedY += (star.originalY - star.y) * springForce;

        // Apply friction
        star.speedX *= 0.95;
        star.speedY *= 0.95;

        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Draw star with a glow effect
        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(drawStars);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    createStars();
    drawStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [canvasRef]);
};