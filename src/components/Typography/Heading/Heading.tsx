import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import classes from './Heading.scss';
import { HeadingProps } from './Heading.types';

const Heading: FunctionComponent<HeadingProps> = ({ className, displayLevel, text, level = 5 }) => {
  const levelToDisplay = displayLevel || level;
  const classNames = classnames(
    classes['heading'],
    classes[`heading--level-${levelToDisplay}`],
    className,
  );

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

export default Heading;
