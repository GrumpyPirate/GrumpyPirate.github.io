// React
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// SCSS
import './Sidebar.scss'

// Images
// import Logo from './avatar-ed--head-only.png'
import Logo from './avatar-ed--head-only.png'

// Component - Copyright
// -------------------------------------------------------------------------------------------------
const Copyright = () => {
    const CREATION_YEAR = 2017
    const CURR_YEAR     = new Date().getFullYear()

    return (
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
    )
} // /const Copyright = () =>

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <aside className="sidebar text-right">
                <div className="sidebar__content container-fluid">
                    <Link to="/" className="sidebar__brand">
                        <img className="sidebar__brand__image" src={Logo} alt="" width="64" height="64"/>
                        <span className="sidebar__brand__name ml-1">Edward<br/>Cobbold<br/></span>
                    </Link>
                    <span className="sidebar__brand__job-title">Frontend Developer</span>

                    <hr/>

                    <ul className="sidebar__nav list-unstyled m-0" role="navigation">
                        {this.props.routes.map((route, index) =>
                            (
                                <li className="sidebar__nav-item">
                                    <NavLink to={route.path} exact={route.exact} className="sidebar__nav-link">
                                        {route.name}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <Copyright />
            </aside>
        )
    } // /render()
} // /export default class Sidebar extends React.Component
