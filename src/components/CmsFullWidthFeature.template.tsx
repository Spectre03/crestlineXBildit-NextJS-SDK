/**
 * @templateId CmsFullWidthFeature
 * @templateName Full Width Feature
 * @description Wide brand-campaign banner with centered editorial copy and single primary CTA.
 */
export interface CmsFullWidthFeatureTemplateProps {
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
   * @defaultValue {"url": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85"}
   */
  imageUrl?: { url?: string; src?: string };
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
