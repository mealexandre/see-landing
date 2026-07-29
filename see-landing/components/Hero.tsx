'use client';

import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // უკანა ფონის მოძრავი ქსელის ანიმაცია (Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 1000);
        this.y = Math.random() * (canvas?.height || 1000);
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (canvas && (this.x < 0 || this.x > canvas.width)) this.vx = -this.vx;
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(71, 189, 178, 0.45)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 16000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const opacity = 1 - distance / 130;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(71, 189, 178, ${opacity * 0.22})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh', // ოდნავ გავზარდეთ სექცია რომ ცენტრში კარგად დაჯდეს
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f172a',
        padding: '2rem 1.5rem', // შევამცირეთ padding ზემოთ-ქვემოთ
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <style>{`
        /* ბოქსის მთავარი სტილი */
        .see-connect-box {
          position: relative;
          background-color: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 24px;
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden; /* შიდა ნათებამ რომ არ გადააჭარბოს */
        }
        
        .see-connect-box:hover {
          transform: translateY(-3px);
          border-color: rgba(71, 189, 178, 0.45);
          box-shadow: 0 0 30px rgba(71, 189, 178, 0.18);
        }

        /* რესპონსიული შიდა განლაგება */
        .box-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          position: relative;
          zIndex: 1;
        }

        .svg-wrapper {
          margin-bottom: 1rem;
        }
        
        .text-wrapper {
          text-align: center;
        }

        /* დესკტოპზე ხდება ჰორიზონტალური და სიგანეში იშლება! */
        @media (min-width: 768px) {
          .box-inner {
            flex-direction: row;
            padding: 1.5rem 3.5rem 1.5rem 2.5rem;
          }
          .svg-wrapper {
            margin-bottom: 0;
            margin-right: 1.5rem;
          }
          .text-wrapper {
            text-align: left;
          }
        }

        @keyframes seeBgPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes seeLineDraw {
          0%   { stroke-dashoffset: 150; opacity: 0; }
          10%  { opacity: 1; }
          22%  { stroke-dashoffset: 0; opacity: 1; }
          78%  { stroke-dashoffset: 0; opacity: 1; }
          92%  { opacity: 0; }
          100% { stroke-dashoffset: 150; opacity: 0; }
        }

        @keyframes seeNodePulse {
          0%, 15%  { opacity: 0.25; transform: scale(0.85); }
          25%, 75% { opacity: 1; transform: scale(1); }
          90%, 100%{ opacity: 0.25; transform: scale(0.85); }
        }
        
        @keyframes seeCenterBreathe {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.12); }
        }

        .see-connect-box:hover .see-line {
          animation-play-state: paused;
          stroke-dashoffset: 0 !important;
          opacity: 1 !important;
        }
        .see-connect-box:hover .see-node {
          animation-play-state: paused;
          opacity: 1 !important;
          transform: scale(1) !important;
          fill: #47bdb2 !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .see-line, .see-node, .see-center-node, .see-glow {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        
        {/* მთავარი სათაური (ზომები ოდნავ დავაპატარავეთ დესკტოპისთვის) */}
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Find your space.<br />
          Find your people.
        </h1>

        {/* ქვესათაური (დაშორებები შევამცირეთ) */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: '#94a3b8',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            maxWidth: '680px',
            margin: '0 auto 2.5rem',
          }}
        >
          SEE matches you into curated micro-groups based on shared interests,
          values, goals, and skills. Choose your intention whether you're building a
          startup or finding new friends.
        </p>

        {/* განახლებული რესპონსიული ბოქსი */}
        <div className="see-connect-box">
          
          {/* შიდა განათება მთელ ბოქსზე */}
          <div
            className="see-glow"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '120%',
              height: '120%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(ellipse at center, rgba(71,189,178,0.15) 0%, transparent 60%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div className="box-inner">
            {/* SVG ანიმაცია */}
            <div className="svg-wrapper">
              <svg
                width="260"
                height="160"
                viewBox="0 0 260 160"
                style={{ position: 'relative', zIndex: 1, display: 'block' }}
              >
                <line className="see-line" x1="80" y1="100" x2="20" y2="30" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0s' }} />
                <line className="see-line" x1="80" y1="100" x2="120" y2="20" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.2s' }} />
                <line className="see-line" x1="80" y1="100" x2="150" y2="90" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.35s' }} />
                <line className="see-line" x1="80" y1="100" x2="35" y2="140" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.6s' }} />
                <line className="see-line" x1="80" y1="100" x2="10" y2="85" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.8s' }} />

                <line className="see-line" x1="20" y1="30" x2="120" y2="20" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.2s' }} />
                <line className="see-line" x1="20" y1="30" x2="10" y2="85" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.4s' }} />
                <line className="see-line" x1="35" y1="140" x2="10" y2="85" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.6s' }} />
                
                <line className="see-line" x1="120" y1="20" x2="150" y2="90" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.8s' }} />
                <line className="see-line" x1="150" y1="90" x2="230" y2="40" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.0s' }} />
                <line className="see-line" x1="150" y1="90" x2="245" y2="95" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.2s' }} />
                <line className="see-line" x1="150" y1="90" x2="195" y2="145" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.4s' }} />
                <line className="see-line" x1="230" y1="40" x2="245" y2="95" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.6s' }} />
                <line className="see-line" x1="245" y1="95" x2="195" y2="145" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.8s' }} />

                <circle className="see-node" cx="20" cy="30" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0s', transformOrigin: '20px 30px' }} />
                <circle className="see-node" cx="120" cy="20" r="5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.2s', transformOrigin: '120px 20px' }} />
                <circle className="see-node" cx="230" cy="40" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.4s', transformOrigin: '230px 40px' }} />
                <circle className="see-node" cx="245" cy="95" r="5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.6s', transformOrigin: '245px 95px' }} />
                <circle className="see-node" cx="195" cy="145" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.8s', transformOrigin: '195px 145px' }} />
                <circle className="see-node" cx="35" cy="140" r="5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '1.0s', transformOrigin: '35px 140px' }} />
                <circle className="see-node" cx="10" cy="85" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '1.2s', transformOrigin: '10px 85px' }} />
                <circle className="see-node" cx="150" cy="90" r="5.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.35s', transformOrigin: '150px 90px' }} />

                <circle cx="80" cy="100" r="9" fill="rgba(71,189,178,0.2)" />
                <circle className="see-center-node" cx="80" cy="100" r="6" fill="#47bdb2" style={{ animation: 'seeCenterBreathe 2.5s ease-in-out infinite', transformOrigin: '80px 100px' }} />
              </svg>
            </div>

            {/* ტექსტი (წერტილი ამოღებულია!) */}
            <div className="text-wrapper" style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}>
              <span style={{ color: '#47bdb2', display: 'block' }}>Real connections</span>
              <span style={{ color: '#e2e8f0', display: 'block' }}>start here</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}