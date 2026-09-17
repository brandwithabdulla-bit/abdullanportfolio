(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96441,e=>{"use strict";e.s(["initGlassSurface",0,function(e=".header-inner",t={}){let r=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),i=/Firefox/.test(navigator.userAgent),s=document.createElement("div");s.style.backdropFilter="url(#test)";let l=!(r||i)&&""!==s.style.backdropFilter;document.querySelectorAll(e).forEach((e,r)=>{let i=`glass-surface-${r}-${Date.now()}`,s=`glass-filter-${i}`,a=`red-grad-${i}`,n=`blue-grad-${i}`,o={width:e.style.width||e.getAttribute("width")||void 0,height:e.style.height||e.getAttribute("height")||void 0,borderRadius:parseFloat(getComputedStyle(e).borderRadius)||20,borderWidth:.07,brightness:50,opacity:.93,blur:11,displace:0,backgroundOpacity:0,saturation:1,distortionScale:-180,redOffset:0,greenOffset:10,blueOffset:20,xChannel:"R",yChannel:"G",mixBlendMode:"difference",...t},d=e.innerHTML;if(e.innerHTML="",e.classList.add("glass-surface"),l?e.classList.add("glass-surface--svg"):e.classList.add("glass-surface--fallback"),void 0!==o.width&&(e.style.width="number"==typeof o.width?`${o.width}px`:o.width),void 0!==o.height&&(e.style.height="number"==typeof o.height?`${o.height}px`:o.height),e.style.borderRadius=`${o.borderRadius}px`,e.style.setProperty("--glass-frost",o.backgroundOpacity),e.style.setProperty("--glass-saturation",o.saturation),e.style.setProperty("--filter-id",`url(#${s})`),e.style.position="relative",l){e.style.backdropFilter=`url(#${s})`,e.style.background=`rgba(0, 0, 0, ${o.backgroundOpacity})`,e.style.boxShadow=`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
                0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
                0px 4px 16px rgba(17, 17, 26, 0.05),
                0px 8px 24px rgba(17, 17, 26, 0.05),
                0px 16px 56px rgba(17, 17, 26, 0.05),
                0px 4px 16px rgba(17, 17, 26, 0.05) inset,
                0px 8px 24px rgba(17, 17, 26, 0.05) inset,
                0px 16px 56px rgba(17, 17, 26, 0.05) inset`;let t=`
                <svg class="glass-surface__filter" xmlns="http://www.w3.org/2000/svg" style="position:absolute; width:0; height:0; pointer-events:none;">
                    <defs>
                        <filter id="${s}" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
                            <feImage class="fe-image-map" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
                            
                            <feDisplacementMap class="red-channel" in="SourceGraphic" in2="map" result="dispRed" 
                                xChannelSelector="${o.xChannel}" yChannelSelector="${o.yChannel}" scale="${o.distortionScale+o.redOffset}" />
                            <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
                            
                            <feDisplacementMap class="green-channel" in="SourceGraphic" in2="map" result="dispGreen" 
                                xChannelSelector="${o.xChannel}" yChannelSelector="${o.yChannel}" scale="${o.distortionScale+o.greenOffset}" />
                            <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
                            
                            <feDisplacementMap class="blue-channel" in="SourceGraphic" in2="map" result="dispBlue" 
                                xChannelSelector="${o.xChannel}" yChannelSelector="${o.yChannel}" scale="${o.distortionScale+o.blueOffset}" />
                            <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
                            
                            <feBlend in="red" in2="green" mode="screen" result="rg" />
                            <feBlend in="rg" in2="blue" mode="screen" result="output" />
                            <feGaussianBlur class="fe-gaussian-blur" in="output" stdDeviation="0.7" />
                        </filter>
                    </defs>
                </svg>
            `;e.insertAdjacentHTML("afterbegin",t);let r=e.querySelector(".fe-image-map"),i=e.querySelector(".fe-gaussian-blur"),l=()=>{let t,i,s,l,d;r.setAttribute("href",(i=(t=e.getBoundingClientRect()).width||400,l=Math.min(i,s=t.height||200)*(.5*o.borderWidth),d=`
                    <svg viewBox="0 0 ${i} ${s}" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="${a}" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" stop-color="#0000"/>
                                <stop offset="100%" stop-color="red"/>
                            </linearGradient>
                            <linearGradient id="${n}" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#0000"/>
                                <stop offset="100%" stop-color="blue"/>
                            </linearGradient>
                        </defs>
                        <rect x="0" y="0" width="${i}" height="${s}" fill="black"></rect>
                        <rect x="0" y="0" width="${i}" height="${s}" rx="${o.borderRadius}" fill="url(#${a})" />
                        <rect x="0" y="0" width="${i}" height="${s}" rx="${o.borderRadius}" fill="url(#${n})" style="mix-blend-mode: ${o.mixBlendMode}" />
                        <rect x="${l}" y="${l}" width="${i-2*l}" height="${s-2*l}" rx="${o.borderRadius}" fill="hsl(0 0% ${o.brightness}% / ${o.opacity})" style="filter:blur(${o.blur}px)" />
                    </svg>
                `,`data:image/svg+xml,${encodeURIComponent(d)}`))};i.setAttribute("stdDeviation",o.displace.toString()),new ResizeObserver(()=>{setTimeout(l,0)}).observe(e),setTimeout(l,0)}else e.style.background="rgba(0, 0, 0, 0.4)",e.style.backdropFilter="blur(12px) saturate(1.8) brightness(1.2)",e.style.webkitBackdropFilter="blur(12px) saturate(1.8) brightness(1.2)",e.style.border="1px solid rgba(255, 255, 255, 0.2)",e.style.boxShadow="inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)";let p=document.createElement("div");p.className="glass-surface__content",p.style.position="relative",p.style.zIndex="1",p.style.width="100%",p.style.height="100%",p.style.display="inherit",p.style.alignItems="inherit",p.style.justifyContent="inherit",p.style.flexDirection="inherit",p.style.gap="inherit",p.innerHTML=d,e.appendChild(p)})}])}]);