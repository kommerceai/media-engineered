import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organic Marketing - Scale Your Brand",
  description: "Join our network of creators and unlock exponential growth through strategic content and authentic engagement.",
  keywords: ["organic marketing", "content creation", "brand growth", "social media", "digital marketing"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
