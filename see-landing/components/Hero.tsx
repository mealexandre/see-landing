'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

// Brand teal as an RGB triplet so it can be reused inside rgba() at varying opacities
const PARTICLE_RGB = '71, 189, 178';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect users who've asked for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frameId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const LINK_DISTANCE = 140;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const createParticles = () => {
      // Density scales gently with viewport size, capped so it never feels busy
      const count = Math.min(70, Math.max(24, Math.round((width * height) / 18000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.2 + 0.6,
      }));
    };

    setSize();
    createParticles();

    const handleResize = () => {
      setSize();
      particles.forEach((p) => {
        p.x = Math.min(p.x, width);
        p.y = Math.min(p.y, height);
      });
    };
    window.addEventListener('resize', handleResize);

    const drawStaticFrame = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_RGB}, 0.4)`;
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      // Render a single calm frame instead of animating
      drawStaticFrame();
      return () => window.removeEventListener('resize', handleResize);
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_RGB}, 0.45)`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * 0.32;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${PARTICLE_RGB}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        // ეს ნიღაბი ცენტრს (ტექსტის უკან) ასუფთავებს და წერტილებს მხოლოდ გვერდებზე ტოვებს
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 15%, black 65%)',
        maskImage: 'radial-gradient(ellipse at center, transparent 15%, black 65%)',
      }}
    />
  );
}

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#0f172a',
      padding: '4rem 1.5rem'
    }}>
      <ParticleNetwork />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        style={{ 
          textAlign: 'center', 
          maxWidth: '850px', 
          margin: '0 auto', 
          zIndex: 1,
          marginTop: '-8vh'
        }}
      >
        <motion.h1 variants={item} style={{ fontSize: '3.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: '1.2' }}>
          Find your space. <br /> Find your people.
        </motion.h1>
        
        <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '42rem', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
          SEE matches you into curated micro-groups based on shared interests, values, goals, and skills. Choose your intention whether you're building a startup or finding new friends, real connections start here.
        </motion.p>

        {/* Intention Buttons / UI Cards */}
        <motion.div variants={item} style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <style>{`
            .intention-card {
              position: relative;
              cursor: pointer;
              transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                          background 0.35s cubic-bezier(0.16, 1, 0.3, 1);
              will-change: transform;
            }
            .intention-card:hover {
              transform: translateY(-4px) scale(1.02);
              border-color: rgba(71, 189, 178, 0.55);
              background: linear-gradient(135deg, rgba(71, 189, 178, 0.09), rgba(255, 255, 255, 0.035));
              box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(71, 189, 178, 0.12), 0 0 24px rgba(71, 189, 178, 0.12);
            }
            .intention-card:hover .intention-card-icon {
              background: rgba(71, 189, 178, 0.18);
              transform: scale(1.06);
            }
            .intention-card-icon {
              transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.35s ease;
            }
          `}</style>

          {/* Friends Card */}
          <div className="intention-card" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.125rem 1.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            textAlign: 'left',
            width: '320px',
            minHeight: '112px',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            <span className="intention-card-icon" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(71, 189, 178, 0.08)',
              fontSize: '1.5rem'
            }}>🤝</span>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem', letterSpacing: '-0.01em' }}>Friends</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.45' }}>For genuine conversation & shared experiences</div>
            </div>
          </div>
          
          {/* Professional Card */}
          <div className="intention-card" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.125rem 1.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            textAlign: 'left',
            width: '320px',
            minHeight: '112px',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            <span className="intention-card-icon" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(71, 189, 178, 0.08)',
              fontSize: '1.5rem'
            }}>💼</span>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem', letterSpacing: '-0.01em' }}>Professional</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.45' }}>For collaborators & builders</div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}