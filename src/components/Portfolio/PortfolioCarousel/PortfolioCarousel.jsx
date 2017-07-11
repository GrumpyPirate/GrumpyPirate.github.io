import React from 'react'
import PropTypes from 'prop-types'

// Components
import Carousel from 'components/Carousel/Carousel.jsx'

// Style
import './PortfolioCarousel.scss'

// images
import frameMobile from './frame-mobile.svg'
import frameTablet from './frame-tablet.svg'
import frameLaptop from './frame-laptop.svg'

// Settings
import { animation } from 'config/animation'

const PortfolioCarousel = ({ desktop, tablet, mobile }) => {
  return (
    <div className="pf-carousel">
      <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} transitionTime={animation.duration * 2} dynamicHeight={true} showArrows={false}>
          {mobile &&
            <div className="pf-carousel__slide pf-carousel__slide--mobile">
              <figure className="pf-carousel__figure pf-carousel__figure--mobile">
                <img src={frameMobile} className="pf-carousel__device-frame"/>
                <div className="pf-carousel__device-img pf-carousel__device-img--mobile">
                  <img src={mobile} alt="" />
                </div>
              </figure>
            </div>
          }
          {tablet &&
            <div className="pf-carousel__slide pf-carousel__slide--tablet">
              <figure className="pf-carousel__figure pf-carousel__figure--tablet">
                <img src={frameTablet} className="pf-carousel__device-frame"/>
                <div className="pf-carousel__device-img pf-carousel__device-img--tablet">
                  <img src={tablet} alt="" />
                </div>
              </figure>
            </div>
          }
          {desktop &&
            <div className="pf-carousel__slide pf-carousel__slide--desktop">
              <figure className="pf-carousel__figure pf-carousel__figure--desktop">
                <img src={frameLaptop} className="pf-carousel__device-frame"/>
                <div className="pf-carousel__device-img pf-carousel__device-img--desktop">
                  <img src={desktop} alt="" />
                </div>
              </figure>
            </div>
          }
      </Carousel>
    </div>
  )
} // /const PortfolioCarousel

PortfolioCarousel.propTypes = {
  desktop: PropTypes.node,
  tablet: PropTypes.node,
  mobile: PropTypes.node
} // /PortfolioCarousel.propTypes

export default PortfolioCarousel
