# PROMPT 05: Ethnic Demographics Visualization

## Objective
Create an engaging, scroll-driven data visualization showing Iran's ethnic and linguistic diversity using animated charts and interactive elements.

---

## HTML Structure

Add to `index.html` in the `<section id="demographics">`:

```html
<section id="demographics" class="section demographics-section">
    <div class="section-content">
        <!-- Section Header -->
        <div class="section-header" data-scroll-reveal>
            <span class="section-label">Part 3</span>
            <h2 class="section-title">The People of Iran</h2>
            <p class="section-intro">
                Iran's ethnic diversity is as rich as its landscapes. From Persians to Azeris, 
                Kurds to Baluchis, each group contributes to the nation's cultural tapestry.
            </p>
        </div>

        <!-- Main Demographics Visualization -->
        <div class="demographics-container">
            <!-- Sticky Chart Area -->
            <div class="demographics-viz-sticky">
                <div id="demographics-chart" class="demographics-chart"></div>
                
                <!-- Chart Title (updates with scroll) -->
                <div class="chart-title-card">
                    <h3 id="chart-title">Ethnic Breakdown</h3>
                    <p id="chart-subtitle">Population by ethnic group</p>
                </div>
            </div>

            <!-- Scrolling Steps -->
            <div class="demographics-steps">
                <!-- Step 1: Introduction -->
                <div class="demo-step" data-demo-step="0">
                    <div class="step-content">
                        <h3>A Diverse Nation</h3>
                        <p>
                            The ethnic breakdown all around Iran reveals a fascinating diversity 
                            that many outsiders don't expect.
                        </p>
                    </div>
                </div>

                <!-- Step 2: Persians -->
                <div class="demo-step" data-demo-step="1">
                    <div class="step-content">
                        <h3>Persians: 61%</h3>
                        <p>
                            <strong>Persians</strong> are around <strong>61% of the population</strong>, 
                            forming the largest ethnic group. They primarily speak Farsi (Persian) and 
                            are concentrated in central and southern Iran.
                        </p>
                    </div>
                </div>

                <!-- Step 3: Azeris -->
                <div class="demo-step" data-demo-step="2">
                    <div class="step-content">
                        <h3>Azeris: 16%</h3>
                        <p>
                            <strong>Azeris</strong> are about <strong>16%</strong>, mainly in the northwest. 
                            Fun fact: Iran's Supreme Leader, <strong>Ali Khamenei, is Azeri</strong>.
                        </p>
                        <p class="highlight-fact">
                            🎵 Azeri music and cuisine are integral to Iranian culture
                        </p>
                    </div>
                </div>

                <!-- Step 4: Kurds -->
                <div class="demo-step" data-demo-step="3">
                    <div class="step-content">
                        <h3>Kurds: 10%</h3>
                        <p>
                            <strong>Kurds</strong> are around <strong>10%</strong>, mostly in western Iran. 
                            Known for their vibrant culture, colorful traditional clothing, and distinctive music.
                        </p>
                    </div>
                </div>

                <!-- Step 5: Lurs -->
                <div class="demo-step" data-demo-step="4">
                    <div class="step-content">
                        <h3>Lurs: 6%</h3>
                        <p>
                            <strong>Lurs</strong> are roughly <strong>6%</strong>. Related to Persians but 
                            with their own dialect and rich traditions of hospitality and storytelling.
                        </p>
                    </div>
                </div>

                <!-- Step 6: Arabs -->
                <div class="demo-step" data-demo-step="5">
                    <div class="step-content">
                        <h3>Arabs: 2%</h3>
                        <p>
                            <strong>Arabs</strong> are about <strong>2%</strong>, near the Persian Gulf. 
                            Their culture blends Arab and Persian influences, with Arabic spoken alongside Farsi.
                        </p>
                    </div>
                </div>

                <!-- Step 7: Baluchis -->
                <div class="demo-step" data-demo-step="6">
                    <div class="step-content">
                        <h3>Baluchis: 2%</h3>
                        <p>
                            <strong>Baluchis</strong> are about <strong>2%</strong>, in the southeast. 
                            Their culture connects more with Pakistan and Afghanistan than central Iran.
                        </p>
                    </div>
                </div>

                <!-- Step 8: Others -->
                <div class="demo-step" data-demo-step="7">
                    <div class="step-content">
                        <h3>Turkmen & Others: 3%</h3>
                        <p>
                            <strong>Turkmen and others</strong> are around <strong>2–3%</strong>. 
                            This includes various smaller ethnic groups throughout the country.
                        </p>
                    </div>
                </div>

                <!-- Step 9: Languages -->
                <div class="demo-step" data-demo-step="8">
                    <div class="step-content">
                        <h3>Linguistic Diversity</h3>
                        <p>
                            While <strong>Persian (Farsi) is official</strong>, many people speak 
                            Azerbaijani, Kurdish, Arabic, Baluchi, and more.
                        </p>
                        <p>
                            Iran is truly a multilingual nation, with regional languages thriving 
                            alongside the official language.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Language Network Visualization -->
        <div class="language-network-container" data-scroll-reveal>
            <h3 class="subsection-title">Language Connections</h3>
            <p class="subsection-intro">
                How Iran's languages connect to broader linguistic families
            </p>
            <div id="language-network" class="language-network"></div>
        </div>

        <!-- Summary Stats Grid -->
        <div class="stats-grid" data-scroll-reveal>
            <div class="stat-card">
                <div class="stat-number">92M+</div>
                <div class="stat-label">Total Population</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">8</div>
                <div class="stat-label">Major Ethnic Groups</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">5+</div>
                <div class="stat-label">Language Families</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">100+</div>
                <div class="stat-label">Languages & Dialects</div>
            </div>
        </div>
    </div>
</section>
```

