# PROMPT 01: Project Setup & Structure

## Project: "The World of Iran" - Scrollytelling Website

### Overview
Create a new complete scrollytelling webpage about Iran inspired by The Pudding's data journalism style. This will feature interactive visualizations, smooth scroll-driven animations, and engaging storytelling.

---

## Technical Stack Requirements

### Core Libraries (use CDN links):
```html
<!-- Scrollama.js - v3.2.0 -->
<script src="https://unpkg.com/scrollama@3.2.0/build/scrollama.min.js"></script>

<!-- D3.js - v7.8.5 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>

<!-- GSAP - v3.12.2 with ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Intersection Observer Polyfill (for older browsers) -->
<script src="https://cdn.jsdelivr.net/npm/intersection-observer@0.12.2/intersection-observer.js"></script>
```

### Font Loading:
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

---

## Project File Structure

Create the following directory structure:

```
iran-scrollytelling/
│
├── index.html                 # Main HTML file
│
├── css/
│   ├── main.css              # Core styles, layout, grid
│   ├── typography.css        # Font styles, headings, text
│   ├── animations.css        # Animation keyframes and transitions
│   ├── components.css        # Reusable component styles
│   └── responsive.css        # Media queries for mobile/tablet
│
├── js/
│   ├── main.js               # Main entry point, initialization
│   ├── scrollytelling.js     # Scrollama setup and scroll handlers
│   ├── visualizations.js     # D3.js chart/map functions
│   ├── animations.js         # GSAP animation timelines
│   ├── data.js               # All data for visualizations
│   └── utils.js              # Helper functions (debounce, etc.)
│
├── assets/
│   ├── images/
│   │   ├── hero/             # Hero section images
│   │   ├── regions/          # 9 regional photos
│   │   ├── culture/          # Cultural elements
│   │   └── icons/            # SVG icons
│   │
│   ├── data/
│   │   ├── iran-map.json     # GeoJSON for Iran map
│   │   └── demographics.json # Population data
│   │
│   └── fonts/                # Local fonts (if needed)
│
├── README.md                  # Project documentation
├── .gitignore                # Git ignore file
└── package.json              # Optional: for future npm dependencies
```

---

## Initial HTML Structure (index.html)

Create `index.html` with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Explore Iran beyond the headlines: from deserts to rainforests, Persians to Kurds, ancient traditions to modern lives.">
    
    <title>The World of Iran | An Interactive Journey</title>
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="The World of Iran">
    <meta property="og:description" content="An interactive scrollytelling experience exploring Iran's diversity, culture, and complexity.">
    <meta property="og:type" content="website">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/typography.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Progress Bar -->
    <div id="progress-bar" class="progress-bar"></div>
    
    <!-- Navigation (appears on scroll) -->
    <nav id="main-nav" class="main-nav hidden">
        <div class="nav-content">
            <a href="#top" class="nav-logo">The World of Iran</a>
            <ul class="nav-links">
                <li><a href="#geography">Geography</a></li>
                <li><a href="#regions">Regions</a></li>
                <li><a href="#demographics">People</a></li>
                <li><a href="#regime">Politics</a></li>
                <li><a href="#culture">Culture</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero">
        <!-- Content added in Prompt 02 -->
    </section>

    <!-- Geography Section -->
    <section id="geography" class="section">
        <!-- Content added in Prompt 03 -->
    </section>

    <!-- Regional Breakdown (Main Scrollytelling) -->
    <section id="regions" class="scrollytelling-section">
        <!-- Content added in Prompt 04 -->
    </section>

    <!-- Demographics -->
    <section id="demographics" class="section">
        <!-- Content added in Prompt 05 -->
    </section>

    <!-- Islamic Regime -->
    <section id="regime" class="section">
        <!-- Content added in Prompt 06 -->
    </section>

    <!-- Cultural Quirks -->
    <section id="culture" class="section">
        <!-- Content added in Prompt 07 -->
    </section>

    <!-- Cultural Influence -->
    <section id="influence" class="section">
        <!-- Content added in Prompt 08 -->
    </section>

    <!-- Hospitality & Outro -->
    <section id="outro" class="outro">
        <!-- Content added in Prompt 09 -->
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 Lyola Explores the World | <a href="#">Contact</a> | <a href="#">About</a></p>
    </footer>

    <!-- Scripts -->
    <script src="https://unpkg.com/scrollama@3.2.0/build/scrollama.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    
    <script src="js/data.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/visualizations.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/scrollytelling.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

