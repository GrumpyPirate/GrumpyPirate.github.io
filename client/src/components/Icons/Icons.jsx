// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './Icons.scss'

// Import icon SVGs. Note that we're using material-design-icons, via NPM.
// feather-icons

// Generic
// import close from 'images/icons/x.svg'
// import settingsApplications from 'images/icons/settings.svg'
import heart from 'images/icons/heart.svg'

// Brand icons
// import apple from 'images/icons/brands/apple.svg'
import shopify from 'images/icons/brands/shopify.svg'
// import atom from 'images/icons/editors/atom.svg'
// import sublime from 'images/icons/editors/sublime.svg'
import divio from 'images/icons/brands/divio.svg'
import contentful from 'images/icons/brands/contentful.svg'

import javascript from 'images/icons/development/js/javascript.svg'
import babel from 'images/icons/development/js/babel.svg'
import react from 'images/icons/development/js/react.svg'
import angular from 'images/icons/development/js/angular.svg'
import code from 'images/icons/development/hash.svg'
import laptopMac from 'images/icons/development/airplay.svg'
// import express from 'images/icons/development/js/express.svg'
// import nodejs from 'images/icons/development/js/nodejs.svg'
import redux from 'images/icons/development/js/redux.svg'

import webpack from 'images/icons/development/devtool/webpack.svg'
import gulp from 'images/icons/development/devtool/gulp.svg'
import grunt from 'images/icons/development/devtool/grunt.svg'

import sass from 'images/icons/development/css/sass.svg'
// import less from 'images/icons/development/css/less.svg'
import bootstrap from 'images/icons/development/css/bootstrap.svg'
import foundation from 'images/icons/development/css/foundation.svg'
import bulma from 'images/icons/development/css/bulma.svg'

import html5 from 'images/icons/development/html5.svg'
import django from 'images/icons/development/django.svg'
import laravel from 'images/icons/development/laravel.svg'

import photoshop from 'images/icons/design/photoshop.svg'
import illustrator from 'images/icons/design/illustrator.svg'
import sketch from 'images/icons/design/sketch.svg'
import palette from 'images/icons/design/image.svg'

// Utils
import loader from 'images/icons/loader.svg'

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
