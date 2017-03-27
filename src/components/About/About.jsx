import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <section className="about">
                <div className="container-fluid">
                    <h1>About</h1>

                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Lorem ipsum dolor sit.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias fuga delectus nihil facere minima! Unde, eligendi porro tenetur ipsum eum exercitationem tempore ab nam, accusamus error harum dolorem odio consequuntur natus!</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Dolore, dolorum! Numquam, facilis.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis enim nemo consequuntur, debitis hic quasi sint magnam eum, commodi dolores, necessitatibus voluptatibus similique ea reprehenderit. Omnis veniam cupiditate voluptate porro itaque!</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <figure>
                                <img src="https://unsplash.it/400/300/?random" alt="" className="img-fluid w-100" srcSet="https://unsplash.it/400/300/?random 1x, https://unsplash.it/800/600/?random 2x"/>
                            </figure>
                            <h2 className="h4">Aperiam est accusantium quam?
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt molestias illum praesentium ad autem ipsam a inventore numquam, pariatur eveniet impedit debitis sunt quidem facere harum laboriosam velit delectus dignissimos, neque. Recusandae?</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
