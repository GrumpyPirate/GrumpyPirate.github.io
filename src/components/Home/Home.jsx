import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <section className="home">
                <div className="container-fluid">
                    <h1>Home</h1>

                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Lorem ipsum dolor sit.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nostrum deserunt impedit sed eos, quo perferendis! Sequi modi sunt inventore illum assumenda, animi! Maxime.
                            </p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Dolore, dolorum! Numquam, facilis.
                            </h2>
                            <p>Sapiente quidem dolorum quasi laudantium itaque corporis ratione beatae quos, neque, commodi earum quo autem pariatur rerum, cum nihil inventore! Ut sequi, ea quas.
                            </p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Aperiam est accusantium quam?
                            </h2>
                            <p>Asperiores excepturi quibusdam dolorem aspernatur laboriosam, aut commodi eaque quae optio nesciunt! Deserunt aspernatur numquam tempore, iure atque eos rem. Dolor, sunt sapiente? Nemo?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home
