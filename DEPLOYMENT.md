# Deployment Guide - O&S Welding Fabrication Website

## 🚀 Quick Start

Your website is ready to deploy! The development server is running at:

- **Local**: http://localhost:3000
- **Network**: http://192.168.0.102:3000

## 📋 Pre-Deployment Checklist

Before deploying to production, complete these steps:

### 1. Update Images

Replace placeholder images with professional photos:

```bash
# Add your images to public/images/
public/images/
  ├── hero-welding.jpg       # 1920x1080px - Hero background
  ├── video-thumb-1.jpg      # 800x450px - Video thumbnail 1
  ├── video-thumb-2.jpg      # 800x450px - Video thumbnail 2
  ├── video-thumb-3.jpg      # 800x450px - Video thumbnail 3
  ├── og-image.jpg           # 1200x630px - Social media preview
  └── logo.jpg               # 500x500px - Company logo
```

Then update the image paths:

- **Hero**: Edit `/components/Hero.tsx` line 13
- **Videos**: Edit `/lib/data.ts` lines 160-172

### 2. Update Domain

Edit `/app/layout.tsx` line 45:

```typescript
metadataBase: new URL("https://your-actual-domain.com"),
```

### 3. Add Google Analytics (Optional)

Add your Google Analytics tracking ID in `/app/layout.tsx`:

```typescript
verification: {
  google: "your-actual-google-verification-code",
},
```

### 4. Update Google Maps Embed

If needed, get your own Google Maps embed code at:
https://www.google.com/maps

Then update `/components/ContactSection.tsx` line 119.

### 5. Test the Build

```bash
npm run build
npm start
```

Open http://localhost:3000 and verify everything works.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel:**

- Built by the creators of Next.js
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Create GitHub Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - O&S Welding website"
   git remote add origin https://github.com/your-username/welding-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Add Custom Domain** (Optional)
   - In Vercel dashboard, go to project Settings → Domains
   - Add your domain (e.g., `oswelding.com`)
   - Update DNS records as instructed

**Build Time:** ~2-3 minutes
**Cost:** Free

---

### Option 2: Netlify

**Steps:**

1. Push code to GitHub (see step 1 above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

**Cost:** Free

---

### Option 3: AWS Amplify

**Steps:**

1. Push code to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click "New app" → "Host web app"
4. Connect GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
6. Deploy

**Cost:** Pay as you go (likely free for small traffic)

---

### Option 4: Traditional Hosting (cPanel, Shared Hosting)

For traditional hosting with Node.js support:

1. **Build locally:**

   ```bash
   npm run build
   ```

2. **Upload files via FTP:**

   - Upload entire project folder
   - Install Node.js on server (18+)
   - Run: `npm install --production`
   - Run: `npm start`

3. **Setup Process Manager:**

   ```bash
   npm install -g pm2
   pm2 start npm --name "welding-website" -- start
   pm2 save
   ```

4. **Configure Nginx/Apache** to proxy to port 3000

**Not Recommended** - More complex setup required

---

## 🔒 Environment Variables

If you add backend features later (email, analytics, etc.), create a `.env.local` file:

```bash
# Email Service (Example: SendGrid)
SENDGRID_API_KEY=your_api_key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other services...
```

Never commit `.env.local` to Git!

---

## 📊 Post-Deployment Steps

### 1. Verify SEO

Test your website with:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Validator](https://validator.schema.org/)
- [Open Graph Debugger](https://www.opengraph.xyz/)

### 2. Submit to Search Engines

- **Google**: Submit to [Google Search Console](https://search.google.com/search-console)
- **Bing**: Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 3. Setup Google Business Profile

Update your [Google Business Profile](https://business.google.com/) with:

- Website URL
- Updated photos
- Services offered

### 4. Monitor Performance

Setup monitoring:

- Google Analytics 4
- Google Search Console
- Vercel Analytics (if using Vercel)

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Image Loading Issues

Make sure `next.config.ts` has correct image domains configured.

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### TypeScript Errors

```bash
# Regenerate TypeScript definitions
npx next telemetry disable
rm -rf .next
npm run dev
```

---

## 📞 Need Help?

Contact for technical support:

- **Email**: os.welders@gmail.com
- **Phone**: 773-815-2391 (Ory) / 773-567-2574 (Sultan)

---

## ✅ Success Checklist

- [ ] All images replaced with professional photos
- [ ] Domain updated in metadata
- [ ] Google verification added (if needed)
- [ ] Website tested locally (`npm run build` + `npm start`)
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify/AWS
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Submitted to Google Search Console
- [ ] Google Business Profile updated
- [ ] Analytics tracking active

---

**🎉 Congratulations! Your website is ready to go live!**