---

## CSS Styles

Add to `css/components.css`:

```css
/* ============================================
   DEMOGRAPHICS SECTION
   ============================================ */

.demographics-section {
    background: linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
    padding: 8rem 2rem;
}

/* Demographics Container */
.demographics-container {
    position: relative;
    margin: 4rem 0;
}

/* ============================================
   STICKY CHART VISUALIZATION
   ============================================ */

.demographics-viz-sticky {
    position: sticky;
    top: 100px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    margin-bottom: 4rem;
}

.demographics-chart {
    width: 600px;
    height: 600px;
    position: relative;
}

/* Chart Title Card */
.chart-title-card {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    padding: 1.5rem 2.5rem;
    border-radius: 16px;
    border: 1px solid rgba(102, 126, 234, 0.3);
    min-width: 300px;
    transition: all 0.6s ease;
}

#chart-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

#chart-subtitle {
    font-size: 1rem;
    color: var(--color-text-secondary);
    margin: 0;
}

/* ============================================
   DEMOGRAPHICS STEPS
   ============================================ */

.demographics-steps {
    position: relative;
    z-index: 10;
    pointer-events: none;
}

.demo-step {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 2rem;
    pointer-events: none;
}

.demo-step:nth-child(odd) {
    justify-content: flex-start;
}

.demo-step:first-child {
    padding-top: 10vh;
}

.demo-step:last-child {
    padding-bottom: 20vh;
}

.demo-step .step-content {
    background: rgba(20, 20, 30, 0.95);
    backdrop-filter: blur(20px);
    padding: 2.5rem;
    border-radius: 16px;
    max-width: 450px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    opacity: 0.4;
    transform: translateX(30px) scale(0.98);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: auto;
}

.demo-step:nth-child(odd) .step-content {
    transform: translateX(-30px) scale(0.98);
}

.demo-step.active .step-content {
    opacity: 1;
    transform: translateX(0) scale(1);
    border-color: rgba(102, 126, 234, 0.6);
}

.demo-step .step-content h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--color-text-primary);
}

.demo-step .step-content p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
}

.demo-step .step-content p:last-child {
    margin-bottom: 0;
}

.highlight-fact {
    background: rgba(102, 126, 234, 0.1);
    padding: 1rem;
    border-left: 3px solid var(--color-primary);
    border-radius: 8px;
    font-style: italic;
}

/* ============================================
   D3 CHART STYLES
   ============================================ */

/* Donut Chart */
.arc-segment {
    cursor: pointer;
    transition: all 0.3s ease;
}

.arc-segment:hover {
    opacity: 0.8;
    filter: brightness(1.2);
}

.arc-label {
    font-size: 14px;
    font-weight: 600;
    fill: var(--color-text-primary);
    pointer-events: none;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.arc-percentage {
    font-size: 18px;
    font-weight: 700;
    fill: var(--color-text-primary);
    text-anchor: middle;
}

.center-label {
    font-size: 24px;
    font-weight: 700;
    fill: var(--color-text-primary);
    text-anchor: middle;
}

.center-sublabel {
    font-size: 14px;
    fill: var(--color-text-secondary);
    text-anchor: middle;
}

/* Chart Tooltip */
.demo-tooltip {
    position: absolute;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--color-primary);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 100;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.demo-tooltip.visible {
    opacity: 1;
}

.demo-tooltip .tooltip-title {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--color-text-primary);
}

.demo-tooltip .tooltip-value {
    color: var(--color-accent);
    font-size: 1.5rem;
    font-weight: 700;
}

.demo-tooltip .tooltip-detail {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    margin-top: 0.5rem;
}

/* ============================================
   LANGUAGE NETWORK
   ============================================ */

.language-network-container {
    margin: 6rem 0;
    text-align: center;
}

.subsection-title {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subsection-intro {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    margin-bottom: 3rem;
}

.language-network {
    width: 100%;
    height: 500px;
    background: rgba(20, 20, 30, 0.6);
    border-radius: 20px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    position: relative;
}

/* Network Nodes */
.lang-node {
    cursor: pointer;
    transition: all 0.3s ease;
}

.lang-node:hover {
    filter: brightness(1.3);
}

.lang-node-circle {
    transition: all 0.3s ease;
}

.lang-node:hover .lang-node-circle {
    r: 35;
}

.lang-node-label {
    font-size: 13px;
    font-weight: 600;
    fill: var(--color-text-primary);
    text-anchor: middle;
    pointer-events: none;
}

.lang-link {
    stroke: rgba(102, 126, 234, 0.3);
    stroke-width: 2;
    fill: none;
    transition: all 0.3s ease;
}

.lang-link.active {
    stroke: var(--color-accent);
    stroke-width: 3;
}

/* ============================================
   STATS GRID
   ============================================ */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.stat-card {
    background: rgba(20, 20, 30, 0.8);
    border: 1px solid rgba(102, 126, 234, 0.3);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.6);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.stat-number {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1rem;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* ============================================
   RESPONSIVE - DEMOGRAPHICS
   ============================================ */

@media (max-width: 968px) {
    .demographics-viz-sticky {
        position: relative;
        height: 500px;
        top: 0;
        margin-bottom: 2rem;
    }
    
    .demographics-chart {
        width: 100%;
        max-width: 500px;
        height: 500px;
    }
    
    .demo-step {
        min-height: auto;
        padding: 2rem 1rem;
        justify-content: center !important;
    }
    
    .demo-step .step-content {
        max-width: 100%;
        transform: none !important;
        opacity: 1 !important;
    }
    
    .chart-title-card {
        position: static;
        transform: none;
        margin-bottom: 2rem;
    }
}

@media (max-width: 600px) {
    .demographics-chart {
        width: 100%;
        height: 400px;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    
    .stat-card {
        padding: 1.5rem 1rem;
    }
    
    .language-network {
        height: 400px;
    }
}
```

