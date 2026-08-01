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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anas Bagdady | Full-Stack Developer & Backend Specialist",
    template: "%s | Anas Bagdady",
  },
  description:
    "Portfolio of Anas Bagdady — Full-Stack Developer specializing in Django, REST APIs, databases, and scalable backend systems. Available for remote projects worldwide.",
  keywords: [
    "Anas Bagdady",
    "Full-Stack Developer",
    "Backend Developer",
    "Django",
    "Django REST Framework",
    "React",
    "Python",
    "Portfolio",
    "Remote Developer",
    "أنس البغدادي",
    "مطور ويب",
  ],
  authors: [{ name: "Anas Bagdady", url: siteUrl }],
  creator: "Anas Bagdady",
  publisher: "Anas Bagdady",
  alternates: {
    canonical: siteUrl,
    languages: {
      ar: siteUrl,
      en: siteUrl,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Anas Bagdady Portfolio",
    title: "Anas Bagdady | Full-Stack Developer & Backend Specialist",
    description:
      "Full-Stack Developer specializing in Django, REST APIs, databases, and scalable backend architecture.",
    locale: "ar_AR",
    alternateLocale: ["en_US"],
    images: [
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
    title: "Anas Bagdady | Full-Stack Developer & Backend Specialist",
    description:
      "Full-Stack Developer specializing in Django, REST APIs, databases, and scalable backend architecture.",
    images: [`${siteUrl}/anas-portrait.jpg`],
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anas Bagdady",
  alternateName: "أنس البغدادي",
  url: siteUrl,
  image: `${siteUrl}/anas-portrait.jpg`,
  jobTitle: "Full-Stack Developer & Backend Specialist",
  description:
    "Full-Stack Developer specializing in Django, REST APIs, databases, and scalable backend architecture.",
  email: "mailto:bgdady987@gmail.com",
  telephone: "+963931733249",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SY",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ebla University",
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
  ],
  sameAs: [
    "https://github.com/Anas-bagdady",
    "https://www.instagram.com/eng_anas_a_bagdady/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
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
