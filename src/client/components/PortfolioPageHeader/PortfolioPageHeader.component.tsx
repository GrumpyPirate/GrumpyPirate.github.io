import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { PortfolioItemTech } from 'types';

import Heading from 'components/Typography/Heading/Heading.component';
import Icon from 'components/Icon/Icon.component';

import { PortfolioPageHeaderProps } from './PortfolioPageHeader.component.d';
import classes from './PortfolioPageHeader.component.scss';

const PortfolioPageHeader: FunctionComponent<PortfolioPageHeaderProps> = ({
  bgImage,
  title,
  tech = [],
}: PortfolioPageHeaderProps) => (
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

        {tech.length > 0 && (
          <ul className={classes['portfolio-page-header__tech__list']}>
            {tech.map(({ icon, name }: PortfolioItemTech) => (
              <li
                key={`tech-item__${name}`}
                className={classes['portfolio-page-header__tech__list-item']}
              >
                <Icon glyph={icon} altText={name} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </header>
);

export default PortfolioPageHeader;
