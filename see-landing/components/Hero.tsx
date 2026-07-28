'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

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
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto', zIndex: 1 }}
      >
        <motion.div variants={item} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.375rem 1rem',
          borderRadius: '9999px',
          marginBottom: '1.5rem',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#47bdb2' }} />
          <span style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.15em', color: '#cbd5e1', textTransform: 'uppercase' }}>
            Introduction
          </span>
        </motion.div>

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
          justifyContent: 'center'
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
            maxWidth: '320px'
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
            maxWidth: '320px'
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