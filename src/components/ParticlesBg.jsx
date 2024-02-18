import React, { useRef, useState } from 'react'
import Particle, { rand } from './Particle';

function ParticlesBg({ className }) {
    const [init, setInit] = useState(false);

    const cnvs = useRef(null);
    const then = useRef(performance.now());
    const dimensions = useRef(null);
    const particles = useRef([]);
    const numParticles = 100;

    const engineLoop = (ctx) => {
        requestAnimationFrame(engineLoop, ctx);
        if (!ctx) return;

        ctx.clearRect(0, 0, innerWidth, innerHeight);

        const now = performance.now();
        const dt = Math.min(0.5, now - then.current);
        then.current = now;

        for (let i = 0; i < particles.current.length; i++) {
            for (let j = 0; j < particles.current.length; j++) {
                if (i == j) {
                    particles.current[i].drawDot(ctx);
                    particles.current[i].update(dt);
                } else {
                    // particles.current[i].connection(ctx, particles.current[j]);
                }
            }
        }

    }

    const resize = () => {
        cnvs.current.width = innerWidth;
        cnvs.current.height = innerHeight;
        dimensions.current = { width: innerWidth, height: innerHeight };
    }

    const initEngine = () => {
        if (init) return;

        setInit(true);
        addEventListener('resize', resize);
        resize();

        for (let i = 0; i < numParticles; i++) {
            if (particles.current.length >= numParticles) {
                break;
            }
            const x = rand(0, innerWidth);
            const y = rand(0, innerHeight);
            particles.current.push(new Particle(x, y));
        }
        const ctx = cnvs.current.getContext('2d');
        console.log(particles.current);
        // engineLoop(ctx);
    }

    if (cnvs && cnvs.current) initEngine();

    return (
        <canvas ref={cnvs} className={`block w-full h-full ${className ? className : ''}`} />
    )
}

export default ParticlesBg