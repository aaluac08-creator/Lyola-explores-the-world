# PROMPT 06: Islamic Regime Timeline & Political Structure

## Objective
Create an educational, visually engaging section explaining Iran's religious demographics, the 1979 Islamic Revolution, government structure, and the contrast between public and private life.

---

## HTML Structure

Add to `index.html` in the `<section id="regime">`:

```html
<section id="regime" class="section regime-section">
    <div class="section-content">
        <!-- Section Header -->
        <div class="section-header" data-scroll-reveal>
            <span class="section-label">Part 4</span>
            <h2 class="section-title">The Islamic Regime</h2>
            <p class="section-intro">
                How did a country with so many secular-minded people become known for its strict Islamic laws? 
                Let's explore the 1979 Revolution and Iran's unique political system.
            </p>
        </div>

        <!-- Religion Overview -->
        <div class="religion-container" data-scroll-reveal>
            <h3 class="subsection-title">Religious Landscape</h3>
            <div class="religion-viz-wrapper">
                <div id="religion-chart" class="religion-chart"></div>
                <div class="religion-info">
                    <div class="religion-stat">
                        <span class="stat-large">85-90%</span>
                        <span class="stat-label">Shia Muslim</span>
                        <p>Iran is the world's largest Shia-majority country</p>
                    </div>
                    <div class="religion-stat">
                        <span class="stat-large">10-15%</span>
                        <span class="stat-label">Sunni & Others</span>
                        <p>Including Kurds, Baluchis, and minority religions</p>
                    </div>
                    <div class="religion-note">
                        <p>
                            <strong>Important context:</strong> Many Iranians, especially young people and 
                            those living abroad, are secular. Even inside Iran, people often follow Islam 
                            more as culture than as strict religion.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 1979 Revolution Timeline -->
        <div class="timeline-container">
            <h3 class="subsection-title">The 1979 Islamic Revolution</h3>
            <p class="subsection-intro">
                A pivotal moment that transformed Iran from monarchy to Islamic Republic
            </p>
            
            <div class="timeline-wrapper">
                <div id="revolution-timeline" class="revolution-timeline"></div>
            </div>
            
            <!-- Timeline Steps -->
            <div class="timeline-steps">
                <div class="timeline-step" data-timeline="before">
                    <div class="step-content">
                        <span class="timeline-date">Before 1979</span>
                        <h4>The Monarchy</h4>
                        <p>
                            Iran was ruled by Shah Mohammad Reza Pahlavi. The period saw 
                            modernization but also political repression, corruption, and 
                            Western influence that alienated many Iranians.
                        </p>
                    </div>
                </div>
                
                <div class="timeline-step" data-timeline="revolution">
                    <div class="step-content">
                        <span class="timeline-date">1979</span>
                        <h4>The Revolution</h4>
                        <p>
                            Mass protests and strikes led by Ayatollah Khomeini overthrew 
                            the monarchy. The revolution united diverse groups seeking change, 
                            from religious conservatives to leftists and liberals.
                        </p>
                    </div>
                </div>
                
                <div class="timeline-step" data-timeline="after">
                    <div class="step-content">
                        <span class="timeline-date">After 1979</span>
                        <h4>Islamic Republic</h4>
                        <p>
                            Iran transformed into an Islamic Republic, combining religious 
                            leadership with democratic elements. The system consolidated power 
                            under religious authority.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Government Structure -->
        <div class="government-structure" data-scroll-reveal>
            <h3 class="subsection-title">How It Works Today</h3>
            <p class="subsection-intro">
                Iran's government combines elected and appointed positions under religious oversight
            </p>
            
            <div id="government-chart" class="government-chart"></div>
            
            <div class="government-explainer">
                <div class="explainer-card">
                    <div class="explainer-icon">👑</div>
                    <h4>Supreme Leader</h4>
                    <p>
                        Currently <strong>Ayatollah Ali Khamenei</strong> (who is Azeri, not Persian). 
                        Holds ultimate authority over all branches of government, military, and judiciary.
                    </p>
                </div>
                
                <div class="explainer-card">
                    <div class="explainer-icon">🗳️</div>
                    <h4>Guardian Council</h4>
                    <p>
                        12 members (6 clerics, 6 jurists) who vet all candidates for elected office 
                        and can veto legislation deemed un-Islamic.
                    </p>
                </div>
                
                <div class="explainer-card">
                    <div class="explainer-icon">👔</div>
                    <h4>President</h4>
                    <p>
                        Elected by the people but candidates must be approved by Guardian Council. 
                        Manages domestic policy but has limited power compared to Supreme Leader.
                    </p>
                </div>
            </div>
        </div>

        <!-- Public vs Private Life -->
        <div class="duality-container">
            <h3 class="subsection-title">The Twist: Public vs Private</h3>
            <p class="subsection-intro">
                Behind closed doors, many Iranians live modern, even Westernized lives
            </p>
            
            <div class="split-screen">
                <!-- Public Life -->
                <div class="split-panel public-life">
                    <h4>Public Life</h4>
                    <div class="life-items">
                        <div class="life-item">
                            <span class="item-icon">🧕</span>
                            <span class="item-text">Hijab mandatory for women</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">🚫</span>
                            <span class="item-text">Alcohol banned</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">📱</span>
                            <span class="item-text">Social media blocked</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">👮</span>
                            <span class="item-text">Morality police enforcing dress code</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">⚖️</span>
                            <span class="item-text">Strict Islamic law (Sharia)</span>
                        </div>
                    </div>
                </div>
                
                <!-- Private Life -->
                <div class="split-panel private-life">
                    <h4>Private Life</h4>
                    <div class="life-items">
                        <div class="life-item">
                            <span class="item-icon">🎉</span>
                            <span class="item-text">House parties with music & dancing</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">🔓</span>
                            <span class="item-text">VPNs bypass restrictions</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">👗</span>
                            <span class="item-text">Western fashion at home</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">💬</span>
                            <span class="item-text">Open discussions about politics</span>
                        </div>
                        <div class="life-item">
                            <span class="item-icon">🌍</span>
                            <span class="item-text">Modern, globalized lifestyles</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="duality-note">
                <p>
                    This duality between public rules and private freedom is a defining feature 
                    of contemporary Iranian society. Many navigate between these two worlds daily.
                </p>
            </div>
        </div>

        <!-- Women in Academia -->
        <div class="women-academia" data-scroll-reveal>
            <h3 class="subsection-title">Women Excelling in Academia</h3>
            <p class="subsection-intro">
                Despite restrictions on women in public life, Iranian girls are excelling academically
            </p>
            
            <div class="academia-content">
                <div id="academia-chart" class="academia-chart"></div>
                
                <div class="academia-text">
                    <div class="academia-stat">
                        <span class="stat-huge">60%+</span>
                        <span class="stat-label">Women in Universities</span>
                    </div>
                    <p>
                        Women make up a large portion — sometimes even the <strong>majority</strong> — 
                        of university students in STEM fields like medicine, engineering, and computer science.
                    </p>
                    <p class="highlight-box">
                        <strong>A fascinating contrast:</strong> While social rules may be strict, education 
                        and ambition thrive, especially among young women. This creates a highly educated 
                        population seeking more opportunities and freedoms.
                    </p>
                </div>
            </div>
        </div>

        <!-- Protest Movements -->
        <div class="protest-section" data-scroll-reveal>
            <blockquote class="large-quote">
                "In recent years, movements like 'Women, Life, Freedom' have shown the world that many 
                Iranians, especially the youth, are demanding change."
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
   REGIME SECTION
   ============================================ */

.regime-section {
    background: linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 50%, #1a1a2e 100%);
    padding: 8rem 2rem;
}

/* ============================================
   RELIGION VISUALIZATION
   ============================================ */

.religion-container {
    margin: 6rem 0;
}

.religion-viz-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    margin-top: 3rem;
}

.religion-chart {
    width: 100%;
    height: 400px;
}

.religion-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.religion-stat {
    background: rgba(20, 20, 30, 0.8);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(102, 126, 234, 0.3);
}

.stat-large {
    display: block;
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.religion-stat .stat-label {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;
}

.religion-stat p {
    color: var(--color-text-secondary);
    font-size: 1rem;
    margin: 0;
}

.religion-note {
    background: rgba(240, 147, 251, 0.1);
    border-left: 4px solid var(--color-accent);
    padding: 1.5rem;
    border-radius: 8px;
}

.religion-note p {
    margin: 0;
    color: var(--color-text-secondary);
    line-height: 1.7;
}

/* ============================================
   TIMELINE
   ============================================ */

.timeline-container {
    margin: 8rem 0;
}

.timeline-wrapper {
    margin: 4rem 0;
    position: relative;
}

.revolution-timeline {
    width: 100%;
    height: 300px;
    position: relative;
}

/* Timeline Steps */
.timeline-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

.timeline-step {
    opacity: 0.6;
    transition: all 0.4s ease;
}

.timeline-step.active {
    opacity: 1;
}

.timeline-step .step-content {
    background: rgba(20, 20, 30, 0.8);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    height: 100%;
    transition: all 0.4s ease;
}

.timeline-step.active .step-content {
    border-color: rgba(102, 126, 234, 0.6);
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

.timeline-date {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-accent);
    background: rgba(240, 147, 251, 0.15);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    margin-bottom: 1rem;
}

.timeline-step h4 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--color-text-primary);
}

.timeline-step p {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin: 0;
}

/* Timeline SVG Styles */
.timeline-line {
    stroke: rgba(102, 126, 234, 0.5);
    stroke-width: 4;
    fill: none;
}

.timeline-marker {
    transition: all 0.4s ease;
}

.timeline-marker circle {
    fill: rgba(102, 126, 234, 0.3);
    stroke: var(--color-primary);
    stroke-width: 3;
}

.timeline-marker.active circle {
    fill: var(--color-accent);
    stroke: var(--color-accent);
    r: 20;
    filter: drop-shadow(0 0 10px rgba(240, 147, 251, 0.8));
}

.timeline-label {
    font-size: 16px;
    font-weight: 700;
    fill: var(--color-text-primary);
    text-anchor: middle;
}

/* ============================================
   GOVERNMENT STRUCTURE
   ============================================ */

.government-structure {
    margin: 8rem 0;
}

.government-chart {
    width: 100%;
    height: 500px;
    margin: 3rem 0;
    background: rgba(20, 20, 30, 0.6);
    border-radius: 20px;
    border: 1px solid rgba(102, 126, 234, 0.2);
}

/* Government Chart D3 Styles */
.gov-node {
    cursor: pointer;
    transition: all 0.3s ease;
}

.gov-node rect {
    fill: rgba(102, 126, 234, 0.8);
    stroke: var(--color-primary);
    stroke-width: 2;
    rx: 8;
}

.gov-node.supreme-leader rect {
    fill: rgba(118, 75, 162, 0.9);
    stroke: var(--color-secondary);
}

.gov-node.elected rect {
    fill: rgba(78, 205, 196, 0.8);
    stroke: var(--color-teal);
}

.gov-node:hover rect {
    filter: brightness(1.2);
}

.gov-node text {
    fill: var(--color-text-primary);
    font-size: 14px;
    font-weight: 600;
    text-anchor: middle;
}

.gov-link {
    stroke: rgba(102, 126, 234, 0.4);
    stroke-width: 2;
    fill: none;
    marker-end: url(#arrow);
}

.gov-link.power-flow {
    stroke: var(--color-accent);
    stroke-width: 3;
    stroke-dasharray: 5, 5;
    animation: dashFlow 2s linear infinite;
}

@keyframes dashFlow {
    to {
        stroke-dashoffset: -10;
    }
}

/* Explainer Cards */
.government-explainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.explainer-card {
    background: rgba(20, 20, 30, 0.8);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    text-align: center;
    transition: all 0.4s ease;
}

.explainer-card:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.explainer-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.explainer-card h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-text-primary);
}

.explainer-card p {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin: 0;
}

/* ============================================
   PUBLIC VS PRIVATE SPLIT SCREEN
   ============================================ */

.duality-container {
    margin: 8rem 0;
}

.split-screen {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin: 3rem 0;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(102, 126, 234, 0.3);
}

.split-panel {
    padding: 3rem;
    position: relative;
}

.split-panel h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}

.public-life {
    background: linear-gradient(135deg, rgba(118, 75, 162, 0.2), rgba(102, 126, 234, 0.2));
    border-right: 2px solid rgba(102, 126, 234, 0.4);
}

.public-life h4 {
    color: #764ba2;
}

.private-life {
    background: linear-gradient(135deg, rgba(78, 205, 196, 0.2), rgba(240, 147, 251, 0.2));
}

.private-life h4 {
    color: #f093fb;
}

.life-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.life-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(20, 20, 30, 0.6);
    padding: 1.25rem;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.life-item:hover {
    background: rgba(20, 20, 30, 0.8);
    transform: translateX(5px);
}

.item-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
}

.item-text {
    font-size: 1.05rem;
    color: var(--color-text-secondary);
}

.duality-note {
    margin-top: 3rem;
    background: rgba(102, 126, 234, 0.1);
    padding: 2rem;
    border-radius: 16px;
    border-left: 4px solid var(--color-primary);
}

.duality-note p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin: 0;
    font-style: italic;
}

/* ============================================
   WOMEN IN ACADEMIA
   ============================================ */

.women-academia {
    margin: 8rem 0;
}

.academia-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    margin-top: 3rem;
}

.academia-chart {
    width: 100%;
    height: 400px;
}

.academia-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.academia-stat {
    text-align: center;
}

.stat-huge {
    display: block;
    font-size: 5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--color-teal), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 1rem;
}

.academia-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin: 0;
}

.highlight-box {
    background: rgba(78, 205, 196, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--color-teal);
}

/* ============================================
   PROTEST QUOTE
   ============================================ */

.protest-section {
    margin: 6rem 0;
    text-align: center;
}

.large-quote {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    line-height: 1.6;
    color: var(--color-text-primary);
    font-style: italic;
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem;
    background: linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(102, 126, 234, 0.1));
    border-radius: 20px;
    border: 1px solid rgba(240, 147, 251, 0.3);
    position: relative;
}

.large-quote::before {
    content: '"';
    font-size: 6rem;
    color: var(--color-accent);
    position: absolute;
    top: -20px;
    left: 20px;
    opacity: 0.3;
    line-height: 1;
}

/* ============================================
   RESPONSIVE - REGIME
   ============================================ */

@media (max-width: 968px) {
    .religion-viz-wrapper,
    .academia-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .timeline-steps {
        grid-template-columns: 1fr;
    }
    
    .split-screen {
        grid-template-columns: 1fr;
    }
    
    .public-life {
        border-right: none;
        border-bottom: 2px solid rgba(102, 126, 234, 0.4);
    }
    
    .government-explainer {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .regime-section {
        padding: 4rem 1rem;
    }
    
    .split-panel {
        padding: 2rem 1.5rem;
    }
    
    .life-item {
        padding: 1rem;
    }
    
    .stat-huge {
        font-size: 3.5rem;
    }
    
    .large-quote {
        padding: 2rem;
        font-size: 1.3rem;
    }
}
```

