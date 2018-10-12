import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'components/Icon/Icon';

import './AboutIcon.scss';

const AboutIcon = ({ iconName, large }) => (
  <div
    className={classnames(
      'about__section__graphic__icon', {
        'about__section__graphic__icon--large': large,
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
