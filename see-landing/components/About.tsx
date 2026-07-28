'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Rocket,
  UserRound,
  DoorOpen,
  Handshake,
  Wand2,
  Target,
  Bot,
  SplitSquareHorizontal,
  CheckCircle2,
} from 'lucide-react';

/* ---------------------------------------------------------------- */
/*  Shared motion variants                                          */
/* ---------------------------------------------------------------- */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ---------------------------------------------------------------- */
/*  Content                                                          */
/* ---------------------------------------------------------------- */

const timeline = [
  {
    year: '2023',
    title: 'SEEvrce launches',
    desc: 'Offline communities & curated Spaces',
  },
  {
    year: '2024',
    title: 'Youth Space of Georgia',
    desc: 'Community grows into an NGO',
  },
  {
    year: '2026',
    title: 'SEE',
    desc: 'Building the technology to scale meaningful connections',
  },
];

const intentions = [
  {
    icon: <Users size={24} />,
    title: 'Find Your Circle',
    desc: 'Find people for genuine conversation, shared interests, and new experiences.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Build Your Team',
    desc: 'Meet collaborators, startup teammates, mentors, and people growing in similar directions.',
  },
];

const steps = [
  {
    number: '01',
    icon: <UserRound size={22} />,
    title: 'Create your profile',
    desc: 'Share what shapes you — your interests, goals, skills, and what you can offer to others.',
  },
  {
    number: '02',
    icon: <DoorOpen size={22} />,
    title: 'Enter a curated Space',
    desc: 'No endless swiping. We automatically match you into a curated micro-group of 4–6 people with meaningful shared ground.',
  },
  {
    number: '03',
    icon: <Handshake size={22} />,
    title: 'Connect with guidance & meet offline',
    desc: 'Our digital facilitator (SEE Guide) helps break the ice, so you can easily plan your first real-world meetup — whether it’s coffee, a city walk, or a brainstorming session.',
  },
];

const features = [
  {
    icon: <Wand2 size={22} />,
    title: 'No Swiping',
    desc: 'We automatically curate your Space.',
  },
  {
    icon: <Target size={22} />,
    title: 'Beyond Hobbies',
    desc: 'Matched by goals, skills, and values.',
  },
  {
    icon: <Bot size={22} />,
    title: 'Guided Connection',
    desc: 'Digital facilitator to break the ice.',
  },
  {
    icon: <SplitSquareHorizontal size={22} />,
    title: 'Clear Intentions',
    desc: 'Separate spaces for friends and collaborators.',
  },
];

/* ---------------------------------------------------------------- */
/*  Small shared pieces                                              */
/* ---------------------------------------------------------------- */

