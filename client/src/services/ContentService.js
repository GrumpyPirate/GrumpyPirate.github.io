// Contentful
import { createClient } from 'contentful'
import ContentfulSettings from 'config/contentful'

class ContentService {
  constructor () {
    this.contentfulClient = createClient({
      space: ContentfulSettings.spaceId,
      accessToken: ContentfulSettings.accessToken
    })

    this.fetchEntriesForContentType = this.fetchEntriesForContentType.bind(this)
    this.getPortfolioItems = this.getPortfolioItems.bind(this)
  }

  // Load all entries for a given Content Type from Contentful
  fetchEntriesForContentType (contentTypeSysId) {
    return this.contentfulClient.getEntries({ content_type: contentTypeSysId })
      .then(response => response.items)
      .catch(error => console.error(error))
  }

  formatItem (contentfulItem) {
    return {
      id: contentfulItem.sys.id,
      slug: contentfulItem.fields.slug,
      title: contentfulItem.fields.title,
      descriptionShort: contentfulItem.fields.descriptionShort,
      description: contentfulItem.fields.description,
      url: contentfulItem.fields.url,
      tech: contentfulItem.fields.tech,
      supportingImageSrc: ((contentfulItem.fields.supportingImage && contentfulItem.fields.supportingImage.fields.file.url) || null),
      headerImgSrc: contentfulItem.fields.headerImage.fields.file.url,
      previews: {
        desktop: contentfulItem.fields.devicePreviews[2].fields.file.url,
        tablet: contentfulItem.fields.devicePreviews[1].fields.file.url,
        mobile: contentfulItem.fields.devicePreviews[0].fields.file.url
      }
    }
  }

  getPortfolioItems () {
    return new Promise(resolve => {
      this.fetchEntriesForContentType('portfolioItem')
        .then(items => resolve(items.map(item => this.formatItem(item))))
    })
  }

  getSinglePortfolioItem (slug) {
    return new Promise((resolve, reject) => {
      this.fetchEntriesForContentType('portfolioItem')
        .then(items => {
          const item = items.find(item => item.fields.slug === slug)

          if (item) {
            resolve(this.formatItem(item))
          } else {
            reject(new Error('No portfolio item matching that slug was found.'))
          }
        })
    })
  }
}

export default new ContentService()
