import React from 'react'
import ReactModal from 'react-modal'

import './Modal.scss'

class Modal extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <ReactModal
                {...this.props}
                closeTimeoutMS={600}
                className="react-modal"
                overlayClassName="react-modal__overlay"
                portalClassName="react-modal__portal"
            >
                {this.props.children}
            </ReactModal>
        )
    } // /render()
} // /class Modal extends React.Component

export default Modal