---

## CSS Foundation (css/main.css)

Create `css/main.css` with this foundation:

```css
/* ============================================
   RESET & BASE STYLES
   ============================================ */

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Color Palette - Persian Inspired */
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --color-accent: #f093fb;
    --color-teal: #4ecdc4;
    --color-gold: #ffd700;
    
    /* Neutrals */
    --color-bg-dark: #0a0a0a;
    --color-bg-card: rgba(20, 20, 30, 0.95);
    --color-text-primary: #ffffff;
    --color-text-secondary: #d0d0d0;
    --color-text-muted: #a0a0a0;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    
    /* Typography */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
    
    /* Transitions */
    --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Z-index layers */
    --z-progress: 1000;
    --z-nav: 900;
    --z-sticky: 100;
    --z-content: 10;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-body);
    background: var(--color-bg-dark);
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* ============================================
   PROGRESS BAR
   ============================================ */

.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    width: 0%;
    z-index: var(--z-progress);
    transition: width 0.1s linear;
}

/* ============================================
   NAVIGATION
   ============================================ */

.main-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    z-index: var(--z-nav);
    transform: translateY(0);
    transition: transform 0.3s ease;
    border-bottom: 1px solid rgba(102, 126, 234, 0.2);
}

.main-nav.hidden {
    transform: translateY(-100%);
}

.nav-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--color-primary);
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

/* ============================================
   SECTION LAYOUT
   ============================================ */

.section {
    min-height: 100vh;
    padding: var(--spacing-xl) var(--spacing-md);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.section-content {
    max-width: 1200px;
    width: 100%;
}

/* ============================================
   SCROLLYTELLING STRUCTURE
   ============================================ */

.scrollytelling-section {
    position: relative;
    padding: 0;
}

.sticky-container {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-sticky);
}

.steps-container {
    position: relative;
    z-index: var(--z-content);
    pointer-events: none;
}

.step {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: var(--spacing-lg) var(--spacing-md);
    pointer-events: none;
}

.step-content {
    background: var(--color-bg-card);
    backdrop-filter: blur(20px);
    padding: 3rem;
    border-radius: 20px;
    max-width: 550px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    opacity: 0.4;
    transform: translateX(-30px);
    transition: var(--transition-smooth);
    pointer-events: auto;
}

.step.active .step-content {
    opacity: 1;
    transform: translateX(0);
    border-color: rgba(102, 126, 234, 0.6);
}

/* ============================================
   UTILITY CLASSES
   ============================================ */

.hidden {
    display: none !important;
}

.visible {
    display: block !important;
}

.fade-in {
    animation: fadeIn 0.8s ease forwards;
}

.slide-up {
    animation: slideUp 0.8s ease forwards;
}

/* ============================================
   FOOTER
   ============================================ */

.footer {
    background: rgba(20, 20, 30, 0.8);
    padding: 2rem;
    text-align: center;
    color: var(--color-text-muted);
    border-top: 1px solid rgba(102, 126, 234, 0.2);
}

.footer a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer a:hover {
    color: var(--color-accent);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 768px) {
    .nav-links {
        display: none; /* Will add mobile menu in later prompts */
    }
    
    .step-content {
        padding: 2rem;
        max-width: 90%;
    }
    
    .section {
        padding: var(--spacing-lg) var(--spacing-sm);
    }
}
```

---

## JavaScript Foundation

### js/utils.js
```javascript
/**
 * Utility Functions
 */

// Debounce function for performance
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}

// Responsive breakpoints
const breakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1440
};

function isMobile() {
    return window.innerWidth < breakpoints.mobile;
}

function isTablet() {
    return window.innerWidth >= breakpoints.mobile && window.innerWidth < breakpoints.tablet;
}

function isDesktop() {
    return window.innerWidth >= breakpoints.tablet;
}
```

