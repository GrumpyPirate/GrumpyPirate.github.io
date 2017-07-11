// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './Icons.scss'

// Import icon SVGs. Note that we're using material-design-icons, via NPM.
// feather-icons

// Generic
import close from 'icons/svg/x.svg'
import settingsApplications from 'icons/svg/settings.svg'
import heart from 'icons/svg/heart.svg'

// Brand icons
import apple from 'icons/svg/brands/apple.svg'
import shopify from 'icons/svg/brands/shopify.svg'
import atom from 'icons/svg/editors/atom.svg'
import sublime from 'icons/svg/editors/sublime.svg'

import javascript from 'icons/svg/development/js/javascript.svg'
import babel from 'icons/svg/development/js/babel.svg'
import react from 'icons/svg/development/js/react.svg'
import angular from 'icons/svg/development/js/angular.svg'
import code from 'icons/svg/development/hash.svg'
import laptopMac from 'icons/svg/development/airplay.svg'
// import express from 'icons/svg/development/js/express.svg'
// import nodejs from 'icons/svg/development/js/nodejs.svg'
// import redux from 'icons/svg/development/js/redux.svg'

import webpack from 'icons/svg/development/devtool/webpack.svg'
import gulp from 'icons/svg/development/devtool/gulp.svg'
import grunt from 'icons/svg/development/devtool/grunt.svg'

import sass from 'icons/svg/development/css/sass.svg'
import less from 'icons/svg/development/css/less.svg'
import bootstrap from 'icons/svg/development/css/bootstrap.svg'
import foundation from 'icons/svg/development/css/foundation.svg'
import bulma from 'icons/svg/development/css/bulma.svg'

import html5 from 'icons/svg/development/html5.svg'
import django from 'icons/svg/development/django.svg'
import laravel from 'icons/svg/development/laravel.svg'

import photoshop from 'icons/svg/design/photoshop.svg'
import illustrator from 'icons/svg/design/illustrator.svg'
import sketch from 'icons/svg/design/sketch.svg'
import palette from 'icons/svg/design/image.svg'

// Utils
import loader from 'icons/svg/loader.svg'

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
  illustrator,
  // Utils
  loader
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
