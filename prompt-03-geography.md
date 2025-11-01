# PROMPT 03: Geography Section with Interactive Map

## Objective
Create an engaging geography section with an interactive D3.js map showing Iran, its neighbors, and major geographic features.

---

## HTML Structure

Add to `index.html` in the `<section id="geography">`:

```html
<section id="geography" class="section geography-section">
    <div class="section-content">
        <!-- Section Header -->
        <div class="section-header" data-scroll-reveal>
            <span class="section-label">Part 1</span>
            <h2 class="section-title">Geography & Diversity</h2>
            <p class="section-intro">
                Iran shares borders with eight countries and is the 17th largest country by area, 
                with over 92 million people. It's not just deserts like many people assume.
            </p>
        </div>

        <!-- Map Container -->
        <div class="map-container">
            <div id="iran-map" class="interactive-map"></div>
            
            <!-- Map Legend -->
            <div class="map-legend">
                <h4>Geographic Features</h4>
                
                        <span class="legend-icon" style="background: #4ecdc4;"></span>
                        <span>Caspian Sea & Rainforests</span>
    
                    <div class="legend-entry">
                        <span class="legend-icon" style="background: #a8dadc;"></span>
                        <span>Mountain Ranges</span>
                    </div>
                    <div class="legend-entry">
                        <span class="legend-icon" style="background: #ffd93d;"></span>
                        <span>Deserts</span>
                    </div>
                    <div class="legend-entry">
                        <span class="legend-icon" style="background: #667eea;"></span>
                        <span>Persian Gulf</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Landscape Grid -->
        <div class="landscape-grid">
            <div class="landscape-card" data-landscape="rainforest">
                <div class="landscape-image">
                    <img src="assets/images/geography/rainforest.jpg" alt="Caspian Rainforest" loading="lazy">
                </div>
                <div class="landscape-content">
                    <h3>Rainforests</h3>
                    <p>Lush forests up north near the Caspian Sea</p>
                </div>
            </div>

            <div class="landscape-card" data-landscape="mountains">
                <div class="landscape-image">
                    <img src="assets/images/geography/mountains.jpg" alt="Alborz Mountains" loading="lazy">
                </div>
                <div class="landscape-content">
                    <h3>Snowy Mountains</h3>
                    <p>The Alborz and Zagros mountain ranges</p>
                </div>
            </div>

            <div class="landscape-card" data-landscape="beaches">
                <div class="landscape-image">
                    <img src="assets/images/geography/beach.jpg" alt="Persian Gulf" loading="lazy">
                </div>
                <div class="landscape-content">
                    <h3>Beaches</h3>
                    <p>Coastlines along the Persian Gulf</p>
                </div>
            </div>

            <div class="landscape-card" data-landscape="desert">
                <div class="landscape-image">
                    <img src="assets/images/geography/desert.jpg" alt="Dasht-e Lut Desert" loading="lazy">
                </div>
                <div class="landscape-content">
                    <h3>Desert</h3>
                    <p>Dasht-e Lut, one of the hottest places on Earth</p>
                </div>
            </div>
        </div>

        <!-- Diversity Statement -->
        <div class="diversity-statement" data-scroll-reveal>
            <blockquote>
                "But Iran isn't just diverse in landscapes — its regions and people are just as unique. 
                Each region has its own landscape, food, and people — making the country feel more like 
                a collection of small worlds stitched together."
            </blockquote>
        </div>
    </div>
</section>
```

---

## CSS Styles

Add to `css/components.css`:

