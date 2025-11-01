# PROMPT 02: Hero Section & Advanced Animations

## Objective
Create a stunning, animated hero section that immediately captures attention and sets the tone for the entire scrollytelling experience.

---

## Hero HTML Structure

Add this to the `<section id="hero">` in index.html:

```html
<section id="hero" class="hero">
    <!-- Animated Background -->
    <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
        <canvas id="particles-canvas"></canvas>
    </div>
    
    <!-- Hero Content -->
    <div class="hero-content">
        <div class="hero-subtitle" data-animate="fade-up">
            <span class="subtitle-line">Lyola Explores the World</span>
        </div>
        
        <h1 class="hero-title" data-animate="fade-up" data-delay="0.2">
            <span class="title-word">The</span>
            <span class="title-word">World</span>
            <span class="title-word">of</span>
            <span class="title-word gradient-text">Iran</span>
        </h1>
        
        <p class="hero-description" data-animate="fade-up" data-delay="0.4">
            From deserts to rainforests, Persians to Kurds,<br>
            Islamic law to nose jobs and noodle ice cream,<br>
            Iran is full of beauty and surprises.
        </p>
        
        <div class="hero-cta" data-animate="fade-up" data-delay="0.6">
            <button class="cta-button" onclick="smoothScrollTo('geography')">
                Begin the Journey
                <svg class="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4L10 16M10 16L16 10M10 16L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator" data-animate="bounce">
        <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
        </div>
        <span class="scroll-text">Scroll to explore</span>
    </div>
    
    <!-- Persian Pattern Overlay -->
    <svg class="pattern-overlay" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="persian-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50,10 L60,30 L50,50 L40,30 Z" fill="rgba(102, 126, 234, 0.05)" />
                <circle cx="50" cy="50" r="3" fill="rgba(118, 75, 162, 0.1)" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#persian-pattern)" />
    </svg>
</section>
```

---

## Hero CSS Styles

Add to `css/main.css` or create `css/hero.css`:

```css
/* ============================================
   HERO SECTION
   ============================================ */

.hero {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%);
}

/* ============================================
   ANIMATED BACKGROUND
   ============================================ */

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
    animation: float 20s ease-in-out infinite;
}

.orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    top: -250px;
    left: -250px;
    animation-delay: 0s;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--color-secondary), transparent);
    top: 50%;
    right: -200px;
    animation-delay: -7s;
}

.orb-3 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--color-accent), transparent);
    bottom: -300px;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: -14s;
}

@keyframes float {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(50px, -30px) scale(1.1);
    }
    50% {
        transform: translate(-30px, 50px) scale(0.9);
    }
    75% {
        transform: translate(30px, 30px) scale(1.05);
    }
}

#particles-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
}

/* ============================================
   HERO CONTENT
   ============================================ */

.hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    max-width: 1000px;
    padding: 0 2rem;
}

.hero-subtitle {
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-teal);
    margin-bottom: 2rem;
    font-weight: 600;
}

.subtitle-line {
    position: relative;
    display: inline-block;
}

.subtitle-line::before,
.subtitle-line::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 60px;
    height: 1px;
    background: var(--color-teal);
}

.subtitle-line::before {
    right: calc(100% + 20px);
}

.subtitle-line::after {
    left: calc(100% + 20px);
}

/* ============================================
   HERO TITLE
   ============================================ */

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(3rem, 10vw, 7rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
}

.title-word {
    display: inline-block;
    margin: 0 0.3em;
    opacity: 0;
    transform: translateY(50px);
    animation: wordReveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.title-word:nth-child(1) { animation-delay: 0.2s; }
.title-word:nth-child(2) { animation-delay: 0.4s; }
.title-word:nth-child(3) { animation-delay: 0.6s; }
.title-word:nth-child(4) { animation-delay: 0.8s; }

@keyframes wordReveal {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.gradient-text {
    background: linear-gradient(135deg, 
        var(--color-primary) 0%, 
        var(--color-secondary) 50%, 
        var(--color-accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

/* ============================================
   HERO DESCRIPTION
   ============================================ */

.hero-description {
    font-size: clamp(1rem, 2vw, 1.3rem);
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* ============================================
   CTA BUTTON
   ============================================ */

.hero-cta {
    margin-bottom: 4rem;
}

.cta-button {
    position: relative;
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border: none;
    border-radius: 50px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.cta-button:active {
    transform: translateY(-1px);
}

.arrow-icon {
    transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
    transform: translateY(3px);
}

/* ============================================
   SCROLL INDICATOR
   ============================================ */

.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    z-index: 10;
    animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(-15px);
    }
}

.scroll-mouse {
    width: 30px;
    height: 50px;
    border: 2px solid var(--color-text-secondary);
    border-radius: 15px;
    position: relative;
    opacity: 0.8;
}

.scroll-wheel {
    width: 4px;
    height: 10px;
    background: var(--color-primary);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
    0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(15px);
    }
}

.scroll-text {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    letter-spacing: 0.1em;
}

/* ============================================
   PATTERN OVERLAY
   ============================================ */

.pattern-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    pointer-events: none;
    opacity: 0.3;
}

/* ============================================
   ANIMATION UTILITIES
   ============================================ */

[data-animate] {
    opacity: 0;
}

[data-animate].animated {
    animation-fill-mode: forwards;
}

[data-animate="fade-up"].animated {
    animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ============================================
   RESPONSIVE - HERO
   ============================================ */

@media (max-width: 768px) {
    .hero-title {
        font-size: clamp(2.5rem, 8vw, 4rem);
    }
    
    .title-word {
        margin: 0 0.2em;
    }
    
    .hero-description {
        font-size: 1rem;
        padding: 0 1rem;
    }
    
    .subtitle-line::before,
    .subtitle-line::after {
        width: 30px;
    }
    
    .cta-button {
        padding: 1rem 2rem;
        font-size: 1rem;
    }
    
    .gradient-orb {
        filter: blur(60px);
    }
    
    .orb-1 {
        width: 300px;
        height: 300px;
    }
    
    .orb-2 {
        width: 250px;
        height: 250px;
    }
    
    .orb-3 {
        width: 350px;
        height: 350px;
    }
}

@media (max-width: 480px) {
    .hero-subtitle {
        font-size: 0.75rem;
    }
    
    .subtitle-line::before,
    .subtitle-line::after {
        display: none;
    }
}
```

