// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Vendor
import { EventEmitter } from 'fbemitter'

// Component
import MainContainer from './MainContainer'

// Suite
describe('<MainContainer />', () => {
  it('renders without crashing', () => {
    const minProps = {
      emitter: new EventEmitter(),
      location: {}
    }

    shallow(<MainContainer {...minProps} />)
  })
})
