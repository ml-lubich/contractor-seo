import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RankLocal — SEO Landing Pages for Local Contractors",
    template: "%s | RankLocal",
  },
  description:
    "Generate SEO-optimized landing pages for your contracting business in 60 seconds. Rank on Google for your trade + city. Plumbers, HVAC, electricians, roofers & more.",
  keywords: [
    "contractor SEO",
    "local SEO",
    "plumber website",
    "HVAC landing page",
    "electrician SEO",
    "roofer website",
    "contractor marketing",
    "local landing pages",
    "contractor lead generation",
  ],
  openGraph: {
    title: "RankLocal — SEO Landing Pages for Local Contractors",
    description: "Generate SEO-optimized landing pages for your contracting business in 60 seconds.",
    type: "website",
    siteName: "RankLocal",
  },
  twitter: {
    card: "summary_large_image",
    title: "RankLocal — SEO Landing Pages for Local Contractors",
    description: "Generate SEO-optimized landing pages for your contracting business in 60 seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