```css
/* ============================================
   GEOGRAPHY SECTION
   ============================================ */

.geography-section {
    background: linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%);
    padding: 8rem 2rem;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.section-label {
    display: inline-block;
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-teal);
    background: rgba(78, 205, 196, 0.1);
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-intro {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    line-height: 1.8;
    color: var(--color-text-secondary);
    max-width: 700px;
    margin: 0 auto;
}

/* ============================================
   INTERACTIVE MAP
   ============================================ */

.map-container {
    position: relative;
    background: rgba(20, 20, 30, 0.6);
    border-radius: 20px;
    padding: 3rem;
    margin: 4rem 0;
    border: 1px solid rgba(102, 126, 234, 0.2);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.interactive-map {
    width: 100%;
    height: 600px;
    position: relative;
}

/* Map Legend */
.map-legend {
    position: absolute;
    top: 3rem;
    right: 3rem;
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(102, 126, 234, 0.3);
    min-width: 200px;
}

.map-legend h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--color-text-primary);
    font-weight: 600;
}

.legend-entries {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.legend-entry {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

.legend-icon {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    flex-shrink: 0;
}

/* Map Elements (D3.js will target these) */
.map-country {
    fill: #2a2a3e;
    stroke: #667eea;
    stroke-width: 1;
    transition: all 0.3s ease;
    cursor: pointer;
}

.map-country.iran {
    fill: #667eea;
    stroke: #764ba2;
    stroke-width: 2;
}

.map-country:hover {
    fill: #764ba2;
    stroke: #f093fb;
    stroke-width: 2;
}

.map-feature {
    opacity: 0;
    transition: opacity 0.6s ease;
}

.map-feature.visible {
    opacity: 1;
}

.map-label {
    font-size: 14px;
    font-weight: 600;
    fill: var(--color-text-primary);
    pointer-events: none;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.map-city {
    fill: var(--color-gold);
    stroke: rgba(255, 215, 0, 0.6);
    stroke-width: 2;
    cursor: pointer;
    transition: all 0.3s ease;
}

.map-city:hover {
    fill: var(--color-accent);
    r: 8;
}

/* Map Tooltip */
.map-tooltip {
    position: absolute;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-primary);
    font-size: 0.9rem;
    color: var(--color-text-primary);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 100;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.map-tooltip.visible {
    opacity: 1;
}

/* ============================================
   LANDSCAPE GRID
   ============================================ */

.landscape-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
}

.landscape-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background: rgba(20, 20, 30, 0.8);
    border: 1px solid rgba(102, 126, 234, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.landscape-card:hover {
    transform: translateY(-10px);
    border-color: rgba(102, 126, 234, 0.6);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.landscape-image {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.landscape-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.landscape-card:hover .landscape-image img {
    transform: scale(1.1);
}

/* Image overlay gradient */
.landscape-image::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(10, 10, 10, 0.9), transparent);
    pointer-events: none;
}

.landscape-content {
    padding: 1.5rem;
    position: relative;
}

.landscape-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-text-primary);
    font-weight: 700;
}

.landscape-content p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
}

/* ============================================
   DIVERSITY STATEMENT
   ============================================ */

.diversity-statement {
    margin: 4rem auto;
    max-width: 900px;
    text-align: center;
}

.diversity-statement blockquote {
    font-family: var(--font-heading);
    font-size: clamp(1.3rem, 3vw, 2rem);
    line-height: 1.6;
    color: var(--color-text-primary);
    font-style: italic;
    position: relative;
    padding: 2rem 3rem;
    border-left: 4px solid var(--color-primary);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    border-radius: 12px;
}

.diversity-statement blockquote::before {
    content: '"';
    font-size: 4rem;
    color: var(--color-primary);
    position: absolute;
    top: 0;
    left: 1rem;
    line-height: 1;
    opacity: 0.3;
}

/* ============================================
   RESPONSIVE - GEOGRAPHY
   ============================================ */

@media (max-width: 1024px) {
    .map-legend {
        position: static;
        margin-top: 2rem;
        max-width: 300px;
    }
    
    .interactive-map {
        height: 500px;
    }
}

@media (max-width: 768px) {
    .geography-section {
        padding: 4rem 1rem;
    }
    
    .map-container {
        padding: 1.5rem;
    }
    
    .interactive-map {
        height: 400px;
    }
    
    .landscape-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .diversity-statement blockquote {
        padding: 1.5rem;
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .interactive-map {
        height: 300px;
    }
    
    .landscape-image {
        height: 200px;
    }
}
```

---

## D3.js Map Visualization

Create `js/visualizations.js` or add this section:

