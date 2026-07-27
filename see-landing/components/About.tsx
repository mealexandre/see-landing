'use client';

import { motion } from 'framer-motion';
import { Puzzle, ShieldCheck, Coffee } from 'lucide-react';

function ClusterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <line x1="10" y1="10" x2="28" y2="14" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
      <line x1="28" y1="14" x2="16" y2="28" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
      <line x1="10" y1="10" x2="16" y2="28" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
      <circle cx="10" cy="10" r="4" fill="currentColor" />
      <circle cx="28" cy="14" r="3.5" fill="currentColor" />
      <circle cx="16" cy="28" r="3" fill="currentColor" />
    </svg>
  );
}

const features = [
  {
    icon: <Puzzle size={22} />,
    title: 'Meaningful Matching',
    desc: 'Every group is built around genuine compatibility — shared interests, values, and goals — not just proximity.',
  },
  {
    icon: <ClusterIcon className="w-[22px] h-[22px]" />,
    title: 'Small Groups',
    desc: "We cap every gathering at a handful of people, so conversations go deeper than small talk.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Safe Community',
    desc: "Every member is verified before they're matched, so you always know who's walking through the door.",
  },
  {
    icon: <Coffee size={22} />,
    title: 'Real-Life Meetings',
    desc: 'No endless messaging. SEE gets you off the app and into the same room, faster.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease:  } },
};

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#0f172a', padding: '6rem 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
              Our Approach
            </span>
          </motion.div>

          <motion.h2 variants={item} style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            Why SEE?
          </motion.h2>
          <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto' }}>
            Four commitments baked into every group we build.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '1.5rem',
            margin: '0 auto'
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease:  }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1.5rem',
                padding: '2rem',
                cursor: 'default',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                backgroundColor: 'rgba(34, 152, 142, 0.1)',
                border: '1px solid rgba(34, 152, 142, 0.2)',
                color: '#47bdb2'
              }}>
                {f.icon}
              </div>
              <h3 style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}