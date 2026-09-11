import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../../public/assets/css/portfolio-page.css';

export default function Page() {
  return (
    <>
      <Header />
      
    

    {/*  1. HERO SECTION  */}
    <section className="pf-section pf-bg-dark" style={{ borderBottom: "none" }}>
      <div className="pf-section-inner" style={{ paddingTop: "160px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <div className="fade-in-up">
            <div className="pf-eyebrow">WEBSITES × SEO × DIGITAL GROWTH</div>
            <h1 className="pf-hero-title">Building Brands<br />That <span>Get Found</span></h1>
            <p className="pf-hero-desc">Professional web development and SEO services in Wayanad, Kerala — helping local businesses grow online with real results.</p>
            
            <div style={{ display: "flex", gap: "20px" }}>
                <a href="#contact" className="pf-btn-primary" style={{ color: "#fff" }}>Start Your Project →</a>
                <a href="#about" className="pf-btn-outline">Learn More</a>
            </div>

            <div className="pf-hero-stats fade-in-up delay-2">
                <div>
                    <div className="pf-stat-num">150+</div>
                    <div className="pf-stat-label">Websites Developed</div>
                </div>
                <div>
                    <div className="pf-stat-num">25+</div>
                    <div className="pf-stat-label">Websites Audited</div>
                </div>
                <div>
                    <div className="pf-stat-num">90%</div>
                    <div className="pf-stat-label">Performance Improved</div>
                </div>
                <div>
                    <div className="pf-stat-num">80+ LAKHS</div>
                    <div className="pf-stat-label">Profits Generated</div>
                </div>
            </div>
        </div>

        <div className="pf-hero-card fade-in-up delay-1">
            <div className="pf-hero-card-overlay"></div>
            <div className="pf-cursive-accent">Ideas<br />Websites<br />SEO<br />Growth</div>
            <div style={{ position: "absolute", bottom: "30px", right: "30px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)", padding: "15px 25px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "15px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="pf-icon-circle">⭐</div>
                <div style={{ fontSize: "0.9rem", maxWidth: "150px" }}>Turning local businesses into market leaders.</div>
            </div>
        </div>
      </div>
    </section>

    {/*  2. TRUST MARQUEE  */}
    <div className="fade-in-up pf-bg-light" style={{ padding: "40px 0", overflow: "hidden", position: "relative", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", background: "linear-gradient(to right, var(--pf-bg) 80%, transparent)", display: "flex", alignItems: "center", padding: "0 40px", zIndex: "10" }}>
            <span style={{ fontSize: "0.8rem", letterSpacing: "2px", color: "var(--pf-text-secondary)", whiteSpace: "nowrap", fontWeight: "500" }}>TRUSTED BY AMAZING BRANDS</span>
        </div>
        
        <div className="pf-marquee-track" style={{ marginLeft: "300px" }}>
            {/* Repeated Logo Set */}
            <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingRight: "80px" }}>
                <img src="/assets/logo/adzone.webp" alt="Adzone" style={{ height: "40px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/hexad.webp" alt="Hexad" style={{ height: "35px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/mountain-vibes.webp" alt="Mountain Vibes" style={{ height: "50px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/peralserence.webp" alt="Pearl Serene" style={{ height: "40px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/silent_1.webp" alt="Silent Slopes" style={{ height: "45px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingRight: "80px" }}>
                <img src="/assets/logo/adzone.webp" alt="Adzone" style={{ height: "40px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/hexad.webp" alt="Hexad" style={{ height: "35px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/mountain-vibes.webp" alt="Mountain Vibes" style={{ height: "50px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/peralserence.webp" alt="Pearl Serene" style={{ height: "40px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/silent_1.webp" alt="Silent Slopes" style={{ height: "45px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingRight: "80px" }}>
                <img src="/assets/logo/adzone.webp" alt="Adzone" style={{ height: "40px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/hexad.webp" alt="Hexad" style={{ height: "35px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/mountain-vibes.webp" alt="Mountain Vibes" style={{ height: "50px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/peralserence.webp" alt="Pearl Serene" style={{ height: "40px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
                <img src="/assets/logo/silent_1.webp" alt="Silent Slopes" style={{ height: "45px", mixBlendMode: "multiply", filter: "grayscale(1) opacity(0.6)", objectFit: "contain" }} />
            </div>
        </div>
    </div>

    {/*  3. ABOUT SECTION  */}
    <section id="about" className="pf-section pf-bg-light">
      <div className="pf-section-inner">
        <div className="pf-about-grid">
            <div className="fade-in-up">
                <div className="pf-eyebrow">ABOUT ME</div>
                <h2 className="pf-hero-title" style={{ fontSize: "3.5rem" }}>Hey Again 👋<br />Here's a Little About Me</h2>
                <p className="pf-hero-desc">I'm <strong>Muhammed Abdulla</strong>, a Web Developer and SEO Expert in Wayanad, Kerala. I create modern websites and SEO strategies that help businesses get more visibility, attract real customers, and grow online.</p>
                <p className="pf-hero-desc">Simply put, I build websites that look great, work efficiently, and rank higher on Google.</p>
                <a href="/about" className="pf-btn-primary" style={{ marginTop: "20px" }}>More About Me →</a>
            </div>

            <div className="fade-in-up delay-1" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                <div className="pf-card-list" style={{ background: "#fff", padding: "40px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.03)" }}>
                    <div className="pf-list-item">
                        <div className="pf-icon-circle">💼</div>
                        <div>
                            <div className="pf-stat-label">Experience</div>
                            <div style={{ fontWeight: "600" }}>3+ Years</div>
                        </div>
                    </div>
                    <div className="pf-list-item">
                        <div className="pf-icon-circle">📍</div>
                        <div>
                            <div className="pf-stat-label">Based in</div>
                            <div style={{ fontWeight: "600" }}>Wayanad, Kerala</div>
                        </div>
                    </div>
                    <div className="pf-list-item">
                        <div className="pf-icon-circle">🎯</div>
                        <div>
                            <div className="pf-stat-label">Focus</div>
                            <div style={{ fontWeight: "600" }}>Results Driven</div>
                        </div>
                    </div>
                    <div className="pf-list-item">
                        <div className="pf-icon-circle">⚡</div>
                        <div>
                            <div className="pf-stat-label">Available for</div>
                            <div style={{ fontWeight: "600" }}>New Projects</div>
                        </div>
                    </div>
                </div>
                
                <div style={{ fontFamily: "'Brush Script MT', cursive", color: "#444", fontSize: "2.2rem", lineHeight: "1.3" }}>
                    "Quality<br />Over Quantity.<br />Your Success<br />is My Priority."<br />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", letterSpacing: "2px", color: "#666", textTransform: "uppercase" }}>Muhammed Abdulla</span>
                </div>
            </div>
        </div>
      </div>
    </section>

    {/*  4. SERVICES GRID  */}
    <section className="pf-section pf-bg-dark-creme">
      <div className="pf-section-inner">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
                <div className="pf-eyebrow">WHAT I DO</div>
                <h2 className="pf-hero-title" style={{ fontSize: "3rem", margin: "0" }}>How I Can Help<br />Your Business Grow</h2>
            </div>
            <p className="pf-hero-desc" style={{ margin: "0", maxWidth: "400px", textAlign: "right" }}>Professional web development and SEO services designed to improve visibility, attract customers, and deliver measurable results.</p>
        </div>

        <div className="pf-services-grid">
            <div className="pf-service-card fade-in-up">
                <div className="pf-icon-circle" style={{ marginBottom: "40px" }}>&lt;/&gt;</div>
                <div className="pf-arrow-top-right">→</div>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>Custom Website<br />Creation</h3>
                <p className="pf-stat-label">Fast, modern and mobile-friendly websites tailored to your business needs.</p>
            </div>
            
            <div className="pf-service-card fade-in-up delay-1">
                <div className="pf-icon-circle" style={{ marginBottom: "40px" }}>🔍</div>
                <div className="pf-arrow-top-right">→</div>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>Search Engine<br />Optimization</h3>
                <p className="pf-stat-label">SEO strategies to help your website rank higher on Google.</p>
            </div>
            
            <div className="pf-service-card fade-in-up delay-2">
                <div className="pf-icon-circle" style={{ marginBottom: "40px" }}>💻</div>
                <div className="pf-arrow-top-right">→</div>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>Website Health<br />Checkups</h3>
                <p className="pf-stat-label">Detailed analysis to find and fix issues that affect your rankings.</p>
            </div>
            
            <div className="pf-service-card fade-in-up delay-3">
                <div className="pf-icon-circle" style={{ marginBottom: "40px" }}>📊</div>
                <div className="pf-arrow-top-right">→</div>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>Results Tracking<br />& Reports</h3>
                <p className="pf-stat-label">Monthly reports with clear insights and actionable recommendations.</p>
            </div>
        </div>
      </div>
    </section>

    {/*  5. FEATURED WORK  */}
    <section className="pf-section pf-bg-light">
      <div className="pf-section-inner">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
                <div className="pf-eyebrow">FEATURED WORK</div>
                <h2 className="pf-hero-title" style={{ fontSize: "3rem", margin: "0" }}>A Glimpse of<br />My Recent Projects</h2>
            </div>
            <p className="pf-hero-desc" style={{ margin: "0", maxWidth: "400px", textAlign: "right" }}>Real businesses. Real results. Explore some of the websites and campaigns I've worked on.</p>
        </div>
        
        <div style={{ marginTop: "60px", width: "100%", overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)" }}>
            <div className="pf-marquee-track" style={{ animationDuration: "40s" }}>
                {/* Set 1 */}
                <div style={{ display: "flex", gap: "30px", paddingRight: "30px" }}>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/amberwoods.png" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Amberwoods</h3>
                            <div className="pf-stat-label">Website + Marketing</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/pencil-hub.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Pencil Hub</h3>
                            <div className="pf-stat-label">Website Development</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/silent-slopes.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Silent Slopes</h3>
                            <div className="pf-stat-label">Website + SEO</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/skillage.png" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Skillage</h3>
                            <div className="pf-stat-label">UI/UX Design</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/mountain-vibes.webp" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Mountain Vibes</h3>
                            <div className="pf-stat-label">Performance Marketing</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/partho.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Partho</h3>
                            <div className="pf-stat-label">Branding + Web</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                </div>
                {/* Set 2 */}
                <div style={{ display: "flex", gap: "30px", paddingRight: "30px" }}>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/amberwoods.png" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Amberwoods</h3>
                            <div className="pf-stat-label">Website + Marketing</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/pencil-hub.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Pencil Hub</h3>
                            <div className="pf-stat-label">Website Development</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/silent-slopes.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Silent Slopes</h3>
                            <div className="pf-stat-label">Website + SEO</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/skillage.png" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Skillage</h3>
                            <div className="pf-stat-label">UI/UX Design</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/mountain-vibes.webp" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Mountain Vibes</h3>
                            <div className="pf-stat-label">Performance Marketing</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/partho.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Partho</h3>
                            <div className="pf-stat-label">Branding + Web</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                </div>
                {/* Set 3 */}
                <div style={{ display: "flex", gap: "30px", paddingRight: "30px" }}>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/amberwoods.png" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Amberwoods</h3>
                            <div className="pf-stat-label">Website + Marketing</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/pencil-hub.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Pencil Hub</h3>
                            <div className="pf-stat-label">Website Development</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/silent-slopes.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Silent Slopes</h3>
                            <div className="pf-stat-label">Website + SEO</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/skillage.png" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Skillage</h3>
                            <div className="pf-stat-label">UI/UX Design</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/mountain-vibes.webp" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Mountain Vibes</h3>
                            <div className="pf-stat-label">Performance Marketing</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                    <div className="pf-work-card" style={{ width: "380px", flexShrink: 0 }}>
                        <img src="/assets/projects1/partho.jpg" className="pf-work-img" />
                        <div className="pf-work-overlay">
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>Partho</h3>
                            <div className="pf-stat-label">Branding + Web</div>
                            <div className="pf-icon-circle" style={{ position: "absolute", bottom: "30px", right: "30px", border: "1px solid rgba(255,255,255,0.2)" }}>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                <style dangerouslySetInnerHTML={{ __html: `
        .pf-brand-card {
            border-radius: 12px; 
            aspect-ratio: 1.1/1; 
            display:flex; 
            flex-direction: column;
            align-items:center; justify-content:center; 
            text-align: center;
            font-weight: 700;
            font-size: 1.2rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            padding: 0;
            overflow: hidden;
            cursor: pointer;
            line-height: 1.2;
        }
        .pf-brand-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .pf-brand-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 15px; }
        @media(max-width: 900px) { .pf-brand-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } }
        @media(max-width: 600px) { .pf-brand-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }
        




/* True Bubble Heading Overlay CSS */
.hover-expand-card {
    border-radius: 50px !important;
    max-height: 75px !important; 
    width: max-content !important;
    max-width: 90% !important;
    padding: 15px 30px !important; 
    margin: 0 auto;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1) !important;
    cursor: pointer;
    background: #fff !important; 
    border: 1px solid rgba(0,0,0,0.1) !important;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
}
.hover-expand-card:hover {
    border-radius: 24px !important;
    max-height: 800px !important;
    max-width: 100% !important;
    width: 100% !important;
    padding: 32px !important;
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
    background: #F5F2EC !important;
}

/* Force the top row to display the badge and brand */
.hover-expand-card .ss-card-top {
    display: flex !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 30px !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 100% !important;
    width: max-content !important; 
}
.hover-expand-card:hover .ss-card-top {
    width: 100% !important;
}

/* Force explicitly visibility on the texts */
.hover-expand-card .ss-pill,
.hover-expand-card .ss-brand {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    margin: 0 !important;
    transform: none !important;
    color: #111 !important; /* Force color so it's impossible to be white */
    white-space: nowrap !important; /* Prevent text from disappearing due to wrapping */
}

/* Hide body in small state */
.hover-expand-card .ss-card-body {
    display: none !important; 
    opacity: 0;
    visibility: hidden;
}
/* Re-show body on hover */
.hover-expand-card:hover .ss-card-body {
    display: flex !important; 
    opacity: 1;
    visibility: visible;
    margin-top: 24px;
    animation: slideUpFade 0.4s ease forwards;
}

@keyframes slideUpFade {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}


/* Header Creme Theme Overrides */
.portfolio-creme-theme .floating-header .header-inner {
    background: rgba(255, 255, 255, 0.6) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03) !important;
}

.portfolio-creme-theme .floating-header .logo img {
    filter: invert(1) !important; /* Turns the white logo black */
    opacity: 0.8;
}

.portfolio-creme-theme .floating-header .main-nav a {
    color: #1A1A1A !important;
    font-weight: 500 !important;
    opacity: 0.7;
}

.portfolio-creme-theme .floating-header .main-nav a:hover {
    opacity: 1;
}

.portfolio-creme-theme .floating-header .nav-dot {
    background-color: var(--pf-accent) !important; /* Make it purple instead of green for the creme theme */
    box-shadow: 0 0 8px var(--pf-accent) !important;
}

.portfolio-creme-theme .floating-header .btn-nav-outline {
    color: #1A1A1A !important;
    border: 1px solid rgba(0, 0, 0, 0.15) !important;
}
.portfolio-creme-theme .floating-header .btn-nav-outline:hover {
    background: rgba(0, 0, 0, 0.05) !important;
}

` }} />


        <div style={{ marginTop: "80px", textAlign: "center" }}>
             <div className="pf-eyebrow">CONTACT</div>
             <h2 className="pf-hero-title" style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Featured <span style={{ color: "var(--pf-accent)" }}>BRANDS</span></h2>
             
             <div className="pf-brand-grid">
                 {/*  Row 1  */}
                 <div className="pf-brand-card" style={{ background: "#DEFE00", color: "#000" }}><img src="/assets/logo/2.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#223E50", color: "#fff" }}><img src="/assets/logo/2_1.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#fff", color: "#000", border: "1px solid #ddd" }}><img src="/assets/logo/adzone.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#B38031", color: "#fff" }}><img src="/assets/logo/adzone_1.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#1B7171", color: "#fff" }}><img src="/assets/logo/career-1.png" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#E1E0CD", color: "#000" }}><img src="/assets/logo/career-2.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>

                 {/*  Row 2  */}
                 <div className="pf-brand-card" style={{ background: "#0F52FF", color: "#fff" }}><img src="/assets/logo/career-3.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#fff", color: "#000", border: "1px solid #ddd" }}><img src="/assets/logo/career-4.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#85C02B", color: "#000" }}><img src="/assets/logo/career-5.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#12529E", color: "#fff" }}><img src="/assets/logo/career_1.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#07333C", color: "#fff" }}><img src="/assets/logo/ever_consutruction-1_1.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#1C0A09", color: "#fff" }}><img src="/assets/logo/hexad-2.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>

                 {/*  Row 3  */}
                 <div className="pf-brand-card" style={{ background: "#0F3A1D", color: "#fff" }}><img src="/assets/logo/hexad.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#BCBCBC", color: "#000" }}><img src="/assets/logo/mountain-vibes.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#0F284B", color: "#fff" }}><img src="/assets/logo/partho-5.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#4A110D", color: "#FACC80", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontStyle: "italic" }}><img src="/assets/logo/partho-6.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#0D1F38", color: "#fff" }}><img src="/assets/logo/pastel-1.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#fff", color: "#000", border: "1px solid #ddd" }}><img src="/assets/logo/pastel-10.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>

                 {/*  Row 4  */}
                 <div className="pf-brand-card" style={{ background: "#FAD2CC", color: "#6E38FF", fontFamily: "'Brush Script MT', cursive", fontSize: "2rem" }}><img src="/assets/logo/pastel-2.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#116FBC", color: "#fff", fontSize: "2rem", fontFamily: "'Times New Roman', serif" }}><img src="/assets/logo/pastel-3.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#13120E", color: "#78923F" }}><img src="/assets/logo/pastel-8_1.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#1C100C", color: "#3ABB69", fontSize: "1rem" }}><img src="/assets/logo/pastel-9.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#fff", color: "#000", border: "1px solid #ddd" }}><img src="/assets/logo/pastel.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
                 <div className="pf-brand-card" style={{ background: "#10392C", color: "#fff", fontFamily: "'Cormorant Garamond', serif", fontWeight: "400" }}><img src="/assets/logo/peralserence.webp" alt="brand" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} /></div>
             </div>
        </div>
      </div>
    </section>
        {/*  Recent Case Studies Section  */}
    <section id="work" className="case-studies-section" style={{ paddingTop: "20px", marginTop: "-60px", paddingBottom: "20px" }}>
      <div className="pf-section-inner">
        <div className="case-studies-container">
            {/*  Header  */}
            <div className="cs-header fade-in-up">
                <div className="cs-eyebrow">
                    <span className="cs-indicator"></span> WORK & IMPACT
                </div>
                <h2 className="cs-heading">Recent <span className="cs-highlight">Case Studies</span></h2>
                <p className="cs-description">A selection of websites, campaigns and digital work built to create measurable business growth.</p>
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
            
        </div>
      </div>
    </section>

    



{/* <script src="https://unpkg.com/lenis@1.1.9/dist/lenis.min.js"></script> */}
{/* <script src="assets/js/global-scroll.js"></script> */}
    
    <Footer />
    </>
  );
}