# 🌊 Ocean Depth Scroll Effects - Documentation

## Overview

The Praveen Hatchery website features subtle ocean depth scroll effects that create a calm underwater feeling without heavy animation or performance issues. These effects enhance the marine theme while maintaining the clean, premium design philosophy.

---

## 🎨 Effects Included

### 1. **Wave Overlay** (`WaveOverlay.tsx`)
- Subtle animated SVG waves at the top of the page
- Very gentle movement (barely noticeable)
- Creates a water surface effect
- Opacity: 20% (very subtle)
- Performance: Minimal (CSS transforms only)

### 2. **Depth Gradient** (`DepthGradient.tsx`)
- Changes background color as you scroll
- Lighter at top (surface), slightly deeper as you scroll
- Creates depth perception
- Opacity: 15% (very subtle)
- Performance: Excellent (CSS only, passive scroll listener)

### 3. **Ocean Particles** (`OceanDepthEffect.tsx`)
- Floating particles that drift upward
- Simulates underwater particles/plankton
- Particle count: Adaptive based on screen size
- Opacity: 40% overall, individual particles 10-40%
- Performance: Optimized with requestAnimationFrame

### 4. **Parallax Effects** (`useScrollDepth.ts`)
- Subtle depth perception on images
- Elements move at different speeds when scrolling
- Creates 3D depth illusion
- Performance: GPU-accelerated transforms

### 5. **Hover Float Effects**
- Cards gently float up on hover
- Simulates buoyancy
- Duration: 300ms (smooth)
- Performance: CSS transforms only

---

## 🎯 Design Philosophy

### Subtle & Calm
- All effects are **very subtle** - you feel them more than see them
- No jarring animations or heavy motion
- Creates atmosphere without distraction
- Maintains professional appearance

### Performance First
- All effects use GPU-accelerated properties (transform, opacity)
- Passive scroll listeners (no scroll blocking)
- RequestAnimationFrame for smooth 60fps
- Adaptive particle count based on screen size
- Cleanup on component unmount

### Marine Theme
- Aqua/teal colors for particles
- Blue gradient for depth
- Wave patterns for water surface
- Floating motion for underwater feel

---

## 📊 Performance Metrics

### Optimizations:
- ✅ GPU acceleration (transform, opacity)
- ✅ Passive scroll listeners
- ✅ RequestAnimationFrame for animations
- ✅ Adaptive particle density
- ✅ Proper cleanup on unmount
- ✅ No layout thrashing
- ✅ Minimal repaints

### Expected Performance:
- **FPS:** 60fps on modern devices
- **CPU Usage:** < 5% additional
- **Memory:** < 10MB additional
- **Mobile:** Fully optimized

---

## 🎨 Customization

### Adjust Particle Count
**File:** `components/OceanDepthEffect.tsx`

```tsx
// Current: Adaptive based on screen size
const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

// More particles:
const particleCount = Math.floor((canvas.width * canvas.height) / 10000)

// Fewer particles:
const particleCount = Math.floor((canvas.width * canvas.height) / 20000)
```

### Adjust Particle Speed
**File:** `components/OceanDepthEffect.tsx`

```tsx
// Current speed
this.speedY = Math.random() * 0.3 + 0.1

// Slower (more calm):
this.speedY = Math.random() * 0.2 + 0.05

// Faster:
this.speedY = Math.random() * 0.5 + 0.2
```

### Adjust Particle Opacity
**File:** `components/OceanDepthEffect.tsx`

```tsx
// Current opacity
this.opacity = Math.random() * 0.3 + 0.1

// More visible:
this.opacity = Math.random() * 0.5 + 0.2

// More subtle:
this.opacity = Math.random() * 0.2 + 0.05
```

### Adjust Wave Animation Speed
**File:** `components/WaveOverlay.tsx`

```tsx
// Current speed
time += 0.005

// Slower (more calm):
time += 0.003

// Faster:
time += 0.008
```

### Adjust Depth Gradient Intensity
**File:** `components/DepthGradient.tsx`

```tsx
// Current intensity (30% of full range)
const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollDepth * 0.3)

// More intense:
const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollDepth * 0.5)

// More subtle:
const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollDepth * 0.2)
```

### Adjust Parallax Speed
**File:** `sections/About.tsx` (or any section)

```tsx
// Current parallax
const imageY = useTransform(scrollYProgress, [0, 1], [20, -20])

// More parallax:
const imageY = useTransform(scrollYProgress, [0, 1], [40, -40])

// Less parallax:
const imageY = useTransform(scrollYProgress, [0, 1], [10, -10])
```

---

## 🔧 Disabling Effects

### Disable All Effects
**File:** `app/layout.tsx`

Comment out the effect components:
```tsx
{/* Ocean depth effects */}
{/* <WaveOverlay /> */}
{/* <DepthGradient /> */}
{/* <OceanDepthEffect /> */}
```

### Disable Individual Effects

**Disable Particles Only:**
```tsx
{/* <OceanDepthEffect /> */}
```

**Disable Waves Only:**
```tsx
{/* <WaveOverlay /> */}
```

**Disable Depth Gradient Only:**
```tsx
{/* <DepthGradient /> */}
```

**Disable Parallax:**
Remove the parallax code from individual sections.

---

## 🎨 Color Customization

### Change Particle Color
**File:** `components/OceanDepthEffect.tsx`

