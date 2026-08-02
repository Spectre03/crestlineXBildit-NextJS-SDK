'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/85 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-medium text-white/70">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/collections/all" className="hover:text-white transition-colors">Collections</a>
          <a href="/products" className="hover:text-white transition-colors">New Arrivals</a>
          <a href="/campaign/summer-editorial" className="hover:text-white transition-colors">Editorial</a>
        </nav>

        {/* Brand Logo */}
        <div className="flex-1 text-center md:flex-none">
          <a href="/" className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-white">
            CRESTLINE
          </a>
        </div>

        {/* Action Icons / CTAs */}
        <div className="flex items-center gap-6">
          <a
            href="/collections/all"
            className="hidden sm:inline-block px-5 py-2.5 border border-white/30 hover:border-white text-[10px] uppercase tracking-[0.2em] font-medium transition-all"
          >
            Shop Now
          </a>
          <div className="flex items-center gap-4 text-sm">
            <button className="text-white/80 hover:text-white p-1" aria-label="Search">
              🔍
            </button>
            <button className="text-white/80 hover:text-white p-1 relative" aria-label="Cart">
              🛍️
              <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
