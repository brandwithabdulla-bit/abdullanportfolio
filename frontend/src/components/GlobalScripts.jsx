'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function GlobalScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-run animations on every route change
    if (typeof window.initMainScripts === 'function') {
      setTimeout(() => {
        window.initMainScripts();
        if (typeof window.initGlobalScroll === 'function') {
            window.initGlobalScroll();
        }
      }, 100);
    }
    
    // Equalize footer heights for Case Studies section dynamically if needed
    if (typeof window !== 'undefined' && typeof window.equalizeFooterHeights === 'function') {
        setTimeout(window.equalizeFooterHeights, 200);
    }
  }, [pathname]);

    return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/projects.js" strategy="beforeInteractive" />
      <Script src="/assets/js/drift-wall.js" strategy="beforeInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" onLoad={() => { 
          if(typeof window.initMainScripts === 'function') window.initMainScripts();
      }} />
      <Script src="https://unpkg.com/lenis@1.1.9/dist/lenis.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/global-scroll.js" strategy="afterInteractive" onLoad={() => {
          if(typeof window.initGlobalScroll === 'function') window.initGlobalScroll();
      }} />
      <Script src="/assets/js/scroll-reel.js" strategy="afterInteractive" />
    </>
  );
}
