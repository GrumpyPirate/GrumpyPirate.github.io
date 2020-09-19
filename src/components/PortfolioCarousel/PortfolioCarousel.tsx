import React, { FunctionComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import animation from 'config/animation';
import frameLaptop from 'images/device-frames/frame-laptop.svg';
import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import { mediaQueries } from 'styles';

import {
  carouselStyles,
  DeviceFrame,
  DevicePreview,
  Slide,
  SlideImage,
} from './PortfolioCarousel.constants';
import { PortfolioCarouselProps } from './PortfolioCarousel.types';

const PortfolioCarousel: FunctionComponent<PortfolioCarouselProps> = ({
  className,
  desktopImage,
  tabletImage,
  mobileImage,
}) => (
  <div className={className}>
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      transitionTime={animation.duration * 2}
      dynamicHeight
      showArrows={false}
      emulateTouch
      swipeScrollTolerance={25}
    >
      <Slide variant="mobile">
        <SlideImage>
          <DeviceFrame src={frameMobile} alt="" />
          <DevicePreview>
            <img src={mobileImage} alt="" />
          </DevicePreview>
        </SlideImage>
      </Slide>

      <Slide variant="tablet">
        <DeviceFrame src={frameTablet} alt="" />
        <DevicePreview>
          <img src={tabletImage} alt="" />
        </DevicePreview>
      </Slide>

      <Slide variant="desktop">
        <DeviceFrame src={frameLaptop} alt="" />
        <DevicePreview>
          <img src={desktopImage} alt="" />
        </DevicePreview>
      </Slide>
    </Carousel>
  </div>
);

export default styled(PortfolioCarousel)`
  ${carouselStyles}

  @media ${mediaQueries.md} {
    display: none;
  }
`;
