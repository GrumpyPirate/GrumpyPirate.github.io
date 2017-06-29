// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Component
class PageContent extends Component {
  render () {
    const alignClass = this.props.align
      ? ` text-${this.props.align}`
      : null

    return (
      <div className={`page__content${alignClass}`}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-12 col-xl-10">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  } // /render ()
} // /class PageContent extends Component

PageContent.propTypes = {
  align: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageContent
