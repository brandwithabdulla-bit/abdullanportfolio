const CELL = 121.33;
const GAP = 8;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 1200; // Slower, softer slide duration
const EASE_INOUT = "cubic-bezier(0.25, 1, 0.5, 1)"; // Buttery smooth ease-out curve

function createCell() {
  const el = document.createElement('div');
  el.className = 'sr-cell';
  return el;
}

function createFeatured(src, alt) {
  const el = document.createElement('div');
  el.className = 'sr-featured';
  el.innerHTML = `
    <img src="${src}" alt="${alt || ''}" loading="lazy" />
    <div class="sr-featured-blend"></div>
    <div class="sr-featured-sheen"></div>
  `;
  return el;
}

function createCharSpans(text, startIndex, staggerMs) {
  let html = '';
  let idx = startIndex;
  const words = text.split(' ');
  words.forEach((word, wi) => {
    html += '<span class="inline-block whitespace-nowrap">';
    for (let ci = 0; ci < word.length; ci++) {
      const delay = idx * staggerMs;
      idx++;
      html += `<span class="scroll-reel-char" style="animation-delay: ${delay}ms">${word[ci]}</span>`;
    }
    html += '</span>';
    if (wi < words.length - 1) {
      idx++;
      html += ' ';
    }
  });
  return html;
}

class ScrollReelController {
  constructor(containerEl, testimonials, charStaggerMs = 6) {
    this.container = containerEl;
    this.testimonials = testimonials;
    this.charStaggerMs = charStaggerMs;
    this.count = testimonials.length;
    
    this.index = 0;
    this.displayIndex = 0;
    this.exiting = false;
    this.animating = false;
    this.mounted = false;
    this.timeouts = [];

    this.renderInitial();
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.mounted = true;
        this.updateColumns();
        this.startAutoLoop();
      });
    });
  }

  startAutoLoop() {
    this.stopAutoLoop();
    this.loopInterval = setInterval(() => {
      this.paginate(1);
    }, 5000);
  }

  stopAutoLoop() {
    if (this.loopInterval) clearInterval(this.loopInterval);
  }

  renderInitial() {
    this.container.innerHTML = `
      <div class="sr-wrapper">
        <div class="sr-reel-section">
          <div class="sr-reel-inner">
            <div class="sr-col" id="sr-left-col"></div>
            <div class="sr-col" id="sr-mid-col"></div>
            <div class="sr-col" id="sr-right-col"></div>
          </div>
        </div>
        <div class="sr-content-section">
          <div class="sr-text-stage" id="sr-text-stage">
             <!-- Text content inserted dynamically -->
          </div>
          <div class="sr-controls">
            <button id="sr-prev" class="sr-btn" aria-label="Previous testimonial" disabled>
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 2.5 3.5 6l4 3.5" /></svg>
            </button>
            <button id="sr-next" class="sr-btn" aria-label="Next testimonial">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 2.5 4 3.5-4 3.5" /></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    const leftCol = this.container.querySelector('#sr-left-col');
    const rightCol = this.container.querySelector('#sr-right-col');
    const midCol = this.container.querySelector('#sr-mid-col');

    const sideCellCount = 4 + 2 * this.count;
    for(let i=0; i<sideCellCount; i++) {
      leftCol.appendChild(createCell());
      rightCol.appendChild(createCell());
    }

    // Mid col logic
    for (let i = 0; i < 3; i++) midCol.appendChild(createCell());
    this.testimonials.forEach((t, i) => {
      midCol.appendChild(createFeatured(t.image, t.alt));
      if (i < this.count - 1) {
        midCol.appendChild(createCell());
        midCol.appendChild(createCell());
      }
    });
    for (let i = 0; i < 3; i++) midCol.appendChild(createCell());

    this.container.querySelector('#sr-prev').addEventListener('click', () => {
      this.paginate(-1);
      this.startAutoLoop();
    });
    this.container.querySelector('#sr-next').addEventListener('click', () => {
      this.paginate(1);
      this.startAutoLoop();
    });
    
    this.updateTextStage();
  }

  updateColumns() {
    const centerIdx = (this.count - 1) / 2;
    const middleY = (centerIdx - this.index) * STEP;
    const sideY = -middleY;

    const leftCol = this.container.querySelector('#sr-left-col');
    const midCol = this.container.querySelector('#sr-mid-col');
    const rightCol = this.container.querySelector('#sr-right-col');

    const tStyle = this.mounted ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none";

    leftCol.style.transition = tStyle;
    rightCol.style.transition = tStyle;
    midCol.style.transition = tStyle;

    leftCol.style.transform = `translateY(${sideY}px)`;
    rightCol.style.transform = `translateY(${sideY}px)`;
    midCol.style.transform = `translateY(${middleY}px)`;
  }

  updateTextStage() {
    const current = this.testimonials[this.displayIndex];
    const stage = this.container.querySelector('#sr-text-stage');
    
    // Create height-sizing ghost text and actual animating text
    stage.innerHTML = `
      <div class="sr-ghost-text">
        <p class="sr-quote">${current.quote}</p>
        <p class="sr-author">${current.author}</p>
      </div>
      <div class="sr-live-text ${this.exiting ? 'scroll-reel-exit' : ''}">
        <p class="sr-quote">${createCharSpans(current.quote, 0, this.charStaggerMs)}</p>
        <p class="sr-author">${createCharSpans(current.author, current.quote.length + 6, this.charStaggerMs)}</p>
      </div>
    `;
  }

  paginate(dir) {
    if (this.animating) return;
    let next = this.index + dir;
    
    if (next >= this.count) {
      next = 0;
    } else if (next < 0) {
      next = this.count - 1;
    }
    
    this.animating = true;

    this.index = next;
    this.exiting = true;
    this.updateColumns();
    this.updateTextStage();

    this.timeouts.forEach(clearTimeout);
    this.timeouts = [];

    this.timeouts.push(setTimeout(() => {
      this.displayIndex = next;
      this.exiting = false;
      this.updateTextStage();
    }, EXIT_MS));

    this.timeouts.push(setTimeout(() => {
      this.animating = false;
    }, SLIDE_MS));
  }
}

window.ScrollReelController = ScrollReelController;
