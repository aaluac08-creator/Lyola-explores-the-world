PROMPT 10: Contradictions & Dualities – Final Synthesis  
Objective  
Create a powerful closing synthesis that juxtaposes Iran’s paradoxes: ancient/modern, public/private, restrictive/ambitious—using split visuals, quotes, and motion.

HTML Structure  
Add to `index.html` in `<section id="dualities">`:

<section id="dualities" class="section dualities-section">
  <div class="section-content">
    <h2 class="section-title">Iran in Contradictions</h2>
    <p class="section-intro">A nation of beautiful tensions.</p>

    <div class="duality-pairs">
      <div class="duality-pair">
        <div class="duality-side">Strict Islamic laws</div>
        <div class="duality-separator">↔</div>
        <div class="duality-side">Growing secular population</div>
      </div>
      <div class="duality-pair">
        <div class="duality-side">Hijab enforced in public</div>
        <div class="duality-separator">↔</div>
        <div class="duality-side">Women lead in STEM degrees</div>
      </div>
      <div class="duality-pair">
        <div class="duality-side">Ancient Zoroastrian roots</div>
        <div class="duality-separator">↔</div>
        <div class="duality-side">TikTok-savvy Gen Z</div>
      </div>
      <div class="duality-pair">
        <div class="duality-side">State-controlled media</div>
        <div class="duality-separator">↔</div>
        <div class="duality-side">Underground music scenes</div>
      </div>
    </div>

    <div class="final-thought" data-scroll-reveal>
      <p>
        Iran cannot be reduced to headlines. It lives in the space between rules and dreams.
      </p>
    </div>
  </div>
</section>

CSS Styles  
Add to `css/components.css`:

.dualities-section {
  background: linear-gradient(180deg, #0a0a14 0%, #1a1a2e 100%);
  padding: 8rem 2rem;
  text-align: center;
}

.duality-pairs {
  max-width: 800px;
  margin: 5rem auto;
}

.duality-pair {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
}

.duality-side {
  flex: 1;
  padding: 1rem;
  background: rgba(20, 20, 30, 0.6);
  border-radius: 12px;
}

.duality-separator {
  font-size: 1.8rem;
  color: var(--color-accent);
  font-weight: 900;
}

.final-thought p {
  font-size: 1.6rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 4rem auto 0;
  color: var(--color-text-primary);
  font-style: italic;
}

Next Steps  
Prompt 11: **Outro & Call to Action**