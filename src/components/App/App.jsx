// Vendor
import React from 'react'

// Images
import TestImage from './pack.png'

// SCSS
import './App.scss'

// Define App
export default class App extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <div>
                <h1>Test</h1>
                <img src={TestImage} alt="Test image" width="128" height="128"/>
            </div>
        )
    } // /render()
} // /class App extends React.Component