---

## D3.js Visualizations for Regime Section

Add to `js/visualizations.js`:

```javascript
/**
 * Religion Pie Chart
 */

class ReligionChart {
    constructor(containerId) {
        this.container = d3.select(`#${containerId}`);
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 400;
        this.radius = Math.min(this.width, this.height) / 2 - 20;
        
        this.data = [
            { name: 'Shia Muslim', value: 87.5, color: '#667eea' },
            { name: 'Sunni Muslim', value: 10, color: '#764ba2' },
            { name: 'Others', value: 2.5, color: '#f093fb' }
        ];
        
        this.init();
    }
    
    init() {
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        this.chartGroup = this.svg.append('g')
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        
        this.pie = d3.pie().value(d => d.value).sort(null);
        this.arc = d3.arc().innerRadius(0).outerRadius(this.radius);
        
        this.draw();
    }
    
    draw() {
        const arcs = this.chartGroup.selectAll('.religion-arc')
            .data(this.pie(this.data))
            .join('path')
            .attr('class', 'religion-arc')
            .attr('fill', d => d.data.color)
            .attr('stroke', '#0a0a0a')
            .attr('stroke-width', 3)
            .style('opacity', 0);
        
        arcs.transition()
            .duration(1000)
            .delay((d, i) => i * 200)
            .style('opacity', 1)
            .attrTween('d', function(d) {
                const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
                return t => this.arc(interpolate(t));
            }.bind(this));
        
        // Add labels
        this.chartGroup.selectAll('.religion-label')
            .data(this.pie(this.data))
            .join('text')
            .attr('class', 'religion-label')
            .attr('transform', d => `translate(${this.arc.centroid(d)})`)
            .attr('text-anchor', 'middle')
            .style('fill', '#fff')
            .style('font-weight', '700')
            .style('font-size', '16px')
            .style('opacity', 0)
            .text(d => `${d.data.value}%`)
            .transition()
            .duration(600)
            .delay(1200)
            .style('opacity', 1);
    }
}

