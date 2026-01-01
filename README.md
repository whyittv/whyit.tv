# WhyItTV Website

**Context over hype. Relevance over noise.**

Official website for WhyItTV - a story-driven educational series exploring influential brands, ideas, and systems.

## 🚀 Quick Deploy to Cloudflare Pages

### Option 1: Upload directly (Easiest)
1. Go to your Cloudflare Dashboard → Workers & Pages
2. Click "Create application" → "Pages" → "Upload assets"
3. Name your project: `whyit-tv`
4. Upload all files from this folder
5. Deploy!

### Option 2: Connect via GitHub (Recommended for updates)
1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Workers & Pages
3. Click "Create application" → "Pages" → "Connect to Git"
4. Select your `whyit.tv` repository
5. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
6. Deploy!

## 📁 File Structure

```
whyit.tv/
├── index.html          # Homepage
├── about.html          # About/Mission page
├── styles.css          # Main stylesheet
├── topic.css           # Topic page styles
├── script.js           # JavaScript (countdown, nav)
├── assets/
│   └── images/
│       ├── logo-neon.png
│       ├── logo-clean.png
│       └── topics/     # Topic images go here
└── topics/
    └── sour-diesel.html  # Topic hub template
```

## 🔗 Connect Your Domain

After deploying:
1. Go to your Pages project → Custom domains
2. Add `whyit.tv`
3. Cloudflare will handle DNS automatically (since domain is on Cloudflare)

## 📝 Adding New Topics

1. Copy `topics/sour-diesel.html` as a template
2. Update the content, meta tags, and schema.org data
3. Add images to `assets/images/topics/`
4. Update homepage to feature new topic
5. Push changes (auto-deploys if connected to GitHub)

## 🎯 LLMEO Optimization

Each topic page includes:
- Schema.org Article markup
- FAQ schema for common questions
- Semantic HTML structure
- Keyword-optimized content
- Structured data for AI crawlers

## 🔧 Future Enhancements

- [ ] YouTube API integration for auto video embeds
- [ ] Topics index page with filtering
- [ ] Search functionality
- [ ] AI-powered tools (topic explorer, etc.)
- [ ] Newsletter signup
- [ ] Comments/community features

---

**New topic every Friday at midnight.**

@whyitTV on YouTube, X, TikTok
