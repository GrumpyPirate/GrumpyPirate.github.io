import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { visuallyHidden } from 'styles';

import { ScreenreaderOnlyTextProps } from './ScreenreaderOnlyText.types';

const ScreenreaderOnlyText: FunctionComponent<ScreenreaderOnlyTextProps> = ({
  className,
  text,
}) => <span className={className}>{text}</span>;

export default styled(ScreenreaderOnlyText)`
  ${visuallyHidden}
`;
