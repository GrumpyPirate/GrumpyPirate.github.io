// Vendor
import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Home from '../Home/Home.jsx'
import About from '../About/About.jsx'
import DigitalArt from '../DigitalArt/DigitalArt.jsx'

// Images
import TestImage from './pack.png'

// SCSS
import './App.scss'

const Column = (id) => (
    <div className="col-12 col-sm-4">
        <figure>
            <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid" srcSet="https://unsplash.it/400/300/?random 1x,https://unsplash.it/800/600/?random 2x"/>
        </figure>
        <h2 className="h5">Lorem ipsum dolor sit</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero excepturi quo dolor perferendis, neque corrupti nihil fugiat consequuntur, asperiores natus, veritatis repellendus quam magni.
        </p>
    </div>
)

let columns = []
for (let i = 0; i < 3; i++) {
    columns.push(<Column key={i}/>)
}

// Define App
class App extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <main>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/digital-art" component={DigitalArt}></Route>
            </main>
        )
    } // /render()
} // /class App extends React.Component

export default App
