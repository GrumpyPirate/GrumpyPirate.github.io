// Contentful
import { createClient } from 'contentful'
import ContentfulSettings from 'config/contentful'

// Images
import imageXL from 'images/portfolio/missfitsnutrition.com-xl.jpg'
import imageMD from 'images/portfolio/missfitsnutrition.com-md.jpg'
import imageXS from 'images/portfolio/missfitsnutrition.com-xs.jpg'

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
    return this.contentfulClient.getEntries({
      content_type: contentTypeSysId
    })
    .then((response) => response.items)
    .catch((error) => {
      console.error(error)
    })
  } // /fetchEntriesForContentType

  formatItem (contentfulItem) {
    return {
      id: contentfulItem.sys.id,
      slug: contentfulItem.fields.slug,
      title: contentfulItem.fields.title,
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
    return new Promise((resolve, reject) => {
      this.fetchEntriesForContentType('portfolioItem')
        .then((items) => {
          const adaptedItems = items.map((item, i) => {
            return this.formatItem(item)
          })

          resolve(adaptedItems)
        })
    }) // /new Promise((resolve, reject)
  }

  getSinglePortfolioItem (slug) {
    return new Promise((resolve, reject) => {
      this.fetchEntriesForContentType('portfolioItem')
        .then((items) => {
          const filteredItems = items.filter((item, i) => item.fields.slug === slug)

          if (filteredItems.length) {
            const item = filteredItems[0]

            resolve(this.formatItem(item))
          } else {
            reject(new Error('No portfolio item matching that slug was found.'))
          }
        })
    }) // /new Promise((resolve, reject)
  }
} // /class ContentService

export default ContentService
