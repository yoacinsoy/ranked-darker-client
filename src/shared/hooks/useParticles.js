import { useEffect } from "react";

/** Shapes a particle can take. */
const SHAPES = ["square", "triangle", "cross", "math"];

/** Unicode math symbols rendered by the "math" shape. */
const EQUATIONS = ["π", "∑", "√", "∞", "x²", "∫"];

/**
 * Mounts an animated particle canvas onto `canvasRef` and handles
 * cleanup on unmount.
 *
 * @param {React.RefObject<HTMLCanvasElement>} canvasRef
 */
export function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.rotation = Math.random() * Math.PI;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.size = Math.random() * 6 + 4;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.1 + 0.1;
        this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        this.equation = EQUATIONS[Math.floor(Math.random() * EQUATIONS.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1.5;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        switch (this.shape) {
          case "square":
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;

          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, this.size);
            ctx.lineTo(-this.size, this.size);
            ctx.closePath();
            ctx.fill();
            break;

          case "cross":
            ctx.beginPath();
            ctx.moveTo(-this.size, 0);
            ctx.lineTo(this.size, 0);
            ctx.moveTo(0, -this.size);
            ctx.lineTo(0, this.size);
            ctx.stroke();
            break;

          case "math":
            ctx.font = `${this.size * 2}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.equation, 0, 0);
            break;
        }

        ctx.restore();
      }
    }

    const createParticles = () => {
      particles = [];
      const amount = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < amount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      drawLines();
      animationId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}
