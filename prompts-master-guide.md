# Iran Scrollytelling Website - Master Development Guide

## 📋 Project Overview

This comprehensive guide contains 11+ detailed prompts to build a world-class scrollytelling website about Iran, inspired by The Pudding's data journalism style.

**Target Output:** A fully functional, interactive, scroll-driven narrative website featuring maps, data visualizations, animations, and engaging storytelling.

---

## 🎯 What You'll Build

### Core Features:
- ✨ Animated hero section with particle effects
- 🗺️ Interactive D3.js maps showing Iran's geography
- 📜 **Main scrollytelling experience** with 9 regional deep-dives
- 📊 Data visualizations (demographics, timelines, charts)
- 🎨 Smooth GSAP animations throughout
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible (WCAG AA compliant)
- ⚡ Performance optimized

### Technical Stack:
- **Scrollama.js** - Scroll-driven interactions
- **D3.js v7** - Data visualizations and maps
- **GSAP 3** with ScrollTrigger - Advanced animations
- **Vanilla JavaScript** - No framework dependencies
- **Modern CSS3** - Grid, Flexbox, Custom Properties

---

## 📚 Prompt Files Overview

### **Prompt 01: Project Setup** ✅ START HERE
**File:** `01-project-setup.md`
- Complete file structure
- Base HTML template
- CSS foundation with variables
- JavaScript utilities
- Navigation and progress bar
- README and documentation

**Time estimate:** 1-2 hours  
**Complexity:** ⭐⭐☆☆☆

---

### **Prompt 02: Hero Section**
**File:** `02-hero-section.md`
- Animated title with word reveals
- Particle system using Canvas
- Gradient orbs background
- CTA button with effects
- Scroll indicator
- GSAP entrance animations
- Persian pattern overlays

**Time estimate:** 2-3 hours  
**Complexity:** ⭐⭐⭐☆☆

---

### **Prompt 03: Geography Map**
**File:** `03-geography-map.md`
- Interactive D3.js map of Iran
- Neighboring countries
- Geographic features (mountains, seas, deserts)
- Major cities with markers
- Hover tooltips
- Landscape cards grid
- Scroll-reveal animations

**Time estimate:** 3-4 hours  
**Complexity:** ⭐⭐⭐⭐☆

---

### **Prompt 04: Regional Scrollytelling** 🌟 CENTERPIECE
**File:** `04-regional-scrollytelling.md`
- **Main scrollytelling experience**
- Sticky map visualization
- 9 scrolling regional steps
- Scrollama.js integration
- Dynamic region highlighting
- Info card updates
- Alternating text cards
- Mobile responsive adaptation

**Time estimate:** 4-6 hours  
**Complexity:** ⭐⭐⭐⭐⭐

**⚠️ This is the most important section - take your time!**

---

### **Prompt 05: Demographics Visualization**
**File:** `05-demographics.md` (to be created)
- Ethnic breakdown charts
- Animated donut/pie charts
- Population percentages
- Language connections
- Scroll-triggered data reveals
- Interactive hover states

**Time estimate:** 2-3 hours  
**Complexity:** ⭐⭐⭐☆☆

---

### **Prompt 06: Islamic Regime Timeline**
**File:** `06-regime-timeline.md` (to be created)
- Religious demographics
- 1979 Revolution timeline
- Government structure diagram
- Public vs private life split-screen
- Women in academia visualization
- D3.js organizational charts

**Time estimate:** 3-4 hours  
**Complexity:** ⭐⭐⭐⭐☆

---

### **Prompt 07: Cultural Quirks**
**File:** `07-cultural-quirks.md` (to be created)
- 6 fun facts sections
- Interactive card layouts
- Playful animations
- Image galleries
- Engaging micro-interactions
- Horizontal scroll or grid

**Time estimate:** 2-3 hours  
**Complexity:** ⭐⭐⭐☆☆

---

