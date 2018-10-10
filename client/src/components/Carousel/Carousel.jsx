// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './Carousel.scss'

// Vendor
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

// Define Carousel
const Carousel = props => (
  <ReactCarousel {...props}>
    {props.children}
  </ReactCarousel>
) // /const Carousel

// PropTypes
Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Carousel
