/**
 * Regional Scrollytelling Implementation
 * Uses Scrollama.js for scroll-driven interactions
 */

const HAS_GSAP = typeof gsap !== 'undefined';

// Regional data for map visualization
const regionalData = {
    northwest: {
        name: 'Northwest',
        icon: 'NW',
        population: '16-20%',
        language: 'Azerbaijani',
        color: '#667eea',
        center: [46.5, 38]
    },
    west: {
        name: 'West (Kurdistan)',
        icon: 'West',
        population: '~10%',
        language: 'Kurdish',
        color: '#f093fb',
        center: [47, 35]
    },
    southwest: {
        name: 'Southwest',
        icon: 'SW',
        population: '~2%',
        language: 'Arabic',
        color: '#4ecdc4',
        center: [48.5, 31]
    },
    central: {
        name: 'Central Iran',
        icon: 'Central',
        population: '61%',
        language: 'Persian',
        color: '#764ba2',
        center: [52, 33]
    },
    westcentral: {
        name: 'West-Central',
        icon: 'WC',
        population: '~6%',
        language: 'Luri',
        color: '#ffd93d',
        center: [48, 33]
    },
    southeast: {
        name: 'Southeast',
        icon: 'SE',
        population: '~2%',
        language: 'Baluchi',
        color: '#ff9a76',
        center: [60, 28]
    },
    northeast: {
        name: 'Northeast',
        icon: 'NE',
        population: 'Various',
        language: 'Persian/Turkmen',
        color: '#95e1d3',
        center: [59, 36]
    },
    north: {
        name: 'Northern Iran',
        icon: 'North',
        population: 'Various',
        language: 'Gilaki/Mazandarani',
        color: '#38b2ac',
        center: [51, 37]
    },
    desert: {
        name: 'The Deserts',
        icon: 'Desert',
        population: 'Sparse',
        language: 'Persian',
        color: '#ffd93d',
        center: [56, 32]
    }
};
class RegionalScrollytelling {
    constructor() {
        this.currentStep = 0;
        this.scroller = null;
        
        this.init();
    }
    
    init() {
        // Setup Scrollama
        this.setupScrollama();
        
        // Initialize first region
        this.updateRegion(0);
    }
    
    setupScrollama() {
        // Initialize Scrollama
        this.scroller = scrollama();
        
        this.scroller
            .setup({
                step: '.step',
                offset: 0.5, // Trigger when step reaches middle of viewport
                progress: true, // Enable progress tracking
                debug: false // Set to true for development
            })
            .onStepEnter(this.handleStepEnter.bind(this))
            .onStepExit(this.handleStepExit.bind(this))
            .onStepProgress(this.handleStepProgress.bind(this));
        
        // Handle resize
        window.addEventListener('resize', debounce(() => {
            this.scroller.resize();
        }, 300));
    }
    
    handleStepEnter(response) {
        const { index, direction } = response;
        
        // Remove active class from all steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Add active class to current step
        response.element.classList.add('active');
        
        // Update visualization
        this.updateRegion(index);
        this.currentStep = index;
    }
    
    handleStepExit(response) {
        // Optional: handle step exit
    }
    
    handleStepProgress(response) {
        // Optional: use progress (0-1) for smooth transitions
        const { progress } = response;
        
        // Can be used for gradual animations
        // Example: fade effects based on scroll progress
    }
    
    updateRegion(stepIndex) {
        const steps = document.querySelectorAll('.step');
        const currentStep = steps[stepIndex];
        const regionKey = currentStep.dataset.region;
        const regionData = regionalData[regionKey];
        
        if (!regionData) return;
        
        // Currently no map visualization since .sticky-viz was removed
        // Could update other elements here if needed
    }
    
    // Map-related functions were removed when .sticky-viz was deleted
}

// Initialize
let regionalScrollytelling;

function activateStaticSteps(stepSelector, opts = {}) {
    const { addVisible = false, addActive = true } = opts;
    const steps = document.querySelectorAll(stepSelector);
    steps.forEach(step => {
        if (addActive) {
            step.classList.add('active');
        }
        if (addVisible) {
            step.classList.add('visible');
        }
        
        // Make sure content is visible and accessible on mobile
        const content = step.querySelector('.step-content');
        if (content) {
            content.style.opacity = '1';
            content.style.transform = 'none';
        }
    });
}

function initScrollytelling() {
    if (!document.querySelector('.regions-section')) {
        return;
    }

    if (shouldEnableScrollama()) {
        regionalScrollytelling = new RegionalScrollytelling();
        console.log('Regional scrollytelling initialized');
    } else {
        activateStaticSteps('.step', { addVisible: true, addActive: true });
        console.log('Regional scrollytelling disabled on small screens - static steps activated');
    }
}

/**
 * Demographics Scrollytelling
 * Controls the donut chart based on scroll position
 */

class DemographicsScrollytelling {
    constructor() {
        this.scroller = null;
        this.currentStep = 0;
        this.init();
    }
    
    init() {
        // Setup Scrollama for demographics steps
        this.scroller = scrollama();
        
        this.scroller
            .setup({
                step: '.demo-step',
                offset: 0.6,
                progress: true,
                debug: false
            })
            .onStepEnter(this.handleStepEnter.bind(this))
            .onStepProgress(this.handleStepProgress.bind(this));
        
        // Handle resize
        window.addEventListener('resize', debounce(() => {
            this.scroller.resize();
        }, 300));
    }
    
    handleStepEnter(response) {
        const { index, direction } = response;
        
        // Remove active class from all steps
        document.querySelectorAll('.demo-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Add active class to current step
        response.element.classList.add('active');
        
        // Update chart
        if (demographicsChart) {
            demographicsChart.updateChart(index);
        }
        
        // Update title card
        this.updateTitleCard(index);
        
        this.currentStep = index;
    }
    
    handleStepProgress(response) {
        // Optional: smooth transitions based on scroll progress
    }
    
    updateTitleCard(stepIndex) {
        const titleEl = document.getElementById('chart-title');
        const subtitleEl = document.getElementById('chart-subtitle');
        
        const titles = [
            { title: 'Ethnic Breakdown', subtitle: 'Iran\'s diverse population' },
            { title: 'Persians: 61%', subtitle: 'The largest ethnic group' },
            { title: 'Azeris: 16%', subtitle: 'Northwestern influence' },
            { title: 'Kurds: 10%', subtitle: 'Mountain communities' },
            { title: 'Lurs: 6%', subtitle: 'Western tribal heritage' },
            { title: 'Arabs: 2%', subtitle: 'Southern coastal regions' },
            { title: 'Baluchis: 2%', subtitle: 'Southeastern frontier' },
            { title: 'Turkmen & Others: 3%', subtitle: 'Northern steppes & more' },
            { title: 'Linguistic Diversity', subtitle: 'Many languages, one nation' }
        ];
        
        const data = titles[stepIndex] || titles[0];
        
        // Animate title change
        gsap.to([titleEl, subtitleEl], {
            opacity: 0,
            y: -10,
            duration: 0.3,
            onComplete: () => {
                titleEl.textContent = data.title;
                subtitleEl.textContent = data.subtitle;
                
                gsap.to([titleEl, subtitleEl], {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1
                });
            }
        });
    }
}

// Initialize
let demographicsScrollytelling;

function initDemographicsScrollytelling() {
    if (!document.querySelector('.demographics-section')) {
        return;
    }

    if (shouldEnableScrollama()) {
        demographicsScrollytelling = new DemographicsScrollytelling();
        console.log('Demographics scrollytelling initialized');
    } else {
        activateStaticSteps('.demo-step', { addVisible: true, addActive: true });
        if (typeof demographicsChart !== 'undefined' && demographicsChart && typeof demographicsChart.updateChart === 'function') {
            // Update chart to show all data at once on mobile
            demographicsChart.updateChart(8);
        }
        console.log('Demographics scrollytelling disabled on small screens - static steps activated');
    }
}
