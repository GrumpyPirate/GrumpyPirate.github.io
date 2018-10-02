// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import Sidebar from './Sidebar'

// Suite
describe('<Sidebar />', () => {
  it('renders without crashing', () => {
    const minProps = {
    } // /const minProps

    shallow(<Sidebar {...minProps} />)
  })
})
