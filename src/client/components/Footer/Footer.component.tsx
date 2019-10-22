import React from 'react';
import classnames from 'classnames';

import Container from 'components/Layout/Container/Container.component';
import Icon from 'components/Icon/Icon.component';

import classes from './Footer.component.scss';

const Footer = () => {
  const creationYear = 2017;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes['footer']}>
      <Container>
        <p className={classes['footer__tech']}>
          'Made with '
          <a
            href="https://facebook.github.io/react/"
            target="_blank"
            rel="noopener noreferrer"
            title="React"
            className={classnames(classes['footer__link'], classes['footer__link--icon'])}
          >
            <Icon glyph="react" altText="React" />
          </a>
          ', '
          <a
            href="https://webpack.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Webpack"
            className={classnames(classes['footer__link'], classes['footer__link--icon'])}
          >
            <Icon glyph="webpack" altText="Webpack" />
          </a>
          ' and '
          <a
            href="https://www.contentful.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Contentful"
            className={classnames(classes['footer__link'], classes['footer__link--icon'])}
          >
            <Icon glyph="contentful" altText="Contentful" />
          </a>
          .{' '}
          <a
            href="https://bitbucket.org/GrumpyPirate/portfolio-2017"
            className={classes['footer__link']}
            target="_blank"
            rel="noreferrer noopener"
          >
            Source code
          </a>
          .
        </p>

        <p className={classes['footer__copyright']}>
          &copy;{' '}
          {currentYear > creationYear ? (
            <span className={classes['footer__copyright__date']}>
              {creationYear}&mdash;{currentYear}
            </span>
          ) : (
            <span className={classes['footer__copyright__date']}>{currentYear}</span>
          )}{' '}
          <a
            className={classes['footer__link']}
            href="https://github.com/grumpypirate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edward Cobbold
          </a>
          .
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
