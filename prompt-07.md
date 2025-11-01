PROMPT 07: Cultural Quirks & Everyday Surprises  
Objective  
Create a playful, visually dynamic section that showcases Iran’s unexpected cultural quirks—nose jobs, faloodeh, tarof, cheetahs, Peykan cars, and road sign selfies—in a format that balances humor, data, and storytelling.

HTML Structure  
Add to `index.html` in `<section id="quirks">`:

<section id="quirks" class="section quirks-section">
  <div class="section-content">
    <!-- Section Header -->
    <div class="section-header" data-scroll-reveal>
      <span class="section-label">Part 5</span>
      <h2 class="section-title">Iran’s Goofy & Unexpected Side</h2>
      <p class="section-intro">
        Beyond politics and poetry, Iran has a delightfully quirky everyday culture.
      </p>
    </div>

    <!-- Quirks Grid -->
    <div class="quirks-grid" data-scroll-reveal>
      <!-- Quirk 1: Nose Jobs -->
      <div class="quirk-card" data-quirk="nose">
        <div class="quirk-icon">👃</div>
        <h3>Nose Job Capital of the World</h3>
        <p>
          Iran performs more rhinoplasties per capita than any country. Bandages are worn like badges of honor—even faked as fashion!
        </p>
        <div class="quirk-stat">~150,000+ surgeries/year</div>
      </div>

      <!-- Quirk 2: Faloodeh -->
      <div class="quirk-card" data-quirk="dessert">
        <div class="quirk-icon">🍧</div>
        <h3>Ice Cream… With Noodles?</h3>
        <p>
          Faloodeh: frozen rice noodles soaked in rosewater, lime, and sugar. Served with saffron ice cream—golden, fragrant, and iconic.
        </p>
      </div>

      <!-- Quirk 3: Tarof -->
      <div class="quirk-card" data-quirk="tarof">
        <div class="quirk-icon">🍵</div>
        <h3>Tarof – The Politeness Game</h3>
        <p>
          A social ritual where you refuse what you want—twice—before accepting. “No, no, I insist!” is the national sport of hospitality.
        </p>
      </div>

      <!-- Quirk 4: Cheetahs -->
      <div class="quirk-card" data-quirk="cheetah">
        <div class="quirk-icon">🐆</div>
        <h3>Last Wild Asiatic Cheetahs</h3>
        <p>
          Fewer than 12 remain—only in Iran. A national symbol of fragility and pride.
        </p>
        <div class="quirk-stat">Critically Endangered</div>
      </div>

      <!-- Quirk 5: Peykan -->
      <div class="quirk-card" data-quirk="peykan">
        <div class="quirk-icon">🚗</div>
        <h3>The Peykan – National Car</h3>
        <p>
          A 1970s boxy sedan, still running on nostalgia and spare parts. Cultural icon of resilience.
        </p>
      </div>

      <!-- Quirk 6: Road Sign Selfies -->
      <div class="quirk-card" data-quirk="selfie">
        <div class="quirk-icon">📸</div>
        <h3>Selfies with Road Signs</h3>
        <p>
          Iranian tourists abroad love posing with signs like “Berlin” or “Paris”—a quirky travel ritual turned meme.
        </p>
      </div>
    </div>
  </div>
</section>

CSS Styles  
Add to `css/components.css`:

/* ============================================
   QUIRKS SECTION
   ============================================ */

.quirks-section {
  background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%);
  padding: 8rem 2rem;
}

.quirks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.quirk-card {
  background: rgba(20, 20, 30, 0.7);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;
}

.quirk-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.quirk-icon {
  font-size: 3rem;
  margin-bottom: 1.25rem;
}

.quirk-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.quirk-card p {
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0 0 1.25rem;
}

.quirk-stat {
  font-weight: 700;
  color: var(--color-accent);
  font-size: 1.1rem;
  background: rgba(240, 147, 251, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  display: inline-block;
}

JavaScript  
Add to `js/animations.js`:

function initQuirksAnimations() {
  gsap.from('.quirk-card', {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.quirks-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}

Update `main.js`:

// After regime init
initQuirksAnimations();

Testing Checklist  
✅ Cards appear in responsive grid  
✅ Hover effects work  
✅ Stats are highlighted  
✅ Mobile layout stacks correctly  
✅ Scroll-triggered animations fire once  

Next Steps  
Proceed to Prompt 08: **Persian Cultural Legacy & Global Influence**