---

## D3.js Demographics Visualization

Add to `js/visualizations.js`:

```javascript
/**
 * Demographics Donut Chart Visualization
 * Animated donut chart showing ethnic breakdown
 */

class DemographicsChart {
    constructor(containerId) {
        this.container = d3.select(`#${containerId}`);
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = this.container.node().getBoundingClientRect().height;
        this.radius = Math.min(this.width, this.height) / 2 - 40;
        
        // Ethnic data
        this.fullData = [
            { name: 'Persians', value: 61, color: '#667eea', language: 'Persian (Farsi)' },
            { name: 'Azeris', value: 16, color: '#f093fb', language: 'Azerbaijani' },
            { name: 'Kurds', value: 10, color: '#4ecdc4', language: 'Kurdish' },
            { name: 'Lurs', value: 6, color: '#ffd93d', language: 'Luri' },
            { name: 'Arabs', value: 2, color: '#ff9a76', language: 'Arabic' },
            { name: 'Baluchis', value: 2, color: '#95e1d3', language: 'Baluchi' },
            { name: 'Turkmen & Others', value: 3, color: '#a8dadc', language: 'Various' }
        ];
        
        this.currentData = [];
        this.svg = null;
        this.arc = null;
        this.pie = null;
        
        this.init();
    }
    
    init() {
        // Create SVG
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        this.chartGroup = this.svg.append('g')
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        
        // Create pie layout
        this.pie = d3.pie()
            .value(d => d.value)
            .sort(null)
            .padAngle(0.02);
        
        // Create arc generator
        this.arc = d3.arc()
            .innerRadius(this.radius * 0.5)
            .outerRadius(this.radius);
        
        // Create hover arc (slightly larger)
        this.hoverArc = d3.arc()
            .innerRadius(this.radius * 0.5)
            .outerRadius(this.radius * 1.05);
        
        // Center label group
        this.centerGroup = this.chartGroup.append('g')
            .attr('class', 'center-labels');
        
        this.centerLabel = this.centerGroup.append('text')
            .attr('class', 'center-label')
            .attr('y', -10)
            .text('Iran');
        
        this.centerSublabel = this.centerGroup.append('text')
            .attr('class', 'center-sublabel')
            .attr('y', 15)
            .text('Ethnic Groups');
        
        // Tooltip
        this.tooltip = d3.select('body').append('div')
            .attr('class', 'demo-tooltip');
        
        // Start with empty chart
        this.updateChart([]);
    }
    
    updateChart(stepIndex) {
        // Determine which data to show based on step
        let dataToShow;
        
        if (stepIndex === 0) {
            // Intro - show empty or all dimmed
            dataToShow = [];
        } else if (stepIndex >= 1 && stepIndex <= 7) {
            // Show cumulative data up to current step
            dataToShow = this.fullData.slice(0, stepIndex);
        } else if (stepIndex === 8) {
            // Final step - show all
            dataToShow = this.fullData;
        } else {
            dataToShow = this.fullData;
        }
        
        this.currentData = dataToShow;
        this.draw();
    }
    
    draw() {
        // Update pie data
        const pieData = this.pie(this.currentData);
        
        // Bind data
        const arcs = this.chartGroup.selectAll('.arc-segment')
            .data(pieData, d => d.data.name);
        
        // Enter new segments
        const enterArcs = arcs.enter()
            .append('g')
            .attr('class', 'arc-segment');
        
        enterArcs.append('path')
            .attr('fill', d => d.data.color)
            .attr('stroke', '#0a0a0a')
            .attr('stroke-width', 2)
            .each(function(d) { this._current = d; });
        
        enterArcs.append('text')
            .attr('class', 'arc-label')
            .attr('transform', d => `translate(${this.arc.centroid(d)})`)
            .attr('dy', '0.35em')
            .style('opacity', 0);
        
        // Update all segments
        const allArcs = enterArcs.merge(arcs);
        
        allArcs.select('path')
            .transition()
            .duration(800)
            .ease(d3.easeCubicInOut)
            .attrTween('d', function(d) {
                const interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(1);
                return t => this.arc(interpolate(t));
            }.bind(this));
        
        allArcs.select('text')
            .transition()
            .duration(600)
            .delay(400)
            .attr('transform', d => `translate(${this.arc.centroid(d)})`)
            .style('opacity', d => d.endAngle - d.startAngle > 0.3 ? 1 : 0)
            .text(d => `${d.data.name}\n${d.data.value}%`);
        
        // Exit segments
        arcs.exit()
            .transition()
            .duration(500)
            .style('opacity', 0)
            .remove();
        
        // Setup interactions
        this.setupInteractions(allArcs);
        
        // Update center labels
        if (this.currentData.length > 0) {
            const total = this.currentData.reduce((sum, d) => sum + d.value, 0);
            this.centerLabel.text(`${total}%`);
            this.centerSublabel.text('Showing');
        } else {
            this.centerLabel.text('Iran');
            this.centerSublabel.text('Ethnic Groups');
        }
    }
    
    setupInteractions(arcs) {
        const self = this;
        
        arcs.on('mouseover', function(event, d) {
            // Expand arc
            d3.select(this).select('path')
                .transition()
                .duration(200)
                .attr('d', self.hoverArc);
            
            // Show tooltip
            self.tooltip
                .html(`
                    <div class="tooltip-title">${d.data.name}</div>
                    <div class="tooltip-value">${d.data.value}%</div>
                    <div class="tooltip-detail">Language: ${d.data.language}</div>
                    <div class="tooltip-detail">~${(d.data.value * 0.92).toFixed(1)}M people</div>
                `)
                .style('left', (event.pageX + 15) + 'px')
                .style('top', (event.pageY - 30) + 'px')
                .classed('visible', true);
        })
        .on('mouseout', function(event, d) {
            // Return to normal size
            d3.select(this).select('path')
                .transition()
                .duration(200)
                .attr('d', self.arc);
            
            // Hide tooltip
            self.tooltip.classed('visible', false);
        });
    }
    
    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = this.container.node().getBoundingClientRect().height;
        this.radius = Math.min(this.width, this.height) / 2 - 40;
        
        this.svg
            .attr('width', this.width)
            .attr('height', this.height);
        
        this.chartGroup
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        
        this.arc
            .innerRadius(this.radius * 0.5)
            .outerRadius(this.radius);
        
        this.hoverArc
            .innerRadius(this.radius * 0.5)
            .outerRadius(this.radius * 1.05);
        
        this.draw();
    }
}

/**
 * Language Network Visualization
 * Shows connections between languages and language families
 */

class LanguageNetwork {
    constructor(containerId) {
        this.container = d3.select(`#${containerId}`);
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = this.container.node().getBoundingClientRect().height;
        
        // Language data
        this.nodes = [
            // Center node
            { id: 'iran', label: 'Iran', type: 'country', r: 40, color: '#667eea' },
            
            // Language families
            { id: 'indo-european', label: 'Indo-European', type: 'family', r: 30, color: '#764ba2' },
            { id: 'turkic', label: 'Turkic', type: 'family', r: 30, color: '#f093fb' },
            { id: 'semitic', label: 'Semitic', type: 'family', r: 25, color: '#4ecdc4' },
            
            // Individual languages
            { id: 'persian', label: 'Persian', type: 'language', r: 25, color: '#667eea' },
            { id: 'kurdish', label: 'Kurdish', type: 'language', r: 20, color: '#4ecdc4' },
            { id: 'luri', label: 'Luri', type: 'language', r: 18, color: '#ffd93d' },
            { id: 'azerbaijani', label: 'Azerbaijani', type: 'language', r: 22, color: '#f093fb' },
            { id: 'turkmen', label: 'Turkmen', type: 'language', r: 16, color: '#a8dadc' },
            { id: 'arabic', label: 'Arabic', type: 'language', r: 18, color: '#ff9a76' },
            { id: 'baluchi', label: 'Baluchi', type: 'language', r: 16, color: '#95e1d3' }
        ];
        
        this.links = [
            // Iran to families
            { source: 'iran', target: 'indo-european', value: 3 },
            { source: 'iran', target: 'turkic', value: 2 },
            { source: 'iran', target: 'semitic', value: 1 },
            
            // Families to languages
            { source: 'indo-european', target: 'persian', value: 2 },
            { source: 'indo-european', target: 'kurdish', value: 2 },
            { source: 'indo-european', target: 'luri', value: 2 },
            { source: 'indo-european', target: 'baluchi', value: 2 },
            { source: 'turkic', target: 'azerbaijani', value: 2 },
            { source: 'turkic', target: 'turkmen', value: 2 },
            { source: 'semitic', target: 'arabic', value: 2 }
        ];
        
        this.svg = null;
        this.simulation = null;
        
        this.init();
    }
    
