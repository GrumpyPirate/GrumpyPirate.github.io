// Vendor
import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Navbar from '../Navbar/Navbar.jsx'
import About from '../About/About.jsx'
import WebDev from '../WebDev/WebDev.jsx'
import DigitalArt from '../DigitalArt/DigitalArt.jsx'

// SCSS
import './App.scss'

// Define App
class App extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <div className="app">
                <Navbar />

                <main className="viewport">
                    <Route exact path="/" component={About}></Route>
                    <Route path="/webdev" component={WebDev}></Route>
                    <Route path="/digital-art" component={DigitalArt}></Route>
                </main>
            </div>
        )
    } // /render()
} // /class App extends React.Component

export default App
