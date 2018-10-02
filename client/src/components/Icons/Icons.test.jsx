// React
import React from 'react'
import { shallow } from 'enzyme'

// Component
import Icon from './Icons'

// Suite
describe('<Icon />', () => {
  it('renders without crashing', () => {
    const minProps = {
      glyph: 'test-glyph',
      className: 'test-class',
      width: '48',
      height: '48',
      altText: 'test-alt'
    }

    shallow(<Icon {...minProps} />)
  })
})