    init() {
        // Create SVG
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        // Create links
        this.linkGroup = this.svg.append('g')
            .attr('class', 'links');
        
        // Create nodes
        this.nodeGroup = this.svg.append('g')
            .attr('class', 'nodes');
        
        // Create force simulation
        this.simulation = d3.forceSimulation(this.nodes)
            .force('link', d3.forceLink(this.links)
                .id(d => d.id)
                .distance(d => d.value * 80))
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(this.width / 2, this.height / 2))
            .force('collision', d3.forceCollide().radius(d => d.r + 5));
        
        this.draw();
    }
    
    draw() {
        // Draw links
        const links = this.linkGroup.selectAll('path')
            .data(this.links)
            .join('path')
            .attr('class', 'lang-link')
            .style('opacity', 0);
        
        // Animate links in
        links.transition()
            .duration(800)
            .delay((d, i) => i * 50)
            .style('opacity', 1);
        
        // Draw nodes
        const nodes = this.nodeGroup.selectAll('g')
            .data(this.nodes)
            .join('g')
            .attr('class', 'lang-node')
            .call(this.drag(this.simulation));
        
        nodes.append('circle')
            .attr('class', 'lang-node-circle')
            .attr('r', d => d.r)
            .attr('fill', d => d.color)
            .attr('stroke', '#0a0a0a')
            .attr('stroke-width', 2)
            .style('opacity', 0);
        
        nodes.append('text')
            .attr('class', 'lang-node-label')
            .attr('dy', '0.35em')
            .text(d => d.label)
            .style('opacity', 0);
        
        // Animate nodes in
        nodes.select('circle')
            .transition()
            .duration(600)
            .delay((d, i) => i * 80)
            .style('opacity', 1);
        
        nodes.select('text')
            .transition()
            .duration(600)
            .delay((d, i) => i * 80 + 200)
            .style('opacity', 1);
        
        // Update positions on simulation tick
        this.simulation.on('tick', () => {
            links.attr('d', d => {
                const dx = d.target.x - d.source.x;
                const dy = d.target.y - d.source.y;
                const dr = Math.sqrt(dx * dx + dy * dy);
                return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
            });
            
            nodes.attr('transform', d => `translate(${d.x},${d.y})`);
        });
        
        // Setup interactions
        this.setupInteractions(nodes, links);
    }
    
    setupInteractions(nodes, links) {
        nodes.on('mouseover', function(event, d) {
            // Highlight connected links
            links.classed('active', link => 
                link.source.id === d.id || link.target.id === d.id
            );
        })
        .on('mouseout', function() {
            links.classed('active', false);
        });
    }
    
    drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }
        
        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
        
        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    }
    
    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = this.container.node().getBoundingClientRect().height;
        
        this.svg
            .attr('width', this.width)
            .attr('height', this.height);
        
        this.simulation
            .force('center', d3.forceCenter(this.width / 2, this.height / 2))
            .alpha(1)
            .restart();
    }
}

