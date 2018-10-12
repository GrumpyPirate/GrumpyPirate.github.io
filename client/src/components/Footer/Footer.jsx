import React from 'react';

import Icon from 'components/Icon/Icon';

import './Footer.scss';

const Footer = () => {
  const creationYear = 2017;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-center">
      <div className="footer__credits">
        <div className="container-fluid">
          <div className="last-child-mb-0">
            <p className="mb-0">
              {'Made with '}
              <a
                href="https://facebook.github.io/react/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__icon link-inherit"
                title="React"
              >
                <Icon glyph="react" altText="React" />
              </a>
              {', '}
              <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__icon link-inherit"
                title="Webpack"
              >
                <Icon glyph="webpack" altText="Webpack" />
              </a>
              {', '}
              <a
                href="https://www.contentful.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__icon link-inherit"
                title="Contentful"
              >
                <Icon glyph="contentful" altText="Contentful" />
              </a>
              {' and '}
              <span className="footer__icon">
                <Icon glyph="heart" altText="love" />
              </span>
            </p>

            <p>
              &copy;
              {' '}
              {currentYear > creationYear
                ? <span className="footer__credits__date">{creationYear}&mdash;{currentYear}</span>
                : <span className="footer__credits__date">{currentYear}</span>
              }
              {' '}
              Edward Cobbold
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