```javascript
/**
 * Iran Geography Map Visualization
 * Uses D3.js to create an interactive map
 */

class IranMap {
    constructor(containerId) {
        this.container = d3.select(`#${containerId}`);
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = this.container.node().getBoundingClientRect().height;
        
        // Map data - simplified GeoJSON
        this.mapData = this.createMapData();
        
        // Create SVG
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        // Create projection
        this.projection = d3.geoMercator()
            .center([54, 32]) // Center on Iran
            .scale(this.width * 1.8)
            .translate([this.width / 2, this.height / 2]);
        
        this.path = d3.geoPath().projection(this.projection);
        
        // Initialize
        this.init();
        this.setupInteractions();
    }
    
    createMapData() {
        // Simplified map data structure
        // In production, load from iran-map.json
        return {
            countries: [
                { name: 'Iran', coordinates: [[44, 39], [63, 39], [63, 25], [44, 25], [44, 39]], isIran: true },
                { name: 'Turkey', coordinates: [[44, 39], [37, 42], [37, 37], [44, 39]], isIran: false },
                { name: 'Iraq', coordinates: [[44, 37], [48, 37], [48, 30], [44, 30], [44, 37]], isIran: false },
                { name: 'Azerbaijan', coordinates: [[45, 39], [50, 41], [48, 39], [45, 39]], isIran: false },
                { name: 'Armenia', coordinates: [[44, 39], [46, 40], [46, 39], [44, 39]], isIran: false },
                { name: 'Turkmenistan', coordinates: [[54, 37], [62, 42], [62, 37], [54, 37]], isIran: false },
                { name: 'Afghanistan', coordinates: [[60, 37], [63, 37], [63, 29], [60, 29], [60, 37]], isIran: false },
                { name: 'Pakistan', coordinates: [[60, 29], [63, 29], [63, 25], [60, 25], [60, 29]], isIran: false }
            ],
            features: [
                { type: 'mountains', name: 'Alborz Mountains', coords: [51, 36], color: '#a8dadc' },
                { type: 'mountains', name: 'Zagros Mountains', coords: [48, 33], color: '#a8dadc' },
                { type: 'sea', name: 'Caspian Sea', coords: [51, 38], color: '#4ecdc4' },
                { type: 'sea', name: 'Persian Gulf', coords: [52, 27], color: '#667eea' },
                { type: 'desert', name: 'Dasht-e Lut', coords: [59, 31], color: '#ffd93d' },
                { type: 'desert', name: 'Dasht-e Kavir', coords: [54, 34], color: '#ffd93d' }
            ],
            cities: [
                { name: 'Tehran', coords: [51.4, 35.7], capital: true },
                { name: 'Isfahan', coords: [51.7, 32.6] },
                { name: 'Shiraz', coords: [52.5, 29.6] },
                { name: 'Tabriz', coords: [46.3, 38.1] },
                { name: 'Mashhad', coords: [59.6, 36.3] }
            ]
        };
    }
    
    init() {
        // Draw countries
        const countries = this.svg.selectAll('.map-country')
            .data(this.mapData.countries)
            .enter()
            .append('path')
            .attr('class', d => d.isIran ? 'map-country iran' : 'map-country')
            .attr('d', d => {
                return this.path({
                    type: 'Polygon',
                    coordinates: [d.coordinates]
                });
            })
            .style('opacity', 0);
        
        // Animate countries appearing
        countries.transition()
            .duration(800)
            .delay((d, i) => i * 100)
            .style('opacity', 1);
        
        // Add country labels
        this.svg.selectAll('.country-label')
            .data(this.mapData.countries)
            .enter()
            .append('text')
            .attr('class', 'map-label country-label')
            .attr('x', d => {
                const centroid = this.getCentroid(d.coordinates);
                return this.projection(centroid)[0];
            })
            .attr('y', d => {
                const centroid = this.getCentroid(d.coordinates);
                return this.projection(centroid)[1];
            })
            .attr('text-anchor', 'middle')
            .text(d => d.name)
            .style('opacity', 0)
            .transition()
            .duration(600)
            .delay((d, i) => 800 + i * 100)
            .style('opacity', 1);
        
        // Add geographic features
        setTimeout(() => this.addFeatures(), 1500);
        
        // Add cities
        setTimeout(() => this.addCities(), 2000);
    }
    
    addFeatures() {
        const features = this.svg.selectAll('.map-feature')
            .data(this.mapData.features)
            .enter()
            .append('g')
            .attr('class', 'map-feature')
            .attr('transform', d => {
                const [x, y] = this.projection(d.coords);
                return `translate(${x}, ${y})`;
            });
        
        // Draw feature icons based on type
        features.each(function(d) {
            const g = d3.select(this);
            
            if (d.type === 'mountains') {
                // Triangle for mountains
                g.append('polygon')
                    .attr('points', '0,-15 -12,10 12,10')
                    .attr('fill', d.color)
                    .attr('opacity', 0.7);
            } else if (d.type === 'desert') {
                // Circle with wave pattern for desert
                g.append('circle')
                    .attr('r', 20)
                    .attr('fill', d.color)
                    .attr('opacity', 0.5);
            } else if (d.type === 'sea') {
                // Wavy shape for water
                g.append('ellipse')
                    .attr('rx', 30)
                    .attr('ry', 20)
                    .attr('fill', d.color)
                    .attr('opacity', 0.6);
            }
            
            // Add label
            g.append('text')
                .attr('y', 25)
                .attr('text-anchor', 'middle')
                .attr('class', 'map-label')
                .style('font-size', '12px')
                .text(d.name);
        });
        
        // Animate features
        features.style('opacity', 0)
            .transition()
            .duration(800)
            .delay((d, i) => i * 200)
            .style('opacity', 1)
            .attr('class', 'map-feature visible');
    }
    
    addCities() {
        const cities = this.svg.selectAll('.map-city')
            .data(this.mapData.cities)
            .enter()
            .append('g')
            .attr('transform', d => {
                const [x, y] = this.projection(d.coords);
                return `translate(${x}, ${y})`;
            });
        
        // City markers
        cities.append('circle')
            .attr('class', 'map-city')
            .attr('r', d => d.capital ? 6 : 4)
            .style('opacity', 0)
            .transition()
            .duration(600)
            .delay((d, i) => i * 150)
            .style('opacity', 1);
        
        // City labels
        cities.append('text')
            .attr('class', 'map-label')
            .attr('y', -10)
            .attr('text-anchor', 'middle')
            .style('font-size', d => d.capital ? '14px' : '12px')
            .style('font-weight', d => d.capital ? '700' : '600')
            .text(d => d.name)
            .style('opacity', 0)
            .transition()
            .duration(600)
            .delay((d, i) => i * 150)
            .style('opacity', 1);
    }
    
    getCentroid(coordinates) {
        let x = 0, y = 0;
        coordinates.forEach(coord => {
            x += coord[0];
            y += coord[1];
        });
        return [x / coordinates.length, y / coordinates.length];
    }
    
    setupInteractions() {
        // Tooltip
        const tooltip = d3.select('body').append('div')
            .attr('class', 'map-tooltip');
        
        // Country hover
        this.svg.selectAll('.map-country')
            .on('mouseover', function(event, d) {
                tooltip
                    .html(`<strong>${d.name}</strong>`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 20) + 'px')
                    .classed('visible', true);
            })
            .on('mouseout', function() {
                tooltip.classed('visible', false);
            });
        
        // City hover
        this.svg.selectAll('.map-city')
            .on('mouseover', function(event, d) {
                tooltip
                    .html(`<strong>${d.name}</strong>${d.capital ? '<br><em>Capital City</em>' : ''}`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 20) + 'px')
                    .classed('visible', true);
                
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('r', d.capital ? 8 : 6);
            })
            .on('mouseout', function(event, d) {
                tooltip.classed('visible', false);
                
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('r', d.capital ? 6 : 4);
            });
    }
    
    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = this.container.node().getBoundingClientRect().height;
        
        this.svg
            .attr('width', this.width)
            .attr('height', this.height);
        
        this.projection
            .scale(this.width * 1.8)
            .translate([this.width / 2, this.height / 2]);
        
        // Redraw everything
        this.svg.selectAll('.map-country')
            .attr('d', d => {
                return this.path({
                    type: 'Polygon',
                    coordinates: [d.coordinates]
                });
            });
        
        // Reposition features and cities
        this.svg.selectAll('.map-feature, .map-city')
            .attr('transform', d => {
                const [x, y] = this.projection(d.coords);
                return `translate(${x}, ${y})`;
            });
    }
}

