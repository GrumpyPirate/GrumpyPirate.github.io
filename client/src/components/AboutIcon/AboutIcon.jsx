import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'components/Icon/Icon';

import classes from './AboutIcon.scss';

const AboutIcon = ({ iconName, large }) => (
  <div
    className={classnames(
      classes['about-icon'], {
        [classes['about-icon--large']]: large,
      },
    )}
  >
    <Icon glyph={iconName} />
  </div>
);

AboutIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

AboutIcon.defaultProps = {
  large: false,
};

export default AboutIcon;
