/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-console */
// Contentful
import { ContentfulClientApi, createClient } from 'contentful';
import { get, uniqueId } from 'lodash-es';

import ContentfulSettings from 'config/contentful';
import { AboutSectionFormatted, PortfolioItemFormatted } from 'types/common';

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

  // Fetch all entries for a given content type
  private fetchEntriesForContentType(contentTypeSysId: string): Promise<any> {
    return this.contentfulClient
      .getEntries({ content_type: contentTypeSysId })
      .then((response) => response.items);
  }

  public getPortfolioItems(): Promise<PortfolioItemFormatted[]> {
    return new Promise((resolve) => {
      this.fetchEntriesForContentType('portfolioItem')
        .then((items: any[]) =>
          resolve(
            [...items]
              .map(formatPortfolioItem)
              .sort(
                (itemA, itemB) =>
                  new Date(itemA.createdAt).getTime() - new Date(itemB.createdAt).getTime(),
              ),
          ),
        )
        .catch((error) => console.error(error));
    });
  }

  public getAboutSections(): Promise<AboutSectionFormatted[]> {
    return new Promise((resolve) => {
      this.fetchEntriesForContentType('aboutPageSection')
        .then((items) =>
          resolve([...items].map(formatAboutSectionItem).sort((a, b) => a.order - b.order)),
        )
        .catch((error) => console.error(error));
    });
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
}

export default new ContentService();
export { ContentService };
