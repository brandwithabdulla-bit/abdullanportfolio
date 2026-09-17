'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../../public/assets/css/services-page.css';
import { Target, Search, MonitorPlay, Presentation, TrendingUp, PenTool } from 'lucide-react';

export default function ServicesPage() {
  
  const faqs = [
    { num: "01", q: "What does a performance marketer do?", a: "I focus on driving measurable results—like leads, sales, and bookings—using data-driven strategies across paid ads, SEO, and conversion optimization." },
    { num: "02", q: "How much do your services cost?", a: "Pricing depends on the scope of the project. I offer custom packages tailored to your specific business goals and budget requirements." },
    { num: "03", q: "How soon can I see results?", a: "While SEO takes 3-6 months to mature, paid ad campaigns often start generating qualified traffic and leads within the first two weeks." },
    { num: "04", q: "Which platforms do you work with?", a: "I specialize in Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, WordPress, and Next.js / modern web tech." },
    { num: "05", q: "Can you guarantee leads or sales?", a: "No professional can guarantee specific sales numbers due to market variables, but I do guarantee a data-driven process designed to maximize your ROI." },
    { num: "06", q: "What do you need from me to get started?", a: "I usually need access to your current analytics/ad accounts, brand assets, and a 30-minute discovery call to align on your goals." },
    { num: "07", q: "Do you create ad creatives as well?", a: "Yes, I offer end-to-end content production including ad graphics, video editing, and copywriting." },
    { num: "08", q: "Do you work with small businesses?", a: "Absolutely. I love helping small and local businesses scale into larger, more profitable organizations." },
    { num: "09", q: "Can you help with website optimization?", a: "Yes! Conversion Rate Optimization (CRO) is a huge part of my process. A great ad is useless if the website doesn't convert." },
    { num: "10", q: "Why should I hire you?", a: "Because I operate without agency bloat. You get direct communication, transparent reporting, and strategies focused strictly on your bottom line." }
  ];

  return (
    <div className="sp-wrapper">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="sp-section sp-hero">
        <div className="sp-hero-content fade-in-up">
          <div className="sp-eyebrow">SERVICES</div>
          <h1 className="sp-headline">
            Marketing that<br />
            <span className="purple-text">performs.</span>
          </h1>
          <p className="sp-hero-desc">
            Data-driven marketing, websites and digital strategies designed to turn attention into measurable business growth.
          </p>
          <div className="sp-hero-ctas">
            <a href="#contact" className="sp-btn-purple">Let&apos;s Work Together ↗</a>
            <Link href="/#work" className="sp-btn-ghost">View My Work ↓</Link>
          </div>
        </div>


      </section>

      {/* 2. What I Offer (Service Grid) */}
      <div style={{ backgroundColor: "#D6D1C6", width: "100%" }}>
      <section className="sp-section" id="services">
        <div className="sp-services-header fade-in-up">
            <div>
                <div className="sp-eyebrow">WHAT I OFFER</div>
                <h2 className="sp-headline" style={{ marginBottom: 0 }}>
                    Everything you<br />
                    need to <span className="purple-text">grow online.</span>
                </h2>
            </div>
            <div className="sp-services-header-right">
                <p>From strategy to execution, I provide end-to-end digital solutions designed to bring measurable results for your business.</p>
                <div className="sp-purple-label">06 SERVICES FOR REAL GROWTH</div>
            </div>
        </div>

        <div className="sp-grid-3x2 fade-in-up delay-1">
            
            <div className="sp-service-card">
                <div className="sp-card-header">
                    <div className="sp-icon-circle"><TrendingUp size={28} /></div>
                    <div className="sp-card-number">01</div>
                </div>
                <h3 className="sp-card-title">Performance Marketing</h3>
                <div className="sp-pill-group">
                    <span className="sp-pill">Google Ads</span>
                    <span className="sp-pill">Meta Ads</span>
                    <span className="sp-pill">Conversion Optimization</span>
                </div>
                <p className="sp-card-desc">I build and optimize paid campaigns focused on leads, sales, bookings and measurable ROI.</p>
                <a href="#contact" className="sp-explore-link">Explore Service ↗</a>
            </div>

            <div className="sp-service-card">
                <div className="sp-card-header">
                    <div className="sp-icon-circle"><Search size={28} /></div>
                    <div className="sp-card-number">02</div>
                </div>
                <h3 className="sp-card-title">SEO & Organic Growth</h3>
                <div className="sp-pill-group">
                    <span className="sp-pill">Technical SEO</span>
                    <span className="sp-pill">Content</span>
                    <span className="sp-pill">Local SEO</span>
                </div>
                <p className="sp-card-desc">Build sustainable visibility and bring qualified traffic to your business without relying only on ads.</p>
                <a href="#contact" className="sp-explore-link">Explore Service ↗</a>
            </div>

            <div className="sp-service-card">
                <div className="sp-card-header">
                    <div className="sp-icon-circle"><MonitorPlay size={28} /></div>
                    <div className="sp-card-number">03</div>
                </div>
                <h3 className="sp-card-title">Web Development</h3>
                <div className="sp-pill-group">
                    <span className="sp-pill">Websites</span>
                    <span className="sp-pill">Landing Pages</span>
                    <span className="sp-pill">E-commerce</span>
                </div>
                <p className="sp-card-desc">High-converting websites designed around your brand, audience and business objectives.</p>
                <a href="#contact" className="sp-explore-link">Explore Service ↗</a>
            </div>

            <div className="sp-service-card">
                <div className="sp-card-header">
                    <div className="sp-icon-circle"><Target size={28} /></div>
                    <div className="sp-card-number">04</div>
                </div>
                <h3 className="sp-card-title">Social Media Marketing</h3>
                <div className="sp-pill-group">
                    <span className="sp-pill">Strategy</span>
                    <span className="sp-pill">Content</span>
                    <span className="sp-pill">Growth</span>
                </div>
                <p className="sp-card-desc">Turn your social presence into a channel that attracts attention, builds trust and drives action.</p>
                <a href="#contact" className="sp-explore-link">Explore Service ↗</a>
            </div>

            <div className="sp-service-card">
                <div className="sp-card-header">
                    <div className="sp-icon-circle"><PenTool size={28} /></div>
                    <div className="sp-card-number">05</div>
                </div>
                <h3 className="sp-card-title">Content & Creative</h3>
                <div className="sp-pill-group">
                    <span className="sp-pill">Ad Creatives</span>
                    <span className="sp-pill">Copywriting</span>
                    <span className="sp-pill">Video</span>
                </div>
                <p className="sp-card-desc">Creative built around performance — not just aesthetics.</p>
                <a href="#contact" className="sp-explore-link">Explore Service ↗</a>
            </div>

            <div className="sp-service-card">
                <div className="sp-card-header">
                    <div className="sp-icon-circle"><Presentation size={28} /></div>
                    <div className="sp-card-number">06</div>
                </div>
                <h3 className="sp-card-title">Business Growth Strategy</h3>
                <div className="sp-pill-group">
                    <span className="sp-pill">Research</span>
                    <span className="sp-pill">Funnels</span>
                    <span className="sp-pill">Analytics</span>
                </div>
                <p className="sp-card-desc">Identify what&apos;s stopping your business from growing and build a clearer path from attention to conversion.</p>
                <a href="#contact" className="sp-explore-link">Explore Service ↗</a>
            </div>

        </div>
      </section>
      </div>

      {/* 3. My Process */}
      <section className="sp-section">
        <div className="sp-process-header fade-in-up">
            <div>
                <div className="sp-eyebrow">MY PROCESS</div>
                <h2 className="sp-headline" style={{ marginBottom: 0 }}>
                    A clear process<br />
                    for <span className="purple-text">real results.</span>
                </h2>
            </div>
            <div className="sp-services-header-right" style={{ alignItems: 'flex-start' }}>
                <p style={{ textAlign: 'left' }}>A structured, data-driven approach to help your business grow.</p>
                <div className="sp-purple-label" style={{ alignSelf: 'flex-end', marginTop: '-40px' }}>FROM STRATEGY TO SCALE</div>
            </div>
        </div>

        <div className="sp-timeline fade-in-up delay-1">
            <div className="sp-timeline-item">
                <div className="sp-ti-circle">01</div>
                <h4 className="sp-ti-title">Discover</h4>
                <p className="sp-ti-desc">Understand your goals, audience and market.</p>
            </div>
            <div className="sp-timeline-item">
                <div className="sp-ti-circle">02</div>
                <h4 className="sp-ti-title">Strategize</h4>
                <p className="sp-ti-desc">Build a data-backed plan tailored to your business.</p>
            </div>
            <div className="sp-timeline-item">
                <div className="sp-ti-circle">03</div>
                <h4 className="sp-ti-title">Build</h4>
                <p className="sp-ti-desc">Set up campaigns, creatives and tracking systems.</p>
            </div>
            <div className="sp-timeline-item">
                <div className="sp-ti-circle">04</div>
                <h4 className="sp-ti-title">Launch</h4>
                <p className="sp-ti-desc">Go live across the right platforms.</p>
            </div>
            <div className="sp-timeline-item">
                <div className="sp-ti-circle">05</div>
                <h4 className="sp-ti-title">Optimize</h4>
                <p className="sp-ti-desc">Test, analyze and improve performance continuously.</p>
            </div>
            <div className="sp-timeline-item">
                <div className="sp-ti-circle">06</div>
                <h4 className="sp-ti-title">Scale</h4>
                <p className="sp-ti-desc">Turn winning campaigns into long-term growth.</p>
            </div>
        </div>
      </section>

      {/* 4. Impact */}
      <section className="sp-section" style={{ paddingTop: '0' }}>
        <div className="sp-eyebrow fade-in-up">IMPACT</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <h2 className="sp-headline fade-in-up" style={{ marginBottom: 0 }}>
                Numbers<br />
                that <span className="purple-text">matter.</span>
            </h2>
            
            <div className="sp-impact-grid fade-in-up delay-1">
                <div className="sp-impact-card">
                    <div className="sp-impact-val">50+</div>
                    <div className="sp-impact-lbl">Projects Completed</div>
                </div>
                <div className="sp-impact-card">
                    <div className="sp-impact-val">30+</div>
                    <div className="sp-impact-lbl">Happy Clients</div>
                </div>
                <div className="sp-impact-card">
                    <div className="sp-impact-val">4+</div>
                    <div className="sp-impact-lbl">Years Experience</div>
                </div>
                <div className="sp-impact-card">
                    <div className="sp-impact-val">100%</div>
                    <div className="sp-impact-lbl">Focus on Results</div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Case Studies */}
      <div style={{ backgroundColor: "#D6D1C6", width: "100%" }}>
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
      </div>

      {/* 6. FAQ Section */}
      <section className="sp-section">
        <div className="sp-faq-section fade-in-up">
            <div className="sp-faq-left">
                <div className="sp-eyebrow">FAQ</div>
                <h2 className="sp-headline">
                    Got<br />
                    <span className="purple-text">questions?</span>
                </h2>
            </div>
            
            <div className="sp-faq-right">
                {faqs.map((faq, i) => (
                    <details key={i} className="sp-faq-item">
                        <summary className="sp-faq-summary">
                            <span className="sp-faq-num">{faq.num}</span>
                            <span className="sp-faq-title">{faq.q}</span>
                            <span className="sp-faq-icon">+</span>
                        </summary>
                        <div className="sp-faq-content">{faq.a}</div>
                    </details>
                ))}
            </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <div style={{ backgroundColor: "#D6D1C6", width: "100%" }}>
      <section className="sp-cta-section fade-in-up">
        <div className="sp-cta-left">
            <div className="sp-eyebrow">LET&apos;S TALK</div>
            <h2>Ready to make<br/>your marketing <span className="purple-text">perform?</span></h2>
        </div>
        <div className="sp-cta-right">
            <p className="sp-cta-p">Tell me what you&apos;re building.<br/>Let&apos;s figure out how to grow it — together.</p>
            <a href="#contact" className="sp-btn-purple">Let&apos;s Work Together ↗</a>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
}
