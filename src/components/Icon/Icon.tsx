import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IconProps } from './Icon.types';

import 'images/icons/airplay.svg';
import 'images/icons/angular.svg';
import 'images/icons/babel.svg';
import 'images/icons/bootstrap.svg';
import 'images/icons/bulma.svg';
import 'images/icons/chevron-down.svg';
import 'images/icons/chevron-left.svg';
import 'images/icons/contentful.svg';
import 'images/icons/divio.svg';
import 'images/icons/django.svg';
import 'images/icons/foundation.svg';
import 'images/icons/gatsby.svg';
import 'images/icons/graphql.svg';
import 'images/icons/grunt.svg';
import 'images/icons/gulp.svg';
import 'images/icons/hash.svg';
import 'images/icons/heart.svg';
import 'images/icons/html5.svg';
import 'images/icons/illustrator.svg';
import 'images/icons/image.svg';
import 'images/icons/invision.svg';
import 'images/icons/javascript.svg';
import 'images/icons/jest.svg';
import 'images/icons/laravel.svg';
import 'images/icons/loader.svg';
import 'images/icons/nextjs.svg';
import 'images/icons/parcel.svg';
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

const Icon: FunctionComponent<IconProps> = function ({ glyph, className, altText = '' }) {
  return (
    <svg className={className} aria-label={altText}>
      <use xlinkHref={`#${glyph}`} />
    </svg>
  );
};

export default styled(Icon)`
  position: relative;
  bottom: 0.125em;
  display: inline-block;
  height: 1em;
  width: 1em;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
  vertical-align: middle;
`;
