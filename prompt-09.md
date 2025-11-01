PROMPT 09: Iranian Hospitality & Human Stories  
Objective  
Capture Iran’s legendary hospitality through micro-stories, quotes, and photo-driven vignettes—emphasizing warmth, generosity, and personal connection.

HTML Structure  
Add to `index.html` in `<section id="hospitality">`:

<section id="hospitality" class="section hospitality-section">
  <div class="section-content">
    <div class="section-header" data-scroll-reveal>
      <span class="section-label">Part 7</span>
      <h2 class="section-title">The Heart of Iran: Hospitality</h2>
      <p class="section-intro">
        “A guest is a gift from God.” In Iran, strangers become family over tea.
      </p>
    </div>

    <div class="hospitality-stories">
      <div class="story-card" data-scroll-reveal>
        <blockquote>“We were hiking near Yazd. An old man saw us, invited us home, and served pomegranate stew. Refused payment. Said, ‘You’re my child now.’”</blockquote>
        <cite>— Traveler from Canada</cite>
      </div>
      <div class="story-card" data-scroll-reveal>
        <blockquote>“My Airbnb host in Shiraz cooked for 10 people—just because I mentioned I liked Persian food.”</blockquote>
        <cite>— Student from Germany</cite>
      </div>
      <div class="story-card" data-scroll-reveal>
        <blockquote>“In Tehran, a woman saw me looking lost. Walked 20 minutes out of her way to show me the metro. Then bought me a snack.”</blockquote>
        <cite>— Backpacker from Brazil</cite>
      </div>
    </div>

    <div class="hospitality-visual" data-scroll-reveal>
      <div class="tea-cup"></div>
      <p class="highlight-text">Tea is never just tea—it’s an invitation to stay.</p>
    </div>
  </div>
</section>

CSS Styles  
Add to `css/components.css`:

.hospitality-section {
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a14 100%);
  padding: 8rem 2rem;
  text-align: center;
}

.hospitality-stories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin: 5rem 0;
}

.story-card {
  background: rgba(20, 20, 30, 0.8);
  padding: 2.5rem;
  border-radius: 20px;
  border-left: 4px solid var(--color-teal);
}

.story-card blockquote {
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--color-text-primary);
  margin: 0;
}

.story-card cite {
  display: block;
  margin-top: 1rem;
  color: var(--color-accent);
  font-weight: 600;
}

.hospitality-visual {
  margin-top: 4rem;
  position: relative;
}

.tea-cup {
  width: 120px;
  height: 120px;
  background: url('../img/tea-cup.svg') center/contain no-repeat;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.highlight-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-teal);
}

JavaScript  
Add to `js/animations.js`:

function initHospitalityAnimations() {
  gsap.from('.story-card', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.hospitality-stories',
      start: 'top 80%'
    }
  });
}

Update `main.js`:

initHospitalityAnimations();

Next Steps  
Prompt 10: **Contradictions & Dualities (Summary Synthesis)**