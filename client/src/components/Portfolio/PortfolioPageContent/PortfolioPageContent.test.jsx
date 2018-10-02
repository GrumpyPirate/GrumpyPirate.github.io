// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PortfolioPageContent from './PortfolioPageContent'

// Suite
describe('<PortfolioPageContent />', () => {
  it('renders without crashing', () => {
    shallow(<PortfolioPageContent />)
  })
})
