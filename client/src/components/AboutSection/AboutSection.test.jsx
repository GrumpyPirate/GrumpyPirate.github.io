// React
import React from 'react'
import { shallow } from 'enzyme'

import AboutSection from './AboutSection'

it('renders without crashing', () => {
  const defaultProps = {
    title: 'test-title'
  }

  shallow(<AboutSection {...defaultProps} />)
})
