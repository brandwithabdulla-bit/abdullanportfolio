'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../../public/assets/css/about-page.css';
// import HowItWorks from '@/components/ui/how-it-works';
import { Target, Search, MonitorPlay, Presentation, TrendingUp } from 'lucide-react';
import { SkillShowcase } from '@/components/ui/skill-showcase';

export default function Page() {
  useEffect(() => {
    // Parallax floating cards (Micro-interaction)
    const parallaxHandler = (e) => {
        const parallaxItems = document.querySelectorAll('.parallax-item');
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        parallaxItems.forEach(item => {
            const speed = parseFloat(item.getAttribute('data-speed'));
            item.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
        });
    };
    document.addEventListener('mousemove', parallaxHandler);

    // Timeline SVG Tracking Arrow Logic
    function initTimelineTracker() {
        const wrap = document.querySelector('.ap-snake-wrap');
        if (!wrap) return;
        const wrapRect = wrap.getBoundingClientRect();
        if (wrapRect.height === 0) return;
        
        const items = document.querySelectorAll('.ap-snake-item');
        const isMobile = window.innerWidth <= 768;
        let svgStr = '';
        
        if (isMobile) {
            let leftOffset = 0;
            if(items.length > 0) {
                leftOffset = items[0].getBoundingClientRect().left - wrapRect.left + 1;
            }
            svgStr = `M ${leftOffset},0 L ${leftOffset},${wrapRect.height}`;
        } else {
            let centerX = wrapRect.width / 2;
            svgStr = `M ${centerX},0 `;
            
            items.forEach((item, index) => {
                let rect = item.getBoundingClientRect();
                let ot = rect.top - wrapRect.top;
                let oh = rect.height - 2; 
                let left = rect.left - wrapRect.left;
                let right = left + rect.width;
                let r = Math.min(140, oh / 2);
                
                if (index % 2 === 0) {
                    svgStr += `L ${left},${ot} L ${right - r},${ot} A ${r},${r} 0 0,1 ${right},${ot + r} L ${right},${ot + oh - r} A ${r},${r} 0 0,1 ${right - r},${ot + oh} L ${left},${ot + oh} `;
                } else {
                    svgStr += `L ${right},${ot} L ${left + r},${ot} A ${r},${r} 0 0,0 ${left},${ot + r} L ${left},${ot + oh - r} A ${r},${r} 0 0,0 ${left + r},${ot + oh} L ${right},${ot + oh} `;
                }
            });
        }
        
        let svgNode = document.getElementById('ap-tracking-svg');
        let pathNode = document.getElementById('ap-tracking-path');
        let arrowNode = document.getElementById('ap-tracking-arrow');
        
        if (!svgNode) {
            svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgNode.setAttribute('id', 'ap-tracking-svg');
            svgNode.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;';
            
            pathNode = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathNode.setAttribute('id', 'ap-tracking-path');
            pathNode.setAttribute('fill', 'none');
            pathNode.setAttribute('stroke', 'transparent'); 
            pathNode.setAttribute('strokeWidth', '2');
            svgNode.appendChild(pathNode);
            wrap.appendChild(svgNode);
            
            arrowNode = document.createElement('div');
            arrowNode.setAttribute('id', 'ap-tracking-arrow');
            arrowNode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24"><path d="M9 6l6 6-6 6z"/></svg>';
            wrap.appendChild(arrowNode);
        }
        pathNode.setAttribute('d', svgStr);
    }

    function updateTimelineScroll() {
        const wrap = document.querySelector('.ap-snake-wrap');
        const path = document.getElementById('ap-tracking-path');
        const arrow = document.getElementById('ap-tracking-arrow');
        if (!wrap || !path || !arrow) return;
        
        const rect = wrap.getBoundingClientRect();
        const triggerY = window.innerHeight / 2;
        let progress = Math.max(0, Math.min(1, (triggerY - rect.top) / rect.height));
        
        arrow.style.opacity = (progress <= 0 || progress >= 1) ? '0' : '1';
        
        const len = path.getTotalLength();
        const currentTotal = progress * len;
        const pt = path.getPointAtLength(currentTotal);
        
        const ptNext = path.getPointAtLength(Math.min(len, currentTotal + 5));
        let angle = Math.atan2(ptNext.y - pt.y, ptNext.x - pt.x) * (180 / Math.PI);
        
        arrow.style.left = pt.x + 'px';
        arrow.style.top = pt.y + 'px';
        arrow.style.transform = window.innerWidth <= 768 ? `translate(-50%, -50%) rotate(90deg)` : `translate(-50%, -50%) rotate(${angle}deg)`;
        
        const activeRadius = window.innerWidth <= 768 ? 20 : 60;
        let foundActive = false;
        
        document.querySelectorAll('.ap-snake-item').forEach((item) => {
            let node = item.querySelector('.ap-snake-node');
            if (!node) return;
            let Irect = item.getBoundingClientRect();
            let targetY = (Irect.top - rect.top) + (Irect.height / 2);
            
            if (Math.abs(pt.y - targetY) <= activeRadius) {
                node.classList.add('ap-node-active');
                foundActive = true;
            } else {
                node.classList.remove('ap-node-active');
            }
        });
        
        foundActive ? arrow.classList.add('ap-arrow-active') : arrow.classList.remove('ap-arrow-active');
    }

    initTimelineTracker();
    updateTimelineScroll();

    window.addEventListener('resize', initTimelineTracker);
    window.addEventListener('resize', updateTimelineScroll);
    window.addEventListener('scroll', updateTimelineScroll);
    
    let ro = null;
    if (typeof ResizeObserver !== 'undefined') {
        ro = new ResizeObserver(() => {
            initTimelineTracker();
            updateTimelineScroll();
        });
        const wrapToObserve = document.querySelector('.ap-snake-wrap');
        if (wrapToObserve) ro.observe(wrapToObserve);
    }

    return () => {
        document.removeEventListener('mousemove', parallaxHandler);
        window.removeEventListener('resize', initTimelineTracker);
        window.removeEventListener('resize', updateTimelineScroll);
        window.removeEventListener('scroll', updateTimelineScroll);
        if (ro) ro.disconnect();
    };
  }, []);
  return (
    <>
      <Header />
      

    {/*  Header  */}
    

    <div className="ap-wrapper">
        {/*  1. Hero Section (DARK)  */}
        <section className="ap-hero">
            <div className="ap-hero-container fade-in-up">
                
                {/*  Left Details  */}
                <div className="ap-hero-content">
                    <span className="ap-hero-label"><span className="dot-green pulsing-dot"></span> PERFORMANCE MARKETER & STRATEGIST</span>
                    <h1 className="ap-hero-headline">Driving Growth,<br />Scaling Brands.</h1>
                    <p className="ap-hero-desc">Welcome to my corner of the digital world! I’m Muhammed Abdulla, a Digital Marketing Strategist based in Wayanad, Kerala. What started as curiosity about how websites work turned into a career I genuinely enjoy. I help businesses grow online through smart strategies and solid execution.</p>
                    
                    <div className="ap-hero-cta-box">
                        <div className="ap-email-capture">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn-join">Book Consult &rarr;</button>
                        </div>
                    </div>

                    <div className="ap-social-proof">
                        <div className="ap-avatars">
                            <img src="/assets/images/partho-5.webp" alt="Client" />
                            <img src="/assets/images/silent.webp" alt="Client" />
                            <img src="/assets/images/mountain.webp" alt="Client" />
                        </div>
                        <span className="ap-proof-text">Trusted by <strong>50+ businesses</strong><br />driving real impact.</span>
                    </div>

                    <div className="ap-hero-stats">
                        <div className="ap-stat-item">
                            <span className="val text-green">50+</span>
                            <span className="lbl">Projects Delivered</span>
                        </div>
                        <div className="ap-stat-item">
                            <span className="val">30+</span>
                            <span className="lbl">Happy Clients</span>
                        </div>
                        <div className="ap-stat-item">
                            <span className="val text-purple">4+</span>
                            <span className="lbl">Years Experience</span>
                        </div>
                        <div className="ap-stat-item">
                            <span className="val">100%</span>
                            <span className="lbl">Client Satisfaction</span>
                        </div>
                    </div>
                </div>

                {/*  Right Visual  */}
                <div className="ap-hero-visual fade-in-up delay-1" style={{ backgroundImage: "url('/assets/images/portrait.webp')", backgroundPosition: "center top" }}>
                    {/*  Floating Cards  */}
                    <div className="ap-floating-card ap-fc-1 parallax-item" data-speed="20">
                        <img src="/assets/images/about/strategy_card_1788516554454.png" alt="Strategy" />
                        <div className="ap-float-text">
                            <h4>Performance Marketing</h4>
                            <p>Scaling ads, driving ROI.</p>
                        </div>
                    </div>
                    <div className="ap-floating-card ap-fc-2 parallax-item" data-speed="-15">
                        <img src="/assets/images/about/optimization_card_1788516586262.png" alt="Optimization" />
                        <div className="ap-float-text">
                            <h4>SEO Optimization</h4>
                            <p>Dominate search rankings.</p>
                        </div>
                    </div>
                    <div className="ap-floating-card ap-fc-3 parallax-item" data-speed="10">
                        <img src="/assets/images/about/brand_growth_1788516629909.png" alt="Brand Growth" />
                        <div className="ap-float-text">
                            <h4>Brand Development</h4>
                            <p>Crafting unique identities.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/*  2. Mission Section (LIGHT)  */}
        <section className="ap-mission">
            <div className="ap-mission-container fade-in-up">
                
                <div className="ap-mission-content">
                    <span className="ap-mission-label"><div className="dot"></div> MY MISSION</span>
                    <h2 className="ap-mission-headline">Building Scalable,<br />ROI-Driven<br /><span className="inline-icon-wrapper" style={{ background: "#6E38FF", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "68px", height: "68px", borderRadius: "50%", verticalAlign: "bottom", margin: "0 8px 8px 0", boxShadow: "0 8px 24px rgba(110,56,255,0.4)", transform: "translateY(-4px)" }}><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></span> Campaigns.</h2>
                    <p className="ap-mission-desc">Through data analysis, creative content, and unyielding execution, I empower brands to completely dominate their digital landscape and create lasting brand equity.</p>
                    <div className="ap-mission-ctas">
                        <a href="/portfolio" className="ap-btn-dark">Explore Projects &rarr;</a>
                        <a href="#approach" className="ap-btn-light">Learn More</a>
                    </div>
                </div>

                <div className="ap-mission-cards">
                    <div className="ap-ms-card fade-in-up delay-1">
                        <img src="/assets/mentors/Untitled-design-12.webp" alt="Communication" />
                        <div className="ap-ms-card-content">
                            <div className="ap-icon-circle">⚲</div>
                            <h3>Direct Communication</h3>
                            <p>100% direct communication without agency layers.</p>
                        </div>
                    </div>
                    <div className="ap-ms-card fade-in-up delay-2">
                        <img src="/assets/mentors/Untitled-design-18.webp" alt="Transparency" />
                        <div className="ap-ms-card-content">
                            <div className="ap-icon-circle">⚡</div>
                            <h3>Transparent Reporting</h3>
                            <p>Reporting based on real customer sign-ups & sales.</p>
                        </div>
                    </div>
                    <div className="ap-ms-card fade-in-up delay-3">
                        <img src="/assets/mentors/Untitled-design-19.webp" alt="Performance" />
                        <div className="ap-ms-card-content">
                            <div className="ap-icon-circle">◓</div>
                            <h3>Fast SEO & Custom Ads</h3>
                            <p>Fast-loading assets and customized ad targeting budgets.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/*  3. Trusted By (LIGHT CREME) using inline styling  */}
        <section className="client-logos-section" style={{ backgroundColor: "#D6D1C6", padding: "60px 0", overflow: "hidden" }}>
            <div className="clients-container fade-in-up" style={{ maxWidth: "100vw", margin: "0 auto", textAlign: "center" }}>
                <p className="clients-label-large" style={{ color: "rgba(0,0,0,0.5)", letterSpacing: "2px" }}>TRUSTED BY 30+ CLIENTS</p>
                
                <div className="ap-marquee-wrapper">
                    <div className="ap-marquee-track">
                        {/*  Set 1  */}
                        <img src="/assets/images/career-1.png" alt="client" />
                        <img src="/assets/images/career-2.webp" alt="client" />
                        <img src="/assets/images/career-3.webp" alt="client" />
                        <img src="/assets/images/career-4.webp" alt="client" />
                        <img src="/assets/images/career-5.webp" alt="client" />
                        <img src="/assets/images/career.webp" alt="client" />
                        {/*  Set 2  */}
                        <img src="/assets/images/career-1.png" alt="client" />
                        <img src="/assets/images/career-2.webp" alt="client" />
                        <img src="/assets/images/career-3.webp" alt="client" />
                        <img src="/assets/images/career-4.webp" alt="client" />
                        <img src="/assets/images/career-5.webp" alt="client" />
                        <img src="/assets/images/career.webp" alt="client" />
                        {/*  Set 3  */}
                        <img src="/assets/images/career-1.png" alt="client" />
                        <img src="/assets/images/career-2.webp" alt="client" />
                        <img src="/assets/images/career-3.webp" alt="client" />
                        <img src="/assets/images/career-4.webp" alt="client" />
                        <img src="/assets/images/career-5.webp" alt="client" />
                        <img src="/assets/images/career.webp" alt="client" />
                        {/*  Set 4  */}
                        <img src="/assets/images/career-1.png" alt="client" />
                        <img src="/assets/images/career-2.webp" alt="client" />
                        <img src="/assets/images/career-3.webp" alt="client" />
                        <img src="/assets/images/career-4.webp" alt="client" />
                        <img src="/assets/images/career-5.webp" alt="client" />
                        <img src="/assets/images/career.webp" alt="client" />
                    </div>
                </div>

            </div>
        </section>

        {/*  3.5 Timeline Section (DARK CREME)  */}
        <section className="ap-timeline-section" style={{ position: "relative" }}>
            
            {/*  Floating Doodles  */}
            <img src="/assets/images/about/doodle_target_growth_1788519571194.png" className="ap-doodle doodle-1 parallax-item" data-speed="15" alt="Target" />
            <img src="/assets/images/about/doodle_arrow_loop_1788519419767.png" className="ap-doodle doodle-2 parallax-item" data-speed="-10" alt="Arrow" />
            <img src="/assets/images/about/doodle_lightbulb_1788519586086.png" className="ap-doodle doodle-3 parallax-item" data-speed="12" alt="Lightbulb" />
            <img src="/assets/images/about/doodle_stopwatch_1788519433736.png" className="ap-doodle doodle-4 parallax-item" data-speed="-8" alt="Stopwatch" />

            <div className="ap-timeline-container fade-in-up" style={{ position: "relative", zIndex: "5" }}>
                
                <div className="ap-timeline-header">
                    <span className="ap-mission-label" style={{ color: "var(--color-accent-green)" }}><div className="dot" style={{ background: "var(--color-accent-green)" }}></div> MY JOURNEY</span>
                    <h2 style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>Experience & <span className="inline-icon-wrapper" style={{ background: "#FCD34D", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "50%", verticalAlign: "middle", margin: "0 12px", boxShadow: "0 5px 15px rgba(252,211,77,0.3)" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></span> Education</h2>
                </div>

                <div className="ap-edu-block">
                    <h3>B.Com CA – University of Calicut</h3>
                    <p>I built a strong foundation in commerce and accounting principles. To stay relevant in the evolving digital field, I developed my digital marketing skills through consistent self-learning and practical experience.</p>
                </div>

                <div className="ap-snake-wrap">
                    
                    <div className="ap-snake-item">
                        <div className="ap-snake-node">01</div>
                        <div className="ap-snake-content">
                            <span className="date">June 2025 – Present</span>
                            <h4 className="role">Performance Marketer</h4>
                            <p className="company">Skillage Academy</p>
                        </div>
                    </div>

                    <div className="ap-snake-item">
                        <div className="ap-snake-node">02</div>
                        <div className="ap-snake-content">
                            <span className="date">April 2025 – Present</span>
                            <h4 className="role">Technical Head</h4>
                            <p className="company">Skillage Academy</p>
                        </div>
                    </div>

                    <div className="ap-snake-item">
                        <div className="ap-snake-node">03</div>
                        <div className="ap-snake-content">
                            <span className="date">April 2025 – Present</span>
                            <h4 className="role">Web Developer</h4>
                            <p className="company">Windage Productions</p>
                        </div>
                    </div>

                    <div className="ap-snake-item">
                        <div className="ap-snake-node">04</div>
                        <div className="ap-snake-content">
                            <span className="date">February 2025 – Present</span>
                            <h4 className="role">Production Team Lead</h4>
                            <p className="company">Adzone! Productions</p>
                        </div>
                    </div>

                    <div className="ap-snake-item">
                        <div className="ap-snake-node">05</div>
                        <div className="ap-snake-content">
                            <span className="date">October 2024</span>
                            <h4 className="role">Content Creator</h4>
                            <p className="company">CGAC, Govt. of Kerala (Disha Expo)</p>
                        </div>
                    </div>

                    <div className="ap-snake-item">
                        <div className="ap-snake-node">06</div>
                        <div className="ap-snake-content">
                            <span className="date">Mar 2023 – Dec 2024</span>
                            <h4 className="role">Enrollment Supervisor</h4>
                            <p className="company">UIDAI, Wayanad</p>
                        </div>
                    </div>

                    <div className="ap-snake-item">
                        <div className="ap-snake-node">07</div>
                        <div className="ap-snake-content">
                            <span className="date">Feb 2022 – Jan 2025</span>
                            <h4 className="role">CRM Manager</h4>
                            <p className="company">Fat E Solutions</p>
                        </div>
                    </div>

                    <div className="ap-snake-item">
                        <div className="ap-snake-node">08</div>
                        <div className="ap-snake-content">
                            <span className="date">Feb 2022 – Mar 2023</span>
                            <h4 className="role">Data Entry Specialist</h4>
                            <p className="company">Akshaya E Seva</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        {/*  4. Approach / Initiatives (DARK CREME MINIMAL)  */}
        <section id="approach" className="relative border-t z-10" style={{ backgroundColor: "#D6D1C6", borderColor: "#c2bcac", paddingTop: "140px", paddingBottom: "140px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "center", width: "100%" }}>
                <SkillShowcase />
            </div>
        </section>

    </div>

    <Footer />

        {/* Scripts have been moved to useEffect above */}
    </>
  );
}