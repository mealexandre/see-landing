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
        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', zIndex: 1 }}
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

        <motion.h1 variants={item} style={{ fontSize: '3.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
          Connect in real life, <br /> not just online.
        </motion.h1>
        
        <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem auto' }}>
          SEE brings small, curated groups together for meaningful offline interactions.
        </motion.p>
      </motion.div>
    </section>
  );
}