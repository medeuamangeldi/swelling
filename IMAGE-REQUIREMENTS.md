# 📸 Image Requirements for O&S Welding Website

## 🎯 **MINIMUM REQUIRED: 5 Images**

For a **perfect** professional landing page, you need these images:

---

## ✅ **ESSENTIAL IMAGES (Must Have)**

### 1. **Hero Background** - PRIORITY #1 ⭐⭐⭐
- **File name**: `hero-welding.jpg`
- **Size**: 1920x1080px (Full HD)
- **File size**: Under 500KB (optimize for web)
- **What to show**: 
  - Dramatic welding sparks flying
  - Worker in action (with helmet/mask)
  - Dark background with bright sparks
  - Professional, industrial feel
- **Placement**: Homepage hero section (first thing visitors see)
- **Why it matters**: Makes or breaks first impression
- **Current**: Using Unsplash placeholder

**Photography Tips:**
- Shoot in low light to make sparks stand out
- Use fast shutter speed (1/500s or faster)
- Get close-ups of the welding arc
- Show your actual equipment/workspace

---

### 2-4. **Video Thumbnails** (3 images) - PRIORITY #2 ⭐⭐
- **File names**: 
  - `video-thumb-1.jpg`
  - `video-thumb-2.jpg`
  - `video-thumb-3.jpg`
- **Size**: 800x450px (16:9 ratio)
- **File size**: Under 200KB each
- **What to show**:
  - Thumbnail 1: Close-up precision welding
  - Thumbnail 2: Large fabrication project
  - Thumbnail 3: Mobile welding on-site
- **Placement**: Video showcase section
- **Why it matters**: Showcases your actual work
- **Current**: Using Unsplash placeholders

**Photography Tips:**
- Action shots work best
- Show before/after or work in progress
- Include your branding/truck if possible
- Make sure images are clear and sharp

---

### 5. **Social Media Preview (OG Image)** - PRIORITY #3 ⭐
- **File name**: `og-image.jpg`
- **Size**: 1200x630px (Facebook/LinkedIn standard)
- **File size**: Under 300KB
- **What to show**:
  - Company name/logo
  - Tagline: "Professional Welding & Fabrication"
  - Contact phone number
  - Dramatic welding image background
- **Placement**: Shows when sharing website link on social media
- **Why it matters**: How your website looks when shared on Facebook, LinkedIn, Twitter
- **Current**: Using placeholder path (not critical for launch)

**Design Tips:**
- Use Canva (free) to create this
- Keep text large and readable
- Use your brand colors (dark + orange)
- Include your logo prominently

---

## 🎨 **RECOMMENDED ADDITIONS (For Premium Look)**

### 6. **Company Logo**
- **File name**: `logo.png` or `logo.svg`
- **Size**: 500x500px (square) or any size for SVG
- **Transparent background**: YES
- **What to show**: O&S Welding Fabrication LLC logo
- **Placement**: Header, footer, favicon
- **Priority**: Medium ⭐

---

### 7-12. **Service Showcase Gallery** (6+ images)
If you want to add a "Our Projects" section later:
- **File names**: `project-1.jpg` through `project-6.jpg`
- **Size**: 800x600px
- **What to show**:
  - Structural welding projects
  - Custom fabrication pieces
  - Truck/trailer repairs
  - HVAC installations
  - Before/after comparisons
  - Team at work
- **Priority**: Low (future enhancement)

---

### 13-16. **Team/About Photos** (Optional)
- Team members at work
- Your workshop/facility
- Equipment and tools
- Certifications/licenses
- **Priority**: Low (future enhancement)

---

## 📁 **File Structure**

Place all images in this folder:
```
/public/images/
├── hero-welding.jpg          ← MUST HAVE
├── video-thumb-1.jpg         ← MUST HAVE
├── video-thumb-2.jpg         ← MUST HAVE
├── video-thumb-3.jpg         ← MUST HAVE
├── og-image.jpg              ← RECOMMENDED
├── logo.png                  ← RECOMMENDED
└── (future project photos)
```

---

## 🔧 **How to Replace Images**

### Step 1: Add Your Images
1. Take/collect your photos
2. Optimize them (use tinypng.com or squoosh.app)
3. Rename them exactly as shown above
4. Drop them in `/public/images/` folder

### Step 2: Update Code

**For Hero Background:**
Edit `/components/Hero.tsx` (line 14):
```typescript
// Change from:
src="https://images.unsplash.com/photo-..."

// To:
src="/images/hero-welding.jpg"
```

