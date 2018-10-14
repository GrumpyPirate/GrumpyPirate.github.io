import React from 'react';
import PropTypes from 'prop-types';

import './PortfolioDeviceLineup.scss';

import frameMobile from 'images/device-frames/frame-mobile.svg';
import frameTablet from 'images/device-frames/frame-tablet.svg';
import frameLaptop from 'images/device-frames/frame-laptop.svg';

const PortfolioDeviceLineup = ({ desktop, tablet, mobile }) => (
  <div className="pf-lineup">
    <div className="pf-lineup__item pf-lineup__item--desktop">
      <figure className="pf-lineup__figure pf-lineup__figure--desktop">
        <img src={frameLaptop} className="pf-lineup__device-frame" alt="" />
        <div className="pf-lineup__device-img pf-lineup__device-img--desktop">
          <img src={desktop} alt="" />
        </div>
      </figure>
    </div>

    {!!tablet && (
      <div className="pf-lineup__item pf-lineup__item--tablet">
        <figure className="pf-lineup__figure pf-lineup__figure--tablet">
          <img src={frameTablet} className="pf-lineup__device-frame" alt="" />
          <div className="pf-lineup__device-img pf-lineup__device-img--tablet">
            <img src={tablet} alt="" />
          </div>
        </figure>
      </div>
    )}

    <div className="pf-lineup__item pf-lineup__item--mobile">
      <figure className="pf-lineup__figure pf-lineup__figure--mobile">
        <img src={frameMobile} className="pf-lineup__device-frame" alt="" />
        <div className="pf-lineup__device-img pf-lineup__device-img--mobile">
          <img src={mobile} alt="" />
        </div>
      </figure>
    </div>
  </div>
);

PortfolioDeviceLineup.propTypes = {
  desktop: PropTypes.node.isRequired,
  tablet: PropTypes.node.isRequired,
  mobile: PropTypes.node.isRequired,
};

export default PortfolioDeviceLineup;