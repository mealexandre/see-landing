'use client';

import { Eye } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#0f172a',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '2.5rem 1.5rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom right, #47bdb2, #22988e)',
            boxShadow: '0 0 15px rgba(34, 152, 142, 0.4)'
          }}>
            <Eye size={16} color="#0f172a" strokeWidth={2.5} />
          </div>
          <span style={{ color: '#ffffff', fontWeight: 600, letterSpacing: '-0.025em' }}>
            SEE
          </span>
        </div>

        {/* Copyright */}
        <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>
          &copy; {currentYear} SEE. All rights reserved.
        </p>

        {/* Social Links placeholder */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#94a3b8' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#47bdb2'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Twitter</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#47bdb2'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Instagram</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#47bdb2'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}