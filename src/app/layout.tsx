import type { Metadata } from "next";
import { Syne, DM_Sans, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

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

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jost.variable}`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
