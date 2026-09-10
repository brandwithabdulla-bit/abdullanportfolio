export function initScrollStack() {
    const scroller = document.querySelector('.scroll-stack-scroller');
    const endElement = document.querySelector('.scroll-stack-end');
    const cards = Array.from(document.querySelectorAll('.scroll-stack-card'));

    if (!scroller || !endElement || cards.length === 0) return;

    const itemDistance = 60;
    const itemScale = 0.03;
    const itemStackDistance = 30;
    const stackPositionPercentage = 0.20;
    const scaleEndPositionPercentage = 0.10;
    const baseScale = 0.85;
    const rotationAmount = 0;

    let lastTransforms = new Map();

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

    if (cards.length > 0) {
        cards[cards.length - 1].style.marginBottom = '120vh';
    }

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

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + (itemStackDistance * i);
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + (itemStackDistance * i);
            }

            const tx = Math.round(translateY * 100) / 100;
            const ts = Math.round(scale * 1000) / 1000;

            const lastTransform = lastTransforms.get(i);
            const hasChanged = !lastTransform ||
                Math.abs(lastTransform.tx - tx) > 0.1 ||
                Math.abs(lastTransform.ts - ts) > 0.001;

            if (hasChanged) {
                const transform = `translate3d(0, ${tx}px, 0) scale(${ts})`;
                card.style.transform = transform;
                card.dataset.cachedY = tx;
                lastTransforms.set(i, { tx, ts });
            }
        });
    };

    if (window._stackScrollListener) {
        if (window.globalLenis) {
            window.globalLenis.off('scroll', window._stackScrollListener);
        } else {
            window.removeEventListener('scroll', window._stackScrollListener);
        }
    }

    window._stackScrollListener = updateCardTransforms;

    if (typeof window.Lenis !== "undefined" && !window.globalLenis) {
        window.globalLenis = new window.Lenis({
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

    if (window.globalLenis) {
        window.globalLenis.on('scroll', updateCardTransforms);
    } else {
        window.addEventListener('scroll', updateCardTransforms);
    }

    setTimeout(() => { updateCardTransforms(); }, 150);
}