### **Prompt 08: Cultural Influence**
**File:** `08-cultural-influence.md` (to be created)
- Regional influence map
- Nowruz celebration spread
- Persian carpet visualization
- Radial graphics showing cultural reach
- Animated connections

**Time estimate:** 2-3 hours  
**Complexity:** ⭐⭐⭐☆☆

---

### **Prompt 09: Hospitality & Outro**
**File:** `09-outro.md` (to be created)
- Emotional hospitality section
- Contrasts visualization
- Final reflective message
- Call-to-action
- Social sharing
- Footer

**Time estimate:** 1-2 hours  
**Complexity:** ⭐⭐☆☆☆

---

### **Prompt 10: Performance & Polish**
**File:** `10-optimization.md` (to be created)
- Lazy loading implementation
- Animation performance
- Code minification
- Accessibility improvements
- SEO optimization
- Cross-browser testing
- Analytics integration

**Time estimate:** 2-4 hours  
**Complexity:** ⭐⭐⭐☆☆

---

### **Prompt 11: Assets Guide**
**File:** `11-assets-guide.md` (to be created)
- Image specifications
- Placeholder generation
- Asset optimization
- Alt text guidelines
- Icon requirements
- Data file formats

**Time estimate:** 1-2 hours  
**Complexity:** ⭐⭐☆☆☆

---

## 🚀 Recommended Workflow

### Phase 1: Foundation (Days 1-2)
1. ✅ **Prompt 01** - Setup project structure
2. ✅ **Prompt 02** - Build and test hero
3. Test on multiple browsers
4. Commit to version control

### Phase 2: Core Visualizations (Days 3-5)
1. ✅ **Prompt 03** - Geography map
2. ✅ **Prompt 04** - Main scrollytelling ⭐ (most time-intensive)
3. ✅ **Prompt 05** - Demographics charts
4. Test scroll interactions thoroughly
5. Optimize for mobile

### Phase 3: Content Sections (Days 6-7)
1. ✅ **Prompt 06** - Regime timeline
2. ✅ **Prompt 07** - Cultural quirks
3. ✅ **Prompt 08** - Cultural influence
4. ✅ **Prompt 09** - Outro
5. End-to-end testing

### Phase 4: Polish & Deploy (Day 8)
1. ✅ **Prompt 10** - Optimization
2. ✅ **Prompt 11** - Final assets
3. Performance testing
4. Accessibility audit
5. Deploy to hosting

---

## 🎓 How to Use These Prompts

### For Claude Code (Command Line):
```bash
# Navigate to your project directory
cd iran-scrollytelling

# Use Claude Code with each prompt file
claude-code --file prompts/01-project-setup.md

# Or use interactive mode
claude-code
# Then paste the prompt content
```

### For AI Chat Interfaces (Claude.ai, ChatGPT, etc.):

1. **Copy entire prompt** from the .md file
2. **Paste into chat** interface
3. **Review generated code** carefully
4. **Test immediately** before moving to next prompt
5. **Iterate if needed** - ask follow-up questions
6. **Save all code** to your project files

### Best Practices:

✅ **Do one prompt at a time** - Don't rush  
✅ **Test after each prompt** - Catch issues early  
✅ **Use browser DevTools** - Check console for errors  
✅ **Version control** - Commit after each working section  
✅ **Mobile test frequently** - Don't wait until the end  
✅ **Ask clarifying questions** - If something's unclear  
✅ **Customize as needed** - Adapt to your specific needs  

❌ **Don't skip testing** - Issues compound  
❌ **Don't mix prompts** - Complete one fully first  
❌ **Don't ignore warnings** - Fix as you go  

---

## 🔧 Technical Requirements

### Minimum Browser Support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Mobile 90+

### Development Environment:
- **Code Editor:** VS Code, Cursor, or similar
- **Local Server:** Python SimpleHTTPServer, VS Code Live Server, or Node.js http-server
- **Browser DevTools:** For debugging
- **Git:** For version control (recommended)

