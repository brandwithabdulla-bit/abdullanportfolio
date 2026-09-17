"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname() || '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`floating-header ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-inner fade-in-down">
          <Link 
            href="/" 
            className="logo"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            aria-label="Brand With Abdulla Home"
          >
            <img className="header-logo-img" src="/assets/images/abdhu-full-type-1024x576_1.webp" alt="Brand With Abdulla Logo" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="main-nav">
            <Link href="/#home">Home {pathname === '/' && <span className="nav-dot"></span>}</Link>
            <Link href="/about">About {pathname === '/about' && <span className="nav-dot"></span>}</Link>
            <Link href="/services">Services {pathname === '/services' && <span className="nav-dot"></span>}</Link>
            <Link href="/portfolio">Portfolio {pathname === '/portfolio' && <span className="nav-dot"></span>}</Link>
            <Link href="/blog">Blog {pathname.startsWith('/blog') && <span className="nav-dot"></span>}</Link>
          </nav>
          
          <div className="header-actions">
            <Link href="#contact" className="btn btn-nav-outline">
              Let&apos;s Talk 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link href="/mentoring" className="btn btn-nav-purple">
              Join 1:1 Mentoring 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav-links">
          <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          
          <div className="mobile-nav-actions">
              <Link href="#contact" className="btn btn-nav-outline" onClick={() => setIsMobileMenuOpen(false)}>Let&apos;s Talk</Link>
              <Link href="/mentoring" className="btn btn-nav-purple" onClick={() => setIsMobileMenuOpen(false)}>Join 1:1 Mentoring</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
