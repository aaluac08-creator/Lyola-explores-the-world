PROMPT 11: Outro & Call to Action  
Objective  
End with an inspiring outro that invites reflection, engagement, and further exploration—mirroring Lyola’s voice from the original script.

HTML Structure  
Add to `index.html` in `<section id="outro">`:

<section id="outro" class="section outro-section">
  <div class="section-content">
    <div class="outro-content" data-scroll-reveal>
      <h2>So next time you think of Iran…</h2>
      <p class="outro-list">
        Think deserts and rainforests,<br>
        Nose jobs and poetry,<br>
        Cheetahs and carpets,<br>
        Tarof and TikTok,<br>
        Rules and revolutions.
      </p>
      <p class="outro-message">
        Iran is not a monolith. It’s millions of stories—waiting to be heard.
      </p>

      <div class="outro-cta">
        <p>Did I miss something? Got a story to share?</p>
        <a href="mailto:lyola@explores.world" class="cta-link">Write to me</a>
      </div>

      <div class="signature">
        — Lyola<br>
        <span class="subtitle">Exploring the world, one story at a time.</span>
      </div>
    </div>
  </div>
</section>

CSS Styles  
Add to `css/components.css`:

.outro-section {
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a0a 100%);
  padding: 8rem 2rem;
  text-align: center;
}

.outro-content h2 {
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
}

.outro-list {
  font-size: 1.5rem;
  line-height: 1.8;
  margin: 3rem 0;
  color: var(--color-text-primary);
}

.outro-message {
  font-size: 1.4rem;
  font-style: italic;
  max-width: 700px;
  margin: 2rem auto;
  color: var(--color-text-secondary);
}

.outro-cta {
  margin: 4rem 0;
}

.cta-link {
  display: inline-block;
  padding: 0.8rem 2.5rem;
  background: rgba(102, 126, 234, 0.2);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-link:hover {
  background: rgba(102, 126, 234, 0.4);
  transform: scale(1.05);
}

.signature {
  margin-top: 4rem;
  font-size: 1.4rem;
  color: var(--color-teal);
}

.signature .subtitle {
  display: block;
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-top: 0.5rem;
}

Final JS Hook  
Add to `main.js`:

console.log('🌍 Journey through Iran complete.');

Testing Checklist (All Prompts)  
✅ All sections scroll smoothly  
✅ Mobile responsive  
✅ No console errors  
✅ Animations respect reduced motion  
✅ All interactive elements work  