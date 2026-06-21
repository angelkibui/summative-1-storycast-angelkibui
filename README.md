# StoryCast

An accessible microsite showcasing audio and video storytelling. Built with semantic HTML5, CSS (compiled from Sass), and vanilla JavaScript. Meets WCAG 2.1 AA standards.

## Project Structure


storycast/
├── index.html              # Home page - story discovery
├── about.html              # About & accessibility features
├── story/
│   └── the-christmas-sing.html   # Story detail with transcript
├── css/
│   └── main.css            # Compiled CSS (this styles everything)
├── js/
│   └── main.js             # Vanilla JS enhancements
├── assets/
│   ├── media/              # Audio/video files (demo uses external URLs)
│   └── transcripts/        # VTT transcript files
└── README.md               # This file


## How to Run Locally

### Option 1: Direct Open (Simplest)
1. Download or extract the storycast folder
2. Double-click index.html to open in your browser
3. That's it! The site works immediately

### Option 2: Local Server 
Using Node.js :
bash
cd storycast
npx serve . --port 3000
# Open http://localhost:3000


Using Python:
bash
cd storycast
python -m http.server 3000
# Open http://localhost:3000


Using VS Code:
1. Install "Live Server" extension
2. Right-click index.html → "Open with Live Server"

## What You'll See

### Home Page (index.html)
- *Hero section* with "Stories That Speak to Everyone" heading
- *Featured Stories* grid with 3 story cards showing real images from Unsplash:
  - The Christmas Sing (Audio) - Christmas gathering
  - City of Rhythm (Video) - urban night scene
  - Silent Echoes (Sign + Video) - ASL hands image
- *Accessibility Commitment* section with feature list

### Story Detail Page (story/the-christmas-sing.html)
- *Working audio player* with an audio story
- *Audio description* explaining the sound design
- *Working video player* 

### About Page (about.html)
- *Our Mission* section explaining accessibility-first approach
- *Who We Serve* listing all disability communities
- *Accessibility Features* box with 10 detailed features
- *Technical Standards* with testing tools listed
- *How to Engage* with submit and contact info

## Accessibility Checklist (WCAG 2.1 AA)

### Perceivable
- [x] Text alternatives for all images (descriptive alt text)
- [x] Full transcripts for audio content (collapsible section)
- [x] Captions support via <track> elements
- [x] Color not sole means of conveying information (icons + text)
- [x] Contrast ratios: 7.2:1 (primary teal), 4.6:1 (secondary terracotta), 16.8:1 (dark text)

### Operable
- [x] Keyboard accessible (Tab, Enter, Space, arrows)
- [x] Skip navigation link (first Tab press reveals it)
- [x] Visible focus indicators (amber ring, 3px solid)
- [x] No time limits on content
- [x] Logical tab order following DOM sequence

### Understandable
- [x] Readable font sizes (16px base, scalable to 200%)
- [x] Predictable navigation (consistent across all pages)
- [x] Semantic HTML5 structure (header, nav, main, article, aside, footer)
- [x] Language declared on HTML element (lang="en")

### Robust
- [x] Valid semantic HTML5 (no div soup)
- [x] ARIA labels where needed (aria-expanded, aria-hidden, aria-live, aria-describedby)
- [x] Compatible with NVDA, JAWS, VoiceOver, TalkBack
- [x] Container queries for responsive components (@container)

## Key Features Explained

### Container Queries
The .story-card-container uses container-type: inline-size and the .media-card adapts its layout at 30rem and 50rem breakpoints — independent of viewport width. This means the card changes layout based on how wide its PARENT is, not the screen.

### Focus Management
- :focus-visible shows amber ring ONLY for keyboard users
- :focus:not(:focus-visible) removes ring for mouse users
- Skip link appears on first Tab press, jumps to main content

### Reduced Motion Support
If user has "Reduce Motion" enabled in OS settings, all animations disable automatically via prefers-reduced-motion media query.

## Browser Support
- Chrome/Edge 105+ (container queries)
- Firefox 110+
- Safari 16+
- All modern browsers