**For Video Thumbnails:**
Edit `/lib/data.ts` (lines 160-172):
```typescript
export const VIDEO_SHOWCASE: VideoShowcase[] = [
  {
    id: "video-1",
    title: "Precision Welding Work",
    url: "https://www.pinterest.com/pin/57772807715335199/",
    thumbnail: "/images/video-thumb-1.jpg", // ← Update this
  },
  // ... repeat for video-2 and video-3
];
```

### Step 3: Test
```bash
# Restart dev server
npm run dev
# Visit http://localhost:3000
```

---

## 📸 **Photography Checklist**

### What to Photograph:

**Welding Action Shots:**
- [ ] MIG welding close-up with sparks
- [ ] TIG welding precision work
- [ ] Stick welding on heavy metal
- [ ] Plasma cutting in action

**Completed Projects:**
- [ ] Custom fabrication pieces
- [ ] Structural repairs
- [ ] Truck/trailer work
- [ ] Gates and fences
- [ ] HVAC installations

**On-Site Work:**
- [ ] Mobile welding truck
- [ ] Team working at job site
- [ ] Equipment setup

**Workshop:**
- [ ] Clean, professional workspace
- [ ] Tools and equipment
- [ ] Quality control process

---

## 💡 **Pro Tips**

### Image Optimization:
1. **Compress before upload**: Use [TinyPNG.com](https://tinypng.com) or [Squoosh.app](https://squoosh.app)
2. **Target file sizes**:
   - Hero: Under 500KB
   - Thumbnails: Under 200KB each
   - OG image: Under 300KB
3. **Use JPEG** for photos (not PNG unless you need transparency)

### Photography Tips:
- **Lighting**: Natural light or professional lighting
- **Focus**: Sharp, crisp images
- **Composition**: Rule of thirds
- **Action**: Show work in progress, not just finished products
- **People**: Show team members (with permission) for authenticity
- **Safety**: Always show proper safety gear

### If You Don't Have Photos Yet:
**Option 1: Use Stock Photos** (temporary)
- Search "welding" on [Unsplash.com](https://unsplash.com) or [Pexels.com](https://pexels.com)
- Free, high-quality images
- Replace with your own photos later

**Option 2: Hire a Photographer**
- Professional photos: $200-500 for a few hours
- Will pay for itself in credibility
- Can use photos for years

**Option 3: Use iPhone/Smartphone**
- Modern phones take great photos
- Clean the lens first!
- Use HDR mode
- Shoot in good lighting
- Take LOTS of shots, pick the best

---

## ⚡ **Quick Answer:**

### **Bare Minimum to Launch: 4 Images**
1. Hero background
2. Video thumbnail 1
3. Video thumbnail 2
4. Video thumbnail 3

### **Professional Standard: 5-6 Images**
1. Hero background
2-4. Video thumbnails (3)
5. OG social media image
6. Company logo

### **Premium/Future: 10-20+ Images**
- All above PLUS
- Project gallery (6-12 images)
- Team photos (2-4 images)
- Workshop/facility (2-4 images)

---

## 🎯 **Current Status**

**Using now:**
- ✅ Unsplash placeholders (working, but generic)

**Need to replace:**
- ⚠️ Hero background with YOUR welding work
- ⚠️ 3 video thumbnails with YOUR projects

**Optional but recommended:**
- 📋 OG image for social sharing
- 📋 Company logo

---

## 📅 **Recommended Timeline**

**Week 1:** 
- Get hero background photo
- Launch with just this + placeholders

**Week 2:**
- Get 3 video thumbnails
- Replace placeholders

**Week 3:**
- Create OG image
- Design logo (if needed)

**Month 2:**
- Build project gallery
- Add team photos

---

## ✅ **Quality Checklist**

Before adding any image:
- [ ] Is it in focus and sharp?
- [ ] Is the lighting good?
- [ ] Does it represent your quality standards?
- [ ] Is it optimized (compressed)?
- [ ] Is it the right size?
- [ ] Does it show safety practices?
- [ ] Would you be proud to show this to clients?

---

## 🚀 **Bottom Line**

**YOU CAN LAUNCH WITH CURRENT PLACEHOLDERS**, but:
- Plan to replace within 2-4 weeks
- Real photos build trust and credibility
- Your actual work will always look better than stock photos
- Aim for **4-6 professional images minimum**

**Investment:** 
- DIY with phone: $0 (just your time)
- Professional photos: $200-500
- **ROI:** Priceless (builds trust, credibility, drives conversions)

---

Need help finding a photographer or optimizing images? Let me know! 📸
