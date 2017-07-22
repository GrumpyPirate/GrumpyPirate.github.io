// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './PageContainer.scss'

// PureComponent
const PageContainer = ({ children }) => (
  <div className="page">
    {children}
  </div>
)

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageContainer
