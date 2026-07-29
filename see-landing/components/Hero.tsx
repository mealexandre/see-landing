'use client';

import React from 'react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f172a',
      padding: '4rem 1.5rem',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      {/* ანიმაციის სტილები (CSS) */}
      <style>{`
        .see-connect-box {
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .see-connect-box:hover {
          transform: translateY(-3px);
          border-color: rgba(71, 189, 178, 0.45);
          box-shadow: 0 0 30px rgba(71, 189, 178, 0.18);
        }

        @keyframes seeBgPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        /* ანიმაციის მანძილი გაიზარდა (stroke-dashoffset: 150), რადგან ქსელი უფრო განიერია */
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

      {/* ფონის მსუბუქი ბადე */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(circle at center, rgba(71, 189, 178, 0.05) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        
        {/* მთავარი სათაური */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem'
        }}>
          Find your space.<br />
          Find your people.
        </h1>

        {/* ქვესათაური */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#94a3b8',
          lineHeight: 1.6,
          marginBottom: '3.5rem',
          maxWidth: '700px',
          margin: '0 auto 3.5rem'
        }}>
          SEE matches you into curated micro-groups based on shared interests,
          values, goals, and skills. Choose your intention whether you're building a
          startup or finding new friends.
        </p>

        {/* სრულად ასიმეტრიული და ორგანული ქსელის ბოქსი */}
        <div
          className="see-connect-box"
          style={{
            position: 'relative',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.25rem 3rem 2rem',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '24px',
            cursor: 'default',
          }}
        >
          {/* ambient glow: ახლა უფრო განიერია, რომ მთლიან ქსელს მოედოს */}
          <div
            className="see-glow"
            style={{
              position: 'absolute',
              top: '15%',
              left: '50%',
              width: '240px',
              height: '150px',
              transform: 'translateX(-50%)',
              background: 'radial-gradient(ellipse, rgba(71,189,178,0.25) 0%, transparent 70%)',
              filter: 'blur(20px)',
              animation: 'seeBgPulse 4s ease-in-out infinite',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* ასიმეტრიული SVG, სიგანე გაიზარდა 260-მდე რომ კუთხეები შეივსოს */}
          <svg width="260" height="160" viewBox="0 0 260 160" style={{ position: 'relative', zIndex: 1, marginBottom: '1.25rem' }}>
            
            {/* ხაზები შენი მთავარი წერტილიდან (რომელიც ახლა ასიმეტრიულად 80, 100 კოორდინატზეა) */}
            <line className="see-line" x1="80" y1="100" x2="20" y2="30" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0s' }} />
            <line className="see-line" x1="80" y1="100" x2="120" y2="20" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.2s' }} />
            <line className="see-line" x1="80" y1="100" x2="150" y2="90" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.35s' }} />
            <line className="see-line" x1="80" y1="100" x2="35" y2="140" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.6s' }} />
            <line className="see-line" x1="80" y1="100" x2="10" y2="85" stroke="#47bdb2" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '0.8s' }} />

            {/* შიდა კავშირები (თანამოაზრეები ერთმანეთს უკავშირდებიან მთელ სივრცეში) */}
            <line className="see-line" x1="20" y1="30" x2="120" y2="20" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.2s' }} />
            <line className="see-line" x1="20" y1="30" x2="10" y2="85" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.4s' }} />
            <line className="see-line" x1="35" y1="140" x2="10" y2="85" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.6s' }} />
            
            {/* მარჯვენა მხარეს გაშლილი კავშირები (რომ კუთხეები შეივსოს) */}
            <line className="see-line" x1="120" y1="20" x2="150" y2="90" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '1.8s' }} />
            <line className="see-line" x1="150" y1="90" x2="230" y2="40" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.0s' }} />
            <line className="see-line" x1="150" y1="90" x2="245" y2="95" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.2s' }} />
            <line className="see-line" x1="150" y1="90" x2="195" y2="145" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.4s' }} />
            <line className="see-line" x1="230" y1="40" x2="245" y2="95" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.6s' }} />
            <line className="see-line" x1="245" y1="95" x2="195" y2="145" stroke="rgba(71,189,178,0.4)" strokeWidth="1" strokeLinecap="round" strokeDasharray="150" style={{ animation: 'seeLineDraw 6s ease-in-out infinite', animationDelay: '2.8s' }} />

            {/* გარე წერტილები განაწილებული სრულ სივრცეში */}
            <circle className="see-node" cx="20" cy="30" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0s', transformOrigin: '20px 30px' }} />
            <circle className="see-node" cx="120" cy="20" r="5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.2s', transformOrigin: '120px 20px' }} />
            <circle className="see-node" cx="230" cy="40" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.4s', transformOrigin: '230px 40px' }} />
            <circle className="see-node" cx="245" cy="95" r="5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.6s', transformOrigin: '245px 95px' }} />
            <circle className="see-node" cx="195" cy="145" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.8s', transformOrigin: '195px 145px' }} />
            <circle className="see-node" cx="35" cy="140" r="5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '1.0s', transformOrigin: '35px 140px' }} />
            <circle className="see-node" cx="10" cy="85" r="4.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '1.2s', transformOrigin: '10px 85px' }} />
            <circle className="see-node" cx="150" cy="90" r="5.5" fill="#e2e8f0" style={{ animation: 'seeNodePulse 6s ease-in-out infinite', animationDelay: '0.35s', transformOrigin: '150px 90px' }} />

            {/* შენი ცენტრალური წერტილი — ოდნავ მარცხნივ და ქვემოთ */}
            <circle cx="80" cy="100" r="9" fill="rgba(71,189,178,0.2)" />
            <circle className="see-center-node" cx="80" cy="100" r="6" fill="#47bdb2" style={{ animation: 'seeCenterBreathe 2.5s ease-in-out infinite', transformOrigin: '80px 100px' }} />
          </svg>

          {/* ტექსტი */}
          <div style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 600, letterSpacing: '-0.01em' }}>
            <span style={{ color: '#47bdb2' }}>Real connections</span>
            <span style={{ color: '#e2e8f0' }}> start here.</span>
          </div>
        </div>

      </div>
    </section>
  );
}