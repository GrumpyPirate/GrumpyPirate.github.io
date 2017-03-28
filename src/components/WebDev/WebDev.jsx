import React from 'react'

import { Link } from 'react-router-dom'

import './WebDev.scss'

// Component - PortfolioListItem
// ---------------------------------------------------------------------------------------------------------------------
class PortfolioListItem extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <li className="portfolio__item">
                <Link to={this.props.to} className="portfolio__link">
                    {this.props.children}
                </Link>
            </li>
        )
    } // /render()
} // /class PortfolioListItem extends React.Component

// Component - PortfolioList
// ---------------------------------------------------------------------------------------------------------------------
const PortfolioList = () => {
    return (
        <ul className="portfolio__list list-unstyled">
            <PortfolioListItem to={`/webdev/test-1`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum optio dignissimos officiis quaerat fuga adipisci velit? Harum labore id quo temporibus mollitia vel. Sequi!
                </p>
            </PortfolioListItem>
            <PortfolioListItem to={`/webdev/test-2`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem qui odio nesciunt, explicabo dolore impedit reprehenderit maiores soluta laudantium, in nisi? Ea, at, nihil.
                </p>
            </PortfolioListItem>
            <PortfolioListItem to={`/webdev/test-3`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique laboriosam tempore, molestiae voluptatem ipsum deleniti quam cumque, quis maiores officiis dolores consectetur quidem.
                </p>
            </PortfolioListItem>
            <PortfolioListItem to={`/webdev/test-4`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, harum earum inventore quae fuga accusantium debitis reprehenderit quibusdam temporibus odio deserunt molestiae! In.
                </p>
            </PortfolioListItem>
            <PortfolioListItem to={`/webdev/test-5`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsa quod excepturi unde, possimus deleniti autem, consectetur omnis, dolorum maxime minus tempora eius. Distinctio.
                </p>
            </PortfolioListItem>
            <PortfolioListItem to={`/webdev/test-6`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus praesentium eaque unde maiores soluta, quidem deleniti aut aspernatur quis, voluptatum qui ut totam.
                </p>
            </PortfolioListItem>
            <PortfolioListItem to={`/webdev/test-7`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur et incidunt reprehenderit repellendus placeat error natus cumque voluptatibus illum consequuntur, magni, ea dolor necessitatibus.
                </p>
            </PortfolioListItem>
            <PortfolioListItem to={`/webdev/test-8`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <h3 className="h4">Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ad, quaerat adipisci soluta ex, hic dolorum et libero optio cum labore! Tenetur, quo perspiciatis.
                </p>
            </PortfolioListItem>
        </ul>
    ) // /return
} // /const PortfolioList

// Component - WebDev page
// ---------------------------------------------------------------------------------------------------------------------
class WebDev extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <section className="portfolio">
                <div className="container-fluid">
                    <h1>Doloremque</h1>

                    <PortfolioList />
                </div>
            </section>
        )
    }
}

export default WebDev
