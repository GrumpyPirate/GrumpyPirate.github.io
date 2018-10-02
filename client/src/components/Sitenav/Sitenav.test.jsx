// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import SiteNav from './SiteNav'

// Suite
describe('<SiteNav />', () => {
  it('renders without crashing', () => {
    const minProps = {
    } // /const minProps

    shallow(<SiteNav {...minProps} />)
  })
})