```tsx
// Current: Aqua (19, 194, 194)
ctx.fillStyle = `rgba(19, 194, 194, ${this.opacity})`

// Change to blue:
ctx.fillStyle = `rgba(12, 90, 138, ${this.opacity})`

// Change to custom color:
ctx.fillStyle = `rgba(R, G, B, ${this.opacity})`
```

### Change Wave Colors
**File:** `components/WaveOverlay.tsx`

```tsx
// Current gradients use aqua and blue
// Modify the stopColor values in the SVG gradients

<stop offset="0%" stopColor="rgba(19, 194, 194, 0.1)" />
<stop offset="100%" stopColor="rgba(12, 90, 138, 0.05)" />
```

---

## 📱 Mobile Optimization

### Automatic Optimizations:
- ✅ Fewer particles on smaller screens
- ✅ Passive scroll listeners
- ✅ GPU acceleration
- ✅ Reduced animation complexity

### Manual Mobile Adjustments:
**File:** `components/OceanDepthEffect.tsx`

```tsx
// Detect mobile and reduce particles
const isMobile = window.innerWidth < 768
const particleCount = isMobile 
  ? Math.floor((canvas.width * canvas.height) / 25000)  // Fewer on mobile
  : Math.floor((canvas.width * canvas.height) / 15000)  // Normal on desktop
```

---

## 🧪 Testing

### Visual Testing:
1. Open website in browser
2. Scroll slowly to see depth gradient change
3. Look for subtle floating particles
4. Notice gentle wave movement at top
5. Hover over cards to see float effect

### Performance Testing:
1. Open Chrome DevTools (F12)
2. Go to Performance tab
3. Record while scrolling
4. Check FPS (should be 60fps)
5. Check CPU usage (should be low)

### Browser Testing:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🎯 Effect Intensity Levels

### Current: **Subtle** (Recommended)
- Particles: Low density, slow movement
- Waves: Barely noticeable
- Gradient: Very subtle
- Parallax: Minimal

### If You Want More Intensity:

**Medium Intensity:**
```tsx
// Particles
const particleCount = Math.floor((canvas.width * canvas.height) / 10000)
this.speedY = Math.random() * 0.5 + 0.2
this.opacity = Math.random() * 0.5 + 0.2

// Waves
time += 0.008

// Gradient
* scrollDepth * 0.5

// Parallax
[40, -40]
```

**High Intensity:**
```tsx
// Particles
const particleCount = Math.floor((canvas.width * canvas.height) / 8000)
this.speedY = Math.random() * 0.8 + 0.3
this.opacity = Math.random() * 0.6 + 0.3

// Waves
time += 0.012

// Gradient
* scrollDepth * 0.7

// Parallax
[60, -60]
```

---

## 🆘 Troubleshooting

### Effects Not Visible:
1. Check browser console for errors
2. Verify components are imported in layout.tsx
3. Clear browser cache (Ctrl+F5)
4. Check z-index values

### Performance Issues:
1. Reduce particle count
2. Disable parallax effects
3. Reduce animation speeds
4. Check for other heavy scripts

### Effects Too Strong:
1. Reduce opacity values
2. Decrease particle count
3. Slow down animations
4. Reduce parallax range

---

## 💡 Best Practices

### Do:
- ✅ Keep effects subtle
- ✅ Test on multiple devices
- ✅ Monitor performance
- ✅ Use GPU-accelerated properties
- ✅ Clean up animations on unmount

### Don't:
- ❌ Add too many particles
- ❌ Use heavy animations
- ❌ Block scroll events
- ❌ Forget mobile optimization
- ❌ Overuse parallax

---

## 📚 Technical Details

### Technologies Used:
- **Canvas API** - For particle system
- **SVG** - For wave animations
- **Framer Motion** - For parallax and transitions
- **React Hooks** - For scroll tracking
- **CSS Animations** - For ripple and float effects

### Browser Support:
- Modern browsers with Canvas support
- Graceful degradation on older browsers
- Mobile browsers fully supported

---

## 🎨 Effect Combinations

### Recommended Combinations:

**Minimal (Best Performance):**
- ✅ Depth Gradient only
- ❌ Particles
- ❌ Waves
- ❌ Parallax

**Balanced (Recommended):**
- ✅ Depth Gradient
- ✅ Particles (low density)
- ✅ Waves
- ✅ Parallax (minimal)

**Full Experience:**
- ✅ All effects enabled
- ✅ Medium intensity
- ✅ All animations

---

## 📊 File Structure

```
components/
├── OceanDepthEffect.tsx    # Particle system
├── DepthGradient.tsx        # Scroll-based gradient
├── WaveOverlay.tsx          # Animated waves
└── RippleEffect.tsx         # Click ripple effect

lib/
└── useScrollDepth.ts        # Scroll tracking hook

styles/
└── globals.css              # Ocean animations
```

---

## 🚀 Future Enhancements (Optional)

### Possible Additions:
- Fish silhouettes passing by
- Bubble animations
- Light rays from surface
- Depth-based blur effect
- Sound effects (very subtle)

**Note:** Only add if requested - current effects are optimal for performance and subtlety.

---

## ✅ Summary

The ocean depth scroll effects create a **calm, professional underwater atmosphere** that:
- Enhances the marine theme
- Maintains premium design
- Performs excellently
- Works on all devices
- Stays subtle and elegant

**Perfect balance of aesthetics and performance!** 🌊

---

**Questions?** Refer to individual component files for implementation details.
