import { useEffect, useRef } from 'react';

export default function WebGLCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      amplitude: number;
      frequency: number;
      phase: number;
    }> = [];

    const createParticles = (width: number, height: number) => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 12000), 100);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: -(Math.random() * 0.25 + 0.08), // slowly drift upwards
          opacity: Math.random() * 0.5 + 0.15,
          amplitude: Math.random() * 15 + 5,
          frequency: Math.random() * 0.002 + 0.0005,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Use ResizeObserver for responsive and performant resize handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
        createParticles(width, height);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Animation Loop
    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Fine warm ivory/cream background with radial legacy spotlight
      ctx.fillStyle = '#F7F5F2';
      ctx.fillRect(0, 0, width, height);

      // Radial glowing center gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.1,
        width / 2,
        height / 2,
        width * 0.8
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      gradient.addColorStop(0.5, 'rgba(247, 245, 242, 0.95)');
      gradient.addColorStop(1, '#EAE6DF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render drifting gold particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.phase += p.frequency;
        // Apply gentle golden spiral harmonic sway
        const sway = Math.sin(p.phase) * p.amplitude * 0.04;
        const currentX = p.x + sway;

        // Wrap around borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
        }

        // Draw soft golden blur particles
        ctx.beginPath();
        ctx.arc(currentX, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * (0.8 + Math.sin(p.phase) * 0.2)})`;
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = p.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for performance
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
