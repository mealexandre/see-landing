'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface DemoProps {
  videoSrc?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Demo({ videoSrc }: DemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const showVideo = Boolean(videoSrc) && isPlaying;

  return (
    <section id="demo" style={{ backgroundColor: '#0f172a', padding: '6rem 1.5rem', position: 'relative', userSelect: 'none' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
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
              The Product
            </span>
          </motion.div>

          <motion.h2 variants={item} style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            See it in action.
          </motion.h2>
          <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto' }}>
            See how an online introduction becomes a real-world connection.
          </motion.p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          whileHover={{ scale: 1.01 }}
          style={{
            position: 'relative',
            aspectRatio: '16/9',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          {showVideo ? (
            <video src={videoSrc} controls autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <>
              {/* Abstract drifting gradient blobs */}
              <motion.div
                style={{ position: 'absolute', width: '18rem', height: '18rem', borderRadius: '50%', filter: 'blur(60px)', backgroundColor: 'rgba(34, 152, 142, 0.3)', top: '-15%', left: '-10%' }}
                animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                style={{ position: 'absolute', width: '20rem', height: '20rem', borderRadius: '50%', filter: 'blur(60px)', backgroundColor: 'rgba(71, 189, 178, 0.2)', bottom: '-20%', right: '-10%' }}
                animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Player chrome bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2.75rem',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1rem',
                gap: '0.375rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                zIndex: 2
              }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#475569' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#475569' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#475569' }} />
                <span style={{ margin: '0 auto', fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b' }}>
                  Prototype Walkthrough
                </span>
              </div>

              {/* Play button */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '5rem',
                    height: '5rem',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                  aria-label="Play demo video"
                >
                  <motion.span
                    style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid #47bdb2' }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                  />
                  <Play size={26} color="#ffffff" fill="#ffffff" style={{ marginLeft: '4px' }} />
                </motion.button>
              </div>

              {/* Preview badge */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '10px',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#cbd5e1',
                zIndex: 2
              }}>
                Preview
              </div>
            </>
          )}
        </motion.div>

        {/* Call to Action / Caption */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontSize: '1.0625rem', color: '#ffffff', fontWeight: 500, margin: 0 }}>
            Ready to find your space?{' '}
            <button
              onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                color: '#47bdb2',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                font: 'inherit',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              Join the waitlist →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}