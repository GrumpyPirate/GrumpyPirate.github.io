// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PortfolioPageHeader from './PortfolioPageHeader'

// Suite
describe('<PortfolioPageHeader />', () => {
  it('renders without crashing', () => {
    const minProps = {
      bgImage: 'test',
      title: 'test title',
      tech: [
        {
          icon: 'test-icon',
          name: 'test-name'
        }
      ]
    } // /const minProps

    shallow(<PortfolioPageHeader {...minProps} />)
  })
})
