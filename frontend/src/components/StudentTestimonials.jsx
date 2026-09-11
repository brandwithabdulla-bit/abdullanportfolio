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
        width: '350px',
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

      <style dangerouslySetInnerHTML={{__html: `
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

const reviews = [
  { name: "Ken Masters", username: "@kmasters", body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”", profile: "https://cdn.21st.dev/assets/mirror/b5/b539abc60701ab9cbcd73f9241d13a14a09582a4fd06c65784cb5567d77a2e0e.webp" },
  { name: "Kira Athrun", username: "@kathrun", body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”", profile: "https://cdn.21st.dev/assets/mirror/2b/2bc5f22fa3400c61a2161d14e3dce5a0804badebfc1b3d9cbe844feaa3b72180.webp" },
  { name: "Lirael Nassun", username: "@lnassun", body: "“This is easily one of the most reliable SaaS tools we’ve adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.”", profile: "https://cdn.21st.dev/assets/mirror/e1/e1e172821860559f890ef5ef7c14cc66a6c1ec001f3bbeb6dddd349c0081dd6b.webp" },
  { name: "Jessica", username: "@jessica", body: "Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster without worrying about infrastructure.", profile: "https://cdn.21st.dev/assets/mirror/61/61fda783ca2662349458bad61a434038016f05d6a14bd7c5a314f48c8ee8be03.webp" },
  { name: "Jenny", username: "@jenny", body: "“We evaluated multiple solutions, but this stood out immediately. It’s fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.”", profile: "https://cdn.21st.dev/assets/mirror/c5/c5ee2e124ea7334450d30a46607f793534f567e97d4b708cda110a06aeed4953.webp" },
  { name: "Kira Athrun", username: "@kathrun", body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”", profile: "https://cdn.21st.dev/assets/mirror/2b/2bc5f22fa3400c61a2161d14e3dce5a0804badebfc1b3d9cbe844feaa3b72180.webp" },
  { name: "Ken Masters", username: "@kmasters", body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”", profile: "https://cdn.21st.dev/assets/mirror/b5/b539abc60701ab9cbcd73f9241d13a14a09582a4fd06c65784cb5567d77a2e0e.webp" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ profile, name, username, body }) => {
  return (
    <Card>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
          <img style={{ borderRadius: '50%', objectFit: 'cover' }} width="44" height="44" alt="" src={profile} />
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
         <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#111', textAlign: 'center', margin: 0 }}>Student Validations</h2>
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
