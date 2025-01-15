"use client";

import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <Navigation />
    </header>
  );
}
