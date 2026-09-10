window.initGlobalScroll = () => {
    // 1. Initialize Lenis for Smooth Scrolling if not already globally present
    if (!window._lenisInitialized) {
        if (typeof Lenis !== "undefined" && !window.globalLenis) {
            window.globalLenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true
            });
            const raf = (time) => {
                window.globalLenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
        }
        window._lenisInitialized = true;
    }

    // 2. Intersection Observer for Scroll Animations
    // Create it globally once to prevent memory leaks
    if (!window._globalScrollObserver) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        window._globalScrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
    }

    // Always query and attach new DOM nodes when function is called
    document.querySelectorAll('.fade-in-up:not(.is-visible), .fade-in-down:not(.is-visible), .reveal-up:not(.is-visible)').forEach(el => {
        window._globalScrollObserver.observe(el);
    });
};
