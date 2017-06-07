import React from 'react'

// React Modal
import ReactModal from 'react-modal'
import Modal from '../Modal/Modal.jsx'

// Routing
import { Link } from 'react-router-dom'

// Style
import './PortfolioListItem.scss'

// Component - PortfolioListItem
// ---------------------------------------------------------------------------------------------------------------------
export default class PortfolioListItem extends React.Component {
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
          closeModal={this.handleCloseModal}
          contentLabel="Test Modal"
          title="This is a test title"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit id eveniet expedita ut in voluptas ratione commodi! Nam neque consequuntur facilis ullam quibusdam impedit illum in, ea itaque quia voluptatem aliquam, nulla! Porro et, nulla eveniet fugiat, libero numquam architecto blanditiis non. Eos nisi, totam. Vitae, incidunt, rerum.
          </p>

          <hr className="my-3" />

          <div className="row">
            <div className="col-12 col-lg-5">
              <h3 className="text-accent-2">Tempore itaque magnam odio</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit, vel! Corporis omnis nam iure a temporibus iusto totam, ea voluptas libero laborum pariatur!
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sed, quibusdam! Quod voluptates voluptate officia placeat nisi soluta, inventore, expedita reprehenderit. Laudantium dolorem earum aliquam, velit sed sapiente corporis! Voluptate, deleniti, nesciunt!
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, rem. Adipisci voluptates cum numquam incidunt rem.
              </p>
            </div>
            <div className="col-12 col-lg-7">
              <figure>
                <img src="http://unsplash.it/400/300" alt="" className="w-100 img-fluid" />
              </figure>
            </div>
          </div>
        </Modal>
      </li>
    )
  } // /render()
} // /class PortfolioListItem extends React.Component
