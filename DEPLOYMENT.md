# Deployment Guide - Praveen Hatchery Website

## 🌐 Hosting Options

### Option 1: Vercel (Recommended - FREE)

**Why Vercel?**
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ Fast global CDN
- ✅ Perfect for Next.js
- ✅ Custom domain support

**Steps:**

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Click "New Project" on Vercel
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live in 2 minutes

4. **Add Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your domain (e.g., praveenhatchery.com)
   - Update DNS records as instructed

---

### Option 2: Netlify (FREE)

**Steps:**

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up

2. **Build Your Site**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Drag and drop the `.next` folder to Netlify
   - Or connect GitHub repository

---

### Option 3: Traditional Hosting (cPanel/Shared Hosting)

**Requirements:**
- Node.js support on server
- SSH access

**Steps:**

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Upload Files via FTP**
   - Upload entire project folder
   - Install dependencies on server:
   ```bash
   npm install --production
   ```

3. **Start Server**
   ```bash
   npm start
   ```

4. **Use PM2 for Process Management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "praveen-hatchery" -- start
   pm2 save
   pm2 startup
   ```

---

### Option 4: AWS / DigitalOcean / Linode

**For Advanced Users**

1. **Setup Ubuntu Server**
2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone Repository**
   ```bash
   git clone YOUR_REPO_URL
   cd praveen-hatchery
   npm install
   npm run build
   ```

4. **Setup Nginx as Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name praveenhatchery.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Use PM2**
   ```bash
   pm2 start npm --name "praveen-hatchery" -- start
   ```

---

## 🔒 SSL Certificate (HTTPS)

### For Vercel/Netlify:
- Automatic SSL included ✅

### For Custom Server:
Use Let's Encrypt (FREE):
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d praveenhatchery.com
```

---

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Compress all images
   - Use WebP format where possible
   - Max 500KB per image

2. **Environment Variables**
   Create `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=https://praveenhatchery.com
   ```

3. **Build and Test**
   ```bash
   npm run build
   npm start
   ```
   Test at http://localhost:3000

---

## 🔍 SEO Setup

### 1. Google Search Console
- Add your website
- Submit sitemap: `https://yoursite.com/sitemap.xml`

### 2. Google Analytics (Optional)
- Create GA4 property
- Add tracking code to `app/layout.tsx`

### 3. Google My Business
- Create business listing
- Add website URL

---

## 📱 Domain Setup

### Buying a Domain:
- **GoDaddy** (godaddy.com)
- **Namecheap** (namecheap.com)
- **Google Domains** (domains.google)

Recommended domains:
- praveenhatchery.com
- praveenhatchery.in
- praveenhatcheries.com

### Connecting Domain:

**For Vercel:**
1. Add domain in Vercel dashboard
2. Update nameservers or add A/CNAME records

**DNS Records:**
```
Type: A
Name: @
Value: [Vercel IP]

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## ✅ Pre-Deployment Checklist

- [ ] All images added and optimized
- [ ] Contact information updated
- [ ] Phone numbers correct
- [ ] Address correct
- [ ] Test all pages
- [ ] Test on mobile
- [ ] Test contact form
- [ ] Check all links work
- [ ] Build succeeds without errors
- [ ] Test production build locally

---

## 🚀 Deployment Commands

### Development:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
npm start
```

### Check Build:
```bash
npm run build
```
Should complete without errors.

---

## 📈 Post-Deployment

### Monitor Your Site:
1. **Uptime Monitoring:** UptimeRobot (free)
2. **Analytics:** Google Analytics
3. **Performance:** PageSpeed Insights

### Regular Updates:
```bash
git pull
npm install
npm run build
pm2 restart praveen-hatchery
```

---

## 🆘 Troubleshooting

### Build Fails:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Site Not Loading:
- Check if server is running
- Check firewall settings
- Check DNS propagation (24-48 hours)

### Images Not Showing:
- Check file paths
- Check file permissions
- Clear browser cache

---

## 💰 Cost Estimate

### FREE Options:
- Vercel: FREE (recommended)
- Netlify: FREE
- Domain: $10-15/year

### Paid Options:
- Shared Hosting: $3-10/month
- VPS (DigitalOcean): $5-10/month
- AWS: Variable (can be free tier)

---

## 📞 Support

For deployment help:
1. Check Vercel documentation
2. Check Next.js deployment docs
3. Contact your developer

---

**Ready to go live?** Follow the Vercel option for the easiest deployment! 🚀
