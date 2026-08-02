import React from 'react';
import { SlotPlaceholder } from '@bildit-platform/nextjs';
import CmsCinematicHero from '@/components/CmsCinematicHero';
import CmsMarqueeTicker from '@/components/CmsMarqueeTicker';
import CmsSplitBanner from '@/components/CmsSplitBanner';
import CmsFullWidthFeature from '@/components/CmsFullWidthFeature';

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col bg-white">
      {/* Visual Editor Slots for Crestline Commerce Homepage */}
      
      {/* 1. Cinematic Hero Slot */}
      <SlotPlaceholder 
        slotId="home-hero" 
        fallback={<CmsCinematicHero />} 
      />

      {/* 2. Marquee Ticker Slot */}
      <SlotPlaceholder 
        slotId="home-marquee" 
        fallback={<CmsMarqueeTicker />} 
      />

      {/* 3. Split Promo Grid Slot */}
      <SlotPlaceholder 
        slotId="home-split-banner" 
        fallback={<CmsSplitBanner />} 
      />

      {/* 4. Full Width Editorial Slot */}
      <SlotPlaceholder 
        slotId="home-full-width-feature" 
        fallback={<CmsFullWidthFeature />} 
      />
    </main>
  );
}
