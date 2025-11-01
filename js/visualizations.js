/**
 * Iran Geography Map Visualization
 * Uses D3.js to create an interactive map
 */

function initHeroParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    // Particle object
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = 'rgba(102, 126, 234, 0.5)';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.1) this.size -= 0.02;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    function createParticles(e) {
        const xPos = e.x;
        const yPos = e.y;

        for (let i = 0; i < 5; i++) {
            particles.push(new Particle(xPos, yPos));
        }
    }

    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].size <= 0.1) {
                particles.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Add listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', throttle(createParticles, 50));
}

function initGeographyNarrative() {
    const scrollyContainer = document.querySelector('.geography-scrolly');
    if (!scrollyContainer) return;

    const mapWrapper = scrollyContainer.querySelector('#iran-map');
    const steps = Array.from(scrollyContainer.querySelectorAll('.map-step'));
    const baseSvgSource = mapWrapper.dataset.mapSrc || 'assets/images/Iran_(orthographic_projection).svg';
    
    // Define the mapping between narrative text and SVG files - Using correct relative paths
    const narrativeSvgMap = {
        'Iraq and Turkey to the west': 'assets/images/Bordering_countries/IRQ_TUR.svg',
        'Armenia and Azerbaijan to the northwest': 'assets/images/Bordering_countries/ARM_AZE.svg',
        'Turkmenistan to the northeast': 'assets/images/Bordering_countries/TKM.svg',
        'Afghanistan and Pakistan to the east': 'assets/images/Bordering_countries/AFG_PAK.svg',
        'And the Caspian Sea to the north and the Persian Gulf to the south': baseSvgSource
    };

    function loadAndDisplaySvg(svgSource) {
        fetch(svgSource)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(svgMarkup => {
                mapWrapper.innerHTML = svgMarkup;
                const svgElement = mapWrapper.querySelector('svg');
                if (svgElement) {
                    svgElement.removeAttribute('height');
                    svgElement.removeAttribute('width');
                    svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    svgElement.style.width = '100%';
                    svgElement.style.height = '100%';
                    svgElement.style.objectFit = 'contain';
                }
            })
            .catch(error => {
                console.error('Failed to load SVG from:', svgSource, error);
                // Fallback to base SVG if there's an error
                if (svgSource !== baseSvgSource) {
                    console.log('Loading base SVG as fallback');
                    loadAndDisplaySvg(baseSvgSource);
                } else {
                    mapWrapper.innerHTML = `<img src="${svgSource}" alt="Map visualization" class="map-illustration" loading="lazy">`;
                }
            });
    }

    // Load the initial base SVG
    loadAndDisplaySvg(baseSvgSource);

    const scrollyEnabled = (typeof shouldEnableScrollama === 'function')
        ? shouldEnableScrollama()
        : (typeof isDesktop === 'function' ? isDesktop() : window.innerWidth >= 1024);

    if (!scrollyEnabled) {
        steps.forEach(step => {
            step.classList.add('visible');
            step.classList.add('active');
        });
        return;
    }

    // Prepare ISO lookup for highlighting (only on the base SVG)
    let isoLookup = {};
    function prepareIsoLookup() {
        isoLookup = {};
        mapWrapper.querySelectorAll('.region').forEach(regionEl => {
            const isoCode = Array.from(regionEl.classList).find(cls => cls.length === 3 && /^[A-Z]+$/.test(cls));
            if (isoCode) {
                if (!isoLookup[isoCode]) isoLookup[isoCode] = [];
                isoLookup[isoCode].push(regionEl);
            }
        });
    }

    const setHighlight = (codes) => {
        // Only highlight if we're showing the base SVG (which has .region elements)
        if (Object.keys(isoLookup).length > 0) {
            Object.values(isoLookup).forEach(list => {
                list.forEach(el => el.classList.remove('is-highlighted'));
            });
            scrollyContainer.classList.toggle('highlight-seas', codes.includes('SEA'));
            codes.forEach(code => {
                if (code === 'SEA') return;
                if (isoLookup[code]) {
                    isoLookup[code].forEach(el => el.classList.add('is-highlighted'));
                }
            });
        }
    };

    const scroller = scrollama();
    scroller.setup({
        step: '.geography-scrolly .map-step',
        offset: 0.5, // Changed from 0.8 to 0.5 to trigger earlier
        debug: false,
    })
    .onStepEnter(response => {
        const { element, index } = response;
        steps.forEach(step => step.classList.remove('active'));
        element.classList.add('active');
        element.classList.add('visible');

        // Get the text content of the current step to determine which SVG to show
        const stepTextElement = element.querySelector('.step-content');
        if (!stepTextElement) {
            console.error('Step content element not found');
            return;
        }
        const stepText = stepTextElement.textContent.trim();
        
        console.log(`Current step text: "${stepText}"`);
        
        // Find the matching SVG based on the narrative text with exact matching
        let svgToLoad = baseSvgSource;
        let foundMatch = false;
        
        // First try exact match
        for (const [narrative, svgPath] of Object.entries(narrativeSvgMap)) {
            if (stepText === narrative) {
                svgToLoad = svgPath;
                foundMatch = true;
                console.log(`Exact match found: "${narrative}"`);
                break;
            }
        }
        
        // If no exact match, try substring match
        if (!foundMatch) {
            for (const [narrative, svgPath] of Object.entries(narrativeSvgMap)) {
                if (stepText.includes(narrative)) {
                    svgToLoad = svgPath;
                    foundMatch = true;
                    console.log(`Substring match found: "${narrative}"`);
                    break;
                }
            }
        }
        
        console.log(`Step ${index}: "${stepText}" -> Loading: ${svgToLoad}`);
        
        // Load the appropriate SVG
        loadAndDisplaySvg(svgToLoad);
        
        // Update ISO lookup only if we loaded the base SVG (which has region data)
        if (svgToLoad === baseSvgSource) {
            // Wait a bit for SVG to load then prepare ISO lookup
            setTimeout(() => {
                prepareIsoLookup();
                const highlightAttr = (element.dataset.highlight || '').trim();
                const codes = highlightAttr ? highlightAttr.split(',').map(code => code.trim().toUpperCase()).filter(Boolean) : [];
                setHighlight(codes);
            }, 200); // Increased timeout to ensure SVG is loaded
        } else {
            // Clear highlights when showing border SVGs since they don't have region data
            Object.values(isoLookup).forEach(list => {
                list.forEach(el => el.classList.remove('is-highlighted'));
            });
        }
    });

    window.addEventListener('resize', debounce(() => {
        scroller.resize();
    }, 300));

    // Initial activation
    if (steps.length > 0) {
        steps[0].classList.add('visible');
        steps[0].classList.add('active');
        
        // Initialize with the first step's text to determine starting SVG
        const firstStepText = steps[0].querySelector('.step-content').textContent.trim();
        for (const [narrative, svgPath] of Object.entries(narrativeSvgMap)) {
            if (firstStepText === narrative || firstStepText.includes(narrative)) {
                loadAndDisplaySvg(svgPath);
                break;
            }
        }
    }
}


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
        this.resize();
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
        
        // Calculate appropriate scale based on both width and height to maintain aspect ratio
        // Use a more conservative scale factor for smaller screens
        let scale_factor = Math.min(this.width, this.height) * 0.8;
        
        // Ensure the scale factor doesn't get too small on very narrow screens
        if (this.width < 400) {
            scale_factor = this.width * 1.0;  // Use width-based scaling for very small screens
        } else {
            scale_factor = Math.min(this.width, this.height) * 0.8;  // Use the smaller dimension
        }
        
        this.projection
            .scale(scale_factor)
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
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`);
        
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
        this.updateChart(0);
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = this.container.node().getBoundingClientRect().height;
        this.radius = Math.min(this.width, this.height) / 2 - 40;

        this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);

        this.chartGroup.attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);

        this.arc
            .innerRadius(this.radius * 0.5)
            .outerRadius(this.radius);

        this.hoverArc
            .innerRadius(this.radius * 0.5)
            .outerRadius(this.radius * 1.05);

        this.draw();
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
            { id: 'iran', label: 'Languages in Iran', type: 'country', r: 50, color: '#dc0404ff', wikiUrl: 'https://en.wikipedia.org/wiki/Languages_of_Iran' },
            
            // Language families
            { id: 'indo-european', label: 'Iranian', type: 'family', r: 40, color: '#29f930ff', wikiUrl: 'https://en.wikipedia.org/wiki/Indo-European_languages' },
            { id: 'turkic', label: 'Turkic', type: 'family', r: 30, color: '#6f93e0ff', wikiUrl: 'https://en.wikipedia.org/wiki/Turkic_languages' },
            { id: 'semitic', label: 'Semitic', type: 'family', r: 30, color: '#afcd4eff', wikiUrl: 'https://en.wikipedia.org/wiki/Semitic_languages' },
            { id: 'other', label: 'Other', type: 'family', r: 30, color: '#cd924eff', wikiUrl: 'https://en.wikipedia.org/wiki/Languages_of_Iran' },
            
            // Individual languages
            { id: 'persian', label: 'Persian (official language in Iran)', type: 'language', r: 35, color: '#29f930b7', wikiUrl: 'https://en.wikipedia.org/wiki/Persian_language' },
            { id: 'kurdish', label: 'Kurdish', type: 'language', r: 20, color: '#29f930b7', wikiUrl: 'https://en.wikipedia.org/wiki/Kurdish_languages' },
            { id: 'luri', label: 'Luri', type: 'language', r: 18, color: '#29f930b7', wikiUrl: 'https://en.wikipedia.org/wiki/Luri_language' },
            { id: 'azerbaijani', label: 'Azerbaijani', type: 'language', r: 22, color: '#6f93e0a8', wikiUrl: 'https://en.wikipedia.org/wiki/Azerbaijani_language' },
            { id: 'turkmen', label: 'Turkmen', type: 'language', r: 15, color: '#6f93e0a8', wikiUrl: 'https://en.wikipedia.org/wiki/Turkmen_language' },
            { id: 'arabic', label: 'Arabic', type: 'language', r: 15, color: '#afcd4eb8', wikiUrl: 'https://en.wikipedia.org/wiki/Arabic' },
            { id: 'baluchi', label: 'Baluchi', type: 'language', r: 15, color: '#29f930b7', wikiUrl: 'https://en.wikipedia.org/wiki/Balochi_language' },
            { id: 'tati', label: 'Tati', type: 'language', r: 10, color: '#cd924ea6', wikiUrl: 'https://en.wikipedia.org/wiki/Tati_language_(Iran)' },
            { id: 'talysh', label: 'Talysh', type: 'language', r: 10, color: '#cd924ea6', wikiUrl: 'https://en.wikipedia.org/wiki/Talysh_language' },
            { id: 'armenian', label: 'Armenian', type: 'language', r: 10, color: '#cd924ea6', wikiUrl: 'https://en.wikipedia.org/wiki/Armenian_language' },
            { id: 'georgian', label: 'Georgian', type: 'language', r: 10, color: '#cd924ea6', wikiUrl: 'https://en.wikipedia.org/wiki/Georgian_language' },
            { id: 'assyrian', label: 'Assyrian', type: 'language', r: 10, color: '#cd924ea6', wikiUrl: 'https://en.wikipedia.org/wiki/Suret_language' },
            { id: 'circassian', label: 'Circassian', type: 'language', r: 10, color: '#cd924ea6', wikiUrl: 'https://en.wikipedia.org/wiki/Circassian_languages' }
        ];
        
        this.links = [
            // Iran to families
            { source: 'iran', target: 'indo-european', value: 3 },
            { source: 'iran', target: 'turkic', value: 2 },
            { source: 'iran', target: 'semitic', value: 1 },
            { source: 'iran', target: 'other', value: 4 },
            
            // Families to languages
            { source: 'indo-european', target: 'persian', value: 2 },
            { source: 'indo-european', target: 'kurdish', value: 2 },
            { source: 'indo-european', target: 'luri', value: 2 },
            { source: 'indo-european', target: 'baluchi', value: 2 },
            { source: 'turkic', target: 'azerbaijani', value: 2 },
            { source: 'turkic', target: 'turkmen', value: 2 },
            { source: 'semitic', target: 'arabic', value: 2 },
            { source: 'other', target: 'tati', value: 2 },
            { source: 'other', target: 'talysh', value: 2 },
            { source: 'other', target: 'armenian', value: 2 },
            { source: 'other', target: 'georgian', value: 2 },
            { source: 'other', target: 'assyrian', value: 2 },
            { source: 'other', target: 'circassian', value: 2 }
        ];
        
        this.svg = null;
        this.simulation = null;
        
        this.init();
    }
    
    init() {
        // Create SVG
        this.svg = this.container.append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`);
        
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
        
        this.simulation
            .on('tick', this.ticked.bind(this));
        
        this.draw();

        window.addEventListener('resize', () => this.resize());
        this.resize();
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
        
        // Create anchor elements for each node to make them clickable
        const nodeLinks = nodes.append('a')
            .attr('xlink:href', d => d.wikiUrl || '#')
            .attr('target', '_blank')
            .attr('class', 'lang-node-link');
        
        nodeLinks.append('circle')
            .attr('class', 'lang-node-circle')
            .attr('r', d => d.r)
            .attr('fill', d => d.color)
            .attr('stroke', '#0a0a0a')
            .attr('stroke-width', 2)
            .style('opacity', 0);
        
        nodeLinks.append('text')
            .attr('class', 'lang-node-label')
            .attr('dy', '0.35em')
            .text(d => d.label)
            .style('opacity', 0);
        
        // Add hover effects to make links more obvious
        nodeLinks
            .on('mouseover', function() {
                d3.select(this).select('.lang-node-circle')
                    .style('stroke-width', '3px')
                    .style('filter', 'brightness(1.2)');
            })
            .on('mouseout', function() {
                d3.select(this).select('.lang-node-circle')
                    .style('stroke-width', '2px')
                    .style('filter', 'brightness(1)');
            });
        
        // Animate nodes in
        nodes.select('a').select('circle')
            .transition()
            .duration(600)
            .delay((d, i) => i * 80)
            .style('opacity', 1);
        
        nodes.select('a').select('text')
            .transition()
            .duration(600)
            .delay((d, i) => i * 80 + 200)
            .style('opacity', 1);
        
        // Store references to nodes and links for the ticked function
        this.nodesRef = nodes;
        this.linksRef = links;
        
        // Setup interactions
        this.setupInteractions(nodes, links);
    }
    
    ticked() {
        // Apply boundary constraints to prevent nodes from going outside SVG
        this.nodes.forEach(node => {
            // Constrain x position with padding
            node.x = Math.max(node.r + 10, Math.min(this.width - node.r - 10, node.x));
            // Constrain y position with padding
            node.y = Math.max(node.r + 10, Math.min(this.height - node.r - 10, node.y));
        });
        
        this.linksRef.attr('d', d => {
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const dr = Math.sqrt(dx * dx + dy * dy);
            return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
        });
        
        this.nodesRef.attr('transform', d => `translate(${d.x},${d.y})`);
    }
        
        // Setup interactions
    
    setupInteractions(nodes, links) {
        // Hover effects for node links (excluding the anchor tags themselves)
        nodes.select('a')
            .on('mouseover', function(event, d) {
                // Highlight connected links
                links.classed('active', link => 
                    link.source.id === d.id || link.target.id === d.id
                );
                
                // Enhance visual effect on hover
                d3.select(this).select('.lang-node-circle')
                    .style('stroke-width', '3px');
            })
            .on('mouseout', function() {
                links.classed('active', false);
                
                // Reset visual effect
                d3.select(this).select('.lang-node-circle')
                    .style('stroke-width', '2px');
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
        
        // Check if we're on mobile view
        if (window.innerWidth < 768) {
            // Replace the complex network with a simple static representation
            this.showStaticRepresentation();
        } else {
            // Show the SVG network visualization
            this.container.select('.lang-static-container').remove();
            
            // Create SVG if it doesn't exist
            if (this.container.select('svg').empty()) {
                this.svg = this.container.append('svg')
                    .attr('width', '100%')
                    .attr('height', '100%');
                
                // Reinitialize the network
                this.initNetwork();
            } else {
                this.svg
                    .attr('width', this.width)
                    .attr('height', this.height);
                
                this.simulation
                    .force('center', d3.forceCenter(this.width / 2, this.height / 2))
                    .alpha(1)
                    .restart();
            }
        }
    }
    
    showStaticRepresentation() {
        // Remove the SVG if it exists
        this.container.select('svg').remove();
        
        // Create a static HTML representation
        if (this.container.select('.lang-static-container').empty()) {
            const staticContainer = this.container.append('div')
                .attr('class', 'lang-static-container')
                .style('padding', '20px')
                .style('height', '100%')
                .style('display', 'flex')
                .style('flex-direction', 'column')
                .style('justify-content', 'center')
                .style('align-items', 'center');
            
            staticContainer.append('h4')
                .attr('class', 'lang-static-title')
                .style('color', '#f093fb')
                .style('margin-bottom', '20px')
                .text('Languages in Iran');
            
            const langList = staticContainer.append('div')
                .attr('class', 'lang-list')
                .style('text-align', 'left')
                .style('max-width', '100%');
            
            // Add language information
            langList.append('div')
                .attr('class', 'lang-info')
                .style('margin-bottom', '15px')
                .style('padding', '10px')
                .style('background', 'rgba(102, 126, 234, 0.15)')
                .style('border-radius', '8px')
                .html('<strong>Official Language:</strong> Persian (Farsi)');
            
            langList.append('div')
                .attr('class', 'lang-group')
                .style('margin-bottom', '15px')
                .html('<strong>Major Language Families:</strong>');
            
            const familyList = langList.append('ul')
                .style('margin', '10px 0 10px 20px');
            
            familyList.append('li').html('<strong>Iranian:</strong> Persian, Kurdish, Luri, Baluchi');
            familyList.append('li').html('<strong>Turkic:</strong> Azerbaijani, Turkmen');
            familyList.append('li').html('<strong>Semitic:</strong> Arabic');
            familyList.append('li').html('<strong>Other:</strong> Armenian, Georgian, Talysh');
            
            langList.append('div')
                .attr('class', 'lang-note')
                .style('margin-top', '15px')
                .style('padding', '10px')
                .style('background', 'rgba(78, 205, 196, 0.15)')
                .style('border-radius', '8px')
                .html('<strong>Note:</strong> Iran is multilingual with over 100 languages & dialects.');
        }
    }
    
    initNetwork() {
        // Create SVG elements for the network - simplified version of original init
        this.svg = this.container.select('svg');
        
        // Create the main group
        this.chartGroup = this.svg.append('g');
        
        // Create links
        this.linksRef = this.chartGroup.selectAll('.lang-link')
            .data(this.links)
            .enter()
            .append('line')
            .attr('class', 'lang-link')
            .style('stroke', 'rgba(102, 126, 234, 0.3)')
            .style('stroke-width', 2);
        
        // Create nodes
        this.nodesRef = this.chartGroup.selectAll('.lang-node')
            .data(this.nodes)
            .enter()
            .append('g')
            .attr('class', 'lang-node')
            .call(this.drag(this.simulation));
        
        // Add circles and text to nodes
        this.nodesRef.append('circle')
            .attr('class', 'lang-node-circle')
            .attr('r', d => d.r)
            .attr('fill', d => d.color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);
        
        this.nodesRef.append('text')
            .attr('class', 'lang-node-label')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .attr('fill', '#fff')
            .text(d => d.label.split(' ')[0]); // Short label for space
        
        // Set up interactions
        this.setupInteractions(this.nodesRef, this.linksRef);
        
        // Setup simulation
        this.simulation = d3.forceSimulation(this.nodes)
            .force('link', d3.forceLink(this.links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(this.width / 2, this.height / 2))
            .force('collision', d3.forceCollide().radius(d => d.r + 5));
        
        // Update positions on each tick
        this.simulation.on('tick', () => {
            this.linksRef
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
        
            this.nodesRef
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });
    }
}

// Initialize demographics visualizations
let demographicsChart;
let languageNetwork;

function initDemographics() {
    demographicsChart = new DemographicsChart('demographics-chart');
    languageNetwork = new LanguageNetwork('language-network');
    
    console.log('Demographics visualizations initialized');

    const scrollyEnabled = (typeof shouldEnableScrollama === 'function')
        ? shouldEnableScrollama()
        : (typeof isDesktop === 'function' ? isDesktop() : window.innerWidth >= 1024);

    if (!scrollyEnabled && demographicsChart && typeof demographicsChart.updateChart === 'function') {
        demographicsChart.updateChart(8);
    }
}
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
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`);
        
        this.chartGroup = this.svg.append('g')
            .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
        
        this.pie = d3.pie().value(d => d.value).sort(null);
        this.arc = d3.arc().innerRadius(0);
        
        this.draw();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 400;
        this.radius = Math.min(this.width, this.height) / 2 - 20;

        this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);

        this.chartGroup.attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);

        this.arc.outerRadius(this.radius);

        this.draw();
    }
    
    draw() {
        this.arc.outerRadius(this.radius);
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
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 300;

        this.svg.attr('width', this.width)
            .attr('height', this.height);

        const g = this.svg.select('g');

        g.select('.timeline-line')
            .attr('x2', this.width - 50);

        g.selectAll('.timeline-marker')
            .attr('transform', d => `translate(${d.x * (this.width - 100) + 50}, 0)`);
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
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`);
        
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

        window.addEventListener('resize', () => this.resize());
        this.resize();
    }

    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 500;

        // On mobile, the chart is hidden via CSS, so we just need to ensure proper sizing for desktop
        this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);

        // Always render the default chart (it will be hidden by CSS on mobile)
        this.renderDefault();
    }

    renderDefault() {
        const treeLayout = d3.tree()
            .size([this.width - 100, this.height - 100]);
        
        const root = d3.hierarchy(this.data);
        treeLayout(root);

        const g = this.svg.select('g');

        g.selectAll('.gov-link')
            .data(root.links())
            .attr('d', d3.linkVertical()
                .x(d => d.x)
                .y(d => d.y));

        g.selectAll('.gov-node')
            .data(root.descendants())
            .attr('transform', d => `translate(${d.x},${d.y})`);
    }

    renderSimplified() {
        const simplifiedData = {
            name: 'Supreme Leader',
            children: [
                { name: 'Guardian Council' },
                { name: 'President' },
            ]
        };

        const treeLayout = d3.tree()
            .size([this.width - 100, this.height - 200]);
        
        const root = d3.hierarchy(simplifiedData);
        treeLayout(root);

        const g = this.svg.select('g');

        g.selectAll('.gov-link')
            .data(root.links())
            .attr('d', d3.linkVertical()
                .x(d => d.x)
                .y(d => d.y + 100));

        g.selectAll('.gov-node')
            .data(root.descendants())
            .attr('transform', d => `translate(${d.x},${d.y + 100})`);
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
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`);
        
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

        window.addEventListener('resize', () => this.resize());
        this.resize();
    }

    resize() {
        this.width = this.container.node().getBoundingClientRect().width;
        this.height = 400;

        this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);

        const margin = { top: 40, right: 80, bottom: 60, left: 120 };
        const chartWidth = this.width - margin.left - margin.right;
        const chartHeight = this.height - margin.top - margin.bottom;

        const y = d3.scaleBand()
            .domain(this.data.map(d => d.field))
            .range([0, chartHeight])
            .padding(0.2);
        
        const x = d3.scaleLinear()
            .domain([0, 100])
            .range([0, chartWidth]);

        const g = this.svg.select('g');

        g.select('.axis.y').call(d3.axisLeft(y));
        g.select('.axis.x').call(d3.axisBottom(x).ticks(5).tickFormat(d => d + '%'));

        g.selectAll('.bar-women')
            .data(this.data)
            .attr('y', d => y(d.field))
            .attr('height', y.bandwidth())
            .attr('width', d => x(d.women));

        g.selectAll('.label-women')
            .data(this.data)
            .attr('x', d => x(d.women) + 5)
            .attr('y', d => y(d.field) + y.bandwidth() / 2);
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
    
    console.log('Regime visualizations initialized');
}

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

    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    this.width = this.container.node().getBoundingClientRect().width;
    this.height = 400;

    const svg = this.container.select('svg');

    svg.attr('width', this.width)
      .attr('height', this.height);

    svg.select('text')
      .attr('x', this.width / 2)
      .attr('y', this.height / 2);
  }
}

function initLegacyVisualizations() {
  if (document.getElementById('nowruz-map')) {
    new NowruzMap('nowruz-map');
  }
}
