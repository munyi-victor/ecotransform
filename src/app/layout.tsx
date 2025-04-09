import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  keywords: "sustainable products, recycled materials, eco-friendly, upcycled furniture, green products, environmental impact, waste reduction",
  authors: [{ name: "Munyi Victor" }],
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
    description: 'Transforming waste into wonderful sustainable products that make a difference for our planet.',
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
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
