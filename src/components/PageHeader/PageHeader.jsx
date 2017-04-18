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
                    <h1 className="page-header__title">{title}</h1>
                    <hr className="my-2"/>
                </div>
            )}
            {subtitle && (
                <h2 className="h4">{subtitle}</h2>
            )}
        </header>
    )
} // /class PageHeader extends Component

export default PageHeader
