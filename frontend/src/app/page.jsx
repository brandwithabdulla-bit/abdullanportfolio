'use client';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudentTestimonials from '@/components/StudentTestimonials';

export default function Page() {
  useEffect(() => {
    // 1. Magnetic Buttons
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        const mouseMove = function (e) {
            const rect = this.getBoundingClientRect();
            const h = rect.width / 2;
            const v = rect.height / 2;
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - v;
            const moveX = (x / h) * 4;
            const moveY = (y / v) * 4;
            this.style.setProperty('--mx', `${moveX}px`);
            this.style.setProperty('--my', `${moveY}px`);
        };
        const mouseLeave = function () {
            this.style.setProperty('--mx', '0px');
            this.style.setProperty('--my', '0px');
            setTimeout(() => {
                this.style.removeProperty('--mx');
                this.style.removeProperty('--my');
            }, 400); 
        };
        btn.addEventListener('mousemove', mouseMove);
        btn.addEventListener('mouseleave', mouseLeave);
    });

    // 2. Parallax
    const parallaxHandler = (e) => {
        const parallaxItems = document.querySelectorAll('.parallax-item');
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        parallaxItems.forEach(item => {
            const speed = parseFloat(item.getAttribute('data-speed') || '5');
            item.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
        });
    };
    document.addEventListener('mousemove', parallaxHandler);

    let cleanupParticles = null;

    // 3. Particles & Glass
    import('@/utils/particles.js').then((m) => {
        if(m.initParticles) {
            cleanupParticles = m.initParticles('hero-particles', {
                particleCount: 200, particleSpread: 10, speed: 0.1, particleColors: ['#a855f7', '#22c55e', '#ffffff'],
                moveParticlesOnHover: true, particleHoverFactor: 1.5, alphaParticles: true, particleBaseSize: 100, sizeRandomness: 1, cameraDistance: 20, disableRotation: false
            });
        }
    }).catch(e => console.error(e));

    // 4. ScrollStack
    import('@/utils/scroll-stack.js').then((m) => {
        if (m.initScrollStack) {
            setTimeout(m.initScrollStack, 200);
        }
    }).catch(e => console.error(e));

    // 5. Scroll Reel
    const initReel = () => {
        if(typeof window.ScrollReelController !== 'undefined' && document.getElementById('testimonial-reel-container')) {
            const tsData = [
                { quote: "Abdulla helped us from the beginning of our growth journey. From social media and ads to content production, everything was handled smoothly. He understood our vision and helped us build a stronger online presence. Happy to have worked with him.", author: "Siraj, Founder, Silent Slopes", image: "assets/client_testimonials/siraj.webp" },
                { quote: "Abdulla is a very approachable and reliable digital marketing expert. He is always ready to help and provides support in every aspect of marketing. Easy to reach, highly knowledgeable, and truly dedicated to his work. Strongly recommended.", author: "Abid, Co-Founder, Breezland", image: "assets/client_testimonials/abid.webp" },
                { quote: "I highly recommend Abdulla for his exceptional digital marketing services. Their team created an outstanding ad campaign for my business that exceeded my expectations. Thank you, for your outstanding work.", author: "Jomi, Founder, The Pearl Serene", image: "assets/client_testimonials/jomi.webp" },
                { quote: "Excellent digital marketing service by Abdulla and team. The team is professional, creative, and result-oriented. They helped boost my brand visibility, improved engagement, and delivered measurable growth. Highly recommended! Since 1 year we are taking service from them. Anytime approachable.", author: "Rehna, Founder, Allison Resort", image: "assets/client_testimonials/rehna.webp" }
            ];
            new window.ScrollReelController(document.getElementById('testimonial-reel-container'), tsData);
        } else {
            setTimeout(initReel, 500);
        }
    };
    initReel();

    return () => {
        document.removeEventListener('mousemove', parallaxHandler);
        if (typeof cleanupParticles === 'function') cleanupParticles();
    };
  }, []);

  return (
    <>
      <Header />

      <section id="home" className="hero-section">
        <div className="hero-container">

            {/*  WebGL Particles Background  */}
            <div id="hero-particles" className="particles-container"></div>

            {/*  Hero Content Grid  */}
            <main className="hero-content-area">

                {/*  Ambient Glows  */}
                <div className="hero-ambient-glow glow-purple-top"></div>
                <div className="hero-ambient-glow glow-green-bottom"></div>

                {/*  Center Column: Typography & Text  */}
                <div className="hero-text-col fade-in delay-1">
                    <div className="eyebrow-pill fade-in delay-1">
                        <span className="dot-green pulsing-dot"></span> HELPING BRANDS, RESORTS & CREATORS GROW DIGITALLY
                        WITH AI
                    </div>

                    <h1 className="hero-headline" style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}>
                        Perf<span style={{ color: "var(--color-primary)" }}>o</span>rmance Marketer<br />
                        <span style={{ color: "#22C55E" }}>in Kerala</span><br />
                        <span style={{ color: "#6633EE", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}>&amp; Web Developer</span>
                    </h1>
                    <p className="hero-sub fade-in-up delay-2" style={{ marginBottom: "40px" }}>
                        I&apos;m a Performance Marketer in Kerala & Web Developer helping brands, resorts & creators achieve digital growth through AI-driven marketing, branding, and web development while mentoring aspiring professionals to build valuable, high-income digital skills.
                    </p>

                    <div className="hero-cta-group fade-in delay-3">
                        <a href="#work" className="btn btn-primary-green magnetic-btn">View My Work <span
                                className="circle-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg></span></a>
                        <a href="#contact" className="btn btn-outline-dark magnetic-btn">Let&apos;s Talk <span
                                className="circle-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg></span></a>
                    </div>
                </div>

                {/*  Scroll Indicator  */}
                <div className="scroll-indicator fade-in delay-5">
                    <span className="scroll-text">SCROLL</span>
                    <div className="scroll-circle">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

            </main>
        </div>
    </section>

    {/*  Skills / Services Marquee  */}
    <section className="marquee-section">
        <div className="marquee-row marquee-dark">
            <div className="marquee-track marquee-right-to-left">
                {/*  Group 1  */}
                <div className="marquee-content">
                    <span>Branding</span> <span className="star">✦</span>
                    <span>Analytics</span> <span className="star">✦</span>
                    <span>WordPress</span> <span className="star">✦</span>
                    <span>Figma</span> <span className="star">✦</span>
                    <span>Content Strategy</span> <span className="star">✦</span>
                    <span>Google Ads</span> <span className="star">✦</span>
                    <span>Performance Marketing</span> <span className="star">✦</span>
                    <span>SEO</span> <span className="star">✦</span>
                    <span>Web Development</span> <span className="star">✦</span>
                    <span>UI Design</span> <span className="star">✦</span>
                </div>
                {/*  Group 2  */}
                <div className="marquee-content">
                    <span>Branding</span> <span className="star">✦</span>
                    <span>Analytics</span> <span className="star">✦</span>
                    <span>WordPress</span> <span className="star">✦</span>
                    <span>Figma</span> <span className="star">✦</span>
                    <span>Content Strategy</span> <span className="star">✦</span>
                    <span>Google Ads</span> <span className="star">✦</span>
                    <span>Performance Marketing</span> <span className="star">✦</span>
                    <span>SEO</span> <span className="star">✦</span>
                    <span>Web Development</span> <span className="star">✦</span>
                    <span>UI Design</span> <span className="star">✦</span>
                </div>
                {/*  Group 3  */}
                <div className="marquee-content">
                    <span>Branding</span> <span className="star">✦</span>
                    <span>Analytics</span> <span className="star">✦</span>
                    <span>WordPress</span> <span className="star">✦</span>
                    <span>Figma</span> <span className="star">✦</span>
                    <span>Content Strategy</span> <span className="star">✦</span>
                    <span>Google Ads</span> <span className="star">✦</span>
                    <span>Performance Marketing</span> <span className="star">✦</span>
                    <span>SEO</span> <span className="star">✦</span>
                    <span>Web Development</span> <span className="star">✦</span>
                    <span>UI Design</span> <span className="star">✦</span>
                </div>
            </div>
        </div>
        <div className="marquee-row marquee-purple">
            <div className="marquee-track marquee-left-to-right">
                {/*  Group 1  */}
                <div className="marquee-content">
                    <span>Web Development</span> <span className="star">✦</span>
                    <span>UI Design</span> <span className="star">✦</span>
                    <span>Branding</span> <span className="star">✦</span>
                    <span>Analytics</span> <span className="star">✦</span>
                    <span>WordPress</span> <span className="star">✦</span>
                    <span>Figma</span> <span className="star">✦</span>
                    <span>Content Strategy</span> <span className="star">✦</span>
                    <span>Google Ads</span> <span className="star">✦</span>
                    <span>Performance Marketing</span> <span className="star">✦</span>
                    <span>SEO</span> <span className="star">✦</span>
                </div>
                {/*  Group 2  */}
                <div className="marquee-content">
                    <span>Web Development</span> <span className="star">✦</span>
                    <span>UI Design</span> <span className="star">✦</span>
                    <span>Branding</span> <span className="star">✦</span>
                    <span>Analytics</span> <span className="star">✦</span>
                    <span>WordPress</span> <span className="star">✦</span>
                    <span>Figma</span> <span className="star">✦</span>
                    <span>Content Strategy</span> <span className="star">✦</span>
                    <span>Google Ads</span> <span className="star">✦</span>
                    <span>Performance Marketing</span> <span className="star">✦</span>
                    <span>SEO</span> <span className="star">✦</span>
                </div>
                {/*  Group 3  */}
                <div className="marquee-content">
                    <span>Web Development</span> <span className="star">✦</span>
                    <span>UI Design</span> <span className="star">✦</span>
                    <span>Branding</span> <span className="star">✦</span>
                    <span>Analytics</span> <span className="star">✦</span>
                    <span>WordPress</span> <span className="star">✦</span>
                    <span>Figma</span> <span className="star">✦</span>
                </div>
            </div>
        </div>

    </section>

    {/*  Recent Case Studies Section  */}
    <section id="work" className="case-studies-section">
        <div className="case-studies-container">
            {/*  Header  */}
            <div className="cs-header fade-in-up">
                <div className="cs-eyebrow">
                    <span className="cs-indicator"></span> WORK & IMPACT
                </div>
                <h2 className="cs-heading">Recent <span className="cs-highlight">Case Studies</span></h2>
                <p className="cs-description">A selection of websites, campaigns and digital work built to create measurable
                    business growth.</p>
            </div>

            {/*  Filters  */}
            <div className="cs-filters fade-in delay-1">
                <a href="#all" className="cs-filter active" data-filter="all">ALL WORK</a>
                <a href="#web" className="cs-filter" data-filter="web">WEB DEVELOPMENT</a>
                <a href="#performance" className="cs-filter" data-filter="performance">PERFORMANCE MARKETING</a>
                <a href="#social" className="cs-filter" data-filter="social">CONTENT & PRODUCTION</a>
            </div>

            {/*  Grid  */}
            <div id="cs-grid" className="cs-grid">
                {/*  Projects will be dynamically injected here by JavaScript  */}
            </div>

            {/*  View More Button  */}
            <div className="cs-view-more-container">
                <button id="cs-view-more-btn" className="cs-view-more-btn">View More Projects ↗</button>
            </div>
        </div>
    </section>

    {/*  Detailed Services Grid (Imported from Old Website)  */}
    <section id="services" className="services-premium-section">
        <div className="services-premium-container">
            <div className="cs-header fade-in-up">
                <div className="cs-eyebrow">
                    <span className="cs-indicator" style={{ background: "var(--color-accent-purple)" }}></span> WHAT I DO
                </div>
                <h2 className="cs-heading"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>My <span
                        className="inline-icon-wrapper"
                        style={{ background: "#0ED3B9", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", verticalAlign: "middle", margin: "0 10px", boxShadow: "0 5px 15px rgba(14,211,185,0.3)" }}><svg
                            width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                        </svg></span><span className="cs-highlight">Services</span></h2>
            </div>

            <div className="scroll-stack-scroller" id="services-stack">
                <div className="scroll-stack-inner">
                    {/*  SMM  */}
                    <div className="scroll-stack-card">
                        <div className="expand-bg"
                            style={{ background: "url('assets/images/services/smm_bg.png') center/cover no-repeat", opacity: "0.15" }}>
                        </div>
                        <div className="expand-content-container"
                            style={{ flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
                            <div className="expand-icon" style={{ boxShadow: "0 4px 15px rgba(93,24,235,0.4)", margin: "0" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="var(--color-accent-purple)" strokeWidth="2.5" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                            <div className="expand-text stack-text">
                                <h3>SMM</h3>
                                <p>Your customers are scrolling through social media every day — let&apos;s make sure they see your business. From eye-catching posts to engaging stories, I keep your brand highly active and relevant.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Web Dev  */}
                    <div className="scroll-stack-card">
                        <div className="expand-bg"
                            style={{ background: "url('assets/images/services/webdev_bg.png') center/cover no-repeat", opacity: "0.15" }}>
                        </div>
                        <div className="expand-content-container"
                            style={{ flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
                            <div className="expand-icon" style={{ boxShadow: "0 4px 15px rgba(0,166,214,0.4)", margin: "0" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A6D6"
                                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <div className="expand-text stack-text">
                                <h3>Premium Web Development</h3>
                                <p>Your website needs to look immaculate and work lightning fast. I build modern, visually stunning websites that load quickly and are heavily optimized to turn visitors into long-lasting customers.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Content Production  */}
                    <div className="scroll-stack-card">
                        <div className="expand-bg"
                            style={{ background: "url('assets/images/services/seo_bg.png') center/cover no-repeat", opacity: "0.15" }}>
                        </div>
                        <div className="expand-content-container"
                            style={{ flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
                            <div className="expand-icon" style={{ boxShadow: "0 4px 15px rgba(50,235,79,0.4)", margin: "0" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="var(--color-accent-green)" strokeWidth="2.5" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                </svg>
                            </div>
                            <div className="expand-text stack-text">
                                <h3>Content Production</h3>
                                <p>From high-quality videos to stunning visual graphics, we produce engaging content that captures your brand&apos;s essence and connects with your target audience to drive meaningful engagement.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Travel Industry Marketing  */}
                    <div className="scroll-stack-card">
                        <div className="expand-bg"
                            style={{ background: "url('assets/images/services/sem_bg.png') center/cover no-repeat", opacity: "0.15" }}>
                        </div>
                        <div className="expand-content-container"
                            style={{ flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
                            <div className="expand-icon" style={{ boxShadow: "0 4px 15px rgba(228,255,2,0.4)", margin: "0" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9EAC00"
                                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12h-4l-3-9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="expand-text stack-text">
                                <h3>Travel Industry Business Growth & Marketing</h3>
                                <p>Helping resorts, destinations, and travel brands scale their bookings through targeted digital campaigns, visually rich content, and comprehensive growth strategies tailored for the hospitality sector.</p>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-stack-end"></div>
                </div>
            </div>
        </div>
    </section>

    {/*  About Section (Uncoder x Nizam Inspired REDESIGN)  */}
    <section id="about" className="about-premium-section">

        {/*  Top Headline  */}
        <div className="about-premium-top fade-in-up">
            <div className="about-premium-label">
                <span className="label-line"></span> ABOUT <span className="label-line"></span>
            </div>
            <div className="about-headline-wrapper">
                <h2 className="about-premium-headline">
                    The <span className="inline-icon-wrapper bg-purple-accent"><svg width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg></span> performance marketer from Kerala<br />
                    helping brands grow beyond <span className="inline-icon-wrapper bg-yellow-accent"><svg width="20"
                            height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg></span> borders.
                </h2>
            </div>
        </div>

        {/*  Main 3-Area Composition  */}
        <div className="about-premium-container fade-in-up delay-1">

            {/*  LEFT: Biography  */}
            <div className="about-bio-col">
                <div className="about-me-pill">
                    <span className="dot-green"></span> ABOUT ME
                </div>
                <div className="about-bio-text-short">
                    <p className="bio-intro">I help businesses grow with data-driven marketing strategies that deliver real
                        results.</p>

                    <div className="bio-feature-list">
                        <div className="bio-feature-item">
                            <div className="feature-icon bg-purple-light">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                    stroke="var(--color-accent-purple)" strokeWidth="2.5" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <p>Performance marketing focused on <strong>measurable growth.</strong></p>
                        </div>
                        <div className="bio-feature-item">
                            <div className="feature-icon bg-lime-light">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9EAC00"
                                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                            </div>
                            <p>Creative strategies backed by data and <strong>insights.</strong></p>
                        </div>
                        <div className="bio-feature-item">
                            <div className="feature-icon bg-blue-light">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB"
                                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path
                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                    </path>
                                </svg>
                            </div>
                            <p>Helping brands expand beyond <strong>boundaries.</strong></p>
                        </div>
                        <div className="bio-feature-item">
                            <div className="feature-icon bg-cyan-light">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00A6D6"
                                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <p>Building websites that turn visitors into <strong>customers.</strong></p>
                        </div>
                        <div className="bio-feature-item">
                            <div className="feature-icon bg-green-light">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                    stroke="var(--color-accent-green)" strokeWidth="2.5" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <p>Combining marketing, technology, & creativity to drive <strong>growth.</strong></p>
                        </div>
                    </div>
                </div>

                <a href="#about-page" className="btn-dark-pill">
                    More About Me ↗
                </a>
            </div>

            {/*  CENTER: Portrait Card  */}
            <div className="about-center-col">
                <div className="portrait-hero-card">
                    <img src="assets/images/portrait.webp" alt="Muhammed Abdulla" className="portrait-hero-img" />
                    <div className="portrait-glow"></div>

                    <div className="portrait-caption">
                        <div className="portrait-caption-text">
                            <h3>Muhammed Abdulla</h3>
                            <p>Performance Marketer | Educator | Web Developer</p>
                        </div>
                        <div className="portrait-caption-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/*  RIGHT: Stats & Expertise  */}
            <div className="about-stats-col">

                {/*  2x2 Stats Grid  */}
                <div className="stats-2x2-grid">
                    <div className="stat-white-card">
                        <div className="stat-icon-wrapper bg-purple-light">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                </path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                        </div>
                        <h4 className="stat-value text-purple">50+</h4>
                        <p className="stat-text">Projects Completed</p>
                    </div>

                    <div className="stat-white-card">
                        <div className="stat-icon-wrapper bg-green-light">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h4 className="stat-value text-green">30+</h4>
                        <p className="stat-text">Happy Clients</p>
                    </div>

                    <div className="stat-white-card">
                        <div className="stat-icon-wrapper bg-cyan-light">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C4FF"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                        </div>
                        <h4 className="stat-value text-cyan">100%</h4>
                        <p className="stat-text">Positive Feedback</p>
                    </div>

                    <div className="stat-white-card">
                        <div className="stat-icon-wrapper bg-lime-light">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9EAC00"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <h4 className="stat-value text-lime">4+</h4>
                        <p className="stat-text">Years Experience</p>
                    </div>
                </div>

                {/*  What I Do Best Card  */}
                <div className="services-dark-card">
                    <h4 className="services-title">What I Do Best ✦</h4>
                    <div className="services-pill-grid">
                        <div className="service-pill">Performance Marketing <span className="arrow">↗</span></div>
                        <div className="service-pill">SEO <span className="arrow">↗</span></div>
                        <div className="service-pill">Web Development <span className="arrow">↗</span></div>
                        <div className="service-pill">Branding <span className="arrow">↗</span></div>
                        <div className="service-pill">Content Strategy <span className="arrow">↗</span></div>
                        <div className="service-pill">Production <span className="arrow">↗</span></div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="about-divider fade-in-up delay-2" />

        {/*  Client Logos (Full Width Block)  */}
        <div className="client-logos-section fade-in-up delay-3">
            <h3 className="clients-label-large">TRUSTED BY 30+ CLIENTS</h3>
            <div className="marquee-container">
                <div className="client-marquee-track">
                    {/*  Original Set  */}
                    <img src="assets/logo/adzone.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/career-2.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/hexad.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/mountain-vibes.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/partho-5.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/pastel.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/peralserence.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/silent_1.webp" alt="Client Logo" className="client-logo-marquee" />
                    {/*  Duplicate Set for Infinite Scroll  */}
                    <img src="assets/logo/adzone.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/career-2.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/hexad.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/mountain-vibes.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/partho-5.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/pastel.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/peralserence.webp" alt="Client Logo" className="client-logo-marquee" />
                    <img src="assets/logo/silent_1.webp" alt="Client Logo" className="client-logo-marquee" />
                </div>
            </div>
        </div>

    </section>




    {/*  Testimonials & Mentorship  */}



    {/*  Blog / Insights  */}

    {/*  Custom 6x4 Grid Section  */}
    <section className="pf-section pf-bg-light" style={{ backgroundColor: "#F8F5F0", paddingBottom: "20px", color: "#111" }}>
        <style dangerouslySetInnerHTML={{ __html: `
            .custom-grid-card {
                border-radius: 12px;
                aspect-ratio: 1.1/1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-weight: 700;
                font-size: 1.2rem;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                padding: 0;
                overflow: hidden;
                cursor: pointer;
                line-height: 1.2;
                border: 1px solid rgba(0, 0, 0, 0.05);
            }

            .custom-grid-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            }

            .custom-six-col-grid {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                gap: 15px;
            }

            @media(max-width: 900px) {
                .custom-six-col-grid {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                }
            }

            @media(max-width: 600px) {
                .custom-six-col-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                }
            }
        ` }} />

        <div
            style={{ paddingTop: "80px", paddingBottom: "100px", paddingLeft: "5%", paddingRight: "5%", maxWidth: "1440px", margin: "0 auto", textAlign: "center" }}>
            <div className="pf-eyebrow">Trusted By</div>
            <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "10px", fontStyle: "italic" }}>&ldquo;Fewer projects. More attention. Real results.&rdquo;</p>
            <h2 className="pf-hero-title" style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Featured <span
                    style={{ color: "var(--pf-accent)" }}>BRANDS</span></h2>

            <div className="custom-six-col-grid">
                {/*  Row 1  */}
                <div className="custom-grid-card" style={{ background: "#DEFE00", color: "#000" }}><img src="/assets/logo/ever_consutruction-1.webp" alt="Ever Constructions" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#223E50", color: "#fff" }}><img src="/assets/logo/partho-5.webp" alt="Partho Holidays" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#FFFFFF", color: "#000" }}><img src="/assets/logo/mountain-vibes.webp" alt="Mountain Vibes" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#B38031", color: "#fff" }}><img src="/assets/logo/allison.webp" alt="Allison Resort" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#1B7171", color: "#fff" }}><img src="/assets/logo/partho-6.webp" alt="Breezeland Holidays" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#E1E0CD", color: "#000" }}><img src="/assets/logo/silent.webp" alt="Silent Slopes" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>

                {/*  Row 2  */}
                <div className="custom-grid-card" style={{ background: "#0F52FF", color: "#fff" }}><img src="/assets/logo/pastel-1.webp" alt="Windage Production" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#FFFFFF", color: "#000" }}><img src="/assets/logo/pastel-3.webp" alt="Amber Woods" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#85C02B", color: "#fff" }}><img src="/assets/logo/pastel-8.webp" alt="Passion Palace" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#12529E", color: "#fff" }}><img src="/assets/logo/adzone.webp" alt="Adzone Productions" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#07333C", color: "#fff" }}><img src="/assets/logo/peralserence.webp" alt="The Pearl Serene" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#1C0A09", color: "#fff" }}><img src="/assets/logo/hexad-2.webp" alt="Gritcore" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>

                {/*  Row 3  */}
                <div className="custom-grid-card" style={{ background: "#0F3A1D", color: "#fff" }}><img src="/assets/logo/2.webp" alt="HK Travels" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#BCBCBC", color: "#000" }}><img src="/assets/logo/hexad.webp" alt="Hexad Power House" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#0F284B", color: "#fff" }}><img src="/assets/logo/career.webp" alt="Career Caravan" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#4A110D", color: "#fff" }}><img src="/assets/logo/pastel.webp" alt="Pastel Frames" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#0D1F38", color: "#fff" }}><img src="/assets/logo/career-1.png" alt="Skillage Academy" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#FFFFFF", color: "#000" }}><img src="/assets/logo/career-5.webp" alt="Royal Spice" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>

                {/*  Row 4  */}
                <div className="custom-grid-card" style={{ background: "#FAD2CC", color: "#000" }}><img src="/assets/logo/career-2.webp" alt="Happily Stories" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#116FBC", color: "#fff" }}><img src="/assets/logo/career-4.webp" alt="Hirz India" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#13120E", color: "#fff" }}><img src="/assets/logo/pastel-9.webp" alt="Yathra Planners" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#1C100C", color: "#fff" }}><img src="/assets/logo/pastel-10.webp" alt="Commune 18" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#FFFFFF", color: "#000" }}><img src="/assets/logo/career-3.webp" alt="Pencil Hub" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className="custom-grid-card" style={{ background: "#10392C", color: "#fff" }}><img src="/assets/logo/pastel-2.webp" alt="Wedding Talks" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
            </div>
        </div>
    </section>

    {/*  Vanilla Scroll Reel Initializer Node  */}
    <div style={{ backgroundColor: "#F8F5F0", paddingBottom: "30px", paddingLeft: "5%", paddingRight: "5%", display: "flex", justifyContent: "center" }}>
        <div id="testimonial-reel-container" style={{ width: "100%" }}></div>
    </div>

    <section id="mentorship" className="testimonials-section">
        <div className="testimonials-container">
            <div className="mentorship-intro fade-in-up">
                <div className="about-premium-label"
                    style={{ justifyContent: "flex-start", marginBottom: "12px", marginLeft: "0" }}>
                    MENTORSHIP & IMPACT
                </div>
                <h2 className="about-premium-headline"
                    style={{ textAlign: "left", margin: "20px 0", color: "#000", lineHeight: "1.1" }}>I&apos;ve mentored
                    <span className="inline-icon-wrapper"
                        style={{ background: "#4ADE80", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", verticalAlign: "middle", margin: "0 6px", boxShadow: "0 8px 20px rgba(74,222,128,0.3)" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                            </path>
                        </svg>
                    </span> over
                    <span
                        style={{ color: "#4ADE80", display: "inline-flex", flexDirection: "column", verticalAlign: "bottom", lineHeight: "0.85", marginLeft: "6px" }}>
                        <span
                            style={{ fontSize: "0.75em", letterSpacing: "-0.02em", transform: "translateY(-0.05em)" }}>500+</span>
                        <span>students</span>
                    </span>
                </h2>
                <p className="bio-intro"
                    style={{ textAlign: "left", marginLeft: "0", maxWidth: "800px", padding: "0", color: "#666", fontWeight: "400", fontSize: "1.1rem", lineHeight: "1.6" }}>
                    Over the years, I&apos;ve mentored 500+ students in content creation, production, digital marketing, and
                    skill development. Every student has a different journey, and I focus on helping them build
                    practical skills, gain confidence, and turn learning into real opportunities.</p>
            </div>

            <div className="mentorship-hover-box-wrapper fade-in-up delay-2"
                style={{ position: "relative", width: "95vw", maxWidth: "1400px", left: "calc(50% - min(47.5vw, 700px))", height: "600px", overflow: "hidden", margin: "80px 0", background: "#0A0A0A", borderRadius: "40px", boxShadow: "0 40px 100px rgba(0,0,0,0.4), inset 0 2px 10px rgba(255,255,255,0.05)", padding: "0 40px" }}>

                {/*  Animated Vertical Marquee Columns  */}
                <div className="mentorship-grid-container"
                    style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "24px", width: "100%", height: "120%", marginTop: "-10%", transform: "rotate(-6deg) scale(1.2)", WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)", maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)" }}>
                    {/*  Column 1 (up)  */}
                    <div className="t-col-up" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-12.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-17.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/dd.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-13.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-19.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-12.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                    </div>
                    {/*  Column 2 (down)  */}
                    <div className="t-col-down" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-13.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-18.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-20.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-14.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-13.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-18.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                    </div>
                    {/*  Column 3 (up)  */}
                    <div className="t-col-up" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-14.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/dd.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-15.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-12.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-14.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/dd.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                    </div>
                    {/*  Column 4 (down)  */}
                    <div className="t-col-down" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-15.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-19.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-17.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-20.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-15.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-19.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                    </div>
                    {/*  Column 5 (up)  */}
                    <div className="t-col-up" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-17.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-13.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-20.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-18.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-17.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-13.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                    </div>
                    {/*  Column 6 (down)  */}
                    <div className="t-col-down" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-18.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-12.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-14.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/dd.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-15.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                        <div style={{ background: "rgba(0,0,0,0.04)", borderRadius: "20px", outline: "1px solid rgba(0,0,0,0.05)", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}><img src="assets/mentors/Untitled-design-18.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" /></div>
                    </div>
                </div>
            </div>
        </div>
        <StudentTestimonials />
    </section>

    {/*  Featured Brands Section  */}
    <section id="blog" className="blog-section">
        <div className="blog-container">
            <div className="cs-header fade-in-up">
                <div className="cs-eyebrow">
                    <span className="cs-indicator" style={{ background: "var(--color-accent-purple)" }}></span> INSIGHTS
                </div>
                <h2 className="cs-heading"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>Latest <span
                        className="inline-icon-wrapper"
                        style={{ background: "#FF7B7B", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", verticalAlign: "middle", margin: "0 10px", boxShadow: "0 5px 15px rgba(255,123,123,0.3)" }}><svg
                            width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg></span><span className="cs-highlight">Articles</span></h2>
            </div>
            <div className="blog-grid">
                <a href="https://brandwithabdulla.com/how-to-start-freelancing-in-2026/" target="_blank"
                    className="blog-card fade-in-up delay-1" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                        <img src="assets/images/Yellow-and-Black-Personal-Branding-Masterclass-YouTube-Thumbnail.webp" alt="Freelancing Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                    </div>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div className="blog-date">09/07/2026</div>
                        <h3 style={{ marginBottom: 'auto' }}>How to Start Freelancing in 2026 - Everything You Need to Know</h3>
                        <span className="read-more text-green" style={{ marginTop: '16px' }}>Read More <span className="arrow">↗</span></span>
                    </div>
                </a>
                <a href="https://brandwithabdulla.com/how-to-become-a-content-creator-in-2026/" target="_blank"
                    className="blog-card fade-in-up delay-2" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                        <img src="assets/images/Black-Creative-What-is-Hustle-Culture-YouTube-Thumbnail-1.webp" alt="Content Creation Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                    </div>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div className="blog-date">16/05/2026</div>
                        <h3 style={{ marginBottom: 'auto' }}>How to Become a Content Creator in 2026</h3>
                        <span className="read-more text-purple" style={{ marginTop: '16px' }}>Read More <span className="arrow">↗</span></span>
                    </div>
                </a>
                <a href="https://brandwithabdulla.com/best-digital-marketing-expert-in-wayanad/" target="_blank"
                    className="blog-card fade-in-up delay-3" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                        <img src="assets/images/Blue-And-Purple-Gradient-Modern-The-Importance-Of-Content-Marketing-YouTube-Thumbnail.webp" alt="Digital Marketing Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                    </div>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div className="blog-date">06/08/2025</div>
                        <h3 style={{ marginBottom: 'auto' }}>Best Digital Marketing Expert in Wayanad</h3>
                        <span className="read-more text-yellow" style={{ marginTop: '16px' }}>Read More <span className="arrow">↗</span></span>
                    </div>
                </a>
            </div>
        </div>
    </section>

    {/*  Wayanad FAQ Accordion  */}
    <section id="faq" className="faq-section">
        <div className="faq-container">
            <div className="cs-header fade-in-up">
                <div className="cs-eyebrow">
                    <span className="cs-indicator" style={{ background: "#fff" }}></span> QUESTIONS
                </div>
                <h2 className="cs-heading"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>Frequently
                    Asked <span className="inline-icon-wrapper"
                        style={{ background: "#38BDF8", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", verticalAlign: "middle", margin: "0 10px", boxShadow: "0 5px 15px rgba(56,189,248,0.3)" }}><svg
                            width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                            </path>
                        </svg></span><span className="cs-highlight">Questions</span></h2>
            </div>
            <div className="accordion-list fade-in-up delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '24px', alignItems: 'start' }}>
                <div className="accordion-item">
                    <button className="accordion-header">01. What does a performance marketer do? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">A performance marketer uses data-driven strategies to run and optimize digital campaigns with measurable goals such as leads, sales, bookings, and conversions. The focus is on improving results and maximizing return on ad spend (ROAS).</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">02. Which advertising platforms do you work with? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">I work with platforms such as Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, and other relevant advertising channels depending on your business and target audience.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">03. How soon can I expect to see results? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">Results depend on your industry, budget, offer, audience, and campaign goals. Some campaigns can generate results within days, while others need several weeks of testing and optimization to reach their potential.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">04. How much do your performance marketing services cost? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">Pricing depends on the scope of work, advertising budget, number of platforms, and campaign complexity. I offer customized packages based on your specific business goals rather than a one-size-fits-all price.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">05. Can you guarantee leads or sales? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">No ethical marketer can guarantee a specific number of sales or leads. What I can guarantee is a structured, data-driven approach with continuous testing, optimization, and transparent reporting focused on improving campaign performance.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">06. What do you need from me to get started? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">I’ll typically need information about your business, target audience, products or services, goals, previous campaign data, website or landing page access, and advertising account access where required.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">07. Do you create ad creatives and copy? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">Yes. I can help with ad concepts, copy, hooks, creative direction, and variations designed for testing. If professional photography or video production is required, that can be coordinated separately.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">08. Do you work with small businesses and startups? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">Yes. Performance marketing can be particularly useful for businesses that want to grow while keeping their marketing measurable. Campaigns and budgets can be structured according to your current stage and goals.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">09. Can you optimize my website or landing page for better conversions? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">Yes. I can identify conversion issues and recommend improvements to your landing pages, website structure, messaging, calls-to-action, forms, and overall user journey to help turn more visitors into customers.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button className="accordion-header">10. Why should I hire you as my performance marketer? <span className="acc-icon">+</span></button>
                    <div className="accordion-body">
                        <div className="acc-content">I focus on measurable business growth, not simply running advertisements. By combining data analysis, creative testing, audience research, and continuous optimization, I aim to improve campaign efficiency, increase conversions, and maximize your marketing ROI.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/*  Main Modern Card Footer (Faizur Style for Abdulla)  */}
    <Footer />
    {/* <script>
        // Magnetic Button Effect
        const magneticBtns = document.querySelectorAll('.magnetic-btn');

        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
            });
        });

        // Parallax floating cards (Micro-interaction)
        document.addEventListener('mousemove', (e) => {
            const parallaxItems = document.querySelectorAll('.parallax-item');
            // Normalized coordinates (-0.5 to 0.5)
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;

            parallaxItems.forEach(item => {
                const speed = parseFloat(item.getAttribute('data-speed'));
                // Max movement is now limited to (speed * 0.5) pixels, keeping it bounded to ~5-12px
                item.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
            });
        });
    </script> */}
    {/*  Magnetic Button Interaction  */}
    {/* <script>
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const h = rect.width / 2;
                const v = rect.height / 2;
                const x = e.clientX - rect.left - h;
                const y = e.clientY - rect.top - v;
                // Move max 4px
                const moveX = (x / h) * 4;
                const moveY = (y / v) * 4;
                this.style.setProperty('--mx', `${moveX}px`);
                this.style.setProperty('--my', `${moveY}px`);
            });
            btn.addEventListener('mouseleave', function () {
                this.style.setProperty('--mx', '0px');
                this.style.setProperty('--my', '0px'); // Resets to CSS hover variable
                setTimeout(() => {
                    this.style.removeProperty('--mx');
                    this.style.removeProperty('--my');
                }, 400); // Remove inline styles to allow CSS hover rules
            });
        });
    </script> */}

    {/*  GSAP for Animations  */}
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script> */}
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script> */}
    {/*  Custom Scripts  */}
    {/* <script src="assets/js/projects.js?v=44"></script> */}
    {/* <script src="assets/js/drift-wall.js?v=44"></script> */}
    {/* <script src="assets/js/main.js?v=44"></script> */}
    {/* <script type="module">
        import { initParticles } from './assets/js/particles.js';
        import { initGlassSurface } from './assets/js/glass.js';

        document.addEventListener('DOMContentLoaded', () => {
            initParticles('hero-particles', {
                particleCount: 200,
                particleSpread: 10,
                speed: 0.1,
                particleColors: ['#a855f7', '#22c55e', '#ffffff'],
                moveParticlesOnHover: true,
                particleHoverFactor: 1.5,
                alphaParticles: true,
                particleBaseSize: 100,
                sizeRandomness: 1,
                cameraDistance: 20,
                disableRotation: false
            });

            initGlassSurface('.header-inner');
        });
    </script> */}

    {/*  Lenis Smooth Scroll Framework  */}
    {/* <script src="https://unpkg.com/lenis@1.1.9/dist/lenis.min.js"></script> */}

    {/*  ScrollStack Vanilla JS Port  */}
    {/* <script>
        window.initScrollStack = () => {
            const scroller = document.querySelector('.scroll-stack-scroller');
            const endElement = document.querySelector('.scroll-stack-end');
            const cards = Array.from(document.querySelectorAll('.scroll-stack-card'));

            if (!scroller || !endElement || cards.length === 0) return;

            const itemDistance = 60;
            const itemScale = 0.03;
            const itemStackDistance = 30;
            const stackPositionPercentage = 0.20;
            const scaleEndPositionPercentage = 0.10;
            const baseScale = 0.85;
            const rotationAmount = 0;
            const blurAmount = 0;

            let lastTransforms = new Map();

            // Set up initial inline styles for cards
            cards.forEach((card, i) => {
                if (i < cards.length - 1) {
                    card.style.marginBottom = `${itemDistance}px`;
                }
                card.style.willChange = 'transform, filter';
                card.style.transformOrigin = 'top center';
                card.style.backfaceVisibility = 'hidden';
                card.style.transform = 'translateZ(0)';
                card.style.perspective = '1000px';
                card.dataset.cachedY = "0";
            });

            // Make sure the last card has some margin to push the end tag down, ensuring enough scrollable space
            if (cards.length > 0) {
                cards[cards.length - 1].style.marginBottom = '120vh';
            }

            const calculateProgress = (scrollTop, start, end) => {
                if (scrollTop < start) return 0;
                if (scrollTop > end) return 1;
                return (scrollTop - start) / (end - start);
            };

            const getElementOffsetTop = (element) => {
                let rect = element.getBoundingClientRect();
                return rect.top + window.scrollY;
            };

            const updateCardTransforms = () => {
                const scrollTop = window.scrollY;
                const containerHeight = window.innerHeight;
                const stackPositionPx = stackPositionPercentage * containerHeight;
                const scaleEndPositionPx = scaleEndPositionPercentage * containerHeight;
                const endElementTop = getElementOffsetTop(endElement);

                cards.forEach((card, i) => {
                    const cardTop = getElementOffsetTop(card) - parseFloat(card.dataset.cachedY || 0);

                    const triggerStart = cardTop - stackPositionPx - (itemStackDistance * i);
                    const triggerEnd = cardTop - scaleEndPositionPx;
                    const pinStart = cardTop - stackPositionPx - (itemStackDistance * i);
                    const pinEnd = endElementTop - (containerHeight / 2);

                    const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
                    const targetScale = baseScale + (i * itemScale);
                    const scale = 1 - (scaleProgress * (1 - targetScale));
                    const rotation = rotationAmount ? (i * rotationAmount * scaleProgress) : 0;

                    let translateY = 0;
                    const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

                    if (isPinned) {
                        translateY = scrollTop - cardTop + stackPositionPx + (itemStackDistance * i);
                    } else if (scrollTop > pinEnd) {
                        translateY = pinEnd - cardTop + stackPositionPx + (itemStackDistance * i);
                    }

                    const tx = Math.round(translateY * 100) / 100;
                    const ts = Math.round(scale * 1000) / 1000;

                    const lastTransform = lastTransforms.get(i);
                    const hasChanged = !lastTransform ||
                        Math.abs(lastTransform.tx - tx) > 0.1 ||
                        Math.abs(lastTransform.ts - ts) > 0.001;

                    if (hasChanged) {
                        const transform = `translate3d(0, ${tx}px, 0) scale(${ts})`;
                        card.style.transform = transform;
                        card.dataset.cachedY = tx;
                        lastTransforms.set(i, { tx, ts });
                    }
                });
            };

            // Remove existing listener to avoid stacking up events on filter changes
            if (window._stackScrollListener) {
                if (window.globalLenis) {
                    window.globalLenis.off('scroll', window._stackScrollListener);
                } else {
                    window.removeEventListener('scroll', window._stackScrollListener);
                }
            }

            window._stackScrollListener = updateCardTransforms;

            if (typeof Lenis !== "undefined" && !window.globalLenis) {
                window.globalLenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true
                });

                const raf = (time) => {
                    window.globalLenis.raf(time);
                    requestAnimationFrame(raf);
                };
                requestAnimationFrame(raf);
            }

            if (window.globalLenis) {
                window.globalLenis.on('scroll', updateCardTransforms);
            } else {
                window.addEventListener('scroll', updateCardTransforms);
            }

            // Initialization delay to measure layout safely
            setTimeout(() => { updateCardTransforms(); }, 150);
        };

        document.addEventListener('DOMContentLoaded', () => { setTimeout(window.initScrollStack, 200); });
    </script> */}
    {/* <script src="assets/js/global-scroll.js"></script> */}

    {/*  Scroll Reel Logic  */}
    {/* <script src="assets/js/scroll-reel.js"></script> */}
    {/* <script>
        document.addEventListener('DOMContentLoaded', () => {
            const tsData = [
                { quote: "Abdulla transformed our entire brand. His attention to detail is staggering. He completely understood the assignment from the very first consultation.", author: "Jane Doe, CEO", image: "assets/images/partho-5.webp" },
                { quote: "A master class in design aesthetic. I highly recommend him to anyone looking for premium service.", author: "John Smith, Founder", image: "assets/images/silent.webp" },
                { quote: "The highest quality design work we've seen in our industry. Outstanding execution and visionary layout formatting.", author: "Alice Wright, VP Marketing", image: "assets/images/mountain.webp" }
            ];
            new ScrollReelController(document.getElementById('testimonial-reel-container'), tsData);
        });
    </script> */}

    </>
  );
}

