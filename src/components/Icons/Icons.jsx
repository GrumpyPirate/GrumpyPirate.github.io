// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './Icons.scss'

// Import icon SVGs. Note that we're using material-design-icons, via NPM.
// feather-icons

// Generic
import close from './svg/x.svg'
import settingsApplications from './svg/settings.svg'
import heart from './svg/heart.svg'

// Brand icons
import apple from './svg/brands/apple.svg'
import shopify from './svg/brands/shopify.svg'
import atom from './svg/editors/atom.svg'
import sublime from './svg/editors/sublime.svg'

import javascript from './svg/development/js/javascript.svg'
import babel from './svg/development/js/babel.svg'
import react from './svg/development/js/react.svg'
import angular from './svg/development/js/angular.svg'
import code from './svg/development/hash.svg'
import laptopMac from './svg/development/airplay.svg'
// import express from './svg/development/js/express.svg'
// import nodejs from './svg/development/js/nodejs.svg'
// import redux from './svg/development/js/redux.svg'

import webpack from './svg/development/devtool/webpack.svg'
import gulp from './svg/development/devtool/gulp.svg'
import grunt from './svg/development/devtool/grunt.svg'

import sass from './svg/development/css/sass.svg'
import less from './svg/development/css/less.svg'
import bootstrap from './svg/development/css/bootstrap.svg'
import foundation from './svg/development/css/foundation.svg'
import bulma from './svg/development/css/bulma.svg'

import html5 from './svg/development/html5.svg'
import django from './svg/development/django.svg'
import laravel from './svg/development/laravel.svg'

import photoshop from './svg/design/photoshop.svg'
import illustrator from './svg/design/illustrator.svg'
import sketch from './svg/design/sketch.svg'
import palette from './svg/design/image.svg'

const icons = {
  // feather-icons (generic)
  close,
  heart,
  laptopMac,
  code,
  settingsApplications,
  palette,
  // App
  atom,
  sublime,
  apple,
  shopify,
  html5,
  javascript,
  babel,
  sass,
  less,
  webpack,
  gulp,
  grunt,
  bootstrap,
  foundation,
  bulma,
  django,
  react,
  laravel,
  angular,
  photoshop,
  sketch,
  illustrator
} // /const icons

// Component
const Icon = ({ glyph, className = 'icon', width = 48, height = 48, altText }) => (
  <svg className={className} width={width} height={height} aria-label={altText}>
    <use xlinkHref={icons[glyph]} />
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
