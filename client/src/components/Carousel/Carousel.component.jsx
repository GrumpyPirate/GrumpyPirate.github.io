import React from 'react';
import PropTypes from 'prop-types';

import './Carousel.component.scss';

import { Carousel as ReactCarousel } from 'react-responsive-carousel';

const Carousel = ({ children, ...rest }) => <ReactCarousel {...rest}>{children}</ReactCarousel>;

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;