// Initialize map
let iranMap;

function initGeographyMap() {
    iranMap = new IranMap('iran-map');
    
    // Handle resize
    window.addEventListener('resize-complete', () => {
        if (iranMap) {
            iranMap.resize();
        }
    });
}
```

---

## Scroll Reveal Animations

Add to `js/animations.js`:

```javascript
/**
 * Scroll Reveal for Geography Section
 */

function initGeographyAnimations() {
    // Scroll reveal for section elements
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    
    revealElements.forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Landscape cards stagger animation
    gsap.from('.landscape-card', {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
            trigger: '.landscape-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });
}
```

---

## Update main.js

Add to initialization:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🇮🇷 The World of Iran - Initializing...');
    
    initProgressBar();
    initNavigation();
    initHeroParticles();
    initHeroAnimations();
    
    // Geography section
    initGeographyMap();
    initGeographyAnimations();
    
    console.log('✅ All systems ready');
});
```

---

## Image Placeholders

Since actual images aren't provided, create placeholder handling:

Add to `js/utils.js`:

```javascript
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

// Call in main.js
document.addEventListener('DOMContentLoaded', function() {
    // ... other initializations
    setupImagePlaceholders();
});
```

---

## Testing Checklist

✅ Map renders correctly on all screen sizes  
✅ Countries appear with stagger animation  
✅ Geographic features display properly  
✅ Cities are marked and labeled  
✅ Hover tooltips work for countries and cities  
✅ Landscape cards animate on scroll  
✅ Images load or show placeholders gracefully  
✅ Legend is visible and accurate  
✅ All text is readable  
✅ Mobile responsive layout works  
✅ Map resizes properly on window resize  

---

## Next Steps

Proceed to **Prompt 04** for the main regional scrollytelling feature!