/**
 * Revolution Timeline
 */

class RevolutionTimeline {
    constructor(containerId) {
        this.container = d3.select(`#${containerId}`);
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 300;
        
        this.timelineData = [
            { id: 'before', year: 1960, label: 'Before 1979', x: 0.2 },
            { id: 'revolution', year: 1979, label: '1979 Revolution', x: 0.5 },
            { id: 'after', year: 2024, label: 'After 1979', x: 0.8 }
        ];
        
        this.currentStep = 'before';
        
        this.init();
    }
    
    init() {
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        const g = this.svg.append('g')
            .attr('transform', `translate(0, ${this.height / 2})`);
        
        // Draw timeline line
        g.append('line')
            .attr('class', 'timeline-line')
            .attr('x1', 50)
            .attr('x2', this.width - 50)
            .attr('y1', 0)
            .attr('y2', 0);
        
        // Draw markers
        const markers = g.selectAll('.timeline-marker')
            .data(this.timelineData)
            .join('g')
            .attr('class', d => `timeline-marker ${d.id}`)
            .attr('transform', d => `translate(${d.x * (this.width - 100) + 50}, 0)`)
            .style('cursor', 'pointer')
            .on('click', (event, d) => this.updateStep(d.id));
        
        markers.append('circle')
            .attr('r', 12)
            .style('opacity', 0)
            .transition()
            .duration(600)
            .delay((d, i) => i * 200)
            .style('opacity', 1);
        
        markers.append('text')
            .attr('class', 'timeline-label')
            .attr('y', -30)
            .text(d => d.label)
            .style('opacity', 0)
            .transition()
            .duration(600)
            .delay((d, i) => i * 200 + 300)
            .style('opacity', 1);
        
        // Set first marker as active
        this.updateStep('before');
    }
    
