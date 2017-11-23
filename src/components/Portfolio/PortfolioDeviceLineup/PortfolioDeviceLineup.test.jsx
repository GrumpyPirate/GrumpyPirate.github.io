// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PortfolioDeviceLineup from './PortfolioDeviceLineup'

// Suite
describe('<PortfolioDeviceLineup />', () => {
  it('renders without crashing', () => {
    shallow(<PortfolioDeviceLineup />)
  })
})
