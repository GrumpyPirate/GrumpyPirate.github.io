import React from 'react'

import { Route } from 'react-router-dom'

import './ContentContainer.scss'

class ContentContainer extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <main className="content-container">
                {this.props.routes.map((route, index) =>
                    <Route path={route.path} exact={route.exact} component={route.components.content} />
                )}
            </main>
        )
    } // /render()
} // /class ContentContainer extends React.Component

export default ContentContainer
