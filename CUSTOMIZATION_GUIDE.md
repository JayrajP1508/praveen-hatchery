# 🎨 Customization Examples

Quick copy-paste examples for common customizations.

---

## 📝 Changing Text Content

### Update Hero Heading
**File:** `sections/Hero.tsx`

Find:
```tsx
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Advanced Vannamei Hatchery Solutions
</h1>
```

Change to:
```tsx
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Your New Heading Here
</h1>
```

### Update Company Tagline
**File:** `sections/Hero.tsx`

Find:
```tsx
<p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
  Delivering premium SPF shrimp seed...
</p>
```

Change to your tagline.

---

## 🎨 Changing Colors

### Change Primary Blue Color
**File:** `tailwind.config.js`

Find:
```javascript
primary: {
  600: '#0c5a8a',
  700: '#094771',
  800: '#063558',
  900: '#032340',
}
```

Change to your preferred blue shades.

### Change Aqua Color
**File:** `tailwind.config.js`

Find:
```javascript
aqua: {
  500: '#13c2c2',
  600: '#08979c',
}
```

Change to your preferred aqua/green shades.

---

## 📞 Updating Contact Information

### Update Phone Numbers
**Files to update:**
1. `components/Header.tsx`
2. `components/Footer.tsx`
3. `app/contact/page.tsx`
4. `sections/ContactCTA.tsx`

Find and replace:
- `+919533533253` → Your phone 1
- `+919492423867` → Your phone 2

### Update Address
**Files to update:**
1. `components/Footer.tsx`
2. `app/contact/page.tsx`

Find:
```tsx
Konapapeta, Ponnada
Andhra Pradesh – 533449
```

Replace with your address.

### Update WhatsApp Number
Find all instances of:
```tsx
https://wa.me/919533533253
```

Replace with:
```tsx
https://wa.me/YOUR_WHATSAPP_NUMBER
```

---

## 🖼️ Adding More Services

**File:** `sections/Services.tsx`

Add to the `services` array:
```tsx
{
  icon: '🎯',
  title: 'Your New Service',
  description: 'Description of your new service here.',
},
```

---

## 💬 Adding More Testimonials

**File:** `sections/Testimonials.tsx`

Add to the `testimonials` array:
```tsx
{
  name: 'Client Name',
  location: 'City, State',
  text: 'Their testimonial text here...',
},
```

---

## 📊 Updating Statistics

**File:** `sections/About.tsx`

Find the `stats` array and modify:
```tsx
const stats = [
  { label: 'Your Stat 1', icon: '🦐' },
  { label: 'Your Stat 2', icon: '🤝' },
  { label: 'Your Stat 3', icon: '🌱' },
  { label: 'Your Stat 4', icon: '🔬' },
]
```

---

## 🎯 Adding a New Page

### Step 1: Create folder and file
```
app/
└── your-page/
    └── page.tsx
```

### Step 2: Basic page template
```tsx
'use client'

import { motion } from 'framer-motion'

export default function YourPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-primary-800 mb-6">
            Your Page Title
          </h1>
          <p className="text-gray-700">
            Your content here...
          </p>
        </div>
      </section>
    </div>
  )
}
```

### Step 3: Add to navigation
**File:** `components/Header.tsx`

Add to `navLinks` array:
```tsx
{ name: 'Your Page', href: '/your-page' },
```

---

## 🔗 Changing Button Links

### Update "Explore Services" Button
**File:** `sections/Hero.tsx`

Find:
```tsx
<Link href="/services" className="btn-primary">
  Explore Services
</Link>
```

Change `/services` to your desired link.

---

## 📧 Adding Email Address

### In Footer
**File:** `components/Footer.tsx`

Add after phone numbers:
```tsx
<li className="flex items-center">
  <span className="mr-2">✉️</span>
  <a href="mailto:your@email.com" className="hover:text-aqua-400 transition-colors">
    your@email.com
  </a>
</li>
```

### In Contact Page
**File:** `app/contact/page.tsx`

Add new contact info block:
```tsx
<div className="flex items-start">
  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
    <span className="text-2xl">✉️</span>
  </div>
  <div>
    <h3 className="font-semibold text-primary-800 mb-1">Email</h3>
    <a href="mailto:your@email.com" className="text-gray-700 hover:text-primary-600">
      your@email.com
    </a>
  </div>
</div>
```

---

## 🌐 Adding Social Media Links

### In Footer
**File:** `components/Footer.tsx`

