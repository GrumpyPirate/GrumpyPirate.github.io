// React
import React from 'react'
import { shallow } from 'enzyme'

import Carousel from './Carousel'

it('renders without crashing', () => {
  shallow(<Carousel />)
})
