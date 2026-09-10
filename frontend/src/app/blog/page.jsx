import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import '../../../public/assets/css/blog-page.css';

export default function Page() {
  return (
    <>
      <Header />
      
    

    
    <div className="blog-page-wrap">
        <h1 className="blog-page-title">Blogs</h1>
        
        <div className="blog-page-grid">
            {/*  Card 1  */}
            <Link href="/blog/freelancing-2026" className="blog-card-ext fade-in-up">
                <img src="/assets/images/Black-and-Yellow-Bold-Illustrative-Social-Media-Growth-YouTube-Thumbnail.webp" alt="Freelancing" />
                <div className="blog-card-content">
                    <h3>How to Start Freelancing in 2026 – Everything You Need to Know</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 09/07/2026</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>
            
            {/*  Card 2  */}
            <Link href="/blog/content-creator-2026" className="blog-card-ext fade-in-up delay-1">
                <img src="/assets/images/Green-and-black-Brush-Strokes-Creative-YouTube-Thumbnail-1.webp" alt="Content Creator" />
                <div className="blog-card-content">
                    <h3>How to Become a Content Creator in 2026</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 16/05/2026</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>

            {/*  Card 3  */}
            <Link href="/blog/expert-in-wayanad" className="blog-card-ext fade-in-up delay-2">
                <img src="/assets/images/Green-Passive-Income-Ideas-YouTube-Thumbnail-1.webp" alt="Digital Marketing Expert" />
                <div className="blog-card-content">
                    <h3>Best Digital Marketing Expert in Wayanad</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 06/08/2025</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>
            
            {/*  Card 4  */}
            <Link href="/blog/agency-in-wayanad" className="blog-card-ext fade-in-up">
                <img src="/assets/images/Yellow-and-Black-Personal-Branding-Masterclass-YouTube-Thumbnail.webp" alt="Brand Strategy" />
                <div className="blog-card-content">
                    <h3>Brand Strategy: How to Create an Impactful Branding</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 31/07/2025</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>

            {/*  Card 5  */}
            <Link href="/blog/local-seo-wayanad" className="blog-card-ext fade-in-up delay-1">
                <img src="/assets/images/google-ux-design-professional-theuncoder-1.webp" alt="Google Helps Local Business" />
                <div className="blog-card-content">
                    <h3>How Google Helps Local Businesses in Wayanad</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 30/07/2025</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>
            
            {/*  Card 6  */}
            <Link href="/blog/consultant-in-wayanad" className="blog-card-ext fade-in-up delay-2">
                <img src="/assets/images/Blue-And-Purple-Gradient-Modern-The-Importance-Of-Content-Marketing-YouTube-Thumbnail.webp" alt="Digital Marketing Future" />
                <div className="blog-card-content">
                    <h3>Scope of Digital Marketing in the Future</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 30/06/2025</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>

            {/*  Card 7  */}
            <Link href="/blog/seo-expert-in-wayanad" className="blog-card-ext fade-in-up">
                <img src="/assets/images/Teal-Illustrated-Similarities-and-Differences-Math-Presentation.webp" alt="SEO vs SEM" />
                <div className="blog-card-content">
                    <h3>SEO Expert in Wayanad Shares: What is the Difference Betwe...</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 28/06/2025</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>

            {/*  Card 8  */}
            <Link href="/blog/freelance-digital-marketer-wayanad" className="blog-card-ext fade-in-up delay-1">
                <img src="/assets/images/Untitled-design-20.webp" alt="Freelance Digital Marketer" />
                <div className="blog-card-content">
                    <h3>How to Start Your Career as a Freelance Digital Marketer in...</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 25/06/2025</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>
            
            {/*  Card 9  */}
            <Link href="/blog/smm-expert-kerala" className="blog-card-ext fade-in-up delay-2">
                <img src="/assets/images/Untitled-design-19.webp" alt="Business Documentation" />
                <div className="blog-card-content">
                    <h3>The Importance of Business Documentation in Social Media</h3>
                    <div className="blog-meta">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> By Muhammed Abdulla</span>
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 24/06/2025</span>
                    </div>
                    <span className="btn-read-more">Read More</span>
                </div>
            </Link>
        </div>
    </div>


    
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
        document.addEventListener('DOMContentLoaded', () => {
            const scroller = document.querySelector('.scroll-stack-scroller');
            const endElement = document.querySelector('.scroll-stack-end');
            const cards = Array.from(document.querySelectorAll('.scroll-stack-card'));
            
            if (!scroller || !endElement || cards.length === 0) return;
            
            // Component Props Equivalents
            const itemDistance = 60;
            const itemScale = 0.03;
            const itemStackDistance = 30;
            const stackPositionPercentage = 0.20; 
            const scaleEndPositionPercentage = 0.10; 
            const baseScale = 0.85;
            const rotationAmount = 0; 
            const blurAmount = 0; 

            let lastTransforms = new Map();
            let lenisRef = null;

            // Initialize CSS transform structure securely
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
                    
                    let blur = 0;
                    if (blurAmount) {
                        let topCardIndex = 0;
                        for (let j = 0; j < cards.length; j++) {
                            const jCardTop = getElementOffsetTop(cards[j]) - parseFloat(cards[j].dataset.cachedY || 0);
                            const jTriggerStart = jCardTop - stackPositionPx - (itemStackDistance * j);
                            if (scrollTop >= jTriggerStart) {
                                topCardIndex = j;
                            }
                        }
                        if (i < topCardIndex) {
                            const depthInStack = topCardIndex - i;
                            blur = Math.max(0, depthInStack * blurAmount);
                        }
                    }

                    let translateY = 0;
                    const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
                    
                    if (isPinned) {
                        translateY = scrollTop - cardTop + stackPositionPx + (itemStackDistance * i);
                    } else if (scrollTop > pinEnd) {
                        translateY = pinEnd - cardTop + stackPositionPx + (itemStackDistance * i);
                    }

                    const tx = Math.round(translateY * 100) / 100;
                    const ts = Math.round(scale * 1000) / 1000;
                    const tr = Math.round(rotation * 100) / 100;
                    const tb = Math.round(blur * 100) / 100;
                    
                    const lastTransform = lastTransforms.get(i);
                    const hasChanged = !lastTransform ||
                                       Math.abs(lastTransform.tx - tx) > 0.1 ||
                                       Math.abs(lastTransform.ts - ts) > 0.001 ||
                                       Math.abs(lastTransform.tr - tr) > 0.1 ||
                                       Math.abs(lastTransform.tb - tb) > 0.1;
                    
                    if (hasChanged) {
                        const transform = `translate3d(0, ${tx}px, 0) scale(${ts}) rotate(${tr}deg)`;
                        const filter = tb > 0 ? `blur(${tb}px)` : '';
                        
                        card.style.transform = transform;
                        if(tb > 0) card.style.filter = filter;
                        card.dataset.cachedY = tx;
                        
                        lastTransforms.set(i, {tx, ts, tr, tb});
                    }
                });
            };

            if (typeof Lenis !== "undefined" && !window.globalLenis) {
                lenisRef = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true
                });
                window.globalLenis = lenisRef;
                
                lenisRef.on('scroll', updateCardTransforms);
                
                const raf = (time) => {
                    lenisRef.raf(time);
                    requestAnimationFrame(raf);
                };
                requestAnimationFrame(raf);
            } else if (window.globalLenis) {
                window.globalLenis.on('scroll', updateCardTransforms);
            } else {
                window.addEventListener('scroll', updateCardTransforms);
            }

            // Initialization delay to measure layout safely
            setTimeout(() => { updateCardTransforms(); }, 150);
        });
    </script> */}
{/* <script src="assets/js/global-scroll.js"></script> */}
    
    <Footer />
    </>
  );
}