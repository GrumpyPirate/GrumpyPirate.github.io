// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PortfolioCarousel from './PortfolioCarousel'

// Suite
describe('<PortfolioCarousel />', () => {
  it('renders without crashing', () => {
    shallow(<PortfolioCarousel />)
  })
})
