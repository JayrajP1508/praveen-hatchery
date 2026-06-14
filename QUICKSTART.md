# Quick Start Guide - Praveen Hatchery Website

## 🚀 Get Your Website Running in 5 Minutes

### Step 1: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```
Wait for installation to complete (2-3 minutes).

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Go to: **http://localhost:3000**

Your website is now running! 🎉

---

## 📸 Adding Your Images

### Quick Image Setup:

1. **Prepare your photos:**
   - Hero image (main background)
   - About section photos
   - Infrastructure photos
   - Gallery images

2. **Place images in folders:**
   ```
   public/images/hero/hero.jpg
   public/images/about/about.jpg
   public/images/gallery/gallery1.jpg
   ... and so on
   ```

3. **Refresh browser** - Images will appear automatically!

See `IMAGE_GUIDE.md` for complete image list.

---

## ✏️ Customizing Content

### Update Company Info:
- **Header/Footer:** Edit `components/Header.tsx` and `components/Footer.tsx`
- **Hero Section:** Edit `sections/Hero.tsx`
- **About Content:** Edit `sections/About.tsx`
- **Services:** Edit `sections/Services.tsx`

### Update Contact Details:
Search for phone numbers and addresses in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `sections/ContactCTA.tsx`

Replace with your actual details.

---

## 🎨 Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#0c5a8a',  // Main blue color
    // ... other shades
  },
  aqua: {
    500: '#13c2c2',  // Main aqua color
    // ... other shades
  },
}
```

---

## 📱 Testing on Mobile

1. Find your computer's IP address:
   - Windows: `ipconfig` in command prompt
   - Mac/Linux: `ifconfig` in terminal

2. On your phone, open browser and go to:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

---

## 🏗️ Building for Production

When ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

---

## 📋 Pages Included

✅ Home Page (/)
✅ About (/about)
✅ Services (/services)
✅ Infrastructure (/infrastructure)
✅ Gallery (/gallery)
✅ Contact (/contact)

---

## 🆘 Common Issues

### Issue: "npm not found"
**Solution:** Install Node.js from nodejs.org

### Issue: "Port 3000 already in use"
**Solution:** Use different port:
```bash
npm run dev -- -p 3001
```

### Issue: Images not showing
**Solution:** 
1. Check image file names match exactly
2. Check images are in correct folders
3. Refresh browser (Ctrl+F5)

### Issue: Styles not loading
**Solution:**
1. Stop server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again

---

## 📞 Need Help?

If you encounter any issues:
1. Check the README.md file
2. Check the IMAGE_GUIDE.md file
3. Contact your developer

---

## ✨ Next Steps

1. ✅ Get website running
2. ✅ Add your images
3. ✅ Update contact information
4. ✅ Customize content
5. ✅ Test on mobile
6. ✅ Build for production
7. ✅ Deploy to hosting

---

**Congratulations!** Your premium hatchery website is ready! 🎊
