import React from 'react';

/**
 * @templateId CmsSplitBanner
 * @templateName Split Promo Grid
 * @description Two-column collection navigation grid with zoom transition on hover
 */
interface CmsSplitBannerProps {
  /**
   * @type String
   * @label Left Title
   * @defaultValue Women
   */
  leftTitle?: string;
  /**
   * @type String
   * @label Left Subtitle
   * @defaultValue Pre-Fall Collections
   */
  leftSubtitle?: string;
  /**
   * @type Image
   * @label Left Image
   * @defaultValue https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80
   */
  leftImage?: { url?: string };
  /**
   * @type String
   * @label Left Button Text
   * @defaultValue Shop Women
   */
  leftButtonText?: string;
  /**
   * @type String
   * @label Left Button URL
   * @defaultValue /collections/women
   */
  leftButtonUrl?: string;
  /**
   * @type String
   * @label Right Title
   * @defaultValue Men
   */
  rightTitle?: string;
  /**
   * @type String
   * @label Right Subtitle
   * @defaultValue Tailored Modernity
   */
  rightSubtitle?: string;
  /**
   * @type Image
   * @label Right Image
   * @defaultValue https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&q=80
   */
  rightImage?: { url?: string };
  /**
   * @type String
   * @label Right Button Text
   * @defaultValue Shop Men
   */
  rightButtonText?: string;
  /**
   * @type String
   * @label Right Button URL
   * @defaultValue /collections/men
   */
  rightButtonUrl?: string;
}

export default function CmsSplitBanner({
  leftTitle = 'Women',
  leftSubtitle = 'Pre-Fall Collections',
  leftImage = { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80' },
  leftButtonText = 'Shop Women',
  leftButtonUrl = '/collections/women',
  rightTitle = 'Men',
  rightSubtitle = 'Tailored Modernity',
  rightImage = { url: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&q=80' },
  rightButtonText = 'Shop Men',
  rightButtonUrl = '/collections/men',
}: CmsSplitBannerProps) {
  const leftUrl = typeof leftImage === 'string' ? leftImage : leftImage?.url || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80';
  const rightUrl = typeof rightImage === 'string' ? rightImage : rightImage?.url || 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&q=80';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white w-full min-h-[500px]">
      <div className="relative overflow-hidden group min-h-[500px] w-full bg-neutral-900">
        <img
          src={leftUrl}
          alt="Left column promotion"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-12 text-left z-10">
          <p className="text-white/60 text-[9px] uppercase tracking-[0.3em] mb-3 font-semibold">
            {leftSubtitle}
          </p>
          <h3 className="text-white text-3xl font-serif font-bold tracking-wider mb-6">
            {leftTitle}
          </h3>
          {leftButtonText && (
            <a
              href={leftButtonUrl}
              className="inline-block px-10 py-3 bg-white text-black text-[9px] uppercase tracking-[0.2em] font-semibold hover:bg-white/95 transition-all"
            >
              {leftButtonText}
            </a>
          )}
        </div>
      </div>

      <div className="relative overflow-hidden group min-h-[500px] w-full bg-neutral-900">
        <img
          src={rightUrl}
          alt="Right column promotion"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-12 text-left z-10">
          <p className="text-white/60 text-[9px] uppercase tracking-[0.3em] mb-3 font-semibold">
            {rightSubtitle}
          </p>
          <h3 className="text-white text-3xl font-serif font-bold tracking-wider mb-6">
            {rightTitle}
          </h3>
          {rightButtonText && (
            <a
              href={rightButtonUrl}
              className="inline-block px-10 py-3 bg-white text-black text-[9px] uppercase tracking-[0.2em] font-semibold hover:bg-white/95 transition-all"
            >
              {rightButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
