/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Family Story Sections (Warm, Personal)
        'family-primary': '#D4A574',
        'family-secondary': '#8B6F47',
        'family-bg': '#F4E4D7',
        'family-text': '#2C1810',
        
        // Historical Context Cards (Cool, Documentary)
        'history-primary': '#2C3E50',
        'history-secondary': '#5D6D7E',
        'history-bg': '#ECF0F1',
        'history-accent': '#3498DB',
        'history-text': '#1A1A1A',
        
        // Special Elements
        'thread-color': '#D4AF37',
        'aral-sea': '#4A90A4'
      },
      fontFamily: {
        'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}