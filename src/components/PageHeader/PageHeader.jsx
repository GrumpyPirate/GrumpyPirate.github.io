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
const PageHeader = ({ title, subtitle }) => {
  return (
    <header className="page-header last-child-mb-0">
      <figure className="page-header__hex">
        <img src={HeaderImage1x}
             srcSet={HeaderImage1x + ' 1x'}
             alt=""/>
      </figure>

      <h1 className="page-header__title">{title}</h1>

      {subtitle &&
        <div className="page-header__subtitle">
          <hr className="my-2"/>
          <h2 className="h4">{subtitle}</h2>
        </div>
      }
    </header>
  )
} // /class PageHeader extends Component

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default PageHeader
