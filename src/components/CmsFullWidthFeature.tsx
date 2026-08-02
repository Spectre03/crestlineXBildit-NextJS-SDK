import React from 'react';

/**
 * @templateId CmsFullWidthFeature
 * @templateName Full Width Feature
 * @description Wide brand-campaign banner with centered editorial copy and single primary CTA
 */
interface CmsFullWidthFeatureProps {
  /**
   * @type String
   * @label Subtitle
   * @defaultValue Limited Campaign Edition
   */
  subtitle?: string;
  /**
   * @type String
   * @label Title
   * @defaultValue The Summer Editorial
   */
  title?: string;
  /**
   * @type String
   * @label Description
   * @defaultValue A curated lookbook focusing on lightweight linen structures and seasonal silhouettes designed for breathability.
   */
  description?: string;
  /**
   * @type Image
   * @label Background Image
   * @defaultValue https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85
   */
  imageUrl?: { url?: string };
  /**
   * @type String
   * @label Button Text
   * @defaultValue Explore Campaign
   */
  buttonText?: string;
  /**
   * @type String
   * @label Button URL
   * @defaultValue /campaign/summer-editorial
   */
  buttonUrl?: string;
}

export default function CmsFullWidthFeature({
  subtitle = 'Limited Campaign Edition',
  title = 'The Summer Editorial',
  description = 'A curated lookbook focusing on lightweight linen structures and seasonal silhouettes designed for breathability.',
  imageUrl = { url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85' },
  buttonText = 'Explore Campaign',
  buttonUrl = '/campaign/summer-editorial',
}: CmsFullWidthFeatureProps) {
  const displayImage = typeof imageUrl === 'string' ? imageUrl : imageUrl?.url || 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85';

  return (
    <div className="relative min-h-[450px] flex items-center justify-center overflow-hidden bg-neutral-950 w-full">
      {displayImage && (
        <img
          src={displayImage}
          alt="Campaign feature background"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 px-8 text-center max-w-2xl py-16">
        <p className="text-white/60 text-[9px] uppercase tracking-[0.35em] mb-4 font-semibold">
          {subtitle}
        </p>
        <h2 className="font-serif text-white text-4xl sm:text-5xl font-bold tracking-wide mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-white/70 text-xs sm:text-sm font-light tracking-widest leading-relaxed mb-8 max-w-lg mx-auto">
          {description}
        </p>
        {buttonText && (
          <a
            href={buttonUrl}
            className="inline-block px-12 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-neutral-100 transition-all duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
