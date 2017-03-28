// React
import React from 'react'
import { NavLink } from 'react-router-dom'

// SCSS
import './Navbar.scss'

// Images
import Logo from './logo.png'
import Logo2x from './logo@2x.png'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <nav className="site-navbar text-lg-center">
                <div className="container-fluid">
                    <NavLink to="/" className="site-navbar__brand">
                        <img className="site-navbar__brand__image" src="https://unsplash.it/100/100?random" srcSet="https://unsplash.it/200/200?random 2x" alt="" width="64" height="64"/>
                        <span className="site-navbar__brand__text">Edward<br/>Cobbold</span>
                    </NavLink>
                    <hr/>
                    <ul className="list-unstyled m-0">
                        <li className="site-navbar__item">
                            <NavLink to="/" className="site-navbar__link">About</NavLink>
                        </li>
                        <li className="site-navbar__item">
                            <NavLink to="/webdev" className="site-navbar__link">Web Development</NavLink>
                        </li>
                        <li className="site-navbar__item">
                            <NavLink to="/digital-art" className="site-navbar__link">Digital Art</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    } // /render()
} // /export default class Navbar extends React.Component
