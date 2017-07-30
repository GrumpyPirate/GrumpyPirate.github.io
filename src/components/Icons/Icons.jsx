// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './Icons.scss'

// Import icon SVGs. Note that we're using material-design-icons, via NPM.
// feather-icons

// Generic
/* eslint-disable no-unused-vars */
// import close from 'images/icons/svg/x.svg'
// import settingsApplications from 'images/icons/svg/settings.svg'
import heart from 'images/icons/svg/heart.svg'

// Brand icons
// import apple from 'images/icons/svg/brands/apple.svg'
import shopify from 'images/icons/svg/brands/shopify.svg'
// import atom from 'images/icons/svg/editors/atom.svg'
// import sublime from 'images/icons/svg/editors/sublime.svg'
import divio from 'images/icons/svg/brands/divio.svg'
import contentful from 'images/icons/svg/brands/contentful.svg'

import javascript from 'images/icons/svg/development/js/javascript.svg'
import babel from 'images/icons/svg/development/js/babel.svg'
import react from 'images/icons/svg/development/js/react.svg'
import angular from 'images/icons/svg/development/js/angular.svg'
import code from 'images/icons/svg/development/hash.svg'
import laptopMac from 'images/icons/svg/development/airplay.svg'
// import express from 'images/icons/svg/development/js/express.svg'
// import nodejs from 'images/icons/svg/development/js/nodejs.svg'
// import redux from 'images/icons/svg/development/js/redux.svg'

import webpack from 'images/icons/svg/development/devtool/webpack.svg'
import gulp from 'images/icons/svg/development/devtool/gulp.svg'
import grunt from 'images/icons/svg/development/devtool/grunt.svg'

import sass from 'images/icons/svg/development/css/sass.svg'
// import less from 'images/icons/svg/development/css/less.svg'
import bootstrap from 'images/icons/svg/development/css/bootstrap.svg'
import foundation from 'images/icons/svg/development/css/foundation.svg'
import bulma from 'images/icons/svg/development/css/bulma.svg'

import html5 from 'images/icons/svg/development/html5.svg'
import django from 'images/icons/svg/development/django.svg'
import laravel from 'images/icons/svg/development/laravel.svg'

import photoshop from 'images/icons/svg/design/photoshop.svg'
import illustrator from 'images/icons/svg/design/illustrator.svg'
import sketch from 'images/icons/svg/design/sketch.svg'
import palette from 'images/icons/svg/design/image.svg'

// Utils
import loader from 'images/icons/svg/loader.svg'
/* eslint-enable no-unused-vars */

/* eslint-disable no-unused-vars */
// const icons = {
//   // feather-icons (generic)
//   // close,
//   heart,
//   laptopMac,
//   code,
//   // settingsApplications,
//   palette,
//   // App
//   // atom,
//   // sublime,
//   divio,
//   contentful,
//   // apple,
//   shopify,
//   html5,
//   javascript,
//   babel,
//   sass,
//   // less,
//   webpack,
//   gulp,
//   grunt,
//   bootstrap,
//   foundation,
//   bulma,
//   django,
//   react,
//   laravel,
//   angular,
//   photoshop,
//   sketch,
//   illustrator,
//   // Utils
//   loader
// } // /const icons

// Component
const Icon = ({ glyph, className = 'icon', width = 48, height = 48, altText }) => (
  <svg className={className} width={width} height={height} aria-label={altText}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
)

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  altText: PropTypes.string
}

export default Icon
