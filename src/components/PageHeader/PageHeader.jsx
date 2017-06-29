// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './PageHeader.scss'

// Images
// import HeaderImage1x from 'images/header-images/1.jpeg'
import HeaderImage1x from 'images/header-images/2.jpeg'
// import HeaderImage1x from 'images/header-images/ehud-neuhaus-191867_cropped.jpg'
// import HeaderImage1x from 'images/header-images/mark-daynes-35088_cropped.jpg'

// Component
const PageHeader = ({ title, children }) => {
  return (
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
  )
} // /class PageHeader extends Component

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageHeader
