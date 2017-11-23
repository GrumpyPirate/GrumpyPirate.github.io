// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PortfolioList from './PortfolioList'

// Suite
describe('<PortfolioList />', () => {
  it('renders without crashing', () => {
    const minProps = {
      items: []
    }

    shallow(<PortfolioList {...minProps} />)
  })
})
