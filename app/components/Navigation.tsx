'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isSignedIn, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['work', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Organic Marketing
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#work" className={`hover:text-primary ${activeSection === 'work' ? 'text-primary' : ''}`}>
              Work
            </Link>
            <Link href="/#services" className={`hover:text-primary ${activeSection === 'services' ? 'text-primary' : ''}`}>
              Services
            </Link>
            <Link href="/#contact" className={`hover:text-primary ${activeSection === 'contact' ? 'text-primary' : ''}`}>
              Contact
            </Link>
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button variant="default">Dashboard</Button>
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/sign-in">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="default">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/#work" className="block hover:text-primary">
              Work
            </Link>
            <Link href="/#services" className="block hover:text-primary">
              Services
            </Link>
            <Link href="/#contact" className="block hover:text-primary">
              Contact
            </Link>
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button className="w-full" variant="default">Dashboard</Button>
              </Link>
            ) : (
              <div className="space-y-2">
                <Link href="/sign-in">
                  <Button className="w-full" variant="ghost">Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="w-full" variant="default">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
} 