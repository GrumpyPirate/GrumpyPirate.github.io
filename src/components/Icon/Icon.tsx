import React, { FunctionComponent } from 'react';

import classes from './Icon.scss';
import { IconProps } from './Icon.types';

// Brand icons
import 'images/icons/airplay.svg';
import 'images/icons/angular.svg';
import 'images/icons/babel.svg';
import 'images/icons/bootstrap.svg';
import 'images/icons/bulma.svg';
// feather-icons
import 'images/icons/chevron-down.svg';
import 'images/icons/chevron-left.svg';
import 'images/icons/contentful.svg';
import 'images/icons/divio.svg';
import 'images/icons/django.svg';
import 'images/icons/foundation.svg';
import 'images/icons/grunt.svg';
import 'images/icons/gulp.svg';
import 'images/icons/hash.svg';
// Generic
import 'images/icons/heart.svg';
import 'images/icons/html5.svg';
import 'images/icons/illustrator.svg';
import 'images/icons/image.svg';
import 'images/icons/invision.svg';
import 'images/icons/javascript.svg';
import 'images/icons/laravel.svg';
// Utils
import 'images/icons/loader.svg';
import 'images/icons/nextjs.svg';
import 'images/icons/photoshop.svg';
import 'images/icons/postcss.svg';
import 'images/icons/react.svg';
import 'images/icons/reactivex.svg';
import 'images/icons/redux.svg';
import 'images/icons/sass.svg';
import 'images/icons/shopify.svg';
import 'images/icons/sketch.svg';
import 'images/icons/storybook.svg';
import 'images/icons/styled-components.svg';
import 'images/icons/typescript.svg';
import 'images/icons/webpack.svg';

const Icon: FunctionComponent<IconProps> = ({
  glyph,
  className = classes['icon'],
  altText = '',
}) => (
  <svg className={className} aria-label={altText}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
);

export default Icon;
