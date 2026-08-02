'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10 pt-20 pb-12 w-full">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="font-serif text-2xl font-bold tracking-[0.2em]">CRESTLINE</h3>
          <p className="text-white/50 text-xs font-light tracking-wider leading-relaxed">
            Crafting timeless, modern luxury essentials for individuals who value refinement and uncompromised quality.
          </p>
        </div>

        {/* Collections */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/90 mb-6">Collections</h4>
          <ul className="space-y-3 text-xs text-white/50 font-light tracking-wider">
            <li><a href="/collections/women" className="hover:text-white transition-colors">Womenswear</a></li>
            <li><a href="/collections/men" className="hover:text-white transition-colors">Menswear</a></li>
            <li><a href="/collections/all" className="hover:text-white transition-colors">Pre-Fall 2026</a></li>
            <li><a href="/products" className="hover:text-white transition-colors">Limited Editions</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/90 mb-6">Client Services</h4>
          <ul className="space-y-3 text-xs text-white/50 font-light tracking-wider">
            <li><a href="#" className="hover:text-white transition-colors">Complimentary Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/90 mb-6">Join Crestline Club</h4>
          <p className="text-xs text-white/50 mb-4 font-light tracking-wider">
            Subscribe to receive private previews and seasonal lookbooks.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              id="newsletter-email"
              name="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border border-white/20 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white flex-1"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-neutral-200 transition-colors"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/40 uppercase tracking-[0.2em] gap-4">
        <p>© 2026 Crestline Commerce Inc. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
