// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './PageHeader.scss'

// Images
import HeaderImage1x from 'images/portfolio/header-images/2.jpeg'

// Component
const PageHeader = ({ title, children }) => (
  <header className="page-header text-center last-child-mb-0">
    <div className="page-header__title">
      <div className="container-fluid">
        <figure className="page-header__title__hex">
          <img src={HeaderImage1x}
               srcSet={HeaderImage1x + ' 1x'}
               alt=""/>
        </figure>

        <h1 className="page-header__title__text">
          <div className="container-fluid">{title}</div>
        </h1>
      </div>
    </div>

    {children &&
      <div className="page-header__subtitle">
        {children}
      </div>
    }
  </header>
) // /const PageHeader

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageHeader
