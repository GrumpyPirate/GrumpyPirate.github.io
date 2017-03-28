// React
import React from 'react'
import { NavLink } from 'react-router-dom'

// SCSS
import './Navbar.scss'

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

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <aside className="sidebar text-right">
                <div className="sidebar__content container-fluid">
                    <NavLink to="/" className="sidebar__brand">
                        <img className="sidebar__brand__image" src={Logo} alt="" width="64" height="64"/>
                        <span className="sidebar__brand__name ml-1">Edward<br/>Cobbold<br/></span>
                    </NavLink>
                    <span className="sidebar__brand__job-title">Frontend Developer</span>

                    <hr/>

                    <ul className="sidebar__nav list-unstyled m-0" role="navigation">
                        <li className="sidebar__nav-item">
                            <NavLink to="/" className="sidebar__nav-link">About</NavLink>
                        </li>
                        <li className="sidebar__nav-item">
                            <NavLink to="/webdev" className="sidebar__nav-link">Web Development</NavLink>
                        </li>
                        <li className="sidebar__nav-item">
                            <NavLink to="/digital-art" className="sidebar__nav-link">Digital Art</NavLink>
                        </li>
                    </ul>
                </div>

                <Copyright />
            </aside>
        )
    } // /render()
} // /export default class Navbar extends React.Component