### External Dependencies (CDN):
All libraries loaded via CDN - no npm required!
- Scrollama.js 3.2.0
- D3.js 7.8.5
- GSAP 3.12.2
- ScrollTrigger plugin

---

## 📊 Project Statistics

### Total Development Time:
- **Minimum:** 20-25 hours (experienced developer)
- **Average:** 30-40 hours (intermediate)
- **Learning included:** 40-60 hours (beginner-friendly)

### Code Metrics (estimated):
- **HTML:** ~1,500 lines
- **CSS:** ~2,500 lines
- **JavaScript:** ~2,000 lines
- **Total:** ~6,000 lines of code

### File Count:
- **HTML files:** 1
- **CSS files:** 5
- **JavaScript files:** 6
- **Assets:** 20-30 images
- **Data files:** 2-3 JSON files

---

## 🎨 Design System Reference

### Color Palette:
```css
/* Primary Colors */
--color-primary: #667eea;      /* Persian Blue */
--color-secondary: #764ba2;    /* Deep Purple */
--color-accent: #f093fb;       /* Bright Pink */
--color-teal: #4ecdc4;         /* Teal */
--color-gold: #ffd700;         /* Gold */

/* Neutrals */
--color-bg-dark: #0a0a0a;      /* Almost Black */
--color-bg-card: rgba(20, 20, 30, 0.95);
--color-text-primary: #ffffff;
--color-text-secondary: #d0d0d0;
--color-text-muted: #a0a0a0;
```

### Typography:
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Base size:** 16px
- **Line height:** 1.6

### Spacing Scale:
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 2rem (32px)
- lg: 4rem (64px)
- xl: 6rem (96px)

### Border Radius:
- Small: 8px
- Medium: 12px
- Large: 20px
- Pills: 50px

---

## 🐛 Common Issues & Solutions

### Issue 1: Scrollama not triggering
**Solution:**
- Check step elements have proper class `.step`
- Verify offset value (try 0.5)
- Ensure steps have min-height
- Check for JavaScript errors in console

### Issue 2: D3.js map not rendering
**Solution:**
- Verify SVG container has dimensions
- Check projection center coordinates
- Ensure GeoJSON data is valid
- Test with simplified polygon first

### Issue 3: GSAP animations not working
**Solution:**
- Confirm GSAP and ScrollTrigger loaded
- Check `gsap.registerPlugin(ScrollTrigger)`
- Verify trigger elements exist in DOM
- Use `markers: true` for debugging

### Issue 4: Mobile layout broken
**Solution:**
- Test media queries at breakpoints
- Disable sticky positioning on mobile
- Simplify animations for performance
- Check viewport meta tag

### Issue 5: Performance issues
**Solution:**
- Reduce particle count on mobile
- Use CSS transforms (not position)
- Debounce scroll handlers
- Lazy load images
- Check for memory leaks

---

## 📝 Content Customization

### Adapting for Different Topics:
This template can be adapted for other countries or topics:

1. **Change the data** in `js/data.js`
2. **Update text content** in HTML
3. **Modify color scheme** in CSS variables
4. **Replace images** in assets folder
5. **Adjust map coordinates** for different geography

### Adding More Sections:
To add new scrollytelling sections:
1. Copy a step structure
2. Add corresponding data
3. Update scrollytelling handler
4. Test thoroughly

---

## 🔒 Production Checklist

Before launching, ensure:

### Performance:
- [ ] Lighthouse score > 90
- [ ] Images optimized (WebP with fallbacks)
- [ ] JavaScript minified
- [ ] CSS minified
- [ ] Unused code removed
- [ ] CDN links use integrity hashes

### Accessibility:
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Focus indicators visible
- [ ] ARIA labels present

### SEO:
- [ ] Meta tags complete
- [ ] Open Graph tags added
- [ ] Structured data markup
- [ ] Sitemap created
- [ ] Robots.txt configured
- [ ] Analytics installed