    updateStep(stepId) {
        this.currentStep = stepId;
        
        // Update marker states
        this.svg.selectAll('.timeline-marker')
            .classed('active', false);
        
        this.svg.select(`.timeline-marker.${stepId}`)
            .classed('active', true);
        
        // Update timeline step cards
        document.querySelectorAll('.timeline-step').forEach(step => {
            step.classList.remove('active');
        });
        
        document.querySelector(`[data-timeline="${stepId}"]`)
            ?.classList.add('active');
    }
}

/**
 * Government Structure Hierarchy
 */

class GovernmentChart {
    constructor(containerId) {
        this.container = d3.select(`#${containerId}`);
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 500;
        
        this.data = {
            name: 'Supreme Leader',
            type: 'supreme-leader',
            info: 'Ayatollah Ali Khamenei',
            children: [
                {
                    name: 'Guardian Council',
                    type: 'appointed',
                    info: '12 members (6 clerics, 6 jurists)',
                    children: [
                        { name: 'President', type: 'elected', info: 'Elected but vetted' },
                        { name: 'Parliament', type: 'elected', info: 'Elected legislature' }
                    ]
                },
                {
                    name: 'Judiciary',
                    type: 'appointed',
                    info: 'Appointed by Supreme Leader'
                },
                {
                    name: 'Military',
                    type: 'appointed',
                    info: 'Revolutionary Guards & Army'
                }
            ]
        };
        
        this.init();
    }
    
