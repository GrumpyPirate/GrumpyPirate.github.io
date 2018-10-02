// React
import React from 'react'
import { shallow } from 'enzyme'

import AboutIcon from './AboutIcon'

it('renders without crashing', () => {
  const defaultProps = {
    iconName: 'test-icon-name',
    largeIcon: false
  }

  shallow(<AboutIcon {...defaultProps} />)
})
