/**
 * @templateId CmsSplitBanner
 * @templateName Split Promo Grid
 * @description Two-column collection navigation grid with zoom transition on hover.
 */
export interface CmsSplitBannerTemplateProps {
  /**
   * @type String
   * @label Left Panel Title
   * @defaultValue Women
   */
  leftTitle?: string;
  /**
   * @type String
   * @label Left Panel Subtitle
   * @defaultValue Pre-Fall Collections
   */
  leftSubtitle?: string;
  /**
   * @type Image
   * @label Left Panel Image
   * @defaultValue {"url": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80"}
   */
  leftImage?: { url?: string; src?: string };
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
   * @label Right Panel Title
   * @defaultValue Men
   */
  rightTitle?: string;
  /**
   * @type String
   * @label Right Panel Subtitle
   * @defaultValue Tailored Modernity
   */
  rightSubtitle?: string;
  /**
   * @type Image
   * @label Right Panel Image
   * @defaultValue {"url": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&q=80"}
   */
  rightImage?: { url?: string; src?: string };
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
