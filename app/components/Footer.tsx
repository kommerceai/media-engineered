'use client';

import { FiInstagram, FiTwitter, FiYoutube, FiLinkedin } from 'react-icons/fi';

const navigation = {
  main: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: FiInstagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FiTwitter,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: FiYoutube,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FiLinkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-2xl font-bold text-white">Organic Marketing</h3>
            <p className="text-zinc-400 max-w-xs">
              Helping creators achieve sustainable growth through authentic engagement and strategic content.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-400 hover:text-yellow-300 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-yellow-300 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a
                    href="mailto:hello@organicmarketing.com"
                    className="text-zinc-400 hover:text-yellow-300 transition-colors"
                  >
                    hello@organicmarketing.com
                  </a>
                </li>
                <li className="text-zinc-400">
                  Washington, DC
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Organic Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 