---

## Hero JavaScript - Particles Animation

Add to `js/animations.js`:

```javascript
/**
 * Hero Particles Animation
 * Creates an animated particle background using Canvas
 */

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = isMobile() ? 30 : 80;
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }
    
    init() {
        this.resize();
        this.createParticles();
    }
    
    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Move particle
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }
            
            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.x -= Math.cos(angle) * force * 2;
                    particle.y -= Math.sin(angle) * force * 2;
                }
            }
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            this.ctx.fill();
            
            // Connect nearby particles
            for (let j = i + 1; j < this.particles.length; j++) {
                const other = this.particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    setupEventListeners() {
        // Mouse move
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
        
        // Mouse leave
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
        
        // Resize
        window.addEventListener('resize', debounce(() => {
            this.resize();
            this.createParticles();
        }, 300));
    }
}

// Initialize particles when hero is visible
function initHeroParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        new ParticleSystem(canvas);
    }
}

/**
 * Hero Content Animations
 * GSAP-based entrance animations
 */

function initHeroAnimations() {
    // Animate elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach((element) => {
        const delay = parseFloat(element.dataset.delay || 0);
        
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: delay,
            ease: 'power3.out',
            onComplete: () => {
                element.classList.add('animated');
            }
        });
    });
    
    // Parallax effect on scroll
    gsap.to('.hero-content', {
        y: 100,
        opacity: 0.3,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        }
    });
    
    // Fade out background orbs
    gsap.to('.gradient-orb', {
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });
}
```

---

## Update main.js

Add to the initialization in `js/main.js`:

```javascript
function initAnimations() {
    console.log('✨ Initializing animations...');
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    initHeroParticles();
    initHeroAnimations();
}
```

---

## Typography Enhancements

Add to `css/typography.css`:

```css
/* ============================================
   TYPOGRAPHY
   ============================================ */

/* Import fonts if not using Google Fonts CDN */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap');

/* Base Typography */
body {
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-text-primary);
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 900;
}

h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
}

h3 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
}

h4 {
    font-size: clamp(1.25rem, 3vw, 2rem);
}

/* Paragraphs */
p {
    margin-bottom: 1.5rem;
    color: var(--color-text-secondary);
}

p:last-child {
    margin-bottom: 0;
}

/* Links */
a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--color-accent);
}

/* Emphasis */
strong, b {
    font-weight: 700;
    color: var(--color-text-primary);
}

em, i {
    font-style: italic;
}

/* Code (if needed) */
code {
    font-family: 'Courier New', monospace;
    background: rgba(102, 126, 234, 0.1);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
}

/* Special Typography Classes */
.text-gradient {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.text-large {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
}

.text-small {
    font-size: 0.875rem;
}

.text-uppercase {
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.text-center {
    text-align: center;
}

/* Persian-style decorative text */
.decorative-initial::first-letter {
    font-size: 3em;
    font-family: var(--font-heading);
    float: left;
    line-height: 0.8;
    margin-right: 0.1em;
    color: var(--color-primary);
}
```

---

## Performance Optimizations

Add to `js/utils.js`:

```javascript
/**
 * Performance optimizations for hero section
 */

// Reduce motion for users who prefer it
function respectReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Disable GSAP animations
        gsap.globalTimeline.clear();
        
        // Add class to disable CSS animations
        document.body.classList.add('reduced-motion');
        
        // Make all animated elements immediately visible
        document.querySelectorAll('[data-animate]').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        
        return true;
    }
    return false;
}

// Call in main.js initialization
document.addEventListener('DOMContentLoaded', function() {
    respectReducedMotion();
    // ... rest of initialization
});
```

Add to `css/animations.css`:

```css
/* Disable animations for reduced motion preference */
.reduced-motion *,
.reduced-motion *::before,
.reduced-motion *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
}
```

---

## Testing Checklist

After implementing this prompt:

✅ Hero section displays correctly on all screen sizes  
✅ Title animation works smoothly  
✅ Particle system performs well (check FPS)  
✅ CTA button is clickable and scrolls to next section  
✅ Scroll indicator animates properly  
✅ Background orbs animate without performance issues  
✅ Reduced motion preferences are respected  
✅ All text is readable against the background  
✅ Mobile layout looks good (test on actual device)  
✅ Hover effects work on desktop  

---

## Next Steps

Proceed to **Prompt 03** to build the Geography section with interactive map!