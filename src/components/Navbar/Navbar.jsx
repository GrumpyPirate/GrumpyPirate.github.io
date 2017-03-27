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
            <nav className="site-navbar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-3 col-sm-2 col-lg-1">
                            <img src={Logo} srcSet={Logo2x} alt="" className="img-fluid" width="80" height="80"/>
                        </div>
                        <div className="col-9 col-sm-10 col-lg-11">
                            <ul className="list-unstyled list-inline m-0">
                                <li className="list-inline-item site-navbar__item">
                                    <NavLink to="/" className="site-navbar__link">Home</NavLink>
                                </li>
                                <li className="list-inline-item site-navbar__item">
                                    <NavLink to="/about" className="site-navbar__link">About</NavLink>
                                </li>
                                <li className="list-inline-item site-navbar__item">
                                    <NavLink to="/digital-art" className="site-navbar__link">Digital art</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    } // /render()
} // /export default class Navbar extends React.Component
