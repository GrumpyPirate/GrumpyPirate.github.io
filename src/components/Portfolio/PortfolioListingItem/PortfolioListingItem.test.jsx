// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PortfolioListingItem from './PortfolioListingItem'

// Suite
describe('<PortfolioListingItem />', () => {
  it('renders without crashing', () => {
    const minProps = {
      portfolioItem: {
        slug: 'test-slug',
        headerImgSrc: 'https://test-src',
        title: 'test title',
        descriptionShort: 'test description'
      } // /.portfolioItem
    } // /const minProps

    shallow(<PortfolioListingItem {...minProps} />)
  })
})
