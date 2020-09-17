import React from 'react';

import { CarouselProps } from './Carousel.types';

const carouselProps: CarouselProps = {
  children: [<div>Test</div>],
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
  useKeyboardArrows: true,
  transitionTime: 500,
  dynamicHeight: true,
  showArrows: false,
  emulateTouch: true,
  swipeScrollTolerance: 75,
};

export default carouselProps;
