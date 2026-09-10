export function initGlassSurface(selector = '.header-inner', customOptions = {}) {
    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);
    
    let filterTestDiv = document.createElement('div');
    filterTestDiv.style.backdropFilter = 'url(#test)';
    const supportsSVG = !(isWebkit || isFirefox) && filterTestDiv.style.backdropFilter !== '';

    const elements = document.querySelectorAll(selector);

    elements.forEach((el, index) => {
        const uniqueId = `glass-surface-${index}-${Date.now()}`;
        const filterId = `glass-filter-${uniqueId}`;
        const redGradId = `red-grad-${uniqueId}`;
        const blueGradId = `blue-grad-${uniqueId}`;

        const options = {
            width: el.style.width || el.getAttribute('width') || undefined,
            height: el.style.height || el.getAttribute('height') || undefined,
            borderRadius: parseFloat(getComputedStyle(el).borderRadius) || 20,
            borderWidth: 0.07,
            brightness: 50,
            opacity: 0.93,
            blur: 11,
            displace: 0,
            backgroundOpacity: 0,
            saturation: 1,
            distortionScale: -180,
            redOffset: 0,
            greenOffset: 10,
            blueOffset: 20,
            xChannel: 'R',
            yChannel: 'G',
            mixBlendMode: 'difference',
            ...customOptions
        };

        const childrenHTML = el.innerHTML;
        el.innerHTML = '';
        
        el.classList.add('glass-surface');
        if (supportsSVG) {
            el.classList.add('glass-surface--svg');
        } else {
            el.classList.add('glass-surface--fallback');
        }

        if (options.width !== undefined) {
            el.style.width = typeof options.width === 'number' ? `${options.width}px` : options.width;
        }
        if (options.height !== undefined) {
            el.style.height = typeof options.height === 'number' ? `${options.height}px` : options.height;
        }
        el.style.borderRadius = `${options.borderRadius}px`;
        el.style.setProperty('--glass-frost', options.backgroundOpacity);
        el.style.setProperty('--glass-saturation', options.saturation);
        el.style.setProperty('--filter-id', `url(#${filterId})`);
        
        el.style.position = 'relative';

        if (supportsSVG) {
            el.style.backdropFilter = `url(#${filterId})`;
            el.style.background = `rgba(0, 0, 0, ${options.backgroundOpacity})`;
            el.style.boxShadow = `0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
                0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
                0px 4px 16px rgba(17, 17, 26, 0.05),
                0px 8px 24px rgba(17, 17, 26, 0.05),
                0px 16px 56px rgba(17, 17, 26, 0.05),
                0px 4px 16px rgba(17, 17, 26, 0.05) inset,
                0px 8px 24px rgba(17, 17, 26, 0.05) inset,
                0px 16px 56px rgba(17, 17, 26, 0.05) inset`;

            const svgContent = `
                <svg class="glass-surface__filter" xmlns="http://www.w3.org/2000/svg" style="position:absolute; width:0; height:0; pointer-events:none;">
                    <defs>
                        <filter id="${filterId}" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
                            <feImage class="fe-image-map" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
                            
                            <feDisplacementMap class="red-channel" in="SourceGraphic" in2="map" result="dispRed" 
                                xChannelSelector="${options.xChannel}" yChannelSelector="${options.yChannel}" scale="${options.distortionScale + options.redOffset}" />
                            <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
                            
                            <feDisplacementMap class="green-channel" in="SourceGraphic" in2="map" result="dispGreen" 
                                xChannelSelector="${options.xChannel}" yChannelSelector="${options.yChannel}" scale="${options.distortionScale + options.greenOffset}" />
                            <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
                            
                            <feDisplacementMap class="blue-channel" in="SourceGraphic" in2="map" result="dispBlue" 
                                xChannelSelector="${options.xChannel}" yChannelSelector="${options.yChannel}" scale="${options.distortionScale + options.blueOffset}" />
                            <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
                            
                            <feBlend in="red" in2="green" mode="screen" result="rg" />
                            <feBlend in="rg" in2="blue" mode="screen" result="output" />
                            <feGaussianBlur class="fe-gaussian-blur" in="output" stdDeviation="0.7" />
                        </filter>
                    </defs>
                </svg>
            `;
            el.insertAdjacentHTML('afterbegin', svgContent);

            const feImage = el.querySelector('.fe-image-map');
            const feGaussianBlur = el.querySelector('.fe-gaussian-blur');

            const generateDisplacementMap = () => {
                const rect = el.getBoundingClientRect();
                const actualWidth = rect.width || 400;
                const actualHeight = rect.height || 200;
                const edgeSize = Math.min(actualWidth, actualHeight) * (options.borderWidth * 0.5);

                const svgMap = `
                    <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" stop-color="#0000"/>
                                <stop offset="100%" stop-color="red"/>
                            </linearGradient>
                            <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#0000"/>
                                <stop offset="100%" stop-color="blue"/>
                            </linearGradient>
                        </defs>
                        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
                        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${options.borderRadius}" fill="url(#${redGradId})" />
                        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${options.borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${options.mixBlendMode}" />
                        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${options.borderRadius}" fill="hsl(0 0% ${options.brightness}% / ${options.opacity})" style="filter:blur(${options.blur}px)" />
                    </svg>
                `;
                return `data:image/svg+xml,${encodeURIComponent(svgMap)}`;
            };

            const updateDisplacementMap = () => {
                feImage.setAttribute('href', generateDisplacementMap());
            };

            feGaussianBlur.setAttribute('stdDeviation', options.displace.toString());

            const resizeObserver = new ResizeObserver(() => {
                setTimeout(updateDisplacementMap, 0);
            });
            resizeObserver.observe(el);
            setTimeout(updateDisplacementMap, 0);
        } else {
            el.style.background = 'rgba(0, 0, 0, 0.4)';
            el.style.backdropFilter = 'blur(12px) saturate(1.8) brightness(1.2)';
            el.style.webkitBackdropFilter = 'blur(12px) saturate(1.8) brightness(1.2)';
            el.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            el.style.boxShadow = `inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`;
        }

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'glass-surface__content';
        contentWrapper.style.position = 'relative';
        contentWrapper.style.zIndex = '1';
        contentWrapper.style.width = '100%';
        contentWrapper.style.height = '100%';
        contentWrapper.style.display = 'inherit';
        contentWrapper.style.alignItems = 'inherit';
        contentWrapper.style.justifyContent = 'inherit';
        contentWrapper.style.flexDirection = 'inherit';
        contentWrapper.style.gap = 'inherit';
        contentWrapper.innerHTML = childrenHTML;
        
        el.appendChild(contentWrapper);
    });
}

