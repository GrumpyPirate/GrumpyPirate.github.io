import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'components/Carousel/Carousel';

import './PortfolioCarousel.scss';

import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import frameLaptop from 'images/device-frames/frame-laptop.svg';

import animation from 'config/animation';

const PortfolioCarousel = ({ desktop, tablet, mobile }) => (
  <div className="pf-carousel">
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      transitionTime={animation.duration * 2}
      dynamicHeight
      showArrows={false}
      emulateTouch
      swipeScrollTolerance={75}
    >
      <div className="pf-carousel__slide pf-carousel__slide--mobile">
        <figure className="pf-carousel__figure pf-carousel__figure--mobile">
          <img src={frameMobile} className="pf-carousel__device-frame" alt="" />
          <div className="pf-carousel__device-img pf-carousel__device-img--mobile">
            <img src={mobile} alt="" />
          </div>
        </figure>
      </div>

      <div className="pf-carousel__slide pf-carousel__slide--tablet">
        <figure className="pf-carousel__figure pf-carousel__figure--tablet">
          <img src={frameTablet} className="pf-carousel__device-frame" alt="" />
          <div className="pf-carousel__device-img pf-carousel__device-img--tablet">
            <img src={tablet} alt="" />
          </div>
        </figure>
      </div>
      <div className="pf-carousel__slide pf-carousel__slide--desktop">
        <figure className="pf-carousel__figure pf-carousel__figure--desktop">
          <img src={frameLaptop} className="pf-carousel__device-frame" alt="" />
          <div className="pf-carousel__device-img pf-carousel__device-img--desktop">
            <img src={desktop} alt="" />
          </div>
        </figure>
      </div>
    </Carousel>
  </div>
);

PortfolioCarousel.propTypes = {
  desktop: PropTypes.node.isRequired,
  tablet: PropTypes.node.isRequired,
  mobile: PropTypes.node.isRequired,
};

export default PortfolioCarousel;
