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
          SEE matches you into curated micro-groups based on shared interests, values, goals, and skills. Choose your intention—whether you're building a startup or finding new friends, real connections start here.
        </motion.p>

        {/* Intention Buttons / UI Cards */}
        <motion.div variants={item} style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          {/* Friends Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.875rem 1.25rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'left',
            maxWidth: '320px'
          }}>
            <span style={{ fontSize: '1.75rem' }}>🤝</span>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem', marginBottom: '0.125rem' }}>Friends</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.4' }}>For genuine conversation & shared experiences</div>
            </div>
          </div>
          
          {/* Professional Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.875rem 1.25rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'left',
            maxWidth: '320px'
          }}>
            <span style={{ fontSize: '1.75rem' }}>💼</span>
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem', marginBottom: '0.125rem' }}>Professional</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.4' }}>For collaborators & builders</div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}