function Eyebrow({ label }: { label: string }) {
  return (
    <motion.div
      variants={item}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.375rem 1rem',
        borderRadius: '9999px',
        marginBottom: '1.5rem',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#47bdb2' }} />
      <span
        style={{
          fontSize: '11px',
          fontFamily: 'monospace',
          letterSpacing: '0.15em',
          color: '#cbd5e1',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/*  Section 1 — Our Story / Timeline                                 */
/* ---------------------------------------------------------------- */

function StorySection() {
  return (
    <section id="about" style={{ backgroundColor: '#0f172a', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-14rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '640px',
          height: '640px',
          background: 'radial-gradient(circle, rgba(71,189,178,0.10) 0%, rgba(71,189,178,0) 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={container}>
          <Eyebrow label="Our Story" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: narrative */}
          <div>
            <motion.h2
              variants={item}
              style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}
            >
              Connection came before code.
            </motion.h2>
            <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              SEE is the digital evolution of a proven offline model. It began in 2023 with SEEvrce, where we
              manually curated small communities and organized offline Spaces for young people. As the community
              grew, we established the NGO Youth Space of Georgia in 2024 to expand our impact. One of the people
              we met through those early Spaces later joined the team building SEE. It was a reminder that
              bringing the right people together can create opportunities far beyond a single event. First, we
              built spaces for people manually. Now, we’re building the technology to help everyone find their
              space.
            </motion.p>
          </div>

          {/* Right: timeline */}
          <div>
            {timeline.map((t, i) => (
              <motion.div key={t.year} variants={item} style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '10px', flexShrink: 0 }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#47bdb2',
                      boxShadow: '0 0 0 4px rgba(71,189,178,0.15)',
                      marginTop: '1.6rem',
                      flexShrink: 0,
                    }}
                  />
                  {i < timeline.length - 1 && (
                    <div
                      style={{
                        width: '1px',
                        flex: 1,
                        background: 'linear-gradient(to bottom, rgba(71,189,178,0.4), rgba(71,189,178,0.05))',
                        marginTop: '0.5rem',
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '1.5rem',
                    padding: '1.5rem',
                    marginBottom: i < timeline.length - 1 ? '1.5rem' : 0,
                    flex: 1,
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#47bdb2', letterSpacing: '0.05em' }}>
                    {t.year}
                  </span>
                  <h4 style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.0625rem', margin: '0.4rem 0 0.4rem' }}>
                    {t.title}
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Section 2 — The Intention                                        */
/* ---------------------------------------------------------------- */

function IntentionSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="intention"
      style={{
        backgroundColor: '#0f172a',
        padding: '6rem 1.5rem',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <Eyebrow label="The Intention" />
          <motion.h2
            variants={item}
            style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em' }}
          >
            What are you looking for?
          </motion.h2>
          <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '32rem', margin: '0 auto' }}>
            Choose what matters most right now. Every Space is built around a single intention.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {intentions.map((it, i) => {
            const isSelected = selected === i;
            return (
              <motion.div
                key={it.title}
                variants={item}
                onClick={() => setSelected(i)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  background: isSelected ? 'rgba(71, 189, 178, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: isSelected ? '1px solid rgba(71, 189, 178, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 0 32px rgba(71, 189, 178, 0.15)' : 'none',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  transition: 'background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#47bdb2' }}
                  >
                    <CheckCircle2 size={22} />
                  </motion.div>
                )}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    backgroundColor: isSelected ? 'rgba(71, 189, 178, 0.18)' : 'rgba(34, 152, 142, 0.1)',
                    border: '1px solid rgba(34, 152, 142, 0.2)',
                    color: '#47bdb2',
                  }}
                >
                  {it.icon}
                </div>
                <h3 style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1875rem', marginBottom: '0.5rem' }}>
                  {it.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6' }}>{it.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Section 3 — How SEE Works                                        */
/* ---------------------------------------------------------------- */

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: '#0f172a',
        padding: '6rem 1.5rem',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <Eyebrow label="How It Works" />
          <motion.h2
            variants={item}
            style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em' }}
          >
            Less searching. More belonging.
          </motion.h2>
          <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '34rem', margin: '0 auto' }}>
            One thoughtful path from “who could I meet?” to “we should do this again.”
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.number}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1.5rem',
                padding: '2rem',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '1.25rem',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  fontSize: '3.25rem',
                  lineHeight: 1,
                  color: 'rgba(71, 189, 178, 0.12)',
                }}
              >
                {s.number}
              </span>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  backgroundColor: 'rgba(34, 152, 142, 0.1)',
                  border: '1px solid rgba(34, 152, 142, 0.2)',
                  color: '#47bdb2',
                  position: 'relative',
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.0625rem', marginBottom: '0.5rem', position: 'relative' }}>
                {s.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', position: 'relative' }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Section 4 — Why Us (feature grid)                                 */
/* ---------------------------------------------------------------- */

function WhyUsSection() {
  return (
    <section
      id="why-us"
      style={{
        backgroundColor: '#0f172a',
        padding: '6rem 1.5rem',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <Eyebrow label="Why SEE" />
          <motion.h2
            variants={item}
            style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em' }}
          >
            Why SEE?
          </motion.h2>
          <motion.p variants={item} style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto' }}>
            Four commitments baked into every Space we build.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '1.5rem',
            margin: '0 auto',
          }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1.5rem',
                padding: '2rem',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  backgroundColor: 'rgba(34, 152, 142, 0.1)',
                  border: '1px solid rgba(34, 152, 142, 0.2)',
                  color: '#47bdb2',
                }}
              >
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

/* ---------------------------------------------------------------- */
/*  Export                                                            */
/* ---------------------------------------------------------------- */

export default function About() {
  return (
    <>
      <StorySection />
      <IntentionSection />
      <HowItWorksSection />
      <WhyUsSection />
    </>
  );
}