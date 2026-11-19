import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const fraunces = localFont({
  src: [
    {
      path: "./fonts/fraunces-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/fraunces-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const manrope = localFont({
  src: [
    {
      path: "./fonts/manrope.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const siteUrl = "https://midtowndentalbismarck.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Midtown Dental | Bismarck, ND Dentist",
    template: "%s | Midtown Dental",
  },
  description: site.description,
  keywords: [
    "Midtown Dental",
    "Bismarck dentist",
    "Mandan dentist",
    "family dentistry",
    "cosmetic dentistry",
    "pediatric dentistry",
    "dental implants",
    "Bismarck ND",
  ],
  authors: [{ name: "Midtown Dental" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Midtown Dental",
    title: "Midtown Dental | Bismarck, ND Dentist",
    description: site.description,
    images: [
      {
        url: "/assets/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Midtown Dental Bismarck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midtown Dental | Bismarck, ND Dentist",
    description: site.description,
    images: ["/assets/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#122119",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}/#dentist`,
  name: "Midtown Dental",
  alternateName: "Midtown Dental Bismarck",
  url: siteUrl,
  image: `${siteUrl}/assets/images/og.jpg`,
  telephone: "+1-701-222-1286",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2000 N 12th St",
    addressLocality: "Bismarck",
    addressRegion: "ND",
    postalCode: "58501",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.8279101,
    longitude: -100.7929811,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "07:00",
      closes: "14:00",
    },
  ],
  sameAs: [site.links.facebook, site.links.instagram],
  areaServed: ["Bismarck", "Mandan"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <Providers>
          <a
            href="#main"
            className="fixed left-4 top-4 z-[100] -translate-y-[150%] rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream shadow-lift transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
