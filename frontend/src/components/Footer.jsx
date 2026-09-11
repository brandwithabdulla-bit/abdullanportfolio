import React from 'react';

export default function Footer() {
  return (
    <footer className="modern-faizur-footer" style={{ backgroundColor: "#D6D1C6" }}>
        <div className="footer-card-wrapper">
            <div className="footer-card-inner">

                {/*  Top Section: 4 Columns  */}
                <div className="footer-top-grid">

                    {/*  Col 1: Bio Statement  */}
                    <div className="footer-col footer-col-bio">
                        <p className="footer-bio-text">
                            Abdulla is independent performance marketer and digital growth strategist
                        </p>
                    </div>

                    {/*  Col 2: Explore Links  */}
                    <div className="footer-col footer-col-links">
                        <span className="col-heading">Explore</span>
                        <ul className="footer-nav-list">
                            <li><a href="/about">Bio</a></li>
                            <li><a href="/#work">Work</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/*  Col 3: Follow Me  */}
                    <div className="footer-col footer-col-social">
                        <span className="col-heading">Follow me</span>
                        <div className="footer-social-grid">
                            <a href="https://x.com" target="_blank" className="social-item">
                                <span className="social-icon">𝕏</span> @brandwithabdulla
                            </a>
                            <a href="https://instagram.com" target="_blank" className="social-item">
                                <span className="social-icon-ig">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </span> @brandwithabdulla
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="social-item">
                                <span className="social-icon-li">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </span> @brandwithabdulla
                            </a>
                            <a href="https://youtube.com" target="_blank" className="social-item">
                                <span className="social-icon-yt">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </span> @brandwithabdulla
                            </a>
                        </div>
                    </div>

                    {/*  Col 4: Action Buttons  */}
                    <div className="footer-col footer-col-actions">
                        <a href="tel:+919000000000" className="footer-cta-block cta-call">
                            <div className="cta-header">
                                <span className="cta-title">Call Abdulla</span>
                                <span className="cta-badge-arrow red-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </div>
                            <span className="cta-subtitle text-red">Let's work together</span>
                        </a>

                        <a href="/#services" className="footer-cta-block cta-tools">
                            <div className="cta-header">
                                <span className="cta-title">Courses & Tools</span>
                                <span className="cta-badge-arrow dark-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </div>
                            <span className="cta-subtitle text-muted">Creative tools & mentoring</span>
                        </a>
                    </div>
                </div>

                {/*  Big Display Typography  */}
                <div className="footer-display-brand">
                    <span className="brand-huge-text">abdulla</span>
                </div>

                {/*  Footer Sub-Bar  */}
                <div className="footer-bottom-bar">
                    <div className="bottom-left">
                        <span>Abdulla ©2026</span>
                        <a href="/#privacy" className="footer-sub-link">Privacy Policy</a>
                    </div>
                    <div className="bottom-right">
                        <span id="footer-location-time">Kerala &nbsp; 10:24 PM &nbsp; 28°C ☁</span>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  );
}
