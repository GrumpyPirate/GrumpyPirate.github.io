import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import Icon from 'components/Icon/Icon';

import classes from './AboutIcon.scss';
import { AboutIconProps } from './AboutIcon.types';

const AboutIcon: FunctionComponent<AboutIconProps> = ({ iconName, large = false }) => (
  <div
    className={classnames(classes['about-icon'], {
      [classes['about-icon--large']]: large,
    })}
  >
    <Icon glyph={iconName} />
  </div>
);

export default AboutIcon;
