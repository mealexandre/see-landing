'use client';

import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

const NODE_CLUSTERS = [
  {
    id: 'a',
    style: { top: '14%', left: '6%' },
    nodes: [
      { x: 10, y: 10, r: 5 },
      { x: 44, y: 26, r: 4 },
      { x: 22, y: 48, r: 3.5 },
    ],
    duration: 9,
  },
  {
    id: 'b',
    style: { top: '58%', left: '88%' },
    nodes: [
      { x: 10, y: 10, r: 4.5 },
      { x: -18, y: 30, r: 3.5 },
      { x: 2, y: 50, r: 4 },
    ],
    duration: 11,
  },
  {
    id: 'c',
    style: { top: '8%', left: '80%' },
    nodes: [
      { x: 10, y: 10, r: 4 },
      { x: 32, y: 32, r: 3.5 },
      { x: -8, y: 38, r: 3 },
    ],
    duration: 8,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease:  } },
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
      {/* Floating micro-group clusters */}
      {NODE_CLUSTERS.map((cluster) => (
        <motion.div
          key={cluster.id}
          style={{ position: 'absolute', pointerEvents: 'none', ...cluster.style }}
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: cluster.duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="70" height="70" viewBox="0 0 70 70">
            <line x1={cluster.nodes[0].x} y1={cluster.nodes[0].y} x2={cluster.nodes[1].x} y2={cluster.nodes[1].y} stroke="#47bdb2" strokeOpacity="0.3" strokeWidth="1" />
            <line x1={cluster.nodes[1].x} y1={cluster.nodes[1].y} x2={cluster.nodes[2].x} y2={cluster.nodes[2].y} stroke="#47bdb2" strokeOpacity="0.3" strokeWidth="1" />
            <line x1={cluster.nodes[0].x} y1={cluster.nodes[0].y} x2={cluster.nodes[2].x} y2={cluster.nodes[2].y} stroke="#47bdb2" strokeOpacity="0.18" strokeWidth="1" />
            {cluster.nodes.map((n, i) => (
              <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#47bdb2" fillOpacity="0.75" />
            ))}
          </svg>
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.div variants={item} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.375rem 1rem',
          borderRadius: '9999px',
          marginBottom: '2rem',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#47bdb2' }} />
          <span style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.15em', color: '#cbd5e1', textTransform: 'uppercase' }}>
            Social Capital Infrastructure
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.035em', color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.05 }}
        >
          SEE.
          <br />
          <span style={{
            background: 'linear-gradient(to right, #7dd6cd, #47bdb2, #afe7e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Find Your Space.
          </span>
        </motion.h1>

        <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
          Connecting people through meaningful small-group experiences.
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: '#22988e',
              color: '#ffffff',
              padding: '0.875rem 1.75rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 25px rgba(34, 152, 142, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            <Play size={15} fill="currentColor" /> Watch Demo
          </button>
          <button
            onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              padding: '0.875rem 1.75rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#94a3b8' }} />
            Coming Soon
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} color="#64748b" />
        </motion.div>
      </motion.div>
    </section>
  );
}