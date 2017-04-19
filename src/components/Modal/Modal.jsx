import React from 'react'
import ReactModal from 'react-modal'

import Icon from '../Icons/Icons.jsx'

import './Modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render() {
    return (
      <ReactModal
        {...this.props}
        closeTimeoutMS={300}
        className="react-modal"
        overlayClassName="react-modal__overlay"
        portalClassName="react-modal__portal"
      >
        <header className="react-modal__header">
          <h2 className="react-modal__title">
            {this.props.title}
          </h2>
          <button type="button" className="react-modal__close" aria-label="Close" onClick={this.props.closeModal}>
            <Icon glyph="close"></Icon>
          </button>
        </header>


        <div className="react-modal__body">
          <div className="container-fluid">
            <hr className="mt-2 mb-3" />
            {this.props.children}
          </div>
        </div>
      </ReactModal>
    )
  } // /render()
} // /class Modal extends React.Component

export default Modal
