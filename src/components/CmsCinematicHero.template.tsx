/**
 * @templateId CmsCinematicHero
 * @templateName Cinematic Hero
 * @description Fullscreen campaign hero with animated scaling background and dual CTAs.
 */
export interface CmsCinematicHeroTemplateProps {
  /**
   * @type String
   * @label Subtitle
   * @defaultValue Crestline Commerce · Est. 2026
   */
  subtitle?: string;
  /**
   * @type String
   * @label Title
   * @defaultValue Define Your\nStandard.
   */
  title?: string;
  /**
   * @type String
   * @label Description
   * @defaultValue Premium collections for those who refuse to settle. Crafted for the exceptional.
   */
  description?: string;
  /**
   * @type Image
   * @label Background Image
   * @defaultValue {"url": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90"}
   */
  imageUrl?: { url?: string; src?: string };
  /**
   * @type String
   * @label Primary Button Text
   * @defaultValue Shop Collection
   */
  primaryButtonText?: string;
  /**
   * @type String
   * @label Primary Button URL
   * @defaultValue /collections/all
   */
  primaryButtonUrl?: string;
  /**
   * @type String
   * @label Secondary Button Text
   * @defaultValue Explore All
   */
  secondaryButtonText?: string;
  /**
   * @type String
   * @label Secondary Button URL
   * @defaultValue /products
   */
  secondaryButtonUrl?: string;
}
