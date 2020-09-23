/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-console */
// Contentful
import { ContentfulClientApi, createClient } from 'contentful';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';

import ContentfulSettings from 'config/contentful';
import { AboutSectionFormatted, PortfolioItemFormatted } from 'types/common';

type ContentfulImageAPIResizeBehavior = 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
type ContentfulImageAPIFormat = 'jpg' | 'png' | 'webp';

interface ContentfulImageAPIOptions {
  width?: number;
  height?: number;
  resizeBehavior?: ContentfulImageAPIResizeBehavior;
  format?: ContentfulImageAPIFormat;
  quality?: number;
  backgroundColor?: string;
}

const formatPortfolioItem = (portfolioItem: any): PortfolioItemFormatted => ({
  id: get(portfolioItem, 'sys.id', ''),
  slug: get(portfolioItem, 'fields.slug', ''),
  title: get(portfolioItem, 'fields.title', ''),
  descriptionShort: get(portfolioItem, 'fields.descriptionShort', ''),
  description: get(portfolioItem, 'fields.description', ''),
  url: get(portfolioItem, 'fields.url', ''),
  tech: get(portfolioItem, 'fields.tech', []),
  supportingImageSrc: get(portfolioItem, 'fields.supportingImage.fields.file.url', null),
  headerImgSrc: get(portfolioItem, 'fields.headerImage.fields.file.url', ''),
  previews: {
    desktop: get(portfolioItem, 'fields.devicePreviews[2].fields.file.url', ''),
    tablet: get(portfolioItem, 'fields.devicePreviews[1].fields.file.url', ''),
    mobile: get(portfolioItem, 'fields.devicePreviews[0].fields.file.url', ''),
  },
  createdAt: get(portfolioItem, 'sys.createdAt', new Date().toISOString()),
});

const formatAboutSectionItem = (aboutSection: any): AboutSectionFormatted => ({
  id: get(aboutSection, 'sys.id', uniqueId()),
  title: get(aboutSection, 'fields.title', ''),
  icons: get(aboutSection, 'fields.icons', []),
  slug: get(aboutSection, 'fields.slug', ''),
  content: get(aboutSection, 'fields.content', ''),
  order: parseInt(get(aboutSection, 'fields.order', 0), 10),
});

class ContentService {
  private contentfulClient: ContentfulClientApi;

  constructor() {
    this.contentfulClient = createClient({
      space: ContentfulSettings.spaceId,
      accessToken: ContentfulSettings.accessToken,
    });
  }

  /**
   * Fetches all entries for a given content type.
   * @param  {string} contentTypeSysId
   * @returns Promise
   */
  private fetchEntriesForContentType(contentTypeSysId: string): Promise<any> {
    return this.contentfulClient
      .getEntries({ content_type: contentTypeSysId })
      .then((response) => response.items);
  }

  public async getPortfolioItems(): Promise<PortfolioItemFormatted[]> {
    const items: any[] = await this.fetchEntriesForContentType('portfolioItem');

    return items
      .map(formatPortfolioItem)
      .sort(
        (itemA, itemB) => new Date(itemB.createdAt).getTime() - new Date(itemA.createdAt).getTime(),
      );
  }

  public async getAboutSections(): Promise<AboutSectionFormatted[]> {
    const items: any[] = await this.fetchEntriesForContentType('aboutPageSection');

    return items.map(formatAboutSectionItem).sort((a, b) => a.order - b.order);
  }

  public async getSinglePortfolioItem(slug: string): Promise<PortfolioItemFormatted> {
    const items: { fields: { slug: string } }[] = await this.fetchEntriesForContentType(
      'portfolioItem',
    );
    const matchedItem = items.find((item) => item.fields.slug === slug);

    if (!matchedItem) {
      throw new Error('No portfolio item matching that slug was found.');
    }

    return formatPortfolioItem(matchedItem);
  }

  /**
   * Adds querystring params to a contentful image URL.
   * https://www.contentful.com/developers/docs/references/images-api/
   *
   * @param  {string} url
   * @param  {ContentfulImageAPIOptions} options
   * @returns string
   */
  public static getResizedImage = (
    url: string,
    { format, width, height, resizeBehavior, quality, backgroundColor }: ContentfulImageAPIOptions,
  ): string => {
    let qsSegments: string[] = [];

    // Format
    if (format !== undefined) {
      qsSegments = [...qsSegments, `fm=${format}`];
    }

    // Resizing
    if (width !== undefined) {
      qsSegments = [...qsSegments, `w=${width}`];
    }

    if (height !== undefined) {
      qsSegments = [...qsSegments, `h=${height}`];
    }

    if (resizeBehavior !== undefined) {
      qsSegments = [...qsSegments, `fit=${resizeBehavior}`];
    }

    // Quality
    if (quality !== undefined) {
      qsSegments = [...qsSegments, `q=${quality}`];
    }

    // Background (for `pad` resizing)
    if (backgroundColor !== undefined) {
      qsSegments = [...qsSegments, `bg=${backgroundColor}`];
    }

    return `${url}${qsSegments.length > 0 && `?${qsSegments.join('&')}`}`;
  };
}

export default new ContentService();
export { ContentService };
