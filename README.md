# Praveen Hatchery Website

A modern, premium, responsive website for Praveen Hatchery - an aquaculture and prawn hatchery company.

## Features

- ✨ Modern, clean, and premium design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎨 Beautiful UI with Tailwind CSS
- 🎭 Subtle animations with Framer Motion
- 🔍 SEO optimized
- ♿ Accessibility compliant

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** Inter (Google Fonts)

## Project Structure

```
praveen-hatchery/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── infrastructure/    # Infrastructure page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer
├── sections/              # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Infrastructure.tsx
│   ├── Quality.tsx
│   ├── GalleryPreview.tsx
│   ├── Testimonials.tsx
│   └── ContactCTA.tsx
├── public/
│   └── images/            # Image folders
│       ├── hero/
│       ├── about/
│       ├── services/
│       ├── gallery/
│       └── infrastructure/
└── styles/
    └── globals.css        # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Adding Images

**IMPORTANT:** All image paths are placeholders. Add your actual images to the following folders:

### Required Images:

1. **Hero Section** (`/public/images/hero/`)
   - `hero.jpg` - Main hero background image

2. **About Section** (`/public/images/about/`)
   - `about.jpg` - About section image
   - `about-hero.jpg` - About page hero
   - `founder.jpg` - Founder photo

3. **Services** (`/public/images/services/`)
   - `services-hero.jpg` - Services page hero
   - `nauplii.jpg`
   - `postlarvae.jpg`
   - `broodstock.jpg`
   - `water.jpg`
   - `consultancy.jpg`
   - `feed.jpg`

4. **Infrastructure** (`/public/images/infrastructure/`)
   - `infra-hero.jpg` - Infrastructure page hero
   - `tanks.jpg`
   - `nursery.jpg`
   - `lab.jpg`
   - `water.jpg`
   - `hatchery.jpg`
   - `water-treatment.jpg`
   - `laboratory.jpg`
   - `nursery-systems.jpg`
   - `biosecurity.jpg`
   - `feed-storage.jpg`

5. **Gallery** (`/public/images/gallery/`)
   - `gallery-hero.jpg` - Gallery page hero
   - `gallery1.jpg` to `gallery6.jpg` - Home page preview
   - `img1.jpg` to `img12.jpg` - Gallery page images

### Image Guidelines:

- **Format:** JPG or PNG
- **Hero images:** 1920x1080px or higher
- **Section images:** 1200x800px minimum
- **Gallery images:** 800x600px minimum
- **Optimize images** before uploading for better performance

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },  // Deep blue shades
  aqua: { ... },     // Aqua green shades
}
```

### Content

Update company information in:
- `sections/Hero.tsx` - Hero content
- `sections/About.tsx` - Company overview
- `components/Footer.tsx` - Contact details
- Individual page files for detailed content

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `sections/ContactCTA.tsx`

## Pages

1. **Home** (`/`) - Complete landing page with all sections
2. **About** (`/about`) - Company story, founder message, mission & vision
3. **Services** (`/services`) - Detailed service information
4. **Infrastructure** (`/infrastructure`) - Facility details
5. **Gallery** (`/gallery`) - Image gallery with categories
6. **Contact** (`/contact`) - Contact form and information

## Design Philosophy

- **Clean & Premium:** Modern corporate aesthetic
- **Marine-Inspired:** Deep blue and aqua color palette
- **Professional:** Trustworthy and informative
- **Simple:** No cluttered layouts or excessive animations
- **Readable:** Clear typography and proper spacing
- **Client-Friendly:** Easy navigation for farmers and businesses

## Performance

- Optimized images with Next.js Image component
- Lazy loading for images
- Minimal JavaScript bundle
- Fast page transitions
- SEO optimized metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Praveen Hatchery. All rights reserved.

## Contact

**Praveen Hatchery**
- Address: Konapapeta, Ponnada, Andhra Pradesh – 533449
- Phone: +91 95335 33253, +91 94924 23867
- WhatsApp: +91 95335 33253
- CAA Regd: 56-9(80)/2018

---

Built with ❤️ using Next.js, React, and Tailwind CSS
