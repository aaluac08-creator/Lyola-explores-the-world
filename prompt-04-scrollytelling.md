# PROMPT 04: Regional Breakdown - Core Scrollytelling Feature

## Objective
Implement the main scrollytelling experience with 9 regional deep-dives. This is the centerpiece of the website where users scroll through text while a sticky map updates to show each region.

---

## HTML Structure

Add to `index.html` in the `<section id="regions">`:

```html
<section id="regions" class="scrollytelling-section regions-section">
    <!-- Section Introduction -->
    <div class="scrolly-intro">
        <h2 class="section-title">Iran's Regional Tapestry</h2>
        <p class="section-subtitle">
            Each region has its own landscape, food, and people — making the country feel more 
            like a collection of small worlds stitched together.
        </p>
    </div>

    <!-- Main Scrollytelling Container -->
    <div class="scrolly-container">
        <!-- Sticky Map Visualization -->
        <div class="sticky-viz">
            <div id="regions-map" class="regions-map-container">
                <!-- D3.js map will render here -->
            </div>
            
            <!-- Region Info Card (updates with each step) -->
            <div class="region-info-card">
                <div class="region-icon" id="region-icon"></div>
                <h3 class="region-name" id="region-name">Northwest</h3>
                <div class="region-stats" id="region-stats">
                    <span class="stat">Population: 16-20%</span>
                    <span class="stat">Language: Azerbaijani</span>
                </div>
            </div>
        </div>

        <!-- Scrolling Steps Container -->
        <div class="steps-wrapper">
            <!-- Step 1: Northwest (Azerbaijani) -->
            <div class="step" data-step="0" data-region="northwest">
                <div class="step-content">
                    <span class="region-label">Region 1</span>
                    <h2>Northwest</h2>
                    <p class="region-subtitle">Azerbaijani Influenced Region</p>
                    <p>
                        <strong>Cities:</strong> Tabriz, Ardabil, Zanjan, Urmia
                    </p>
                    <p>
                        Mountainous and green compared to the deserts, this is the homeland of 
                        <strong>Azerbaijanis</strong>, who speak Azerbaijani Turkish and make up about 
                        <strong>16–20% of the population</strong>. The city of Tabriz is their cultural capital.
                    </p>
                    <p>
                        This region has strong ties to the Caucasus and Turkey, and Azeri traditions 
                        (like music, cuisine, and even language) are woven into Iran's identity.
                    </p>
                </div>
            </div>

            <!-- Step 2: West (Kurdistan) -->
            <div class="step" data-step="1" data-region="west">
                <div class="step-content">
                    <span class="region-label">Region 2</span>
                    <h2>West</h2>
                    <p class="region-subtitle">Kurdistan & Kermanshah</p>
                    <p>
                        <strong>Population:</strong> ~10% of Iran
                    </p>
                    <p>
                        Rugged Zagros Mountains dominate here, home to the <strong>Kurds</strong>, who 
                        make up around 10% of the population. Villages cling to the slopes, and Kurdish 
                        culture is known for lively dances, colorful clothes, and a long history of 
                        independence movements.
                    </p>
                </div>
            </div>

            <!-- Step 3: Southwest (Khuzestan) -->
            <div class="step" data-step="2" data-region="southwest">
                <div class="step-content">
                    <span class="region-label">Region 3</span>
                    <h2>Southwest</h2>
                    <p class="region-subtitle">Khuzestan Province & Persian Gulf Coast</p>
                    <p>
                        <strong>Population:</strong> ~2% Iranian Arabs
                    </p>
                    <p>
                        Hot, humid, and oil-rich. <strong>Iranian Arabs</strong> live here, especially 
                        near the Iraq border and the Gulf. The culture mixes Arab and Persian influences 
                        — you'll find Arabic spoken alongside Persian, seafood-heavy cuisine, and 
                        Gulf-style traditions.
                    </p>
                </div>
            </div>

            <!-- Step 4: Central Iran (Persian Heartland) -->
            <div class="step" data-step="3" data-region="central">
                <div class="step-content">
                    <span class="region-label">Region 4</span>
                    <h2>Central Iran</h2>
                    <p class="region-subtitle">The Persian Cultural Heartland</p>
                    <p>
                        <strong>Cities:</strong> Tehran, Isfahan, Yazd, Shiraz, Kashan
                    </p>
                    <p>
                        This is the Persian cultural heartland. <strong>Persians</strong> dominate here, 
                        and cities like <strong>Isfahan ("Half the World")</strong> showcase stunning Islamic 
                        architecture.
                    </p>
                    <p>
                        <strong>Shiraz</strong> is famous for poetry, gardens, and wine (before the ban). 
                        <strong>Yazd</strong> is a desert city with windcatchers and ancient Zoroastrian 
                        fire temples. And <strong>Tehran</strong>, the capital, is a chaotic mix of 
                        tradition and modernity.
                    </p>
                </div>
            </div>

            <!-- Step 5: West-Central (Lorestan) -->
            <div class="step" data-step="4" data-region="westcentral">
                <div class="step-content">
                    <span class="region-label">Region 5</span>
                    <h2>West-Central</h2>
                    <p class="region-subtitle">Lorestan, Ilam, Chaharmahal, Kohgiluyeh</p>
                    <p>
                        <strong>Population:</strong> ~6% Lurs
                    </p>
                    <p>
                        Mountainous and tribal, this is the land of the <strong>Lurs</strong>, a people 
                        related to Persians but with their own dialect and culture. Known for hospitality, 
                        storytelling, and traditional music, many still keep semi-nomadic traditions alive.
                    </p>
                </div>
            </div>

            <!-- Step 6: Southeast (Sistan & Baluchistan) -->
            <div class="step" data-step="5" data-region="southeast">
                <div class="step-content">
                    <span class="region-label">Region 6</span>
                    <h2>Southeast</h2>
                    <p class="region-subtitle">Sistan & Baluchistan</p>
                    <p>
                        <strong>Population:</strong> ~2% Baluchis
                    </p>
                    <p>
                        One of Iran's driest, least developed regions, home to the <strong>Baluchis</strong>. 
                        Their culture, clothing, and language connect them more with Pakistan and Afghanistan. 
                        Despite hardship, Baluch hospitality and traditions stand strong.
                    </p>
                </div>
            </div>

            <!-- Step 7: Northeast (Khorasan) -->
            <div class="step" data-step="6" data-region="northeast">
                <div class="step-content">
                    <span class="region-label">Region 7</span>
                    <h2>Northeast</h2>
                    <p class="region-subtitle">Khorasan – Mashhad & Turkmen Sahra</p>
                    <p>
                        Two worlds in one: <strong>Mashhad</strong>, Iran's second city, is the center of 
                        Shia pilgrimage thanks to Imam Reza's shrine.
                    </p>
                    <p>
                        Further north in Golestan, the <strong>Turkmens</strong> live in steppe lands, 
                        famous for horse breeding, carpets, and Central Asian traditions.
                    </p>
                </div>
            </div>

            <!-- Step 8: Northern Iran (Caspian) -->
            <div class="step" data-step="7" data-region="north">
                <div class="step-content">
                    <span class="region-label">Region 8</span>
                    <h2>Northern Iran</h2>
                    <p class="region-subtitle">Caspian Region – Gilan & Mazandaran</p>
                    <p>
                        Lush, rainy, and green — this region feels like another planet compared to Iran's 
                        deserts. Rice paddies, forests, and caviar come from here.
                    </p>
                    <p>
                        The people, called <strong>Gilaks and Mazandaranis</strong>, have their own 
                        languages and traditions. Iranians from other regions often come here for summer 
                        holidays.
                    </p>
                </div>
            </div>

            <!-- Step 9: Deserts -->
            <div class="step" data-step="8" data-region="desert">
                <div class="step-content">
                    <span class="region-label">Region 9</span>
                    <h2>The Deserts</h2>
                    <p class="region-subtitle">Dasht-e Lut & Dasht-e Kavir</p>
                    <p>
                        The extreme side of Iran: salt flats, shifting dunes, and some of the 
                        <strong>hottest recorded temperatures on Earth</strong>.
                    </p>
                    <p>
                        Few people live here, but the landscapes look straight out of a sci-fi movie.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## CSS Styles for Scrollytelling

Add to `css/components.css`:

```css
/* ============================================
   REGIONAL SCROLLYTELLING SECTION
   ============================================ */

