// React
import React, { Component } from 'react'

// Component
class PageContent extends Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render () {
    const alignClass = this.props.align
      ? ` text-${this.props.align}`
      : ''

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

export default PageContent
