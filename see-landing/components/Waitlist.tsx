'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xnjewqre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" style={{ backgroundColor: '#0f172a', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden', userSelect: 'none' }}>
      {/* Ambient glow behind the card */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '600px',
        height: '600px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        backgroundColor: 'rgba(34, 152, 142, 0.15)'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          maxWidth: '36rem',
          margin: '0 auto',
          borderRadius: '2rem',
          padding: '3.5rem 2rem',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          textAlign: 'center'
        }}
      >
        <div style={{
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
            Early Access
          </span>
        </div>

        <h2 style={{ fontSize: '2.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
          Ready to find your space?
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '2.25rem', maxWidth: '28rem', margin: '0 auto 2.25rem auto', lineHeight: '1.5' }}>
          Get early access and be the first to experience SEE when it opens up near you.
        </p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0' }}
            >
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                backgroundColor: 'rgba(34, 152, 142, 0.15)',
                border: '1px solid #22988e'
              }}>
                <CheckCircle2 size={26} color="#47bdb2" />
              </div>
              <p style={{ color: '#ffffff', fontWeight: 500, marginBottom: '0.25rem' }}>You're on the list!</p>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>We'll email you the moment spots open up.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.75rem', maxWidth: '28rem', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}
              noValidate
            >
              <div
                style={{
                  flex: 1,
                  minWidth: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.875rem 1.25rem',
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  backgroundColor: focused ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
                  border: status === 'error' ? '1px solid #fb7185' : focused ? '1px solid #22988e' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: focused ? '0 0 20px rgba(34, 152, 142, 0.3)' : 'none'
                }}
              >
                <Mail
                  size={16}
                  style={{ color: focused ? '#47bdb2' : '#64748b', transition: 'color 0.3s ease', flexShrink: 0 }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="you@email.com"
                  style={{ flex: 1, background: 'transparent', outline: 'none', border: 'none', fontSize: '0.875rem', color: '#ffffff', width: '100%' }}
                  aria-label="Email address"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  backgroundColor: '#22988e',
                  color: '#ffffff',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 25px rgba(34, 152, 142, 0.4)',
                  transition: 'all 0.3s ease',
                  opacity: status === 'loading' ? 0.7 : 1
                }}
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Get Early Access <ArrowRight size={15} />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: '#fb7185', fontSize: '0.75rem', marginTop: '0.75rem' }}
          >
            Please enter a valid email address or try again.
          </motion.p>
        )}

        {status !== 'success' && (
          <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '1.25rem' }}>No spam. Unsubscribe anytime.</p>
        )}
      </motion.div>
    </section>
  );
}