.regions-section {
    background: #0a0a0a;
    position: relative;
}

/* Intro */
.scrolly-intro {
    text-align: center;
    padding: 8rem 2rem 4rem;
    max-width: 900px;
    margin: 0 auto;
}

.scrolly-intro .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.scrolly-intro .section-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    color: var(--color-text-secondary);
    line-height: 1.8;
}

/* ============================================
   SCROLLYTELLING CONTAINER
   ============================================ */

.scrolly-container {
    position: relative;
    padding: 0;
}

/* Sticky Visualization */
.sticky-viz {
    position: sticky;
    top: 80px; /* Account for fixed nav */
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    pointer-events: none;
}

.regions-map-container {
    width: 100%;
    max-width: 900px;
    height: 70%;
    position: relative;
}

/* Region Info Card (floating display) */
.region-info-card {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    padding: 1.5rem 2rem;
    border-radius: 16px;
    border: 1px solid rgba(102, 126, 234, 0.4);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    min-width: 280px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: auto;
}

.region-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: transform 0.4s ease;
}

.region-info-card:hover .region-icon {
    transform: scale(1.1) rotate(5deg);
}

.region-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.region-stats {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.region-stats .stat {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.region-stats .stat::before {
    content: '•';
    color: var(--color-primary);
    font-size: 1.2rem;
}

/* ============================================
   STEPS WRAPPER & INDIVIDUAL STEPS
   ============================================ */

.steps-wrapper {
    position: relative;
    z-index: 10;
    pointer-events: none;
}

.step {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    pointer-events: none;
}

/* Alternate sides for visual interest */
.step:nth-child(odd) {
    justify-content: flex-start;
}

.step:nth-child(even) {
    justify-content: flex-end;
}

/* First and last step spacing */
.step:first-child {
    padding-top: 20vh;
}

.step:last-child {
    padding-bottom: 30vh;
}

/* ============================================
   STEP CONTENT CARDS
   ============================================ */

.step-content {
    background: rgba(20, 20, 30, 0.95);
    backdrop-filter: blur(20px);
    padding: 3rem;
    border-radius: 20px;
    max-width: 550px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    opacity: 0.4;
    transform: translateX(-30px) scale(0.98);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: auto;
}

/* Even steps slide from right */
.step:nth-child(even) .step-content {
    transform: translateX(30px) scale(0.98);
}

/* Active state */
.step.active .step-content {
    opacity: 1;
    transform: translateX(0) scale(1);
    border-color: rgba(102, 126, 234, 0.6);
    box-shadow: 0 25px 70px rgba(102, 126, 234, 0.4);
}

/* Region Label */
.region-label {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-teal);
    background: rgba(78, 205, 196, 0.15);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    margin-bottom: 1rem;
    font-weight: 600;
}

/* Step Headings */
.step-content h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    margin-bottom: 0.5rem;
    color: var(--color-text-primary);
    font-weight: 800;
}

