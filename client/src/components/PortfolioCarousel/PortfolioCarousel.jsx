import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import animation from 'config/animation';

import Carousel from 'components/Carousel/Carousel';

import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import frameLaptop from 'images/device-frames/frame-laptop.svg';

import classes from './PortfolioCarousel.scss';

const PortfolioCarousel = ({ desktopImage, tabletImage, mobileImage }) => (
  <div className={classes['portfolio-carousel']}>
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
      <div
        className={classnames(
          classes['portfolio-carousel__slide'],
          classes['portfolio-carousel__slide--mobile'],
        )}
      >
        <figure
          className={classnames(
            classes['portfolio-carousel__figure'],
            classes['portfolio-carousel__figure--mobile'],
          )}
        >
          <img src={frameMobile} className={classes['portfolio-carousel__device-frame']} alt="" />
          <div
            className={classnames(
              classes['portfolio-carousel__device-img'],
              classes['portfolio-carousel__device-img--mobile'],
            )}
          >
            <img src={mobileImage} alt="" />
          </div>
        </figure>
      </div>

      <div
        className={classnames(
          classes['portfolio-carousel__slide'],
          classes['portfolio-carousel__slide--tablet'],
        )}
      >
        <figure
          className={classnames(
            classes['portfolio-carousel__figure'],
            classes['portfolio-carousel__figure--tablet'],
          )}
        >
          <img src={frameTablet} className={classes['portfolio-carousel__device-frame']} alt="" />
          <div
            className={classnames(
              classes['portfolio-carousel__device-img'],
              classes['portfolio-carousel__device-img--tablet'],
            )}
          >
            <img src={tabletImage} alt="" />
          </div>
        </figure>
      </div>
      <div
        className={classnames(
          classes['portfolio-carousel__slide'],
          classes['portfolio-carousel__slide--desktop'],
        )}
      >
        <figure
          className={classnames(
            classes['portfolio-carousel__figure'],
            classes['portfolio-carousel__figure--desktop'],
          )}
        >
          <img src={frameLaptop} className={classes['portfolio-carousel__device-frame']} alt="" />
          <div
            className={classnames(
              classes['portfolio-carousel__device-img'],
              classes['portfolio-carousel__device-img--desktop'],
            )}
          >
            <img src={desktopImage} alt="" />
          </div>
        </figure>
      </div>
    </Carousel>
  </div>
);

PortfolioCarousel.propTypes = {
  desktopImage: PropTypes.string.isRequired,
  tabletImage: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
};

export default PortfolioCarousel;
