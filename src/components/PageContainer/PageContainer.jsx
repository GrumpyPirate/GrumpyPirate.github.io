// React
import React, { Component } from 'react'

// SCSS
import './PageContainer.scss'

// Component
class PageContainer extends Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
        )
    } // /render()
} // /class PageContainer extends Component

export default PageContainer