### Cross-Browser:
- [ ] Chrome tested
- [ ] Firefox tested
- [ ] Safari tested
- [ ] Edge tested
- [ ] Mobile browsers tested

### Content:
- [ ] All text proofread
- [ ] Data accuracy verified
- [ ] Credits and attributions added
- [ ] Privacy policy (if collecting data)
- [ ] Contact information provided

---

## 🎯 Success Criteria

Your website is complete when:

✅ Hero loads smoothly with animations  
✅ Navigation appears/hides on scroll  
✅ Geography map is interactive  
✅ **Main scrollytelling works flawlessly**  
✅ All 9 regions display correctly  
✅ Charts and data visualizations render  
✅ Timeline animations are smooth  
✅ Cultural sections are engaging  
✅ Mobile experience is excellent  
✅ Load time < 3 seconds  
✅ No console errors  
✅ Accessibility tools pass  

---

## 🌟 Enhancement Ideas

After completing core functionality, consider:

### Advanced Features:
- 🔊 Background ambient music (optional)
- 🌓 Dark/light mode toggle
- 🌍 Language toggle (English/Farsi)
- 📱 Progressive Web App (PWA)
- 🎮 Interactive quiz at end
- 📊 Real-time data connections
- 🎨 3D elements with Three.js
- 🗣️ Audio narration option

### Content Additions:
- Photo galleries
- Video embeds
- Testimonials/stories
- Related article links
- Social media feed
- Newsletter signup
- Comment system

---

## 📚 Learning Resources

### Scrollytelling:
- [Scrollama Documentation](https://github.com/russellgoldenberg/scrollama)
- [The Pudding's How To](https://pudding.cool/process/how-to-implement-scrollytelling/)

### D3.js:
- [D3 Documentation](https://d3js.org/)
- [Observable D3 Gallery](https://observablehq.com/@d3/gallery)

### GSAP:
- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)

### Design Inspiration:
- [The Pudding](https://pudding.cool/)
- [The New York Times Graphics](https://www.nytimes.com/spotlight/graphics)
- [Reuters Graphics](https://graphics.reuters.com/)

---

## 💬 Getting Help

### If You Get Stuck:

1. **Re-read the prompt** - Details matter
2. **Check browser console** - Errors are clues
3. **Simplify the problem** - Test with minimal code
4. **Search specific errors** - Google/Stack Overflow
5. **Ask AI for clarification** - Paste error messages
6. **Break it down** - One feature at a time

### When Asking for Help:
Include:
- Error messages (full text)
- Browser and version
- Relevant code snippet
- What you've already tried
- Expected vs actual behavior

---

## 🎉 Final Notes

This is an **ambitious project** that showcases modern web development techniques. Take your time, test frequently, and don't hesitate to iterate.

The result will be a **portfolio-worthy piece** that demonstrates:
- Advanced JavaScript
- Data visualization skills
- UX/UI design thinking
- Performance optimization
- Accessibility awareness

**Remember:** The Pudding took years to perfect their style. Your first scrollytelling project is a learning experience. Focus on functionality first, polish later.

---

## 📞 Project Credits

**Original Content:** "The World of Iran" by Lyola  
**Development Guide:** Created for Claude Code and AI-assisted development  
**Inspired By:** The Pudding's data journalism  
**Technology:** Scrollama.js, D3.js, GSAP  

---

## 🚀 Ready to Begin?

Start with **Prompt 01: Project Setup** and work through sequentially.

**Estimated Timeline:**
- Week 1: Prompts 1-4 (Foundation + Main Scrollytelling)
- Week 2: Prompts 5-9 (Content Sections)
- Week 3: Prompts 10-11 (Polish + Deploy)

**Good luck, and enjoy building!** 🇮🇷✨

---

*Last Updated: October 2024*  
*Version: 1.0*