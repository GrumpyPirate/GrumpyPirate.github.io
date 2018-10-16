import React from 'react';
import PropTypes from 'prop-types';

import classes from './ScreenreaderOnlyText.scss';

const ScreenreaderOnlyText = ({ text }) => (
  <span className={classes['screenreader-only']}>{text}</span>
);

ScreenreaderOnlyText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ScreenreaderOnlyText;
