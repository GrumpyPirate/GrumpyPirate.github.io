import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from 'components/Typography/Heading/Heading';
import Icon from 'components/Icon/Icon';

import classes from './PortfolioPageHeader.scss';

const PortfolioPageHeader = ({ bgImage, title, tech }) => (
  <header className={classes['portfolio-page-header']}>
    <figure className={classes['portfolio-page-header__media']}>
      <img src={bgImage} alt={title} />
    </figure>

    <div className={classes['portfolio-page-header__copy']}>
      <div>
        <Link to="/portfolio" className={classes['portfolio-page-header__back']}>
          <Icon glyph="chevron-left" />
          Portfolio
        </Link>
      </div>

      <div>
        <Heading level={1} text={title} className={classes['portfolio-page-header__title']} />
      </div>

      <div className={classes['portfolio-page-header__tech']}>
        <Heading
          level={2}
          displayLevel={5}
          text="Technologies"
          className={classes['portfolio-page-header__tech__heading']}
        />

        {!!tech.length && (
          <ul className={classes['portfolio-page-header__tech__list']}>
            {tech.map(techItem => (
              <li
                key={`tech-item__${techItem.name}`}
                className={classes['portfolio-page-header__tech__list-item']}
              >
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
