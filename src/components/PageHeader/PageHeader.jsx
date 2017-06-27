// React
import React, { Component } from 'react'

// SCSS
import './PageHeader.scss'

// Component
const PageHeader = ({ title, subtitle }) => {
  return (
    <header className="page-header last-child-mb-0">
      {title && (
        <div>
          <figure className="page-header__hex">
            <img src="https://unsplash.it/300/300/?random"
                 srcSet="https://unsplash.it/600/600/?random 2x"
                 alt=""/>
          </figure>
          <h1 className="page-header__title">{title}</h1>
        </div>
      )}
      {subtitle && (
        <div>
          <hr className="my-2"/>
          <h2 className="h4">{subtitle}</h2>
        </div>
      )}
    </header>
  )
} // /class PageHeader extends Component

export default PageHeader
