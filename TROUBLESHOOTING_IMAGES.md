# 🔧 Images Not Showing - Troubleshooting Guide

## Quick Fix (Try This First!)

### Step 1: Restart Development Server
1. Stop the server: Press `Ctrl+C` in terminal
2. Start again: `npm run dev`
3. Refresh browser: `Ctrl+F5` (hard refresh)

**This fixes 90% of image issues!**

---

## Common Issues & Solutions

### Issue 1: Image Added But Not Showing

**Cause:** Next.js caches images and needs restart

**Solution:**
```bash
# Stop server (Ctrl+C)
# Then restart:
npm run dev
```

Then hard refresh browser: `Ctrl+F5`

---

### Issue 2: Wrong File Path

**Check:**
- File is in correct folder: `public/images/infrastructure/tanks.jpg`
- File name matches exactly (case-sensitive!)
- No extra spaces in filename
- File extension is correct (.jpg not .jpeg)

**Correct Path Structure:**
```
public/
└── images/
    └── infrastructure/
        └── tanks.jpg  ← Your file here
```

**In Code:**
```tsx
image: '/images/infrastructure/tanks.jpg'
```

Note: Path starts with `/images/` (not `/public/images/`)

---

### Issue 3: File Name Case Sensitivity

**Wrong:**
- `Tanks.jpg` (capital T)
- `tanks.JPG` (capital JPG)
- `tanks .jpg` (space before extension)

**Correct:**
- `tanks.jpg` (all lowercase)

**Fix:** Rename file to match exactly what's in the code.

---

### Issue 4: Browser Cache

**Solution:**
1. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Or clear browser cache:
   - Chrome: `Ctrl+Shift+Delete`
   - Select "Cached images and files"
   - Click "Clear data"

---

### Issue 5: Next.js Cache

**Solution:**
```bash
# Stop server (Ctrl+C)
# Delete Next.js cache:
rmdir /s /q .next

# Restart:
npm run dev
```

---

### Issue 6: File Format Issues

**Supported Formats:**
- ✅ .jpg
- ✅ .jpeg
- ✅ .png
- ✅ .webp
- ✅ .gif

**Not Supported:**
- ❌ .bmp
- ❌ .tiff
- ❌ .svg (needs special handling)

**Fix:** Convert image to .jpg or .png

---

### Issue 7: Image Too Large

**Issue:** Very large images may not load

**Solution:**
- Compress image to under 5MB
- Use online tools: TinyPNG, Squoosh
- Or resize to max 1920x1080px

---

## Step-by-Step Verification

### 1. Check File Location
```bash
# Run this in terminal to verify file exists:
dir public\images\infrastructure\tanks.jpg
```

Should show the file. If "File Not Found", image is in wrong location.

### 2. Check File Name
- Open folder: `public/images/infrastructure/`
- Look at actual filename
- Compare with code: `tanks.jpg`
- Must match EXACTLY (including case)

### 3. Check Code Path
**File:** `sections/Infrastructure.tsx`

Should have:
```tsx
{ title: 'Hatchery Tanks', image: '/images/infrastructure/tanks.jpg' }
```

Path must start with `/images/` (not `/public/images/`)

### 4. Restart Everything
```bash
# Stop server: Ctrl+C
# Clear cache:
rmdir /s /q .next
# Restart:
npm run dev
# Hard refresh browser: Ctrl+F5
```

---

## Testing Your Image

### Quick Test:
1. Open browser: `http://localhost:3000`
2. Scroll to Infrastructure section (on home page)
3. Look for "Hatchery Tanks" card
4. Image should appear

### If Still Not Showing:

**Check Browser Console:**
1. Press `F12` to open DevTools
2. Go to "Console" tab
3. Look for errors (red text)
4. Common errors:
   - `404 Not Found` = Wrong path
   - `Failed to load` = File corrupted or wrong format

