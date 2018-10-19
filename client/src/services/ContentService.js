// Contentful
import { createClient } from 'contentful';
import ContentfulSettings from 'config/contentful';
import { get, uniqueId } from 'lodash-es';

const formatPortfolioItem = portfolioItem => ({
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
});

const formatAboutSectionItem = aboutSection => ({
  id: get(aboutSection, 'sys.id', uniqueId()),
  title: get(aboutSection, 'fields.title', ''),
  icons: get(aboutSection, 'fields.icons', []),
  slug: get(aboutSection, 'fields.slug', ''),
  content: get(aboutSection, 'fields.content', ''),
  order: parseInt(get(aboutSection, 'fields.order', 0), 10),
});

class ContentService {
  constructor() {
    this.contentfulClient = createClient({
      space: ContentfulSettings.spaceId,
      accessToken: ContentfulSettings.accessToken,
    });
  }

  // Fetch all entries for a given content type
  fetchEntriesForContentType(contentTypeSysId) {
    return this.contentfulClient.getEntries({ content_type: contentTypeSysId })
      .then(response => response.items)
      .catch(error => console.error(error));
  }

  getPortfolioItems() {
    return new Promise((resolve) => {
      this.fetchEntriesForContentType('portfolioItem')
        .then(items => resolve(items.map(item => formatPortfolioItem(item))))
        .catch(error => console.error(error));
    });
  }

  getAboutSections() {
    return new Promise((resolve) => {
      this.fetchEntriesForContentType('aboutPageSection')
        .then(items => resolve(
          items
            .map(item => formatAboutSectionItem(item))
            .sort((a, b) => a.order - b.order),
        ))
        .catch(error => console.error(error));
    });
  }

  getSinglePortfolioItem(slug) {
    return new Promise((resolve, reject) => {
      this.fetchEntriesForContentType('portfolioItem')
        .then((items) => {
          const matchedItem = items.find(item => item.fields.slug === slug);

          if (matchedItem) {
            resolve(formatPortfolioItem(matchedItem));
          } else {
            reject(new Error('No portfolio item matching that slug was found.'));
          }
        });
    });
  }
}

export default new ContentService();
