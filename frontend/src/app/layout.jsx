import "./globals.css";
import Script from "next/script";
import GlobalScripts from "@/components/GlobalScripts";

export const metadata = {
  metadataBase: new URL('https://brandwithabdulla.com'),
  title: {
    default: "Muhammed Abdulla | #1 Performance Marketer in Kerala",
    template: "%s | Muhammed Abdulla",
  },
  description:
    "Muhammed Abdulla is Kerala's leading performance marketer and digital marketer, specializing in Google Ads, Meta Ads, SEO, web development, and brand strategy. Helping brands, resorts, and creators achieve measurable digital growth.",
  keywords: [
    "performance marketer in kerala",
    "digital marketer in kerala",
    "performance marketing kerala",
    "digital marketing kerala",
    "google ads expert kerala",
    "meta ads expert kerala",
    "facebook ads kerala",
    "seo expert kerala",
    "seo specialist kerala",
    "paid ads expert kerala",
    "digital marketing consultant kerala",
    "brand strategy kerala",
    "web developer kerala",
    "performance marketer wayanad",
    "digital marketer wayanad",
    "muhammed abdulla",
    "brandwithabdulla",
    "best digital marketer kerala",
    "top performance marketer india",
  ],
  authors: [{ name: "Muhammed Abdulla", url: "https://brandwithabdulla.com" }],
  creator: "Muhammed Abdulla",
  publisher: "Muhammed Abdulla",
  alternates: {
    canonical: "https://brandwithabdulla.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brandwithabdulla.com",
    siteName: "Muhammed Abdulla – Performance Marketer in Kerala",
    title: "Muhammed Abdulla | #1 Performance Marketer in Kerala",
    description:
      "Kerala's leading performance marketer & digital marketer. Google Ads, Meta Ads, SEO, and brand strategy driving measurable growth for brands, resorts, and creators.",
    images: [
      {
        url: "/assets/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Muhammed Abdulla – Performance Marketer in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Abdulla | #1 Performance Marketer in Kerala",
    description:
      "Kerala's top performance marketer & digital marketer. Google Ads, Meta Ads, SEO & web development to scale your brand. Book a free consultation.",
    images: ["/assets/images/og-image.webp"],
    creator: "@brandwithabdulla",
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
  category: "Digital Marketing",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammed Abdulla",
  "url": "https://brandwithabdulla.com",
  "jobTitle": "Performance Marketer",
  "description": "Performance Marketer and Digital Marketer based in Kerala, India, specializing in paid advertising, SEO, and brand growth strategies.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/brandwithabdulla",
    "https://www.linkedin.com/in/brandwithabdulla",
    "https://www.youtube.com/@brandwithabdulla"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Muhammed Abdulla – Performance Marketer in Kerala",
  "url": "https://brandwithabdulla.com",
  "description": "Official website of Muhammed Abdulla, Kerala's top performance marketer and digital marketer.",
  "author": {
    "@type": "Person",
    "name": "Muhammed Abdulla"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://brandwithabdulla.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Muhammed Abdulla | #1 Performance Marketer in Kerala",
  "url": "https://brandwithabdulla.com",
  "description": "Kerala's leading performance marketer & digital marketer. Google Ads, Meta Ads, SEO, and brand strategy driving measurable growth.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://brandwithabdulla.com"
      }
    ]
  },
  "author": {
    "@type": "Person",
    "name": "Muhammed Abdulla"
  },
  "inLanguage": "en-IN"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
        />
        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/style.css?v=56" />
        <link rel="stylesheet" href="/assets/css/drift-wall.css?v=46" />
        <link rel="stylesheet" href="/assets/css/global-scroll.css" />
        <link rel="stylesheet" href="/assets/css/scroll-reel.css" />
        {/* JSON-LD Schemas: Person + WebSite + WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XRNZ80SDL7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XRNZ80SDL7');
          `}
        </Script>
      </head>
      <body>
        {children}
        <GlobalScripts />
      </body>
    </html>
  );
}
