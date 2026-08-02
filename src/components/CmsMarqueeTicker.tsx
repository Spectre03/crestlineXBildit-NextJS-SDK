import React from 'react';

interface MarqueeTickerProps {
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
}

export default function CmsMarqueeTicker({
  item1 = 'Complimentary Express Shipping on Orders Over $250',
  item2 = 'Explore the Pre-Fall 2026 Collection Now',
  item3 = 'Sustainable Craftsmanship & Timeless Designs',
  item4 = 'Join Crestline Club for 10% Off Your First Purchase',
  item5 = 'New Arrivals Dropping Weekly',
  item6 = 'End of Season Sale: Up to 40% Off Selected Styles',
  item7 = 'Handcrafted in Small Batches',
}: MarqueeTickerProps) {
  const items = [item1, item2, item3, item4, item5, item6, item7].filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className="relative bg-neutral-900 border-y border-white/5 py-4 overflow-hidden w-full select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* Render twice for continuous scroll loop */}
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-16 pr-16 min-w-full justify-around">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 text-[10px] font-medium tracking-[0.3em] uppercase text-white/90">
                <span>{item}</span>
                <span className="text-white/30 text-xs">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
