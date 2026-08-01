import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

const siteUrl = "https://anas-bagdady.github.io/anas";

const titleAr = "أنس بغدادي | مطوّر Full-Stack ومتخصص Backend";
const titleEn = "Anas Bagdady | Full-Stack Developer & Backend Specialist";
const titleDefault = `${titleAr} — ${titleEn}`;

const descriptionAr =
  "بورتفوليو أنس بغدادي (انس بغدادي) — مطوّر Full-Stack متخصص في Django وREST APIs وقواعد البيانات وهندسة Backend. متاح للعمل عن بُعد عالميًا.";
const descriptionEn =
  "Portfolio of Anas Bagdady — Full-Stack Developer specializing in Django, REST APIs, databases, and scalable backend systems. Available for remote projects worldwide.";
const descriptionDefault = `${descriptionAr} ${descriptionEn}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: "%s | أنس بغدادي | Anas Bagdady",
  },
  description: descriptionDefault,
  applicationName: "أنس بغدادي | Anas Bagdady",
  keywords: [
    "أنس بغدادي",
    "انس بغدادي",
    "انس بغدادي",
    "أنس بغدادي",
    "مطور ويب",
    "مطور Full-Stack",
    "مطور Backend",
    "بورتفوليو",
    "Anas Bagdady",
    "Anas Baghdadi",
    "Full-Stack Developer",
    "Backend Developer",
    "Django",
    "Django REST Framework",
    "React",
    "Python",
    "Portfolio",
    "Remote Developer",
  ],
  authors: [
    { name: "أنس بغدادي", url: siteUrl },
    { name: "Anas Bagdady", url: siteUrl },
  ],
  creator: "أنس بغدادي | Anas Bagdady",
  publisher: "أنس بغدادي | Anas Bagdady",
  alternates: {
    canonical: siteUrl,
    languages: {
      "ar-SY": siteUrl,
      ar: siteUrl,
      en: siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "أنس بغدادي | Anas Bagdady",
    title: titleDefault,
    description: descriptionDefault,
    locale: "ar_AR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 1200,
        alt: "أنس بغدادي — Anas Bagdady",
      },
      {
        url: `${siteUrl}/anas-portrait.jpg`,
        width: 720,
        height: 960,
        alt: "Anas Bagdady — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: descriptionDefault,
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon-48.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "أنس بغدادي | Anas Bagdady",
    alternateName: [
      "انس بغدادي",
      "أنس بغدادي",
      "انس بغدادي",
      "Anas Bagdady",
      "Anas Baghdadi",
    ],
    url: siteUrl,
    inLanguage: ["ar", "en"],
    description: descriptionDefault,
    image: `${siteUrl}/og-image.jpg`,
    publisher: {
      "@type": "Person",
      name: "أنس بغدادي",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "أنس بغدادي",
    alternateName: [
      "انس بغدادي",
      "أنس بغدادي",
      "انس بغدادي",
      "Anas Bagdady",
      "Anas Baghdadi",
      "Anas A. Bagdady",
    ],
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    jobTitle: "Full-Stack Developer & Backend Specialist",
    description: descriptionDefault,
    email: "mailto:bgdady987@gmail.com",
    telephone: "+963931733249",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SY",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "جامعة إيبلا",
      alternateName: "Ebla University",
    },
    knowsAbout: [
      "Django",
      "Django REST Framework",
      "Python",
      "React",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Full-Stack Development",
      "تطوير الويب",
      "Backend",
    ],
    sameAs: [
      "https://github.com/Anas-bagdady",
      "https://www.instagram.com/eng_anas_a_bagdady/",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#06152b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${notoSansArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
