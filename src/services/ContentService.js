// Images
import imageXL from 'images/portfolio/missfitsnutrition.com-xl.jpg'
import imageMD from 'images/portfolio/missfitsnutrition.com-md.jpg'
import imageXS from 'images/portfolio/missfitsnutrition.com-xs.jpg'

class ContentService {
  constructor () {
    this.getPortfolioItems = this.getPortfolioItems.bind(this)
  }

  getPortfolioItems () {
    return new Promise((resolve, reject) => {
      const items = [
        {
          id: 1,
          title: 'Vitae maxime',
          url: 'https://google.co.uk/',
          tech: [
            {
              name: 'Shopify',
              icon: 'shopify'
            }
          ],
          supportingImageSrc: 'https://placehold.it/480x320',
          headerImgSrc: imageXL,
          previews: {
            desktop: imageXL,
            tablet: imageMD,
            mobile: imageXS
          }
        },
        {
          id: 2,
          title: 'Vitae maxime',
          url: 'https://google.co.uk/',
          tech: [
            {
              name: 'Shopify',
              icon: 'shopify'
            }
          ],
          supportingImageSrc: 'https://placehold.it/480x320',
          headerImgSrc: imageXL,
          previews: {
            desktop: imageXL,
            tablet: imageMD,
            mobile: imageXS
          }
        },
        {
          id: 3,
          title: 'Vitae maxime',
          url: 'https://google.co.uk/',
          tech: [
            {
              name: 'Shopify',
              icon: 'shopify'
            }
          ],
          supportingImageSrc: 'https://placehold.it/480x320',
          headerImgSrc: imageXL,
          previews: {
            desktop: imageXL,
            tablet: imageMD,
            mobile: imageXS
          }
        }
      ] // /const items

      this.timeout = window.setTimeout(() => {
        resolve(items)
      }, 2000)
    }) // /new Promise((resolve, reject)
  }

  getSinglePortfolioItem (id) {
    return new Promise((resolve, reject) => {
      const item = {
        id: 1,
        title: 'Vitae maxime',
        url: 'https://google.co.uk/',
        tech: [
          {
            name: 'Shopify',
            icon: 'shopify'
          }
        ],
        supportingImageSrc: 'https://placehold.it/480x320',
        headerImgSrc: imageXL,
        previews: {
          desktop: imageXL,
          tablet: imageMD,
          mobile: imageXS
        }
      }

      this.timeout = window.setTimeout(() => {
        resolve(item)
      }, 2000)
    }) // /new Promise((resolve, reject)
  }
} // /class ContentService

export default ContentService
