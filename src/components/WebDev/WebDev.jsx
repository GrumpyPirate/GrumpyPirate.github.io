// React
import React from 'react'

// React Modal
import ReactModal from 'react-modal'
import Modal from '../Modal/Modal.jsx'

// Routing
import { Link } from 'react-router-dom'

// Style
import './WebDev.scss'

// Component - PortfolioListItem
// ---------------------------------------------------------------------------------------------------------------------
class PortfolioListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsActive: false
        }

        this.handleOpenModal  = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    } // /constructor(props)

    handleOpenModal(e) {
        e.preventDefault()

        this.setState({ modalIsActive: true })
    } // /handleOpenModal()

    handleCloseModal() {
        this.setState({ modalIsActive: false })
    } // /handleCloseModal()

    render() {
        return (
            <li className="portfolio__item">
                <Link to={this.props.to} className="portfolio__link" onClick={this.handleOpenModal}>
                    {this.props.children}
                </Link>

                <Modal
                    isOpen={this.state.modalIsActive}
                    onRequestClose={this.handleCloseModal}
                    contentLabel="Test Modal"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam animi molestiae et consequuntur voluptas ut qui, similique facilis quibusdam velit asperiores beatae, tempora eius porro. Temporibus voluptatem quisquam illum excepturi.
                    </p>
                </Modal>
            </li>
        )
    } // /render()
} // /class PortfolioListItem extends React.Component

// Component - PortfolioList
// ---------------------------------------------------------------------------------------------------------------------
const PortfolioList = (props) => {
    // NEEDTO: Trigger Modal Content for each PortfolioListItem
    return (
        <ul className="portfolio__list list-unstyled">
            <PortfolioListItem to={`${props.match.url}/test-1`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum optio dignissimos officiis quaerat fuga adipisci velit? Harum labore id quo temporibus mollitia vel. Sequi!
                    </p>
                </div>
            </PortfolioListItem>
            <PortfolioListItem to={`${props.match.url}/test-2`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem qui odio nesciunt, explicabo dolore impedit reprehenderit maiores soluta laudantium, in nisi? Ea, at, nihil.
                    </p>
                </div>
            </PortfolioListItem>
            <PortfolioListItem to={`${props.match.url}/test-3`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique laboriosam tempore, molestiae voluptatem ipsum deleniti quam cumque, quis maiores officiis dolores consectetur quidem.
                    </p>
                </div>
            </PortfolioListItem>
            <PortfolioListItem to={`${props.match.url}/test-4`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi, harum earum inventore quae fuga accusantium debitis reprehenderit quibusdam temporibus odio deserunt molestiae! In.
                    </p>
                </div>
            </PortfolioListItem>
            <PortfolioListItem to={`${props.match.url}/test-5`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsa quod excepturi unde, possimus deleniti autem, consectetur omnis, dolorum maxime minus tempora eius. Distinctio.
                    </p>
                </div>
            </PortfolioListItem>
            <PortfolioListItem to={`${props.match.url}/test-6`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatibus praesentium eaque unde maiores soluta, quidem deleniti aut aspernatur quis, voluptatum qui ut totam.
                    </p>
                </div>
            </PortfolioListItem>
            <PortfolioListItem to={`${props.match.url}/test-7`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur et incidunt reprehenderit repellendus placeat error natus cumque voluptatibus illum consequuntur, magni, ea dolor necessitatibus.
                    </p>
                </div>
            </PortfolioListItem>
            <PortfolioListItem to={`${props.match.url}/test-8`}>
                <figure className="portfolio__item__media">
                    <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x" className="w-100 img-fluid" />
                </figure>
                <div className="portfolio__item__body">
                    <h3 className="h4">Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ad, quaerat adipisci soluta ex, hic dolorum et libero optio cum labore! Tenetur, quo perspiciatis.
                    </p>
                </div>
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
            <div className="page">
                <header className="page-header">
                    <div className="container-fluid last-child-mb-0">
                        <h1 className="page-header__title h2">Doloremque</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aspernatur, ipsa rerum. Cum reprehenderit nostrum voluptates tempore, rem illum dolor ad, quisquam omnis laudantium.
                        </p>
                    </div>
                </header>

                <section className="portfolio">
                    <div className="container-fluid">
                        <PortfolioList {...this.props} />
                    </div>
                </section>
            </div>
        )
    }
}

export default WebDev
