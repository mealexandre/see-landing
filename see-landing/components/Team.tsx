'use client';

import { motion } from 'framer-motion';

/* ---------------------------------------------------------------- */
/*  Shared motion variants (matches About.tsx / Demo.tsx / Hero.tsx) */
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
/*  Team data — edit this array to update names, titles, or photos  */
/* ---------------------------------------------------------------- */

interface TeamMember {
  name: string;
  role: string;
  avatar: string; // Unsplash placeholder — swap for the real headshot when ready
}

const team: TeamMember[] = [
  {
    name: 'Alexander Pasieshvili',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80', // TODO: replace with real photo
  },
  {
    name: 'Nika Ebralidze',
    role: 'CTO / Technical Lead',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=faces&q=80', // TODO: replace with real photo
  },
  {
    name: '[Placeholder Name]',
    role: 'COO (Chief Operating Officer)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80', // TODO: replace with real photo
  },
  {
    name: '[Placeholder Name]',
    role: 'Marketing Lead',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces&q=80', // TODO: replace with real photo
  },
  {
    name: '[Placeholder Name]',
    role: 'Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=faces&q=80', // TODO: replace with real photo
  },
  {
    name: '[Placeholder Name]',
    role: 'Graphic & UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces&q=80', // TODO: replace with real photo
  },
];

/* ---------------------------------------------------------------- */
/*  Small shared piece (matches Eyebrow in About.tsx)                */
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
/*  Team Section                                                    */
/* ---------------------------------------------------------------- */

export default function Team() {
  return (
    <section
      id="team"
      style={{
        backgroundColor: '#0f172a',
        padding: '6rem 1.5rem',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        userSelect: 'none',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <Eyebrow label="The Team" />
          <motion.h2
            variants={item}
            style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '-0.025em',
            }}
          >
            Powered by a real community.
          </motion.h2>
          <motion.p
            variants={item}
            style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto', lineHeight: 1.7 }}
          >
            SEE is brought to life by a dedicated execution team of project managers, designers, and community
            builders from Youth Space of Georgia. We aren&apos;t just building an app; we already have the
            community and the operational team to launch, test, and scale.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name + member.role}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1.5rem',
                padding: '2rem 1.5rem',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  border: '2px solid rgba(71, 189, 178, 0.4)',
                  boxShadow: '0 0 0 4px rgba(71, 189, 178, 0.08)',
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  width={88}
                  height={88}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  draggable={false}
                />
              </div>

              <h3 style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.0625rem', marginBottom: '0.4rem' }}>
                {member.name}
              </h3>

              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#47bdb2',
                }}
              >
                {member.role}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}