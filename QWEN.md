# The World of Iran - Interactive Scrollytelling Website

## Project Overview

This is an immersive, data-driven scrollytelling website exploring Iran's geography, culture, and complexity. The project presents an interactive, educational journey through Iran's diverse landscapes, people, and unique cultural aspects. It's designed as a single-page application with scroll-driven narratives and interactive visualizations.

## Technology Stack

- **Scrollama.js** for scroll-driven interactions
- **D3.js** for maps and data visualizations
- **GSAP** for animation timelines and scroll triggers
- **Vanilla JavaScript** for application logic
- **CSS3** for layout and styling
- **HTML5** for structure and content

## Project Structure

```
countries-webpage3/
├── index.html                 # Main page with all content sections
├── package.json              # Project configuration and dependencies
├── _update_scrolly_functions.py  # Python script for updating scrollytelling functions
├── README.md                 # Project documentation
├── css/                      # Stylesheets
│   ├── animations.css        # Animation styles
│   ├── components.css        # Component-specific styles
│   ├── main.css              # Main styles
│   ├── responsive.css        # Responsive design rules
│   └── typography.css        # Typography styles
├── js/                       # JavaScript modules
│   ├── animations.js         # Animation logic
│   ├── data.js               # Data definitions
│   ├── main.js               # Main application entry point
│   ├── scrollytelling.js     # Scrollytelling functionality
│   ├── utils.js              # Utility functions
│   └── visualizations.js     # Visualization components
├── assets/                   # Images, fonts, and data
│   ├── data/                 # Data files
│   ├── fonts/                # Font files
│   └── images/               # Image assets
├── prompt-*.md               # Development prompts (prompt-01-setup.md through prompt-11.md)
└── prompts-master-guide.md   # Master guide for development prompts
```

## Building and Running

### Prerequisites
- Node.js/npm for development server
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation
1. Clone or download this repository
2. Install dependencies: `npm install`
3. Start the development server:

```bash
# Start server (default port 8080)
npm start

# Start server and open in browser
npm run dev
```

Alternatively, you can run a local server without npm:
```bash
# Python 3
python -m http.server 8000

# Or using npx http-server directly
npx http-server
```

4. Navigate to the provided local address (typically `http://localhost:8000`)

## Development Conventions

- Code follows consistent two-space indentation
- ES6 syntax is used for JavaScript
- Accessibility-first approach targeting WCAG AA standards
- Performance-minded for smooth scrolling
- Responsive layouts across device sizes
- Progressive enhancement for graceful fallbacks
- Each major section has dedicated CSS and JS modules
- Utilities live in `js/utils.js` for shared helpers
- Browser support: Chrome/Edge 90+, Firefox 88+, Safari 14+, modern mobile browsers

## Features by Section

1. **Hero** - Animated introduction with particles and gradient effects
2. **Geography** - Interactive map of Iran with landscape swiper showcasing diverse terrains
3. **Regions** - Scroll-guided regional deep dives with map highlighting different areas
4. **Demographics** - Population and ethnic breakdowns with interactive charts
5. **Politics** - Islamic regime structure, timeline, and explanation of public vs private life
6. **Culture** - Cultural quirks like nose jobs, faloodeh, tarof, and more
7. **Influence** - Persian cultural reach and legacy including Nowruz celebrations
8. **Hospitality** - Stories and examples of Iranian hospitality
9. **Outro** - Concluding thoughts and call to action

## Key Files and Components

- `index.html` - Contains all sections of the website with proper semantic structure
- `js/main.js` - Primary entry point that initializes all components and visualizations
- `js/scrollytelling.js` - Handles scroll-driven narratives and interactive elements
- `js/visualizations.js` - Contains D3.js visualizations for maps, charts, and data
- `css/responsive.css` - Responsive design rules for different screen sizes
- `_update_scrolly_functions.py` - Python script to update scrollytelling functions

## Data Sources

- Original text: "The World of Iran" by Lyola
- Geographic data: public domain sources
- Cultural information: educational references
- Assets stored in the `assets` directory

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers (iOS Safari, Chrome Mobile)

## Development Notes

- The project uses a scrollytelling approach where content is revealed as the user scrolls
- Animations are powered by GSAP for smooth transitions and scroll-triggered events
- D3.js is used for data visualizations, maps, and interactive charts
- Scrollama.js handles the scroll-driven narrative sections
- The design is responsive with mobile-optimized layouts
- Each major section has dedicated CSS and JavaScript modules
- The project includes a Python script (`_update_scrolly_functions.py`) for updating certain functions in the scrollytelling JavaScript file

## Content Structure

The website is organized into thematic sections:
- Geography & Diversity with interactive maps
- Regional breakdowns highlighting different ethnic groups
- Demographics with ethnic and linguistic diversity
- Political system and Islamic regime explanation
- Cultural quirks and unique aspects
- Persian cultural influence and legacy
- Iranian hospitality examples
- Concluding thoughts on Iran's contradictions

## Special Features

- Interactive maps that highlight different regions as you scroll
- Landscape swiper showcasing Iran's diverse terrains
- Animated demographic charts that update with scrolling
- Timeline of the 1979 Islamic Revolution
- Visual representation of public vs private life in Iran
- Academic achievement statistics for women in Iran
- Cultural quirks section highlighting unique aspects of Iranian society
- Nowruz map showing countries where the Persian New Year is celebrated
- Hospitality stories from travelers