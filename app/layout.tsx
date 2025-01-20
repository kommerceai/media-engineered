import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Engineered - Transform Your Digital Presence",
  description:
    "We help brands grow through strategic content creation and data-driven marketing solutions.",
  keywords: [
    "digital marketing",
    "content creation",
    "brand growth",
    "social media",
    "analytics",
    "organic growth",
  ],
  authors: [
    {
      name: "Media Engineered",
      url: "https://media-engineered.com",
    },
  ],
  creator: "Media Engineered",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://media-engineered.com",
    title: "Media Engineered - Transform Your Digital Presence",
    description:
      "We help brands grow through strategic content creation and data-driven marketing solutions.",
    siteName: "Media Engineered",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Engineered - Transform Your Digital Presence",
    description:
      "We help brands grow through strategic content creation and data-driven marketing solutions.",
    creator: "@mediaengineered",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
          <Navigation />
          <div className="pt-16">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
