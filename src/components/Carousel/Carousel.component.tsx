import React, { FunctionComponent } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

import { CarouselProps } from './Carousel.component.types';

import './Carousel.component.scss';

const Carousel: FunctionComponent<CarouselProps> = ({ children, ...rest }) => (
  <ReactCarousel {...rest}>{children}</ReactCarousel>
);

export default Carousel;
