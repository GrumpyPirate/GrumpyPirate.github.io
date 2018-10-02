// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PageHeaderSubtitle from './PageHeaderSubtitle'

// Suite
describe('<PageHeaderSubtitle />', () => {
  it('renders without crashing', () => {
    shallow(<PageHeaderSubtitle />)
  })
})
