import type { Metadata } from "next";
import { Syne, DM_Sans, Unbounded } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import GlobalDithering from "@/components/ui/GlobalDithering";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const igraSans = localFont({
  src: "../../public/fonts/IgraSans.otf",
  variable: "--font-igra",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://juliabusigina.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Julia Busigina — Interior Design · Dubai & Abu Dhabi",
    template: "%s — Julia Busigina",
  },
  description:
    "Quiet luxury interiors for residential and commercial spaces in Dubai and Abu Dhabi. Full-cycle delivery from concept to final styling in 7–14 days.",
  keywords: [
    "interior design Dubai",
    "interior designer Abu Dhabi",
    "luxury interiors UAE",
    "residential interior design",
    "commercial interior design",
    "Julia Busigina",
  ],
  authors: [{ name: "Julia Busigina" }],
  openGraph: {
    title: "Julia Busigina — Interior Design · Dubai & Abu Dhabi",
    description:
      "Quiet luxury interiors for residential and commercial spaces. Full-cycle delivery in 7–14 days.",
    url: siteUrl,
    siteName: "Julia Busigina",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julia Busigina — Interior Design · Dubai & Abu Dhabi",
    description:
      "Quiet luxury interiors for residential and commercial spaces. Full-cycle delivery in 7–14 days.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#julia`,
      "name": "Julia Busigina",
      "jobTitle": "Interior Designer",
      "url": siteUrl,
      "image": `${siteUrl}/images/hero.jpeg`,
      "sameAs": [
        "https://instagram.com/busigina__design",
        "https://t.me/JuliaBusigina",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      "name": "Julia Busigina Interior Design",
      "description": "Quiet luxury interiors for residential and commercial spaces in Dubai and Abu Dhabi. Full-cycle delivery from concept to final styling in 7–14 days.",
      "url": siteUrl,
      "telephone": "+971509013058",
      "email": "busiginadesign@gmail.com",
      "founder": { "@id": `${siteUrl}/#julia` },
      "areaServed": ["Dubai", "Abu Dhabi", "United Arab Emirates"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Interior Design Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design Consultation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furnishing & Styling" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Design Project" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Author's Supervision" } },
        ],
      },
      "priceRange": "AED 700 – 21,000+",
      "currenciesAccepted": "AED",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
      },
      "sameAs": [
        "https://instagram.com/busigina__design",
        "https://t.me/JuliaBusigina",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${unbounded.variable} ${igraSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GlobalDithering />
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LanguageProvider>
        <WhatsAppFab />
      </body>
    </html>
  );
}
