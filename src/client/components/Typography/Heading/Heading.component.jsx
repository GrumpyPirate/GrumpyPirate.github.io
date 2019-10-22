import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Heading.component.scss';

const Heading = ({ level, displayLevel, text, className }) => {
  const levelToDisplay = displayLevel || level;
  const classNames = classnames(classes['heading'], classes[`heading--level-${levelToDisplay}`], {
    [className]: className,
  });

  switch (level) {
    case 1:
      return <h1 className={classNames}>{text}</h1>;
    case 2:
      return <h2 className={classNames}>{text}</h2>;
    case 3:
      return <h3 className={classNames}>{text}</h3>;
    case 4:
      return <h4 className={classNames}>{text}</h4>;
    case 5:
      return <h5 className={classNames}>{text}</h5>;
    case 6:
      return <h6 className={classNames}>{text}</h6>;
    default:
      return <h5 className={classNames}>{text}</h5>;
  }
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  displayLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 5,
  displayLevel: null,
  className: null,
};

export default Heading;
