'use client';

import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

/* TikTok Icon */
function TikTokIcon({ size = 18, color = 'currentColor', strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V3a4.98 4.98 0 0 0 5 4.5" />
      <path d="M14 7.5a5 5 0 0 0 4 2" />
    </svg>
  );
}

/* Instagram Icon */
function InstagramIcon({ size = 18, color = 'currentColor', strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* LinkedIn Icon */
function LinkedInIcon({ size = 18, color = 'currentColor', strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* Phone Icon */
function PhoneIcon({ size = 18, color = 'currentColor', strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Demo', href: '#demo' },
  { label: 'Early Access', href: '#waitlist' },
];

const contactDetails = [
  { label: 'contact@seevrce.ge', href: 'mailto:contact@seevrce.ge', Icon: Mail },
  { label: '+995 591 16 44 16', href: 'tel:+995591164416', Icon: PhoneIcon },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/seevrce', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/seevrce', Icon: LinkedInIcon },
  { label: 'TikTok', href: 'https://tiktok.com/@seevrce', Icon: TikTokIcon },
];

function ColumnTitle({ label }: { label: string }) {
  return (
    <h4 style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.25rem' }}>
      {label}
    </h4>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: '#090d16', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '4.5rem 1.5rem 2rem', position: 'relative', zIndex: 10, userSelect: 'none' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
          
          <div style={{ maxWidth: '320px' }}>
            <button onClick={scrollToTop} aria-label="Scroll to top" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', background: 'none', border: 'none', padding: 0, marginBottom: '1.25rem', cursor: 'pointer' }}>
              <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Image src="/logo.png" alt="SEE Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '-0.025em' }}>
                SEE
              </span>
            </button>
            <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>
              Find your space. Find your people. Connecting individuals through shared interests and goals.
            </p>
          </div>

          <div>
            <ColumnTitle label="Quick Links" />
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.875rem', background: 'none', border: 'none', padding: 0 }}>
              {quickLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)} 
                  style={{ display: 'inline-block', color: '#94a3b8', textDecoration: 'none', border: 'none', outline: 'none', fontSize: '0.9375rem', transition: 'color 0.2s ease, transform 0.2s ease', width: 'fit-content' }} 
                  onMouseOver={(e) => { e.currentTarget.style.color = '#47bdb2'; e.currentTarget.style.transform = 'translateX(4px)'; }} 
                  onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <ColumnTitle label="Contact" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {contactDetails.map(({ label, href, Icon }) => (
                <a 
                  key={label} 
                  href={href} 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#94a3b8', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s ease', width: 'fit-content' }} 
                  onMouseOver={(e) => { e.currentTarget.style.color = '#47bdb2'; }} 
                  onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingTop: '2rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>
            &copy; {currentYear} SEE. All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {socialLinks.map(({ label, href, Icon }) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={label} 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', color: '#94a3b8', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', transition: 'all 0.2s ease' }} 
                onMouseOver={(e) => { e.currentTarget.style.color = '#47bdb2'; e.currentTarget.style.borderColor = 'rgba(71, 189, 178, 0.4)'; e.currentTarget.style.background = 'rgba(71, 189, 178, 0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} 
                onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}