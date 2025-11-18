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
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1200
};

function isMobile() {
    return window.innerWidth < breakpoints.tablet;
}

function isTablet() {
    return window.innerWidth >= breakpoints.tablet && window.innerWidth < breakpoints.laptop;
}

function isLaptop() {
    return window.innerWidth >= breakpoints.laptop && window.innerWidth < breakpoints.desktop;
}

function isDesktop() {
    return window.innerWidth >= breakpoints.desktop;
}

function shouldEnableScrollama() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (typeof isDesktop === 'function') {
        return isLaptop() || isDesktop();
    }
    return window.innerWidth >= breakpoints.laptop;
}

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

/**
 * Image Placeholder System
 * Creates placeholder images if actual images are missing
 */

function setupImagePlaceholders() {
    const images = document.querySelectorAll('.landscape-image img');
    
    images.forEach(img => {
        // If image fails to load, create a gradient placeholder
        img.addEventListener('error', function() {
            const card = this.closest('.landscape-card');
            const landscape = card.dataset.landscape;
            
            // Create canvas placeholder
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');
            
            // Gradient based on landscape type
            const gradients = {
                rainforest: ['#2d5016', '#4a7c23'],
                mountains: ['#4a5568', '#718096'],
                beaches: ['#2c5f9e', '#4299e1'],
                desert: ['#d69e2e', '#f6ad55']
            };
            
            const colors = gradients[landscape] || ['#667eea', '#764ba2'];
            const gradient = ctx.createLinearGradient(0, 0, 800, 600);
            gradient.addColorStop(0, colors[0]);
            gradient.addColorStop(1, colors[1]);
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 800, 600);
            
            // Add text
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.font = 'bold 48px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(landscape.toUpperCase(), 400, 300);
            
            // Replace image with canvas
            this.src = canvas.toDataURL();
        });
    });
}