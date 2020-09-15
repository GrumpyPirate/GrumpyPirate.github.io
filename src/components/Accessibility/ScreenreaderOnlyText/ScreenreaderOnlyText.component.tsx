import React, { FunctionComponent } from 'react';

import { ScreenreaderOnlyTextProps } from './ScreenreaderOnlyText.component.types';
import classes from './ScreenreaderOnlyText.component.scss';

const ScreenreaderOnlyText: FunctionComponent<ScreenreaderOnlyTextProps> = ({
  text,
}: ScreenreaderOnlyTextProps) => <span className={classes['screenreader-only']}>{text}</span>;

export default ScreenreaderOnlyText;
