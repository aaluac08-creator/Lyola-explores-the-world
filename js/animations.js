/**
 * GSAP Animation Timelines
 * Scroll-triggered animations
 */
const GSAP_AVAILABLE = typeof gsap !== 'undefined';
const SCROLLTRIGGER_AVAILABLE = typeof ScrollTrigger !== 'undefined';

if (GSAP_AVAILABLE && SCROLLTRIGGER_AVAILABLE) {
    gsap.registerPlugin(ScrollTrigger);
}

function revealElements(selectors) {
    const list = Array.isArray(selectors) ? selectors : [selectors];
    list.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        console.log(`Revealing ${elements.length} elements for selector: ${selector}`);
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
            // Also ensure display is not none
            if (window.getComputedStyle(element).display === 'none') {
                element.style.display = 'block';
            }
        });
    });
}


function initHeroAnimations() {
    // Fallback for no JS
    document.body.classList.add('js-enabled');

    const hero = document.querySelector('.hero');
    if (!hero) return;

    const animatedElements = hero.querySelectorAll('[data-animate]');

    if (!GSAP_AVAILABLE) {
        animatedElements.forEach(el => {
            el.classList.add('animated');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    animatedElements.forEach(el => {
        const delay = parseFloat(el.dataset.delay) || 0;
        const animationType = el.dataset.animate;

        if (animationType === 'bounce') {
            gsap.fromTo(
                el,
                { opacity: 0, y: -30 },
                {
                    opacity: 1,
                    y: 0,
                    delay,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    duration: 1.5,
                    onStart: () => el.classList.add('animated')
                }
            );
            return;
        }

        const fromVars = {
            opacity: 0,
            y: animationType === 'fade-up' ? 50 : 0
        };

        gsap.fromTo(
            el,
            fromVars,
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 1,
                delay,
                onStart: () => el.classList.add('animated'),
                onComplete: () => el.classList.add('animated')
            }
        );
    });
}

function initPreludeAnimations() {
    const preludeCard = document.querySelector('.prelude-card');
    if (!preludeCard) {
        console.log('Prelude card not found');
        return;
    }

    // Select individual paragraphs for staggered animation
    const paragraphs = preludeCard.querySelectorAll('p');
    console.log(`Found ${paragraphs.length} paragraphs in prelude`);
    
    // Always make sure paragraphs are visible first
    paragraphs.forEach((paragraph) => {
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateY(0)';
    });
    
    // Make sure highlights are also visible
    const highlights = preludeCard.querySelectorAll('.story-highlight');
    highlights.forEach((highlight) => {
        highlight.style.opacity = '1';
        highlight.style.transform = 'translateY(0)';
    });
    
    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        console.log('GSAP or ScrollTrigger not available, using simple reveal');
        return;
    }

    // Only run animations on larger screens
    if (window.innerWidth >= breakpoints.laptop) {
        // Set initial hidden state for animation
        paragraphs.forEach((paragraph, index) => {
            gsap.set(paragraph, {
                opacity: 0,
                y: 30
            });
        });
        
        // Set initial hidden state for highlights
        if (highlights.length > 0) {
            gsap.set(highlights, {
                opacity: 0,
                y: 20
            });
        }

        // Animate paragraphs with staggered effect
        const paragraphAnimation = gsap.to(paragraphs, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2, // Stagger animation for smooth sequential appearance
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#prelude',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
        
        console.log('Prelude paragraph animation initialized', paragraphAnimation);
        
        // Animate the story highlight separately for emphasis
        if (highlights.length > 0) {
            console.log(`Found ${highlights.length} highlights in prelude`);
            
            const highlightAnimation = gsap.to(highlights, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.4, // Slight delay for emphasis
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#prelude',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
            
            console.log('Prelude highlight animation initialized', highlightAnimation);
        }
    }
}

function initGeographyAnimations() {
    // Ensure elements are visible on all devices
    revealElements(['.geography-section .section-header > *', '.landscape-grid', '.landscape-card', '.diversity-statement blockquote']);
    
    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        return;
    }

    // Only run animations on larger screens
    if (window.innerWidth >= breakpoints.laptop) {
        // Animate section header
        gsap.from('.geography-section .section-header > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.geography-section .section-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate diversity statement
        gsap.from('.diversity-statement blockquote', {
            opacity: 0,
            y: 40,
            duration: 1,
            scrollTrigger: {
                trigger: '.diversity-statement',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

function initDemographicsAnimations() {
    // Always call revealElements to ensure elements are visible
    revealElements(['.demographics-section .section-header > *', '.language-network-container > *', '.stats-grid', '.stats-grid .stat-card']);
    
    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        return;
    }

    // Only run animations on larger screens
    if (window.innerWidth >= breakpoints.laptop) {
        // Animate section header
        gsap.from('.demographics-section .section-header > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.demographics-section .section-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate language network
        gsap.from('.language-network-container > *', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.language-network-container',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate stats grid
        gsap.from('.stats-grid .stat-card', {
            opacity: 0,
            scale: 0.9,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

function initRegimeAnimations() {
    // Always call revealElements to ensure elements are visible
    revealElements(['.regime-section .section-header > *', '.religion-container > *', '.timeline-container > *', '.government-structure > *', '.duality-container > *', '.women-academia > *', '.protest-section blockquote']);
    
    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        return;
    }

    // Only run animations on larger screens
    if (window.innerWidth >= breakpoints.laptop) {
        // Animate section header
        gsap.from('.regime-section .section-header > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.regime-section .section-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate religion container
        gsap.from('.religion-container > *', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.religion-container',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate timeline
        gsap.from('.timeline-container > *', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.timeline-container',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate government structure
        gsap.from('.government-structure > *', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.government-structure',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate duality container
        gsap.from('.duality-container > *', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.duality-container',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate women in academia
        gsap.from('.women-academia > *', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.women-academia',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate protest quote
        gsap.from('.protest-section blockquote', {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: '.protest-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

function initQuirksAnimations() {
    const cards = document.querySelectorAll('.quirk-card');
    if (!cards.length) {
        return;
    }

    const revealCards = () => {
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });
    };

    revealCards();

    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        return;
    }

    gsap.from('.quirks-section .section-header > *', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.quirks-section .section-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

}

function initHospitalityAnimations() {
    // Always call revealElements to ensure elements are visible
    revealElements(['.hospitality-section .section-header > *', '.story-card', '.hospitality-visual > *']);
    
    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        return;
    }

    // Only run animations on larger screens
    if (window.innerWidth >= breakpoints.laptop) {
        // Animate section header
        gsap.from('.hospitality-section .section-header > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.hospitality-section .section-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate story cards
        gsap.from('.story-card', {
            opacity: 0,
            y: 50,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.hospitality-stories',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate tea visual
        gsap.from('.hospitality-visual > *', {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.hospitality-visual',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

function initDualitiesAnimations() {
    // Always call revealElements to ensure elements are visible
    revealElements(['.dualities-section .section-header > *', '.duality-pair', '.final-thought p']);
    
    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        return;
    }

    // Only run animations on larger screens
    if (window.innerWidth >= breakpoints.laptop) {
        // Animate section header
        gsap.from('.dualities-section .section-header > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.dualities-section .section-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate duality pairs
        gsap.from('.duality-pair', {
            opacity: 0,
            x: -50,
            duration: 0.7,
            stagger: 0.25,
            scrollTrigger: {
                trigger: '.duality-pairs',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate final thought
        gsap.from('.final-thought p', {
            opacity: 0,
            scale: 0.95,
            duration: 1,
            scrollTrigger: {
                trigger: '.final-thought',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

function initOutroAnimations() {
    // Always call revealElements to ensure elements are visible
    revealElements('.outro-content > *');
    
    if (!GSAP_AVAILABLE || !SCROLLTRIGGER_AVAILABLE) {
        return;
    }

    // Only run animations on larger screens
    if (window.innerWidth >= breakpoints.laptop) {
        // Animate outro content
        gsap.from('.outro-content > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.outro-content',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}

function initLegacyAnimations() {
    // Placeholder for legacy animations
}