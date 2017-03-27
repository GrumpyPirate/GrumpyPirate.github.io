// Vendor
import React from 'react'

// Images
import TestImage from './pack.png'

// SCSS
import './App.scss'

const Column = () => (
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
    columns.push(<Column/>)
}

// Define App
export default class App extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <main>
                <div className="container-fluid">
                    <h1>Hello {this.props.who}!</h1>
                    <div className="row">
                        {columns}
                    </div>
                </div>
            </main>
        )
    } // /render()
} // /export default class App extends React.Component
