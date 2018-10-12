import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from 'components/Icon/Icon';

import './PortfolioPageHeader.scss';

const PortfolioPageHeader = ({ bgImage, title, tech }) => (
  <header className="pf-page-header text-left">
    <figure className="pf-page-header__media">
      <img src={bgImage} alt={title} />
    </figure>

    <div className="pf-page-header__copy">
      <div>
        <Link to="/webdev" className="pf-page-header__back h6 mb-0">&lt; Portfolio</Link>
      </div>

      <div>
        <h1 className="pf-page-header__title">{title}</h1>
      </div>

      <div className="pf-page-header__tech">
        <h2 className="h5 mb-0">Technologies</h2>

        {!!tech.length && (
          <ul className="pf-page-header__tech__list">
            {tech.map(techItem => (
              <li key={`tech-item__${techItem.name}`}>
                <Icon glyph={techItem.icon} altText={techItem.name} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </header>
);

PortfolioPageHeader.propTypes = {
  bgImage: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

PortfolioPageHeader.defaultProps = {
  tech: [],
};

export default PortfolioPageHeader;
