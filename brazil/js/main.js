/**
 * Main Application Entry Point
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('The World of Brazil - Initializing...');
    
    initProgressBar();
    initNavigation();
    initHeroParticles();
    initHeroAnimations();
    initPreludeAnimations();
    initHistoryScrollytelling();
    initGeographyNarrative();
    initGeographyAnimations();
    setupImagePlaceholders();
    initScrollytelling();
    
    // Initialize government section
    
    // Initialize quirks section
    initQuirksAnimations();
    
    // Initialize legacy section
    initLegacyVisualizations();
    initLegacyAnimations();
    initLegacyAccordion();
    initGeneralSectionAnimations();
    
    // Initialize hospitality section
    initHospitalityAnimations();
    
    // Initialize dualities section
    initDualitiesAnimations();
    
    // Initialize outro section
    initOutroAnimations();
    
    // Initialize landscape swiper
    initLandscapeSwiper();
    
    // Initialize nowruz image functionality
    initNowruzImage();
    
    console.log('All systems ready');
    console.log('Journey through Brazil initialization complete.');
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

    // Mobile navigation
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileNavToggle && mobileNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', debounce(() => {
    console.log('Window resized, updating layouts...');
    // Trigger updates for visualizations
    window.dispatchEvent(new CustomEvent('resize-complete'));
}, 300));

// Handle resize for all visualizations
window.addEventListener('resize-complete', () => {
    if (demographicsChart) demographicsChart.resize();
    if (languageNetwork) languageNetwork.resize();
});

// Nowruz Image Functionality
function initNowruzImage() {
    const nowruzImage = document.getElementById('nowruz-image');
    const countryTags = document.querySelectorAll('.country-tag');
    
    if (!nowruzImage) return;
    
    countryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            
            // Remove active class from all tags
            countryTags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            this.classList.add('active');
            
            // Update image source based on country
            const imageExtension = getImageExtension(country);
            nowruzImage.src = `assets/images/Nowruz/${country}.${imageExtension}`;
            nowruzImage.alt = `Nowruz Celebration in ${country}`;
            
            // Add fade effect
            nowruzImage.style.opacity = '0';
            setTimeout(() => {
                nowruzImage.style.opacity = '1';
            }, 10);
        });
    });
}

// Helper function to get image extension for a country
function getImageExtension(country) {
    const extensions = {
        'Brazil': 'jpg',
        'Afghanistan': 'jpeg',
        'Azerbaijan': 'jpg',
        'Tajikistan': 'jpg',
        'Kazakhstan': 'png',
        'Uzbekistan': 'jpg'
    };
    
    return extensions[country] || 'jpg'; // default to jpg if country not found
}

// Landscape Swiper Functionality
function initLandscapeSwiper() {
    const swiperContainer = document.querySelector('.landscape-swiper');
    if (!swiperContainer) return;
    
    const wrapper = document.querySelector('.landscape-grid.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const paginationContainer = document.querySelector('.swiper-pagination');
    
    if (!wrapper || !slides.length) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Create pagination bullets
    for (let i = 0; i < totalSlides; i++) {
        const bullet = document.createElement('div');
        bullet.classList.add('swiper-pagination-bullet');
        if (i === 0) bullet.classList.add('swiper-pagination-bullet-active');
        bullet.addEventListener('click', () => goToSlide(i));
        paginationContainer.appendChild(bullet);
    }
    
    const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
    
    // Initialize swiper
    function initSwiper() {
        updateSlidePosition();
    }
    
    // Update slide position and classes
    function updateSlidePosition() {
        // Don't translate the wrapper anymore, just update slide classes for the new approach
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
                slide.classList.add('prev');
            } else if (index === (currentIndex + 1) % totalSlides) {
                slide.classList.add('next');
            }
        });
        
        // Update pagination
        paginationBullets.forEach((bullet, index) => {
            bullet.classList.toggle('swiper-pagination-bullet-active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentIndex = index;
        updateSlidePosition();
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Event listeners
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    // Add swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    swiperContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    swiperContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for swipe to be considered
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left - next slide
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - previous slide
            prevSlide();
        }
    }
    
    // Initialize
    initSwiper();
    
    console.log('Landscape swiper initialized');
}

// Accordion functionality for legacy section
function initLegacyAccordion() {
    const accordions = document.querySelectorAll('.legacy-accordion');
    
    accordions.forEach(accordion => {
        const accordionItems = accordion.querySelectorAll('.accordion-item');
        
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            
            header.addEventListener('click', () => {
                const isExpanded = header.getAttribute('aria-expanded') === 'true';
                
                // Toggle current accordion item without affecting others
                header.setAttribute('aria-expanded', !isExpanded);
                content.setAttribute('aria-hidden', isExpanded);
                
                if (isExpanded) {
                    content.style.maxHeight = '0';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    });
}