    init() {
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        // Create arrow marker
        this.svg.append('defs').append('marker')
            .attr('id', 'arrow')
            .attr('viewBox', '0 0 10 10')
            .attr('refX', 10)
            .attr('refY', 5)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M 0 0 L 10 5 L 0 10 z')
            .attr('fill', 'rgba(102, 126, 234, 0.6)');
        
        // Create hierarchy layout
        const treeLayout = d3.tree()
            .size([this.width - 100, this.height - 100]);
        
        const root = d3.hierarchy(this.data);
        treeLayout(root);
        
        const g = this.svg.append('g')
            .attr('transform', 'translate(50, 50)');
        
        // Draw links
        g.selectAll('.gov-link')
            .data(root.links())
            .join('path')
            .attr('class', d => d.source.depth === 0 ? 'gov-link power-flow' : 'gov-link')
            .attr('d', d3.linkVertical()
                .x(d => d.x)
                .y(d => d.y))
            .style('opacity', 0)
            .transition()
            .duration(800)
            .delay(400)
            .style('opacity', 1);
        
        // Draw nodes
        const nodes = g.selectAll('.gov-node')
            .data(root.descendants())
            .join('g')
            .attr('class', d => `gov-node ${d.data.type}`)
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .style('opacity', 0);
        
        nodes.append('rect')
            .attr('x', -80)
            .attr('y', -25)
            .attr('width', 160)
            .attr('height', 50);
        
        nodes.append('text')
            .attr('dy', '0.35em')
            .text(d => d.data.name);
        
        // Animate nodes in
        nodes.transition()
            .duration(600)
            .delay((d, i) => i * 150)
            .style('opacity', 1);
        
        // Tooltip
        const tooltip = d3.select('body').append('div')
            .attr('class', 'demo-tooltip');
        
        nodes.on('mouseover', function(event, d) {
            tooltip
                .html(`<div class="tooltip-title">${d.data.name}</div><div class="tooltip-detail">${d.data.info}</div>`)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 20) + 'px')
                .classed('visible', true);
        })
        .on('mouseout', function() {
            tooltip.classed('visible', false);
        });
    }
}