.region-subtitle {
    font-size: 1.1rem;
    color: var(--color-accent);
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-style: italic;
}

/* Step Paragraphs */
.step-content p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
}

.step-content p:last-child {
    margin-bottom: 0;
}

.step-content strong {
    color: var(--color-primary);
    font-weight: 700;
}

/* ============================================
   MAP VISUALIZATION STYLES
   ============================================ */

.region-path {
    fill: rgba(102, 126, 234, 0.2);
    stroke: rgba(102, 126, 234, 0.5);
    stroke-width: 2;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.region-path.active {
    fill: rgba(102, 126, 234, 0.5);
    stroke: var(--color-accent);
    stroke-width: 3;
    filter: drop-shadow(0 0 20px rgba(240, 147, 251, 0.6));
}

.region-path.dimmed {
    fill: rgba(50, 50, 60, 0.3);
    stroke: rgba(102, 126, 234, 0.2);
    opacity: 0.4;
}

.region-label-text {
    fill: var(--color-text-primary);
    font-size: 16px;
    font-weight: 600;
    text-anchor: middle;
    pointer-events: none;
    transition: all 0.6s ease;
    opacity: 0.6;
}

.region-label-text.active {
    font-size: 20px;
    opacity: 1;
    fill: var(--color-accent);
}

/* Regional Icons (decorative elements on map) */
.region-decoration {
    opacity: 0;
    transition: opacity 0.8s ease;
}

.region-decoration.active {
    opacity: 1;
}

/* ============================================
   RESPONSIVE - SCROLLYTELLING
   ============================================ */

@media (max-width: 1200px) {
    .sticky-viz {
        height: 60vh;
    }
    
    .regions-map-container {
        max-width: 700px;
    }
}

@media (max-width: 968px) {
    .sticky-viz {
        position: relative;
        height: 400px;
        top: 0;
        margin-bottom: 2rem;
    }
    
    .steps-wrapper {
        position: static;
    }
    
    .step {
        min-height: auto;
        padding: 2rem 1rem;
        justify-content: center !important;
    }
    
    .step:first-child {
        padding-top: 2rem;
    }
    
    .step:last-child {
        padding-bottom: 2rem;
    }
    
    .step-content {
        max-width: 100%;
        transform: none !important;
        opacity: 1 !important;
    }
    
    .region-info-card {
        position: static;
        margin: 1rem auto;
        max-width: 400px;
    }
}

@media (max-width: 600px) {
    .step-content {
        padding: 2rem 1.5rem;
    }
    
    .region-label {
        font-size: 0.7rem;
        padding: 0.3rem 0.8rem;
    }
}
```

---

## Scrollama.js Implementation

Add to `js/scrollytelling.js`:

```javascript
/**
 * Regional Scrollytelling Implementation
 * Uses Scrollama.js for scroll-driven interactions
 */

// Regional data for map visualization
const regionalData = {
    northwest: {
        name: 'Northwest',
        icon: '🏔️',
        population: '16-20%',
        language: 'Azerbaijani',
        color: '#667eea',
        center: [46.5, 38]
    },
    west: {
        name: 'West (Kurdistan)',
        icon: '⛰️',
        population: '~10%',
        language: 'Kurdish',
        color: '#f093fb',
        center: [47, 35]
    },
    southwest: {
        name: 'Southwest',
        icon: '🛢️',
        population: '~2%',
        language: 'Arabic',
        color: '#4ecdc4',
        center: [48.5, 31]
    },
    central: {
        name: 'Central Iran',
        icon: '🕌',
        population: '61%',
        language: 'Persian',
        color: '#764ba2',
        center: [52, 33]
    },
    westcentral: {
        name: 'West-Central',
        icon: '🎵',
        population: '~6%',
        language: 'Luri',
        color: '#ffd93d',
        center: [48, 33]
    },
    southeast: {
        name: 'Southeast',
        icon: '🏜️',
        population: '~2%',
        language: 'Baluchi',
        color: '#ff9a76',
        center: [60, 28]
    },
    northeast: {
        name: 'Northeast',
        icon: '🕌',
        population: 'Various',
        language: 'Persian/Turkmen',
        color: '#95e1d3',
        center: [59, 36]
    },
    north: {
        name: 'Northern Iran',
        icon: '🌲',
        population: 'Various',
        language: 'Gilaki/Mazandarani',
        color: '#38b2ac',
        center: [51, 37]
    },
    desert: {
        name: 'The Deserts',
        icon: '🌵',
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
        this.map = null;
        
        this.init();
    }
    
    init() {
        // Create the map
        this.createRegionalMap();
        
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
        
        // Update info card
        this.updateInfoCard(regionData);
        
        // Update map visualization
        this.highlightRegion(regionKey, regionData);
    }
    
    updateInfoCard(data) {
        const iconEl = document.getElementById('region-icon');
        const nameEl = document.getElementById('region-name');
        const statsEl = document.getElementById('region-stats');
        
        // Animate out
        gsap.to([iconEl, nameEl, statsEl], {
            opacity: 0,
            y: -10,
            duration: 0.3,
            onComplete: () => {
                // Update content
                iconEl.textContent = data.icon;
                nameEl.textContent = data.name;
                statsEl.innerHTML = `
                    <span class="stat">Population: ${data.population}</span>
                    <span class="stat">Language: ${data.language}</span>
                `;
                
                // Animate in
                gsap.to([iconEl, nameEl, statsEl], {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1
                });
            }
        });
    }
    
    highlightRegion(regionKey, regionData) {
        // Update map regions
        const allRegions = this.map.selectAll('.region-path');
        const labels = this.map.selectAll('.region-label-text');
        
        // Dim all regions
        allRegions
            .classed('active', false)
            .classed('dimmed', true)
            .transition()
            .duration(600);
        
        labels
            .classed('active', false)
            .transition()
            .duration(400);
        
        // Highlight current region
        const currentRegion = this.map.select(`[data-region="${regionKey}"]`);
        currentRegion
            .classed('active', true)
            .classed('dimmed', false)
            .transition()
            .duration(800);
        
        const currentLabel = this.map.select(`[data-label="${regionKey}"]`);
        currentLabel
            .classed('active', true)
            .transition()
            .duration(600);
        
        // Zoom to region (optional)
        this.zoomToRegion(regionData.center);
    }
    
    createRegionalMap() {
        const container = d3.select('#regions-map');
        const width = container.node().getBoundingClientRect().width;
        const height = container.node().getBoundingClientRect().height;
        
        this.map = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        
        // Create projection centered on Iran
        const projection = d3.geoMercator()
            .center([54, 32])
            .scale(width * 2.5)
            .translate([width / 2, height / 2]);
        
        const path = d3.geoPath().projection(projection);
        
        // Draw Iran base outline
        this.map.append('path')
            .datum({
                type: 'Polygon',
                coordinates: [[
                    [44, 39], [63, 39], [63, 25], [44, 25], [44, 39]
                ]]
            })
            .attr('d', path)
            .attr('fill', 'none')
            .attr('stroke', '#667eea')
            .attr('stroke-width', 2)
            .attr('opacity', 0.3);
        
        // Draw regional areas (simplified polygons)
        Object.entries(regionalData).forEach(([key, data]) => {
            const regionGroup = this.map.append('g')
                .attr('class', 'region-group');
            
            // Create simplified regional polygon
            const regionCoords = this.generateRegionPolygon(data.center, projection);
            
            regionGroup.append('path')
                .datum({
                    type: 'Polygon',
                    coordinates: [regionCoords]
                })
                .attr('class', 'region-path')
                .attr('d', path)
                .attr('data-region', key)
                .style('fill', data.color);
            
            // Add region label
            const [x, y] = projection(data.center);
            regionGroup.append('text')
                .attr('class', 'region-label-text')
                .attr('data-label', key)
                .attr('x', x)
                .attr('y', y)
                .text(data.name);
        });
        
        this.projection = projection;
        this.path = path;
    }
    
    generateRegionPolygon(center, projection) {
        // Generate approximate polygon around center point
        const [lon, lat] = center;
        const radius = 2; // degrees
        
        const points = [];
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const dx = Math.cos(angle) * radius;
            const dy = Math.sin(angle) * radius;
            points.push([lon + dx, lat + dy]);
        }
        points.push(points[0]); // Close the polygon
        
        return points;
    }
    
    zoomToRegion(center) {
        // Smooth pan to region
        const [x, y] = this.projection(center);
        const width = this.map.node().getBoundingClientRect().width;
        const height = this.map.node().getBoundingClientRect().height;
        
        // Calculate transform
        const scale = 1.2;
        const translate = [
            width / 2 - x * scale,
            height / 2 - y * scale
        ];
        
        // Apply transform with transition
        this.map.selectAll('.region-group, path')
            .transition()
            .duration(1000)
            .ease(d3.easeCubicInOut);
        // Note: Full zoom implementation would require more complex transforms
    }
}

// Initialize
let regionalScrollytelling;

function initScrollytelling() {
    if (document.querySelector('.regions-section')) {
        regionalScrollytelling = new RegionalScrollytelling();
        console.log('📜 Regional scrollytelling initialized');
    }
}
```

---

## Update main.js

```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🇮🇷 The World of Iran - Initializing...');
    
    initProgressBar();
    initNavigation();
    initHeroParticles();
    initHeroAnimations();
    initGeographyMap();
    initGeographyAnimations();
    
    // Initialize scrollytelling
    initScrollytelling();
    
    console.log('✅ All systems ready');
});
```

---

## Testing Checklist

✅ Scrollama triggers correctly at 50% viewport  
✅ Steps activate and deactivate smoothly  
✅ Map regions highlight appropriately  
✅ Info card updates with correct data  
✅ Text cards alternate sides (odd/even)  
✅ Opacity transitions work smoothly  
✅ Mobile view shows all content (no sticky)  
✅ Resize handling works correctly  
✅ First and last steps have proper spacing  
✅ All regional content displays correctly  

