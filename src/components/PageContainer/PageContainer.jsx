// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// SCSS
import './PageContainer.scss'

// PureComponent
class PageContainer extends PureComponent {
  render () {
    return (
      <div className="page">
        {this.props.children}
      </div>
    )
  } // /render ()
} // /class PageContainer extends Component

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageContainer
