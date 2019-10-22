import React, { FunctionComponent } from 'react';

import { IconProps } from './Icon.component.d';
import classes from './Icon.component.scss';

// feather-icons
import 'images/icons/chevron-down.svg';
import 'images/icons/chevron-left.svg';

// Generic
// import close from 'images/icons/x.svg';
// import settingsApplications from 'images/icons/settings.svg';
import 'images/icons/heart.svg';

// Brand icons
// import 'images/icons/brands/apple.svg';
import 'images/icons/brands/shopify.svg';
// import 'images/icons/editors/atom.svg';
// import 'images/icons/editors/sublime.svg';
import 'images/icons/brands/divio.svg';
import 'images/icons/brands/contentful.svg';

import 'images/icons/development/js/javascript.svg';
import 'images/icons/development/js/babel.svg';
import 'images/icons/development/js/react.svg';
import 'images/icons/development/js/angular.svg';
import 'images/icons/development/hash.svg';
import 'images/icons/development/airplay.svg';
// import 'images/icons/development/js/express.svg';
// import 'images/icons/development/js/nodejs.svg';
import 'images/icons/development/js/redux.svg';
import 'images/icons/development/js/reactivex.svg';

import 'images/icons/development/devtool/webpack.svg';
import 'images/icons/development/devtool/gulp.svg';
import 'images/icons/development/devtool/grunt.svg';

import 'images/icons/development/css/styled-components.svg';
import 'images/icons/development/css/sass.svg';
// import 'images/icons/development/css/less.svg';
import 'images/icons/development/css/bootstrap.svg';
import 'images/icons/development/css/foundation.svg';
import 'images/icons/development/css/bulma.svg';
import 'images/icons/development/css/postcss.svg';

import 'images/icons/development/html5.svg';
import 'images/icons/development/django.svg';
import 'images/icons/development/laravel.svg';

import 'images/icons/design/invision.svg';
import 'images/icons/design/photoshop.svg';
import 'images/icons/design/illustrator.svg';
import 'images/icons/design/sketch.svg';
import 'images/icons/design/image.svg';

// Utils
import 'images/icons/loader.svg';

const Icon: FunctionComponent<IconProps> = ({
  glyph,
  className = classes['icon'],
  altText = '',
}: IconProps) => (
  <svg className={className} aria-label={altText}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
);

export default Icon;
