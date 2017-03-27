import React from 'react'

class DigitalArt extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <section className="digital-art">
                <div className="container-fluid">
                    <h1>DigitalArt</h1>

                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Lorem ipsum dolor sit.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium ducimus asperiores consectetur dolorum. Quam, laboriosam, fugit labore velit dolorum blanditiis magnam, repellendus tempora facere, totam quos dolores.</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Dolore, dolorum! Numquam, facilis.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis temporibus error eligendi iusto? Harum libero asperiores, quisquam voluptatem, veritatis ipsa ipsam aliquam recusandae natus praesentium ad repudiandae quia.</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Aperiam est accusantium quam?
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eius a facere quo, ab quis. Optio aliquam quibusdam quasi id, vero consequuntur, animi nulla asperiores sed commodi non?</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DigitalArt
