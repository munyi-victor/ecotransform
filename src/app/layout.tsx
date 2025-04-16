import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoTransform | Sustainable Products from Recycled Materials",
  description: "EcoTransform creates beautiful, sustainable products from recycled materials. Join us in transforming waste into wonderful items that make a difference for our planet.",
  keywords: "sustainable products, recycled materials, eco-friendly, furniture, accessories, art, homeware, environmental impact",
  authors: [{ name: "EcoTransform" }],
  creator: "Munyi Victor",
  publisher: "EcoTransform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ecotransform.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "EcoTransform | Sustainable Products from Recycled Materials",
    description: "EcoTransform creates beautiful, sustainable products from recycled materials. Join us in transforming waste into wonderful items that make a difference for our planet.",
    url: 'https://ecotransform.com',
    siteName: 'EcoTransform',
    images: [
      {
        url: '/images/background.jpg',
        width: 1200,
        height: 630,
        alt: 'EcoTransform - Sustainable Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoTransform | Sustainable Products',
    description: 'Beautiful, sustainable products from recycled materials',
    creator: '@munyi_victor',
    images: ['/images/background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
