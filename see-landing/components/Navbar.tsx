'use client';

import React from 'react';
import { Eye } from 'lucide-react';

export default function Navbar() {
  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2rem',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      userSelect: 'none'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#22988e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Eye size={18} color="#ffffff" />
        </div>
        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-0.05em' }}>
          SEE
        </span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>About</a>
        <a href="#team" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Team</a>
        <a href="#demo" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Demo</a>
        
        {/* ტექსტური Early Access ლინკი */}
        <a href="#waitlist" onClick={scrollToWaitlist} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Early Access</a>
        
        {/* მთავარი Get Early Access ღილაკი */}
        <a href="#waitlist" onClick={scrollToWaitlist} style={{
          backgroundColor: '#22988e',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '0.95rem',
          transition: 'background-color 0.2s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d8279'} 
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#22988e'}
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}