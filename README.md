# O&S Welding Fabrication LLC - Landing WebsiteThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A professional, SEO-optimized landing website for O&S Welding Fabrication LLC built with Next.js 14, TypeScript, TailwindCSS, and shadcn/ui.## Getting Started

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)First, run the development server:

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square&logo=tailwind-css)```bash

npm run dev

## 🚀 Features# or

yarn dev

- ✅ **Next.js 14 App Router** - Modern React framework with server components# or

- ✅ **TypeScript** - Type-safe developmentpnpm dev

- ✅ **TailwindCSS** - Utility-first CSS framework with custom welding theme# or

- ✅ **shadcn/ui** - Beautiful, accessible componentsbun dev

- ✅ **SEO Optimized** - Meta tags, Open Graph, Schema.org LocalBusiness JSON-LD```

- ✅ **Fully Responsive** - Mobile-first design

- ✅ **Performance Optimized** - Lighthouse-readyOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- ✅ **Accessibility** - WCAG compliant

- ✅ **Dark Theme** - Industrial metallic design with welding spark accentsYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🏗️ Project StructureThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

```## Learn More

welding/

├── app/To learn more about Next.js, take a look at the following resources:

│   ├── layout.tsx          # Root layout with SEO metadata & Schema.org

│   ├── page.tsx            # Main landing page- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

│   └── globals.css         # Global styles with custom CSS variables- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

├── components/

│   ├── ui/                 # shadcn/ui componentsYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

│   │   ├── button.tsx

│   │   ├── card.tsx## Deploy on Vercel

│   │   ├── input.tsx

│   │   └── textarea.tsxThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

│   ├── Header.tsx          # Navigation header

│   ├── Hero.tsx            # Hero sectionCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

│   ├── ServicesSection.tsx # Services grid
│   ├── WhyChooseUs.tsx     # Why choose us section
│   ├── MetalsSection.tsx   # Metals we work with
│   ├── VideoSection.tsx    # Video showcase
│   ├── ContactSection.tsx  # Contact form & info
│   ├── Footer.tsx          # Footer with SEO content
│   ├── ServiceCard.tsx     # Service card component
│   ├── MetalCard.tsx       # Metal card component
│   └── VideoCard.tsx       # Video card component
├── lib/
│   ├── data.ts             # All content data (services, metals, contact info)
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Images directory
├── tailwind.config.ts      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

The website uses a custom industrial welding theme:

- **Steel Colors** - Dark metallic backgrounds (#0a0e12 to #f8f9fa)
- **Spark Colors** - Orange accents for CTAs (#f97316)
- **Glass Effect** - Frosted glass UI elements
- **Metal Texture** - Subtle grid patterns

### Typography

- **Primary Font**: Geist Sans
- **Monospace Font**: Geist Mono

## 🔧 Customization

### Update Company Information

Edit `/lib/data.ts`:

```typescript
export const CONTACT_INFO: ContactInfo = {
  companyName: "O&S Welding Fabrication LLC",
  address: {
    street: "11 W Prospect Ave",
    city: "Mount Prospect",
    state: "IL",
    zip: "60056",
    full: "11 W Prospect Ave, Mount Prospect, IL 60056",
  },
  phones: {
    ory: "773-815-2391",
    sultan: "773-567-2574",
  },
  email: "os.welders@gmail.com",
  hours: "7:30 AM – 6:30 PM (Mon–Sat)",
  coordinates: {
    lat: 42.0664,
    lng: -87.9373,
  },
};
```

### Add/Modify Services

Edit the `SERVICES` array in `/lib/data.ts`:

```typescript
export const SERVICES: Service[] = [
  {
    id: "mig-welding",
    title: "GMAW (MIG Welding)",
    description: "...",
    icon: "Zap", // Lucide React icon name
    features: ["Fast production", "Clean welds", "All positions"],
  },
  // Add more services...
];
```

## 🖼️ Images

Currently using placeholder images from Unsplash. For production:

1. Add your professional photos to `/public/images/`
2. Update image paths in:
   - `/components/Hero.tsx` - Hero background
   - `/lib/data.ts` - Video thumbnails

Recommended images:

- `hero-welding.jpg` (1920x1080px) - Hero background
- `video-thumb-1.jpg` (800x450px) - Video thumbnails
- `og-image.jpg` (1200x630px) - Social media preview
- `logo.jpg` (500x500px) - Company logo

## 🔍 SEO Features

- ✅ **Meta Tags** - Title, description, keywords
- ✅ **Open Graph** - Social media previews
- ✅ **Twitter Cards** - Twitter-specific metadata
- ✅ **Schema.org** - LocalBusiness structured data
- ✅ **Canonical URLs** - Prevent duplicate content
- ✅ **Semantic HTML** - Proper heading hierarchy
- ✅ **Alt Text** - All images have descriptive alt text

### Update SEO Metadata

Edit `/app/layout.tsx` to customize SEO settings.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Other Platforms

```bash
npm run build
```

The output will be in the `.next` folder.

## 📊 Performance Optimization

- Server-side rendering (SSR)
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Font optimization with next/font

## 🔄 Future Enhancements

1. **Backend Integration**

   - Connect contact form to email service
   - Add form submission to CRM

2. **Content Management**

   - Integrate CMS (Sanity, Contentful)

3. **Analytics**

   - Google Analytics 4
   - Conversion tracking

4. **Additional Features**
   - Customer testimonials
   - Project gallery
   - Blog section
   - Multi-language support (Russian)

## 📝 Scripts

```bash
npm run dev      # Development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Lint code
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📄 License

© 2025 O&S Welding Fabrication LLC. All rights reserved.

## 🤝 Support

- Email: os.welders@gmail.com
- Phone: 773-815-2391 (Ory) / 773-567-2574 (Sultan)

---

**Built with ❤️ and ⚡ for O&S Welding Fabrication LLC**
