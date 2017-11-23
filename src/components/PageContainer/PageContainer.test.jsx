// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PageContainer from './PageContainer'

// Suite
describe('<PageContainer />', () => {
  it('renders without crashing', () => {
    shallow(<PageContainer />)
  })
})
