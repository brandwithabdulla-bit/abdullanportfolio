import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="floating-header fade-in-down">
      <div className="header-inner">
        <div className="logo">
          <Link href="/">
            <img src="/assets/images/abdhu-full-type-1024x576_1.webp" alt="Brand With Abdulla Logo" />
          </Link>
        </div>
        <nav className="main-nav">
          <Link href="/#home">Home <span className="nav-dot"></span></Link>
          <Link href="/about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link href="/#contact" className="btn btn-nav-outline">
            Let&apos;s Talk 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
          <Link href="/#mentoring" className="btn btn-nav-purple">
            Join 1:1 Mentoring 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
        <button className="mobile-toggle">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
