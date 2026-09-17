import React from 'react';

// --- Reusable Components (Normally in @/components/ui) ---

const Card = ({ children }) => {
  return (
    <div
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(0,0,0,0.1)',
        backgroundColor: '#FFFFFF',
        color: '#111',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        width: '550px',
        maxWidth: '85vw',
        cursor: 'pointer',
      }}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {children}
    </div>
  );
};

// Simple standalone Marquee component
const Marquee = ({ className = '', reverse, pauseOnHover, children, style }) => {
  const direction = reverse ? 'reverse' : 'normal';

  return (
    <div
      className={`student-marquee-container ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`}
      style={{
        display: 'flex',
        overflow: 'hidden',
        padding: '8px',
        flexDirection: 'row',
        position: 'relative',
        width: '100vw',
        '--gap': '1rem',
        gap: '1rem',
        maskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)',
        ...style
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexShrink: 0,
            justifyContent: 'space-around',
            gap: '1rem',
            animation: `marquee-scroll 40s linear infinite ${direction}`,
          }}
          aria-hidden={i > 0 ? 'true' : 'false'}
        >
          {children}
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1rem)); }
        }
        .student-marquee-container.pause-on-hover:hover > div {
          animation-play-state: paused !important;
        }
      `}} />
    </div>
  );
};

// --- Target Data ---

const actualReviews = [
  { name: "Sherimol", username: "Malappuram, Kerala", body: "“Thank you so much for today's insightful and engaging session on website development. I genuinely learned a lot especially about domains, hosting, and how everything works together to build a website. The way you explained each concept was so clear and easy to understand.”" },
  { name: "Jazeena", username: "Malappuram, Kerala", body: "“I would like to express my gratitude for the wonderful session conducted by Abdullah sir today on website development. Honestly, I understood more in this one class than in the previous ones. I honestly had no clear idea about web development - especially things like purchasing domains on Hostinger and how hosting actually works.”" },
  { name: "Midlaj", username: "Tirur, Kerala", body: "“What made this photography session special was how clearly everything was explained. It never felt overwhelming, and every concept was taught in a way that helped us actually understand and apply it. Thank you for such a valuable session.”" }
];

// Duplicate the array so the marquee has enough items to scroll smoothly across wide screens
const reviews = [...actualReviews, ...actualReviews];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ profile, name, username, body }) => {
  return (
    <Card>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
          {profile ? (
            <img style={{ borderRadius: '50%', objectFit: 'cover' }} width="44" height="44" alt="" src={profile} />
          ) : (
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#6C2BFF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, flexShrink: 0 }}>
              {name.charAt(0)}
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#111', margin: 0 }}>{name}</p>
            <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#666', margin: 0 }}>{username}</p>
          </div>
        </div>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.5', color: '#444', margin: 0, fontStyle: 'italic' }}>{body}</p>
      </CardContent>
    </Card>
  );
};

export default function StudentTestimonialMarquee() {
  return (
    <div style={{ position: 'relative', display: 'flex', width: '100vw', left: '50%', transform: 'translateX(-50%)', flexDirection: 'column', paddingTop: '64px', paddingBottom: '64px', overflow: 'hidden', backgroundColor: 'transparent' }}>
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '0 20px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#111', textAlign: 'center', margin: 0 }}>Student Validations <span style={{ color: "#6C2BFF" }}>✦</span></h2>
        <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', marginTop: '10px' }}>Hear from those who have transformed their careers</p>
      </div>

      <Marquee pauseOnHover={true}>
        {firstRow.map((review, i) => (
          <ReviewCard key={review.username + i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse={true} pauseOnHover={true} style={{ marginTop: '16px' }}>
        {secondRow.map((review, i) => (
          <ReviewCard key={review.username + i} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