/**
 * Women in Academia Bar Chart
 */

class AcademiaChart {
    constructor(containerId) {
        this.container = d3.select(`#${containerId}`);
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 400;
        
        this.data = [
            { field: 'Medicine', women: 65, men: 35 },
            { field: 'Engineering', women: 55, men: 45 },
            { field: 'Computer Science', women: 58, men: 42 },
            { field: 'Natural Sciences', women: 62, men: 38 },
            { field: 'All Fields', women: 60, men: 40 }
        ];
        
        this.init();
    }
    
    init() {
        const margin = { top: 40, right: 80, bottom: 60, left: 120 };
        const chartWidth = this.width - margin.left - margin.right;
        const chartHeight = this.height - margin.top - margin.bottom;
        
        this.svg = this.container.append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        
        const g = this.svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // Scales
        const y = d3.scaleBand()
            .domain(this.data.map(d => d.field))
            .range([0, chartHeight])
            .padding(0.2);
        
        const x = d3.scaleLinear()
            .domain([0, 100])
            .range([0, chartWidth]);
        
        // Axes
        g.append('g')
            .attr('class', 'axis')
            .call(d3.axisLeft(y))
            .selectAll('text')
            .style('font-size', '14px')
            .style('fill', '#d0d0d0');
        
        g.append('g')
            .attr('class', 'axis')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(x).ticks(5).tickFormat(d => d + '%'))
            .selectAll('text')
            .style('font-size', '12px')
            .style('fill', '#d0d0d0');
        
