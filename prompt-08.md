PROMPT 08: Persian Cultural Legacy & Global Influence  
Objective  
Visualize Iran’s historical and cultural influence across Central Asia, the Caucasus, and South Asia—highlighting Nowruz, Persian language, poetry, carpets, and architecture.

HTML Structure  
Add to `index.html` in `<section id="legacy">`:

<section id="legacy" class="section legacy-section">
  <div class="section-content">
    <div class="section-header" data-scroll-reveal>
      <span class="section-label">Part 6</span>
      <h2 class="section-title">Persian Cultural Legacy</h2>
      <p class="section-intro">
        For centuries, Persian culture shaped empires far beyond Iran’s borders.
      </p>
    </div>

    <!-- Nowruz Map -->
    <div class="nowruz-map-container" data-scroll-reveal>
      <h3 class="subsection-title">Nowruz: A Shared New Year</h3>
      <p class="subsection-intro">Celebrated by over 300 million people across 15+ countries.</p>
      <div id="nowruz-map" class="nowruz-map"></div>
      <div class="nowruz-countries">
        <span class="country-tag">Iran</span>
        <span class="country-tag">Afghanistan</span>
        <span class="country-tag">Azerbaijan</span>
        <span class="country-tag">Tajikistan</span>
        <span class="country-tag">Kazakhstan</span>
        <span class="country-tag">Kurdish regions</span>
        <!-- + more -->
      </div>
    </div>

    <!-- Cultural Pillars -->
    <div class="legacy-pillars" data-scroll-reveal>
      <div class="pillar">
        <div class="pillar-icon">📜</div>
        <h4>Poetry</h4>
        <p>Hafez and Rumi quoted daily—guides to love, loss, and life.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon">🧶</div>
        <h4>Carpets</h4>
        <p>Handwoven masterpieces—some worth more than cars.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon">🕌</div>
        <h4>Architecture</h4>
        <p>Domes, mosaics, and windcatchers inspired from Istanbul to Lahore.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon">🗣️</div>
        <h4>Language</h4>
        <p>Persian (Farsi) was the lingua franca of courts and poets for 1,000 years.</p>
      </div>
    </div>
  </div>
</section>

CSS Styles  
Add to `css/components.css`:

.legacy-section {
  background: linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%);
  padding: 8rem 2rem;
}

.nowruz-map {
  width: 100%;
  height: 400px;
  margin: 2rem 0;
  border-radius: 16px;
  background: rgba(20, 20, 30, 0.6);
}

.nowruz-countries {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
  justify-content: center;
}

.country-tag {
  background: rgba(78, 205, 196, 0.15);
  color: var(--color-teal);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.95rem;
}

.legacy-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin-top: 5rem;
}

.pillar {
  text-align: center;
}

.pillar-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.pillar h4 {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
}

JavaScript  
Add to `js/visualizations.js`:

class NowruzMap {
  constructor(containerId) {
    this.container = d3.select(`#${containerId}`);
    this.width = this.container.node().getBoundingClientRect().width;
    this.height = 400;
    this.init();
  }

  init() {
    const svg = this.container.append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    svg.append('text')
      .attr('x', this.width / 2)
      .attr('y', this.height / 2)
      .attr('text-anchor', 'middle')
      .style('fill', '#aaa')
      .style('font-size', '1.2rem')
      .text('Interactive Nowruz Celebration Map');
  }
}

function initLegacyVisualizations() {
  if (document.getElementById('nowruz-map')) {
    new NowruzMap('nowruz-map');
  }
}

Update `main.js`:

initLegacyVisualizations();

Testing Checklist  
✅ Map placeholder renders  
✅ Country tags display  
✅ Pillars animate on scroll  
✅ Responsive on mobile  

Next Steps  
Prompt 09: **Hospitality & Human Stories**