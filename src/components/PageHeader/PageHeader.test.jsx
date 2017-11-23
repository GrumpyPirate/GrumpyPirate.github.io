// React
import React from 'react'

// Testing libs
import { shallow } from 'enzyme'

// Component
import PageHeader from './PageHeader'

// Suite
describe('<PageHeader />', () => {
  it('renders without crashing', () => {
    const minProps = {
      title: 'test title',
      subtitle: 'test subtitle',
    }

    shallow(<PageHeader {...minProps} />)
  })
})
