// React
import React from 'react'

// Routing
import { Route } from 'react-router-dom'
import Routes from '../../config/routes'

// Component
import './ContentContainer.scss'

class ContentContainer extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <main className="content-container">
                {Routes.map((route, index) =>
                    <Route key={index} path={route.path} exact={route.exact} component={route.components.content} />
                )}
            </main>
        )
    } // /render()
} // /class ContentContainer extends React.Component

export default ContentContainer