Add after contact info:
```tsx
<div className="mt-6 flex space-x-4">
  <a href="https://facebook.com/yourpage" className="text-gray-300 hover:text-aqua-400">
    Facebook
  </a>
  <a href="https://instagram.com/yourpage" className="text-gray-300 hover:text-aqua-400">
    Instagram
  </a>
  <a href="https://linkedin.com/company/yourpage" className="text-gray-300 hover:text-aqua-400">
    LinkedIn
  </a>
</div>
```

---

## 🖼️ Changing Gallery Categories

**File:** `app/gallery/page.tsx`

Find:
```tsx
const categories = ['all', 'hatchery', 'infrastructure', 'operations', 'team']
```

Change to your categories:
```tsx
const categories = ['all', 'category1', 'category2', 'category3']
```

Then update image categories in the `images` array.

---

## 📝 Updating Company Registration

**Files to update:**
1. `components/Header.tsx`
2. `components/Footer.tsx`
3. `sections/Hero.tsx`
4. `app/contact/page.tsx`

Find:
```tsx
CAA Regd: 56-9(80)/2018
```

Replace with your registration number.

---

## 🎨 Changing Font

**File:** `app/layout.tsx`

Find:
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

Change to another Google Font:
```tsx
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})
```

Then update:
```tsx
<body className={roboto.className}>
```

---

## 🔄 Changing Animation Speed

**File:** Any section file (e.g., `sections/Hero.tsx`)

Find:
```tsx
transition={{ duration: 0.8 }}
```

Change `0.8` to:
- `0.5` for faster
- `1.2` for slower

---

## 📏 Changing Section Spacing

**File:** `styles/globals.css`

Find:
```css
.section-padding {
  @apply py-16 md:py-24;
}
```

Change to:
```css
.section-padding {
  @apply py-12 md:py-20;  /* Less padding */
}
```

Or:
```css
.section-padding {
  @apply py-20 md:py-32;  /* More padding */
}
```

---

## 🎯 Changing Button Styles

**File:** `styles/globals.css`

### Primary Button
Find:
```css
.btn-primary {
  @apply bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300;
}
```

Customize:
- `px-6 py-3` → Change padding
- `rounded-lg` → Change roundness (`rounded-full`, `rounded-md`)
- `bg-primary-600` → Change color

---

## 📱 Changing Mobile Breakpoint

**File:** `tailwind.config.js`

Add custom breakpoints:
```javascript
theme: {
  extend: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
```

---

## 🖼️ Changing Image Aspect Ratios

### For Hero Images
**File:** `sections/Hero.tsx`

Find:
```tsx
<section className="relative h-screen flex items-center justify-center overflow-hidden">
```

Change `h-screen` to:
- `h-[600px]` for fixed height
- `h-[80vh]` for 80% viewport height

### For Section Images
**File:** Any section with images

Find:
```tsx
<div className="relative h-96 rounded-xl overflow-hidden">
```

Change `h-96` to:
- `h-64` for shorter
- `h-[500px]` for taller

---

## 🎨 Adding Custom CSS Class

**File:** `styles/globals.css`

Add at the bottom:
```css
@layer components {
  .your-custom-class {
    @apply bg-blue-500 text-white p-4 rounded-lg;
  }
}
```

Use in any component:
```tsx
<div className="your-custom-class">
  Content
</div>
```

---

## 📊 Changing Grid Columns

### Services Grid
**File:** `sections/Services.tsx`

Find:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

Change to:
- `lg:grid-cols-2` for 2 columns
- `lg:grid-cols-4` for 4 columns

---

## 🔍 Adding Meta Description

**File:** `app/layout.tsx`

Find:
```tsx
export const metadata: Metadata = {
  title: '...',
  description: '...',
}
```

Update the description for better SEO.

---

## 💡 Quick Tips

1. **After making changes:** Refresh browser (Ctrl+F5)
2. **If styles don't update:** Stop server, delete `.next` folder, restart
3. **Test on mobile:** Use browser DevTools (F12) → Toggle device toolbar
4. **Save often:** Use Ctrl+S after each change
5. **Keep backups:** Copy files before major changes

---

## 🆘 Common Mistakes to Avoid

❌ **Don't** remove closing tags
❌ **Don't** forget commas in arrays
❌ **Don't** mix single and double quotes
❌ **Don't** delete className attributes
✅ **Do** test after each change
✅ **Do** keep code formatting consistent
✅ **Do** save files before testing

---

## 📚 Need More Help?

- Check component files for examples
- Look at similar sections for patterns
- Refer to Tailwind CSS docs for styling
- Test changes in development mode first

---

**Happy Customizing! 🎨**
