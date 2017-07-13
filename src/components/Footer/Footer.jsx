// React
import React from 'react'

import Icon from 'components/Icons/Icons.jsx'

// SCSS
import './Footer.scss'

const Footer = () => {
  const CREATION_YEAR = 2017
  const CURR_YEAR = new Date().getFullYear()

  return (
    <footer className="footer text-center">
      <div className="footer__credits">
        <div className="container-fluid">
          <div className="last-child-mb-0">
            <p className="mb-0">
              Made with <a href="https://facebook.github.io/react/" target="_blank" className="footer__icon link-inherit" title="React"><Icon glyph="react" altText="React"/></a>{/*, <a href="http://sass-lang.com/" target="_blank" className="footer__icon link-inherit" title="SASS"><Icon glyph="sass" altText="SASS"/></a>*/}, <a href="https://webpack.js.org/" target="_blank" className="footer__icon link-inherit" title="Webpack"><Icon glyph="webpack" altText="Webpack 2"/></a>, <a href="https://www.contentful.com/" target="_blank" className="footer__icon link-inherit" title="Contentful"><Icon glyph="contentful" altText="Contentful"/></a> and <span className="footer__icon"><Icon glyph="heart" altText="love"/></span>
            </p>

            <p>
              &copy; {CURR_YEAR > CREATION_YEAR
                ? <span className="footer__credits__date">{CREATION_YEAR}&mdash;{CURR_YEAR}</span>
                : <span className="footer__credits__date">{CURR_YEAR}</span>
              } Edward Cobbold
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
