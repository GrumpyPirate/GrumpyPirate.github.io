import React from 'react'
import PropTypes from 'prop-types'

const PageHeaderSubtitle = ({ children }) => {
  return (
    <h2 className="h4 mb-0 pb-1 pb-md-2">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8">
            {children}
          </div>
        </div>
      </div>
    </h2>
  )
}

PageHeaderSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageHeaderSubtitle
