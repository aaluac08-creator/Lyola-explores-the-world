/**
 * Regional Scrollytelling Implementation
 * Uses Scrollama.js for scroll-driven interactions
 */

const HAS_GSAP = typeof gsap !== 'undefined';

const historySummaryContent = {
    formation: {
        title: 'Landforms in Motion',
        description: 'Gondwana fractures while Indigenous societies cultivate Brazil\'s landscapes.'
    },
    collision: {
        title: 'When Worlds Collide',
        description: 'Cabral\'s arrival unleashes extraction, disease, and upheaval for Indigenous nations.'
    },
    melting: {
        title: 'Global Migrations',
        description: 'African, European, Asian, and Arab communities mix into Brazil\'s modern identity.'
    }
};

// Regional data for map visualization
const regionalData = {
    north: {
        name: 'North',
        icon: 'N',
        population: '8.1%',
        language: 'Portuguese',
        color: '#009b3a',  /* Brazilian green */
        center: [-60, -3]
    },
    northeast: {
        name: 'Northeast',
        icon: 'NE',
        population: '28.1%',
        language: 'Portuguese',
        color: '#fdd835',  /* Brazilian yellow */
        center: [-39, -10]
    },
    centralwest: {
        name: 'Central-West',
        icon: 'CW',
        population: '6.7%',
        language: 'Portuguese',
        color: '#002776',  /* Brazilian blue */
        center: [-55, -15]
    },
    southeast: {
        name: 'Southeast',
        icon: 'SE',
        population: '42.7%',
        language: 'Portuguese',
        color: '#764ba2',
        center: [-45, -19]
    },
    south: {
        name: 'South',
        icon: 'S',
        population: '14.4%',
        language: 'Portuguese',
        color: '#ffd93d',
        center: [-53, -29]
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
            { title: 'Ethnic Breakdown', subtitle: 'Brazil\'s diverse population' },
            { title: 'Pardos: 43%', subtitle: 'Mixed-race Brazilians' },
            { title: 'Whites: 43%', subtitle: 'European descendants' },
            { title: 'Blacks: 8%', subtitle: 'African descendants' },
            { title: 'Indigenous: 0.4%', subtitle: 'Native Brazilian peoples' },
            { title: 'Asians: 0.4%', subtitle: 'Asian descendants' }
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

class HistoryScrollytelling {
    constructor() {
        this.scroller = null;
        this.steps = document.querySelectorAll('.history-step');
        this.timelineNodes = document.querySelectorAll('.history-timeline .timeline-era');
        this.summary = document.querySelector('.history-summary');
        this.summaryTitle = document.getElementById('history-summary-title');
        this.summaryBody = document.getElementById('history-summary-body');
        this.init();
    }

    init() {
        if (!this.steps.length) {
            return;
        }

        this.scroller = scrollama();

        this.scroller
            .setup({
                step: '.history-step',
                offset: 0.65,
                progress: false,
                debug: false
            })
            .onStepEnter(this.handleStepEnter.bind(this));

        window.addEventListener('resize', debounce(() => {
            this.scroller.resize();
        }, 300));

        const firstEra = this.steps[0].dataset.era;
        this.steps[0].classList.add('active');
        this.setActiveEra(firstEra);
    }

    handleStepEnter(response) {
        const { element } = response;

        this.steps.forEach(step => step.classList.remove('active'));
        element.classList.add('active');

        this.setActiveEra(element.dataset.era);
    }

    setActiveEra(era) {
        if (!era) {
            return;
        }

        this.timelineNodes.forEach(node => {
            node.classList.toggle('active', node.dataset.era === era);
        });

        if (this.summary) {
            this.summary.setAttribute('data-era', era);
        }

        if (this.summaryTitle && this.summaryBody && historySummaryContent[era]) {
            this.summaryTitle.textContent = historySummaryContent[era].title;
            this.summaryBody.textContent = historySummaryContent[era].description;
        }
    }
}

let historyScrollytelling;

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

function initHistoryScrollytelling() {
    if (!document.querySelector('.history-section')) {
        return;
    }

    if (shouldEnableScrollama()) {
        historyScrollytelling = new HistoryScrollytelling();
        console.log('History scrollytelling initialized');
    } else {
        document.querySelectorAll('.history-step').forEach(step => {
            step.classList.add('active');
        });
        document.querySelectorAll('.history-timeline .timeline-era').forEach(node => {
            node.classList.add('active');
        });
    }
}
