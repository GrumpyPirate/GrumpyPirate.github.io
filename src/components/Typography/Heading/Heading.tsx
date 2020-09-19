import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import {
  headingsFontFamily,
  headingsFontWeight,
  headingsLetterSpacing,
  headingsLineHeight,
  headingsMarginBottom,
} from 'styles';

import {
  heading1Styles,
  heading2Styles,
  heading3Styles,
  heading4Styles,
  heading5Styles,
  heading6Styles,
} from './Heading.constants';
import { HeadingProps } from './Heading.types';

const Heading: FunctionComponent<HeadingProps> = ({ className, text, level = 5 }) => {
  switch (level) {
    case 1:
      return <h1 className={className}>{text}</h1>;
    case 2:
      return <h2 className={className}>{text}</h2>;
    case 3:
      return <h3 className={className}>{text}</h3>;
    case 4:
      return <h4 className={className}>{text}</h4>;
    case 6:
      return <h6 className={className}>{text}</h6>;
    case 5:
    default:
      return <h5 className={className}>{text}</h5>;
  }
};

export default styled(Heading)`
  font-family: ${headingsFontFamily};
  font-weight: ${headingsFontWeight};
  letter-spacing: ${headingsLetterSpacing};
  line-height: ${headingsLineHeight};
  margin: 0 0 ${headingsMarginBottom};
  text-transform: uppercase;

  ${({ displayLevel, level }) => {
    const levelToDisplay = displayLevel || level;

    switch (levelToDisplay) {
      case 1:
        return heading1Styles;
      case 2:
        return heading2Styles;
      case 3:
        return heading3Styles;
      case 4:
        return heading4Styles;
      case 6:
        return heading6Styles;
      case 5:
      default:
        return heading5Styles;
    }
  }}
`;