// Initialize demographics visualizations
let demographicsChart;
let languageNetwork;

function initDemographics() {
    demographicsChart = new DemographicsChart('demographics-chart');
    languageNetwork = new LanguageNetwork('language-network');
    
    console.log('📊 Demographics visualizations initialized');
}
```

---

## Scrollama Integration for Demographics

Add to `js/scrollytelling.js`:

```javascript
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
    if (document.querySelector('.demographics-section')) {
        demographicsScrollytelling = new DemographicsScrollytelling();
        console.log('📊 Demographics scrollytelling initialized');
    }
}
```

---

## Additional Animations

Add to `js/animations.js`:

```javascript
/**
 * Demographics Section Animations
 */

function initDemographicsAnimations() {
    // Animate stats cards on scroll
    gsap.from('.stat-card', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Animate stat numbers counting up
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => animateStatCounter(stat, finalValue)
        });
    });
    
    // Language network reveal
    gsap.from('.language-network-container', {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
            trigger: '.language-network-container',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });
}

function animateStatCounter(element, finalValue) {
    // Extract number from string (e.g., "92M+" -> 92)
    const numMatch = finalValue.match(/\d+/);
    if (!numMatch) return;
    
    const num = parseInt(numMatch[0]);
    const suffix = finalValue.replace(num, '');
    
    let current = 0;
    const increment = num / 30; // 30 frames
    const duration = 1000;
    const frameTime = duration / 30;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            current = num;
            clearInterval(counter);
        }
        element.textContent = Math.floor(current) + suffix;
    }, frameTime);
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
    initGeographyMap();
    initGeographyAnimations();
    initScrollytelling();
    
    // Initialize demographics
    initDemographics();
    initDemographicsScrollytelling();
    initDemographicsAnimations();
    
    console.log('✅ All systems ready');
});

