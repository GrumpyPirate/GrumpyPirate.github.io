// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './Carousel.scss'

// Vendor
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

// Define Carousel
const Carousel = (props) => {
  return (
    <ReactCarousel {...props}>
      {props.children}
    </ReactCarousel>
  )
}

Carousel.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]
  )
}

export default Carousel
