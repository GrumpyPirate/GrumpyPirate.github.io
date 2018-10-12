import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './PortfolioList.scss';

const PortfolioList = ({ portfolioItems }) => (
  <div className="container-fluid">
    <div className="pf__list" role="listbox">
      {portfolioItems.map(item => (
        <Link
          key={`portfolio-list-item--${item.slug}--${item.id}`}
          to={`/webdev/${item.slug}`}
          className="pf__item"
          role="listitem"
        >
          <figure className="pf__item__media">
            <img src={item.headerImgSrc} alt="" />
          </figure>

          <div className="pf__item__copy">
            <h3 className="h5 pf__item__title">{item.title}</h3>

            <div className="last-child-mb-0">
              <p className="pf__item__desc">
                {item.descriptionShort}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

PortfolioList.propTypes = {
  portfolioItems: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      headerImgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptionShort: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PortfolioList;
