import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CONTACT_INFO } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "O&S Welding Fabrication LLC | Professional Welding Services Chicago | MIG TIG Welding",
  description:
    "Premier welding & fabrication services in Mount Prospect, IL. Licensed & insured. MIG, TIG, Stick welding, mobile services, custom fabrication, manufacturing. Same-day service available. Call 773-815-2391",
  keywords: [
    "welding services Chicago",
    "MIG welding",
    "TIG welding",
    "mobile welding",
    "custom fabrication",
    "structural welding",
    "aluminum welding",
    "stainless steel welding",
    "truck repair",
    "industrial welding",
    "Mount Prospect welding",
    "emergency welding",
    "AutoCAD fabrication",
    "manufacturing Chicago",
    "plasma cutting",
  ],
  authors: [{ name: "O&S Welding Fabrication LLC" }],
  creator: "O&S Welding Fabrication LLC",
  publisher: "O&S Welding Fabrication LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://oswelding.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "O&S Welding Fabrication LLC | Professional Welding Services Chicago",
    description:
      "Licensed & insured welding services. MIG, TIG, Stick welding, mobile services, custom fabrication. Same-day service available in Chicago area.",
    url: "https://oswelding.com",
    siteName: "O&S Welding Fabrication LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "O&S Welding Fabrication - Professional Welding Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "O&S Welding Fabrication LLC | Professional Welding Services Chicago",
    description:
      "Licensed & insured welding services. MIG, TIG, Stick welding, mobile services, custom fabrication.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://oswelding.com",
    name: CONTACT_INFO.companyName,
    image: "https://oswelding.com/images/logo.jpg",
    description:
      "Professional welding, fabrication, and manufacturing services. Licensed & insured. Offering MIG, TIG, Stick welding, mobile services, custom fabrication, and more.",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT_INFO.coordinates.lat,
      longitude: CONTACT_INFO.coordinates.lng,
    },
    url: "https://oswelding.com",
    telephone: CONTACT_INFO.phones.ory,
    email: CONTACT_INFO.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:30",
        closes: "18:30",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Chicago",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: CONTACT_INFO.coordinates.lat,
        longitude: CONTACT_INFO.coordinates.lng,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Welding & Fabrication Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MIG Welding (GMAW)",
            description: "Professional gas metal arc welding services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TIG Welding (GTAW)",
            description: "Precision tungsten inert gas welding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Welding Services",
            description: "On-site welding and cutting services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Fabrication",
            description: "Custom metal fabrication and manufacturing",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
