/**
 * Main JavaScript
 * Handles global interactions and scroll effects
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Marquee Infinite Scroll Clone (Optional dynamic calculation)
    // The current CSS animation handles the infinite loop using duplicated content.
    
    // 3. Smooth Scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Scroll Reveal Animations
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });
    
    fadeElements.forEach(el => revealObserver.observe(el));

    // 5. Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 6. Case Studies Rendering & Filtering
    const csGrid = document.getElementById('cs-grid');
    const csFilters = document.querySelectorAll('.cs-filter');
    const viewMoreBtn = document.getElementById('cs-view-more-btn');

    if (csGrid && typeof portfolioProjects !== 'undefined') {
        let currentCategory = 'all';
        let currentLimit = 9;

        // Scroll reveal specifically for case study cards
        const csRevealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const aboutSection = document.getElementById('about');

        const renderProjects = () => {
            csGrid.innerHTML = ''; // Clear grid
            
            const filtered = currentCategory === 'all' 
                ? portfolioProjects 
                : portfolioProjects.filter(p => p.category === currentCategory);
            
            const visibleProjects = filtered.slice(0, currentLimit);
            
            visibleProjects.forEach((project, index) => {
                const article = document.createElement('article');
                if (project.type === 'reel') {
                    article.className = 'cs-reel-card';
                    
                    article.innerHTML = `
                        <div class="cs-reel-video-wrapper">
                            ${project.isPlaceholder ? `
                                <div class="cs-reel-placeholder">
                                    <div class="cs-reel-play-btn">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    </div>
                                </div>
                            ` : `
                                <iframe src="${project.link}embed/?hidecaption=true" frameborder="0" scrolling="no" allowtransparency="true" class="cs-reel-iframe"></iframe>
                                <div class="cs-shield cs-shield-top"></div>
                                <div class="cs-shield cs-shield-bottom"></div>
                                <div class="cs-shield cs-shield-left"></div>
                                <div class="cs-shield cs-shield-right"></div>
                            `}
                        </div>
                        
                        <div class="cs-reel-content">
                            <h3 class="cs-reel-title">${project.title}</h3>
                            <p class="cs-reel-subtitle">${project.description}</p>
                            
                            <a href="${project.link}" target="_blank" class="cs-reel-ig-btn">
                                <svg class="cs-reel-ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                Watch full on Instagram 
                                <svg class="external-link-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    `;
                } else if (project.category === 'performance') {
                    article.className = 'cs-perf-card';
                    
                    // Parse description to extract bold heading
                    let rawDesc = project.description;
                    let headingMatch = rawDesc.match(/<strong>(.*?)<\/strong><br><br>/);
                    let perfHeading = headingMatch ? headingMatch[1] : project.title;
                    let perfBodyText = headingMatch ? rawDesc.replace(headingMatch[0], '') : rawDesc;
                    
                    // Highlight "Performance Marketing" in purple
                    perfHeading = perfHeading.replace(/Performance Marketing/gi, '<em>Performance Marketing</em>');

                    const getStatIcon = (label) => {
                        let l = label.toLowerCase();
                        if (l.includes('cost') || l.includes('cpl')) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C2BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
                        if (l.includes('conversation') || l.includes('lead')) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C2BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg>`;
                        if (l.includes('spend') || l.includes('revenue') || l.includes('roas')) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C2BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M22 10h-4"></path><path d="M22 14h-4"></path><path d="M16 10h2v4h-2z"></path></svg>`;
                        return '';
                    };

                    article.innerHTML = `
                        <div class="cs-perf-header">
                            <span class="cs-perf-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                ${project.categoryLabel}
                            </span>
                            <span class="cs-perf-client">
                                <div class="cs-perf-dot"></div>
                                ${project.projectLabel || project.title}
                            </span>
                        </div>
                        
                        <div class="cs-perf-body">
                            <div class="cs-perf-image">
                                ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy">` : `<div class="image-placeholder"></div>`}
                            </div>
                            
                            <div class="cs-perf-content">
                                <h3 class="cs-perf-title">${perfHeading}</h3>
                                <p class="cs-perf-desc">${perfBodyText}</p>
                                
                                <div class="cs-perf-stats-row">
                                    ${project.stats ? project.stats.map(stat => `
                                    <div class="cs-perf-stat-box">
                                        <div class="cs-perf-stat-icon">${getStatIcon(stat.label)}</div>
                                        <div class="cs-perf-stat-data">
                                            <span class="cs-perf-stat-val">${stat.value}</span>
                                            <span class="cs-perf-stat-lbl">${stat.label}</span>
                                        </div>
                                    </div>
                                    `).join('') : ''}
                                </div>
                                
                                ${project.growthVerdict ? `
                                <div class="cs-perf-verdict-box">
                                    <div class="cs-perf-verdict-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C48C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                    </div>
                                    <div class="cs-perf-verdict-divider"></div>
                                    <div class="cs-perf-verdict-text">
                                        <strong>Growth Verdict</strong>
                                        <p>${project.growthVerdict}</p>
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    `;
                } else if (project.category === 'social') {
                    article.className = 'cs-content-card';
                    
                    let rawDesc = project.description;
                    let headingMatch = rawDesc.match(/<strong>(.*?)<\/strong><br><br>/);
                    let contentHeading = headingMatch ? headingMatch[1] : project.title;
                    let contentBodyText = headingMatch ? rawDesc.replace(headingMatch[0], '') : rawDesc;
                    
                    article.innerHTML = `
                        <div class="cs-content-header">
                            <span class="cs-content-cat-label"><span class="cs-perf-dot-purple">●</span> ${project.categoryLabel}</span>
                            <span class="cs-content-client-label"><span class="cs-perf-dot-green">●</span> ${project.title}</span>
                        </div>
                        <div class="cs-content-body">
                            <div class="cs-content-left">
                                <h3 class="cs-content-title">${contentHeading}</h3>
                                <p class="cs-content-desc">${contentBodyText}</p>
                            </div>
                            <div class="cs-content-right">
                                <div class="cs-content-metrics">
                                    ${project.stats ? project.stats.map(stat => `
                                    <div class="cs-content-stat">
                                        <span class="cs-content-stat-val">${stat.value}</span>
                                        <span class="cs-content-stat-lbl">${stat.label}</span>
                                    </div>
                                    `).join('') : ''}
                                </div>
                                
                                <div class="cs-content-divider"></div>
                                
                                ${project.growthVerdict ? `
                                <div class="cs-content-result">
                                    <div class="cs-content-result-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                    </div>
                                    <div class="cs-content-result-text-block">
                                        <span class="cs-content-result-label">RESULT</span>
                                        <p class="cs-content-result-main">Built brand visibility and engagement across industries.</p>
                                        <p class="cs-content-result-sub">Creative strategy, quality production, and consistent execution that delivers impact.</p>
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    `;
                } else {
                    article.className = 'cs-card';
                    article.innerHTML = `
                        <div class="cs-image-wrapper">
                            ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy">` : `<div class="image-placeholder"></div>`}
                        </div>
                        <div class="cs-content">
                            <span class="cs-category-label">${project.categoryLabel}</span>
                            <h3 class="cs-project-title">${project.title}</h3>
                            <p class="cs-project-desc">${project.description}</p>
                            
                            <div class="cs-content-footer">
                                ${project.stats ? `
                                <div class="cs-stats">
                                    ${project.stats.map(stat => `
                                    <div class="cs-stat-item">
                                        <span class="cs-stat-label">${stat.label}</span>
                                        <span class="cs-stat-value">${stat.value}</span>
                                    </div>
                                    `).join('')}
                                </div>
                                ` : ''}
                                
                                ${project.growthVerdict ? `
                                <p class="cs-growth-verdict"><strong>Growth Verdict:</strong> ${project.growthVerdict}</p>
                                ` : ''}
                                
                                <div class="cs-tags">
                                    ${project.tags.map(tag => `<span class="cs-tag">${tag}</span>`).join('')}
                                </div>
                                <a href="${project.link}" class="cs-view-btn">View Case Study ↗</a>
                            </div>
                        </div>
                    `;
                }
                
                csGrid.appendChild(article);
                csRevealObserver.observe(article);
            });

            // Show/Hide About section based on whether we are expanded
            if (aboutSection) {
                if (currentLimit > 9) {
                    aboutSection.style.display = 'none';
                } else {
                    aboutSection.style.display = ''; // Reset to default
                }
            }

            // Handle View More button visibility and state
            if (viewMoreBtn) {
                if (filtered.length > currentLimit) {
                    viewMoreBtn.style.display = 'block';
                    viewMoreBtn.innerHTML = 'View More Projects ↗';
                    viewMoreBtn.classList.remove('cs-home-btn');
                } else {
                    // Show "Home" button when all items in this category are displayed and we've expanded
                    if (currentLimit > 9) {
                        viewMoreBtn.style.display = 'block';
                        viewMoreBtn.innerHTML = '← Go Back Home';
                        viewMoreBtn.classList.add('cs-home-btn');
                    } else {
                        // All items shown initially (e.g. category has <= 9 items)
                        viewMoreBtn.style.display = 'none';
                    }
                }
            }
            
            // Re-run equalization after rendering
            if (typeof equalizeFooterHeights === 'function') {
                setTimeout(equalizeFooterHeights, 50);
            }
        };

        // View More click handler
        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', () => {
                if (!window.location.pathname.endsWith('work.html')) {
                    window.location.href = 'work.html';
                    return;
                }
                if (viewMoreBtn.classList.contains('cs-home-btn')) {
                    // Redirect to service section in home page
                    window.location.href = 'index.html#services';
                } else {
                    currentLimit += 9; // Load 9 more
                    renderProjects();
                }
            });
        }

        // Handle filtering via hash routes (Permalinks)
        const handleFilterChange = (category) => {
            const targetBtn = document.querySelector(`.cs-filter[data-filter="${category}"]`);
            if (!targetBtn) return;
            
            // Visual Update
            csFilters.forEach(f => f.classList.remove('active'));
            targetBtn.classList.add('active');
            
            // Logic Update
            currentCategory = category;
            currentLimit = 9; // Reset limit
            renderProjects();
        };

        const applyHashFilter = () => {
            const hash = window.location.hash.replace('#', '');
            if (['all', 'web', 'performance', 'social'].includes(hash)) {
                handleFilterChange(hash);
            } else {
                handleFilterChange('all');
            }
        };

        // Listen for direct clicks on the filter buttons
        csFilters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Let the browser handle the hash update, but we can also prevent jumping
                // by manually setting pushState and calling our function.
                e.preventDefault();
                const category = btn.getAttribute('data-filter');
                window.history.pushState(null, null, `#${category}`);
                handleFilterChange(category);
            });
        });

        // Listen for forward/back browser navigation
        window.addEventListener('hashchange', applyHashFilter);

        // Initial setup from permalink on page load
        applyHashFilter();

        // Equalize heights of varying footer elements to ensure stats align horizontally
        function equalizeFooterHeights() {
            const verdicts = document.querySelectorAll('.cs-growth-verdict');
            const tags = document.querySelectorAll('.cs-tags');
            
            // Reset min-heights first
            verdicts.forEach(el => el.style.minHeight = '0px');
            tags.forEach(el => el.style.minHeight = '0px');

            if (window.innerWidth >= 1024) { // Only apply on desktop grid
                let maxVerdict = 0;
                let maxTags = 0;

                verdicts.forEach(el => {
                    maxVerdict = Math.max(maxVerdict, el.offsetHeight);
                });
                tags.forEach(el => {
                    maxTags = Math.max(maxTags, el.offsetHeight);
                });

                verdicts.forEach(el => el.style.minHeight = maxVerdict + 'px');
                tags.forEach(el => el.style.minHeight = maxTags + 'px');
            }
        };

        // Run equalization when DOM is ready and images might load, and on window resize
        setTimeout(equalizeFooterHeights, 100);
        window.addEventListener('resize', equalizeFooterHeights);
    }
    
    // FAQ Accordion Script
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-body').style.height = '0px';
                otherItem.querySelector('.acc-icon').textContent = '+';
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                body.style.height = body.scrollHeight + 'px';
                item.querySelector('.acc-icon').textContent = '×';
            }
        });
    });
});

    // 7. Footer Cinematic Scroll Animation
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        const footerAnims = document.querySelectorAll('.footer-anim');
        if (footerAnims.length > 0) {
            gsap.from(footerAnims, {
                scrollTrigger: {
                    trigger: '.site-footer',
                    start: 'top 85%',
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }
    }

    // 8. Footer Live Time (Kerala IST)
    function updateFooterTime() {
        const el = document.getElementById('footer-location-time');
        if (!el) return;
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        el.innerHTML = `Kerala &nbsp; ${timeStr} &nbsp; 28°C ☁`;
    }
    setInterval(updateFooterTime, 1000);
    updateFooterTime();

    // Initialize DriftWall
    console.log("MARKER 1: main.js END REACHED");
    const driftWallContainer = document.getElementById('mentorship-driftwall');
    console.log("MARKER 2: container =", !!driftWallContainer, "typeof DriftWall =", typeof window.DriftWall);
    
    if (driftWallContainer && typeof window.DriftWall !== 'undefined') {
        console.log("MARKER 3: Inside init if block");
        let finalItems = [];
        if (typeof portfolioProjects !== 'undefined' && portfolioProjects.length > 0) {
            finalItems = portfolioProjects
                .filter(p => p.image && !p.image.includes('placeholder'))
                .map(p => ({ image: p.image, title: p.title, href: p.link }));
        }
        
        if (finalItems.length === 0) {
            finalItems = [
                { image: 'https://picsum.photos/id/1015/600/400', title: 'Peaks', href: 'https://example.com/one' },
                { image: 'https://picsum.photos/id/1025/600/400', title: 'Pup', href: 'https://example.com/two' },
                { image: 'https://picsum.photos/id/1039/600/400', title: 'Falls', href: 'https://example.com/three' },
            ];
        }

        console.log("MARKER 4: About to call new DriftWall");
        try {
            new window.DriftWall(driftWallContainer, {
                items: finalItems,
                columns: 5,
                tileWidth: 200,
                tileHeight: 132,
                gap: 18,
                tilt: 16,
                turn: -14,
                perspective: 1200,
                depth: 120,
                speed: 42,
                direction: 'up',
                variance: 0.45,
                parallax: 0.6,
                lift: 64,
                fade: 0.6,
                dim: 0.55,
                overlayColor: '#060010',
                radius: 14,
                roll: 0,
                pauseOnHover: false,
                grayscale: false
            });
            console.log("MARKER 5: DriftWall init SUCCESS, child count:", driftWallContainer.children.length);
        } catch (e) {
            console.log("MARKER ERROR:", e);
        }
    }

