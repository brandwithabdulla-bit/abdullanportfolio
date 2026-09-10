class DriftWall {
    constructor(container, options = {}) {
        this.container = container;
        
        // Configuration
        this.items = options.items || [];
        this.columns = options.columns || 5;
        this.speed = options.speed || 42;
        this.direction = options.direction || 'up';
        this.variance = options.variance || 0.45;
        this.parallax = options.parallax || 0.6;
        this.pauseOnHover = options.pauseOnHover || false;
        
        this.tileWidth = options.tileWidth || 200;
        this.tileHeight = options.tileHeight || 132;
        this.gap = options.gap || 18;
        this.radius = options.radius || 14;
        this.tilt = options.tilt || 16;
        this.turn = options.turn || -14;
        this.roll = options.roll || 0;
        this.perspective = options.perspective || 1200;
        this.depth = options.depth || 120;
        this.lift = options.lift || 64;
        this.dim = options.dim || 0.55;
        this.fade = options.fade || 0.6;
        this.overlayColor = options.overlayColor || '#060010';
        this.grayscale = options.grayscale || false;

        // State trackers
        this.pointer = { x: 0, y: 0 };
        this.pointerDamped = { x: 0, y: 0 };
        this.wallHovered = false;
        this.hoveredCol = -1;
        this.activeTile = null;
        this.activeId = null;
        this.lastPointerX = undefined;
        this.lastPointerY = undefined;
        
        this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.init();
    }
    
    init() {
        this.containerHeight = this.container.getBoundingClientRect().height || 600;
        
        // Configure styles via CSS variables
        this.container.classList.add('drift-wall');
        if (this.reduced) this.container.classList.add('drift-wall--reduced');
        
        this.container.style.setProperty('--dw-tile-w', `${this.tileWidth}px`);
        this.container.style.setProperty('--dw-tile-h', `${this.tileHeight}px`);
        this.container.style.setProperty('--dw-gap', `${this.gap}px`);
        this.container.style.setProperty('--dw-radius', `${this.radius}px`);
        this.container.style.setProperty('--dw-perspective', `${this.perspective}px`);
        this.container.style.setProperty('--dw-lift', `${this.lift}px`);
        this.container.style.setProperty('--dw-dim', this.dim);
        this.container.style.setProperty('--dw-gray', this.grayscale ? 1 : 0);
        this.container.style.setProperty('--dw-overlay', this.overlayColor);
        this.container.style.setProperty('--dw-edge', `${Math.max(0, (1 - this.fade) * 100)}%`);

        // Prepare columns logic
        this.columnItems = Array.from({ length: this.columns }, () => []);
        this.items.forEach((item, i) => this.columnItems[i % this.columns].push(item));
        this.columnItems = this.columnItems.map(col => col.length ? col : this.items.slice(0, 1));
        
        const unit = this.tileHeight + this.gap;
        this.columnMeta = this.columnItems.map(col => {
            const copyHeight = Math.max(unit, col.length * unit);
            const copies = Math.max(2, Math.ceil((this.containerHeight * 1.6) / copyHeight) + 1);
            return { copyHeight, copies };
        });

        // Initialize speeds & uniform loop direction (the loops fix)
        const dirSign = this.direction === 'up' ? 1 : -1;
        this.baseVelocities = this.columnItems.map((_, c) => {
            const pseudo = ((c * 0.6180339887 + 0.35) % 1) * 2 - 1;
            const factor = 1 + this.variance * pseudo;
            return this.speed * factor * dirSign; // removed altSign to enforce uniform scroll
        });

        this.offsets = this.columnMeta.map((meta, c) => meta.copyHeight * ((c * 0.37) % 1));
        this.velocities = this.columnItems.map(() => 0);

        this.renderDOM();
        this.bindEvents();
        
        this.lastTs = null;
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }
    
    renderDOM() {
        this.plane = document.createElement('div');
        this.plane.className = 'drift-wall__plane';
        
        this.tracks = [];
        
        this.columnItems.forEach((col, c) => {
            const meta = this.columnMeta[c];
            const colEl = document.createElement('div');
            colEl.className = 'drift-wall__col';
            
            const track = document.createElement('div');
            track.className = 'drift-wall__track';
            
            for (let copyIndex = 0; copyIndex < meta.copies; copyIndex++) {
                col.forEach((item, itemIndex) => {
                    const id = `${c}-${copyIndex}-${itemIndex}`;
                    const el = this.createTile(item, id, c);
                    track.appendChild(el);
                });
            }
            
            this.tracks.push(track);
            colEl.appendChild(track);
            this.plane.appendChild(colEl);
        });
        
        this.container.appendChild(this.plane);
    }
    
    createTile(item, id, colIndex) {
        const wrap = item.href ? document.createElement('a') : document.createElement('div');
        wrap.className = 'drift-wall__tile';
        wrap.dataset.tileId = id;
        wrap.dataset.col = colIndex;
        if (item.href) {
            wrap.href = item.href;
            wrap.target = '_blank';
            wrap.rel = 'noreferrer noopener';
        } else {
            wrap.tabIndex = 0;
            wrap.setAttribute('role', 'button');
        }
        
        const inner = document.createElement('span');
        inner.className = 'drift-wall__inner';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title || '';
        img.loading = 'lazy';
        img.draggable = false;
        
        const overlay = document.createElement('span');
        overlay.className = 'drift-wall__overlay';
        overlay.setAttribute('aria-hidden', 'true');
        
        inner.appendChild(img);
        inner.appendChild(overlay);
        wrap.appendChild(inner);
        return wrap;
    }
    
    checkHover() {
        if (!this.wallHovered || this.lastPointerX === undefined || this.lastPointerY === undefined) return;
        
        const hit = document.elementFromPoint(this.lastPointerX, this.lastPointerY);
        const tile = hit && hit.closest ? hit.closest('.drift-wall__tile') : null;
        
        if (tile) {
            const id = tile.dataset.tileId;
            if (id !== this.activeId) {
                if (this.activeTile) this.activeTile.classList.remove('is-active');
                this.activeTile = tile;
                tile.classList.add('is-active');
                this.activeId = id;
                this.hoveredCol = Number(tile.dataset.col);
            }
        } else {
            if (this.activeTile) this.activeTile.classList.remove('is-active');
            this.activeTile = null;
            this.activeId = null;
            this.hoveredCol = -1;
        }
    }

    bindEvents() {
        this.container.addEventListener('pointermove', (e) => {
            const rect = this.container.getBoundingClientRect();
            if (this.parallax > 0 && !this.reduced) {
                this.pointer.x = (e.clientX - rect.left) / rect.width - 0.5;
                this.pointer.y = (e.clientY - rect.top) / rect.height - 0.5;
            }
            this.lastPointerX = e.clientX;
            this.lastPointerY = e.clientY;
        });

        this.container.addEventListener('pointerenter', (e) => {
            this.wallHovered = true;
            this.lastPointerX = e.clientX;
            this.lastPointerY = e.clientY;
        });
        
        this.container.addEventListener('pointerleave', () => {
            this.wallHovered = false;
            this.pointer = { x: 0, y: 0 };
            if (this.activeTile) this.activeTile.classList.remove('is-active');
            this.activeTile = null;
            this.activeId = null;
            this.hoveredCol = -1;
            this.lastPointerX = undefined;
            this.lastPointerY = undefined;
        });
        
        window.addEventListener('resize', () => {
            this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        });
    }

    applyPlaneTransform(px, py) {
        this.plane.style.transform =
            `translate(-50%, -50%) scale(1.18) ` +
            `rotateX(${this.tilt + py}deg) rotateY(${this.turn + px}deg) rotateZ(${this.roll}deg) ` +
            `translateZ(${-this.depth}px)`;
    }

    animate(ts) {
        if (!this.lastTs) this.lastTs = ts;
        const dt = Math.min(0.05, Math.max(0, ts - this.lastTs) / 1000);
        this.lastTs = ts;

        const maxTilt = this.parallax * 8;
        const targetX = this.pointer.x * maxTilt;
        const targetY = -this.pointer.y * maxTilt;
        const damp = 1 - Math.exp(-dt / 0.12);
        
        this.pointerDamped.x += (targetX - this.pointerDamped.x) * damp;
        this.pointerDamped.y += (targetY - this.pointerDamped.y) * damp;
        this.applyPlaneTransform(this.pointerDamped.x, this.pointerDamped.y);

        if (!this.reduced) {
            this.checkHover();
            
            for (let c = 0; c < this.tracks.length; c++) {
                const meta = this.columnMeta[c];
                if (!meta) continue;
                const paused = this.wallHovered && this.pauseOnHover;
                const factor = paused || this.hoveredCol === c ? 0 : 1;
                const target = this.baseVelocities[c] * factor;

                const ease = 1 - Math.exp(-dt / (target === 0 ? 0.16 : 0.28));
                this.velocities[c] += (target - this.velocities[c]) * ease;
                
                let next = (this.offsets[c] || 0) + this.velocities[c] * dt;
                next = ((next % meta.copyHeight) + meta.copyHeight) % meta.copyHeight;
                this.offsets[c] = next;

                const el = this.tracks[c];
                if (el) el.style.transform = `translate3d(0, ${-next}px, 0)`;
            }
        } else {
            for (let c = 0; c < this.tracks.length; c++) {
                const el = this.tracks[c];
                const meta = this.columnMeta[c];
                if (el && meta) el.style.transform = `translate3d(0, ${-(this.offsets[c] || 0)}px, 0)`;
            }
        }
        
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }
}
