// Test - 404.jsx
import React from 'react'
import { shallow } from 'enzyme'

import Component from './404'

it('renders without crashing', () => {
  shallow(<Component />)
})
