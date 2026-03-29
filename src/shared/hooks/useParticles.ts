import { useEffect, RefObject } from "react";

type Shape = "square" | "triangle" | "cross" | "math";

const SHAPES: Shape[] = ["square", "triangle", "cross", "math"];
const EQUATIONS = ["π", "∑", "√", "∞", "x²", "∫"];

type ParticleType = {
    x: number;
    y: number;
    rotation: number;
    rotationSpeed: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    shape: Shape;
    equation: string;
    reset: () => void;
    update: () => void;
    draw: () => void;
};

export function useParticles(canvasRef: RefObject<HTMLCanvasElement | null>) {
    useEffect(() => {
        const canvas = canvasRef.current!;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: ParticleType[] = [];
        let animationId: number | null = null;

        const resize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        class Particle implements ParticleType {
            x!: number;
            y!: number;
            rotation!: number;
            rotationSpeed!: number;
            size!: number;
            speedX!: number;
            speedY!: number;
            opacity!: number;
            shape!: Shape;
            equation!: string;

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
                this.equation =
                    EQUATIONS[Math.floor(Math.random() * EQUATIONS.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                // Aqui garantimos que ctx nunca seja nulo usando assertion
                const context = ctx!;
                context.save();
                context.globalAlpha = this.opacity;
                context.fillStyle = "white";
                context.strokeStyle = "white";
                context.lineWidth = 1.5;
                context.translate(this.x, this.y);
                context.rotate(this.rotation);

                switch (this.shape) {
                    case "square":
                        context.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                        break;
                    case "triangle":
                        context.beginPath();
                        context.moveTo(0, -this.size);
                        context.lineTo(this.size, this.size);
                        context.lineTo(-this.size, this.size);
                        context.closePath();
                        context.fill();
                        break;
                    case "cross":
                        context.beginPath();
                        context.moveTo(-this.size, 0);
                        context.lineTo(this.size, 0);
                        context.moveTo(0, -this.size);
                        context.lineTo(0, this.size);
                        context.stroke();
                        break;
                    case "math":
                        context.font = `${this.size * 2}px monospace`;
                        context.textAlign = "center";
                        context.textBaseline = "middle";
                        context.fillText(this.equation, 0, 0);
                        break;
                }

                context.restore();
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
                        const context = ctx!;
                        context.beginPath();
                        context.strokeStyle = `rgba(59,130,246,${0.15 * (1 - dist / 120)})`;
                        context.lineWidth = 1;
                        context.moveTo(particles[a].x, particles[a].y);
                        context.lineTo(particles[b].x, particles[b].y);
                        context.stroke();
                    }
                }
            }
        };

        const animate = () => {
            const context = ctx!;
            context.clearRect(0, 0, canvas.width, canvas.height);
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
            if (animationId !== null) cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, [canvasRef]);
}
