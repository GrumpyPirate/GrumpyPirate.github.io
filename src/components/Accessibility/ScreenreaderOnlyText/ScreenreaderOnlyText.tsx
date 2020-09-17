import React, { FunctionComponent } from 'react';

import classes from './ScreenreaderOnlyText.scss';
import { ScreenreaderOnlyTextProps } from './ScreenreaderOnlyText.types';

const ScreenreaderOnlyText: FunctionComponent<ScreenreaderOnlyTextProps> = ({ text }) => (
  <span className={classes['screenreader-only']}>{text}</span>
);

export default ScreenreaderOnlyText;