### js/main.js
```javascript
/**
 * Main Application Entry Point
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🇮🇷 The World of Iran - Initializing...');
    
    // Initialize components
    initProgressBar();
    initNavigation();
    initScrollytelling();
    initAnimations();
    
    console.log('✅ All systems ready');
});

// Progress Bar
function initProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollPercent = getScrollPercentage();
        progressBar.style.width = scrollPercent + '%';
    }, 50));
}

// Navigation
function initNavigation() {
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    let lastScroll = 0;
    
    // Show/hide nav on scroll
    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 500) {
            nav.classList.remove('hidden');
        } else {
            nav.classList.add('hidden');
        }
        
        // Hide on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    }, 100));
    
    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', throttle(() => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }, 100));
}

// Initialize Scrollytelling (detailed implementation in scrollytelling.js)
function initScrollytelling() {
    console.log('📜 Initializing scrollytelling...');
    // Will be implemented in Prompt 04
}

// Initialize Animations (detailed implementation in animations.js)
function initAnimations() {
    console.log('✨ Initializing animations...');
    // GSAP registration
    gsap.registerPlugin(ScrollTrigger);
    // Will be expanded in later prompts
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', debounce(() => {
    console.log('↔️ Window resized, updating layouts...');
    // Trigger updates for visualizations
    window.dispatchEvent(new CustomEvent('resize-complete'));
}, 300));
```

---

## README.md

Create a comprehensive README:

```markdown
# The World of Iran - Interactive Scrollytelling Website

An immersive, data-driven journey through Iran's geography, culture, and complexity.

## 🎯 Project Overview

This website uses scrollytelling techniques to present Iran beyond the headlines, featuring:
- Interactive maps and data visualizations
- Scroll-driven animations
- Regional breakdowns with cultural insights
- Educational content with engaging presentation

## 🛠 Technology Stack

- **Scrollama.js** - Scroll-driven interactions
- **D3.js** - Data visualizations and maps
- **GSAP** - Advanced animations
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling and animations

## 📁 Project Structure

```
iran-scrollytelling/
├── index.html              # Main page
├── css/                    # Stylesheets
├── js/                     # JavaScript modules
├── assets/                 # Images and data files
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. Clone or download this repository
2. Open `index.html` in your browser, or
3. Use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code Live Server extension
```

4. Navigate to `http://localhost:8000`

## 📊 Data Sources

All data and content based on:
- Original text: "The World of Iran" by Lyola
- Geographic data: Public domain sources
- Cultural information: Educational resources

## 🎨 Design Principles

- **Accessibility First** - WCAG AA compliant
- **Performance** - Optimized for smooth scrolling
- **Responsive** - Works on all device sizes
- **Progressive Enhancement** - Degrades gracefully

## 🧩 Features by Section

1. **Hero** - Animated introduction
2. **Geography** - Interactive map of Iran
3. **Regions** - 9 regional deep-dives with scrollytelling
4. **Demographics** - Population and ethnic breakdown
5. **Politics** - Islamic regime structure and timeline
6. **Culture** - 6 fun facts and quirks
7. **Influence** - Cultural reach across regions
8. **Outro** - Reflective conclusion

## 🔧 Development

### File Organization
- Each section has dedicated CSS and JS files
- Modular approach for easy maintenance
- Clear naming conventions

### Code Style
- Consistent indentation (2 spaces)
- Commented code sections
- ES6+ JavaScript features

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Content: © 2024 Lyola Explores the World
Code: MIT License (or your chosen license)

## 🤝 Contributing

Suggestions and improvements welcome!
Please open an issue or submit a pull request.

## 📞 Contact

Created by Lyola | [Website] | [Social Media]

---

**Note**: This is a scrollytelling experience best viewed on desktop.
Mobile version optimized for touch interactions.
```

---

## .gitignore

Create `.gitignore`:

```
# System Files
.DS_Store
Thumbs.db

# Editor Files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
npm-debug.log*

# Dependencies (if you add npm later)
node_modules/
package-lock.json

# Build files (if you add build process)
dist/
build/

# Environment variables
.env
.env.local

# Temporary files
*.tmp
.cache/
```

---

## Success Criteria

After completing this prompt, you should have:

✅ Complete file structure created  
✅ Base HTML with all sections scaffolded  
✅ CSS foundation with variables and utilities  
✅ JavaScript utilities and main initialization  
✅ Navigation and progress bar functional  
✅ README documentation complete  
✅ Project ready for section-by-section development  