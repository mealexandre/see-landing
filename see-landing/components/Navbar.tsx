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

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 1.25rem',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      userSelect: 'none',
      flexWrap: 'wrap',
      gap: '0.75rem'
    }}>
      {/* Logo — კლიკზე აბრუნებს ზემოთ */}
      <a 
        href="#" 
        onClick={scrollToTop} 
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', cursor: 'pointer' }}
      >
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#22988e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Eye size={18} color="#ffffff" />
        </div>
        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-0.05em' }}>
          SEE
        </span>
      </a>

      {/* Links — მობილურზე ოპტიმიზებული ზომებით და ინტერვალებით */}
      <div style={{ 
        display: 'flex', 
        gap: 'clamp(0.75rem, 2vw, 1.5rem)', 
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>About</a>
        <a href="#team" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Team</a>
        <a href="#demo" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Demo</a>
        
        {/* Early Access ლინკი (Get Early Access ღილაკი ამოღებულია ნავიგაციიდან) */}
        <a href="#waitlist" onClick={scrollToWaitlist} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Early Access</a>
      </div>
    </nav>
  );
}