**Check Network Tab:**
1. Press `F12` to open DevTools
2. Go to "Network" tab
3. Refresh page (`Ctrl+F5`)
4. Look for `tanks.jpg` in the list
5. If red (404) = File not found
6. If green (200) = File loaded successfully

---

## Complete Reset (Nuclear Option)

If nothing works, try this:

```bash
# 1. Stop server (Ctrl+C)

# 2. Delete cache and dependencies
rmdir /s /q .next
rmdir /s /q node_modules

# 3. Reinstall
npm install

# 4. Restart
npm run dev

# 5. Hard refresh browser (Ctrl+F5)
```

---

## Verify Image File

### Check if Image is Valid:
1. Open image in Windows Photo Viewer
2. If it opens = Image is valid
3. If error = Image is corrupted

### Check Image Properties:
1. Right-click image
2. Select "Properties"
3. Check:
   - Type: JPG Image
   - Size: Should be reasonable (not 0 KB)

---

## Common Mistakes

### ❌ Wrong:
```
public/images/Infrastructure/tanks.jpg  (capital I)
public/images/infrastructure/Tanks.jpg  (capital T)
public/images/infrastructure/tanks.JPG  (capital JPG)
public/Infrastructure/tanks.jpg         (wrong folder)
images/infrastructure/tanks.jpg         (missing public/)
```

### ✅ Correct:
```
public/images/infrastructure/tanks.jpg
```

### ❌ Wrong in Code:
```tsx
image: '/public/images/infrastructure/tanks.jpg'  // Don't include 'public'
image: 'images/infrastructure/tanks.jpg'          // Missing leading slash
```

### ✅ Correct in Code:
```tsx
image: '/images/infrastructure/tanks.jpg'
```

---

## Still Not Working?

### Check These:

1. **Server Running?**
   - Terminal should show: "Ready in X ms"
   - URL: http://localhost:3000

2. **Correct Page?**
   - Home page has Infrastructure section
   - Scroll down to see it

3. **File Permissions?**
   - Make sure file isn't read-only
   - Right-click → Properties → Uncheck "Read-only"

4. **Antivirus Blocking?**
   - Some antivirus software blocks file access
   - Try temporarily disabling

---

## Quick Checklist

- [ ] Image file is in: `public/images/infrastructure/tanks.jpg`
- [ ] Filename is exactly: `tanks.jpg` (lowercase)
- [ ] File format is: .jpg or .png
- [ ] File size is: Under 5MB
- [ ] Server restarted: `Ctrl+C` then `npm run dev`
- [ ] Browser refreshed: `Ctrl+F5`
- [ ] Cache cleared: Deleted `.next` folder
- [ ] No errors in browser console (F12)

---

## Test With Different Image

Try with a different image to isolate the issue:

1. Find any .jpg image on your computer
2. Rename it to: `tanks.jpg`
3. Place in: `public/images/infrastructure/`
4. Restart server
5. Refresh browser

If this works, original image file was corrupted.

---

## Get Help

If still not working, check:

1. **Browser Console (F12):**
   - Look for error messages
   - Screenshot and share

2. **Terminal Output:**
   - Look for errors when server starts
   - Screenshot and share

3. **File Path:**
   - Take screenshot of folder structure
   - Verify path is correct

---

## Prevention Tips

### For Future Images:

1. ✅ Always use lowercase filenames
2. ✅ No spaces in filenames (use hyphens: `my-image.jpg`)
3. ✅ Keep file sizes under 2MB
4. ✅ Use .jpg for photos, .png for graphics
5. ✅ Restart server after adding images
6. ✅ Hard refresh browser (Ctrl+F5)

---

## Summary

**Most Common Fix:**
```bash
# Stop server: Ctrl+C
npm run dev
# Then in browser: Ctrl+F5
```

**If that doesn't work:**
```bash
# Stop server: Ctrl+C
rmdir /s /q .next
npm run dev
# Then in browser: Ctrl+F5
```

**99% of the time, one of these will fix it!**

---

**Your image should now be visible! 🎉**
