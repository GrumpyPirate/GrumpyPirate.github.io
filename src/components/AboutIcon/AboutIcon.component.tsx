import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Icon from 'components/Icon/Icon.component';

import { AboutIconProps } from './AboutIcon.component.types';
import classes from './AboutIcon.component.scss';

const AboutIcon: FunctionComponent<AboutIconProps> = ({
  iconName,
  large = false,
}: AboutIconProps) => (
  <div
    className={classnames(classes['about-icon'], {
      [classes['about-icon--large']]: large,
    })}
  >
    <Icon glyph={iconName} />
  </div>
);

export default AboutIcon;
