// Test - 404.jsx
import React from 'react'
import { shallow } from 'enzyme'

import FourOhFour from './404'

it('renders without crashing', () => {
  shallow(<FourOhFour />)
})
