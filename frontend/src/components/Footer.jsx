import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="modern-faizur-footer" style={{ backgroundColor: "#E6DFD3" }}>
        <div className="footer-card-wrapper">
            <div className="footer-card-inner">

                {/*  Top Section: 4 Columns  */}
                <div className="footer-top-grid">

                    {/*  Col 1: Bio Statement  */}
                    <div className="footer-col footer-col-bio">
                        <p className="footer-bio-text">
                            Abdulla is an independent Performance Marketer in Kerala
                        </p>
                        <a href="mailto:info@brandwithabdulla.com" className="footer-email-link">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span>info@brandwithabdulla.com</span>
                        </a>
                    </div>

                    {/*  Col 2: Explore Links  */}
                    <div className="footer-col footer-col-links">
                        <span className="col-heading">Explore</span>
                        <ul className="footer-nav-list">
                            <li><Link href="/about">Bio</Link></li>
                            <li><Link href="/#work">Work</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/mentoring">1:1 Mentoring</Link></li>
                            <li><Link href="/#contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/*  Col 3: Follow Me  */}
                    <div className="footer-col footer-col-social">
                        <span className="col-heading">Follow me</span>
                        <div className="footer-social-grid">
                            <a href="https://www.instagram.com/brandwithabdulla/" target="_blank" rel="noopener noreferrer" className="social-item">
                                <span className="social-icon-ig">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </span> @brandwithabdulla
                            </a>
                            <a href="https://www.linkedin.com/in/abdullank/" target="_blank" rel="noopener noreferrer" className="social-item">
                                <span className="social-icon-li">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </span> LinkedIn
                            </a>
                            <a href="https://x.com/brandwithabdul" target="_blank" rel="noopener noreferrer" className="social-item">
                                <span className="social-icon">𝕏</span> @brandwithabdulla
                            </a>
                            <a href="https://youtube.com/@brandwithabdulla" target="_blank" rel="noopener noreferrer" className="social-item">
                                <span className="social-icon-yt">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </span> YouTube
                            </a>
                        </div>
                    </div>

                    {/*  Col 4: Action Buttons  */}
                    <div className="footer-col footer-col-actions">
                        <a href="tel:+916238501836" className="footer-cta-block cta-call" aria-label="Call Abdulla at +91 6238 501 836">
                            <div className="cta-header">
                                <span className="cta-title">Call Abdulla</span>
                                <span className="cta-badge-arrow red-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </div>
                            <span className="cta-subtitle text-red">+91 6238 501 836</span>
                        </a>

                        <a href="/mentoring" className="footer-cta-block cta-tools" aria-label="Join 1:1 Mentoring">
                            <div className="cta-header">
                                <span className="cta-title">Course & 1:1 Mentoring</span>
                                <span className="cta-badge-arrow dark-arrow">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </div>
                            <span className="cta-subtitle text-muted">Join 1:1 mentoring session</span>
                        </a>
                    </div>
                </div>

                {/*  Big Display Typography  */}
                <div className="footer-display-brand">
                    <Link href="/" aria-label="Brand With Abdulla Home" style={{ textDecoration: "none", color: "inherit", display: "inline-block", cursor: "pointer" }}>
                        <span className="brand-huge-text">abdulla</span>
                    </Link>
                </div>

                {/*  Footer Sub-Bar  */}
                <div className="footer-bottom-bar">
                    <div className="bottom-left">
                        <span>Abdulla ©2026</span>
                        <Link href="/#privacy" className="footer-sub-link">Privacy Policy</Link>
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