// Handle resize for all visualizations
window.addEventListener('resize-complete', () => {
    if (demographicsChart) demographicsChart.resize();
    if (languageNetwork) languageNetwork.resize();
});
```

---

## Data File (Optional)

Create `assets/data/demographics.json`:

```json
{
  "ethnicGroups": [
    {
      "name": "Persians",
      "percentage": 61,
      "population": 56120000,
      "language": "Persian (Farsi)",
      "languageFamily": "Indo-European",
      "regions": ["Central", "South"],
      "description": "The largest ethnic group, Persians form the cultural heartland of Iran."
    },
    {
      "name": "Azeris",
      "percentage": 16,
      "population": 14720000,
      "language": "Azerbaijani Turkish",
      "languageFamily": "Turkic",
      "regions": ["Northwest"],
      "description": "Concentrated in the northwest, with strong cultural ties to Azerbaijan and Turkey."
    },
    {
      "name": "Kurds",
      "percentage": 10,
      "population": 9200000,
      "language": "Kurdish",
      "languageFamily": "Indo-European",
      "regions": ["West"],
      "description": "Mountain communities known for vibrant culture and independence movements."
    },
    {
      "name": "Lurs",
      "percentage": 6,
      "population": 5520000,
      "language": "Luri",
      "languageFamily": "Indo-European",
      "regions": ["West-Central"],
      "description": "Tribal people related to Persians with rich storytelling traditions."
    },
    {
      "name": "Arabs",
      "percentage": 2,
      "population": 1840000,
      "language": "Arabic",
      "languageFamily": "Semitic",
      "regions": ["Southwest"],
      "description": "Coastal communities along the Persian Gulf with mixed cultural influences."
    },
    {
      "name": "Baluchis",
      "percentage": 2,
      "population": 1840000,
      "language": "Baluchi",
      "languageFamily": "Indo-European",
      "regions": ["Southeast"],
      "description": "Connected culturally to Pakistan and Afghanistan, maintaining strong traditions."
    },
    {
      "name": "Turkmen & Others",
      "percentage": 3,
      "population": 2760000,
      "language": "Various",
      "languageFamily": "Various",
      "regions": ["Northeast", "Various"],
      "description": "Including Turkmen, Gilaks, Mazandaranis, and other smaller groups."
    }
  ],
  "totalPopulation": 92000000,
  "officialLanguage": "Persian (Farsi)",
  "recognizedLanguages": [
    "Azerbaijani",
    "Kurdish",
    "Arabic",
    "Baluchi",
    "Turkmen",
    "Gilaki",
    "Mazandarani",
    "Luri"
  ],
  "languageFamilies": {
    "Indo-European": ["Persian", "Kurdish", "Luri", "Baluchi"],
    "Turkic": ["Azerbaijani", "Turkmen"],
    "Semitic": ["Arabic"]
  }
}
```

---

## Testing Checklist

After implementing this prompt:

✅ Demographics section renders correctly  
✅ Scrollama triggers donut chart updates  
✅ Chart segments animate smoothly  
✅ Tooltips show on hover with correct data  
✅ Title card updates with each step  
✅ Language network displays and is interactive  
✅ Stats cards animate on scroll  
✅ Counter animations work for stat numbers  
✅ All steps have active states  
✅ Mobile view displays properly  
✅ Chart resizes correctly on window resize  
✅ Colors match design system  
✅ No console errors  

---

## Troubleshooting

### Chart not appearing:
- Check container dimensions in CSS
- Verify D3.js is loaded
- Check console for errors
- Ensure `initDemographics()` is called

### Scrollama not triggering:
- Verify `.demo-step` class on elements
- Check offset value
- Ensure steps have min-height
- Test with `debug: true`

### Animation performance issues:
- Reduce particle count on mobile
- Use CSS transforms
- Debounce resize handlers
- Check for memory leaks

---

## Next Steps

Proceed to **Prompt 06** for the Islamic Regime timeline and political structure visualization!