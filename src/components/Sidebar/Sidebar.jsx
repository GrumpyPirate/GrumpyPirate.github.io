// React
import React from 'react'

// Routing
import { NavLink, Link } from 'react-router-dom'
import Routes from '../../config/routes'

// SCSS
import './Sidebar.scss'

// Images
import Logo from '../../images/avatar-ed--head-only.png'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        const CREATION_YEAR = 2017
        const CURR_YEAR     = new Date().getFullYear()

        return (
            <aside className="sidebar text-right">
                <div className="sidebar__content container-fluid">
                    <Link to="/" className="sidebar__brand">
                        <img className="sidebar__brand__image" src={Logo} alt="" width="64" height="64"/>
                        {/*<span className="sidebar__brand__name ml-1">Doloribus<br/>expedita</span>*/}
                        <span className="sidebar__brand__name ml-1">Edward<br/>Cobbold</span>
                    </Link>
                    <span className="sidebar__brand__job-title">Frontend Developer</span>

                    <hr/>

                    <ul className="sidebar__nav list-unstyled m-0" role="navigation">
                        {Routes.map((route, index) =>
                            (
                                <li className="sidebar__nav-item" key={index}>
                                    <NavLink to={route.path} exact={route.exact} className="sidebar__nav-link">
                                        {route.name}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="sidebar__credits">
                    <div className="container-fluid">
                        <p>
                            <small>&copy; {CURR_YEAR > CREATION_YEAR ?
                                <span className="sidebar__credits__date">{CREATION_YEAR}&mdash;{CURR_YEAR}</span> :
                                <span className="sidebar__credits__date">{CURR_YEAR}</span>
                            }</small>
                        </p>
                    </div>
                </div>
            </aside>
        )
    } // /render()
} // /export default class Sidebar extends React.Component