        // Women bars (primary)
        g.selectAll('.bar-women')
            .data(this.data)
            .join('rect')
            .attr('class', 'bar-women')
            .attr('x', 0)
            .attr('y', d => y(d.field))
            .attr('height', y.bandwidth())
            .attr('fill', '#f093fb')
            .attr('width', 0)
            .transition()
            .duration(1000)
            .delay((d, i) => i * 100)
            .attr('width', d => x(d.women));
        
        // Add percentage labels
        g.selectAll('.label-women')
            .data(this.data)
            .join('text')
            .attr('class', 'label-women')
            .attr('x', d => x(d.women) + 5)
            .attr('y', d => y(d.field) + y.bandwidth() / 2)
            .attr('dy', '0.35em')
            .style('fill', '#f093fb')
            .style('font-weight', '700')
            .style('font-size', '14px')
            .style('opacity', 0)
            .text(d => d.women + '%')
            .transition()
            .duration(600)
            .delay((d, i) => i * 100 + 1000)
            .style('opacity', 1);
    }
}

// Initialize regime visualizations
let religionChart, revolutionTimeline, governmentChart, academiaChart;

function initRegimeVisualizations() {
    if (document.getElementById('religion-chart')) {
        religionChart = new ReligionChart('religion-chart');
    }
    
    if (document.getElementById('revolution-timeline')) {
        revolutionTimeline = new RevolutionTimeline('revolution-timeline');
    }
    
    if (document.getElementById('government-chart')) {
        governmentChart = new GovernmentChart('government-chart');
    }
    
    if (document.getElementById('academia-chart')) {
        academiaChart = new AcademiaChart('academia-chart');
    }
    
    console.log('⚖️ Regime visualizations initialized');
}
```

---

## Animations

Add to `js/animations.js`:

```javascript
/**
 * Regime Section Animations
 */

function initRegimeAnimations() {
    // Split screen animation
    gsap.from('.split-panel', {
        opacity: 0,
        x: (index) => index === 0 ? -50 : 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.split-screen',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Life items stagger
    gsap.from('.life-item', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.split-screen',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Quote reveal
    gsap.from('.large-quote', {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
            trigger: '.large-quote',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });
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
    initScrollytelling();
    initDemographics();
    initDemographicsScrollytelling();
    initDemographicsAnimations();
    
    // Initialize regime section
    initRegimeVisualizations();
    initRegimeAnimations();
    
    console.log('✅ All systems ready');
});
```

---

## Testing Checklist

✅ Religion pie chart displays correctly  
✅ Timeline markers are interactive  
✅ Timeline step cards update on click  
✅ Government hierarchy chart renders  
✅ Power flow animation works  
✅ Split screen displays properly  
✅ Life items animate on scroll  
✅ Women in academia chart shows data  
✅ All tooltips function correctly  
✅ Mobile layout is readable  
✅ Animations are smooth  
✅ No console errors  

---

## Next Steps

Proceed to **Prompt 07** for Cultural Quirks section!