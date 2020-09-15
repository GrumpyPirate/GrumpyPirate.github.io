import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  animDur,
  animEase,
  bodyFontFamily,
  btnFontSize,
  buttonReset,
  linkFontWeight,
  noUnderline,
  palette,
  rem,
} from 'styles';

import { btnDisabledStyles, createButtonVariant } from './Button.constants';
import { ButtonProps } from './Button.types';

const Button: FunctionComponent<ButtonProps> = function ({
  children,
  className,
  external,
  to = '',
}) {
  const isInternalLink = Boolean(to && !external);
  const isExternalLink = Boolean(to && external);

  if (isInternalLink) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (isExternalLink) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default styled(Button)`
  ${buttonReset}
  ${noUnderline}

  background-color: ${palette.themeAccentLight};
  border: solid 1px ${palette.themeAccentLight};
  border-radius: ${rem(btnFontSize * 2)};
  box-shadow: none;
  color: ${palette.white};
  display: inline-block;
  font-family: ${bodyFontFamily};
  font-size: ${rem(btnFontSize)};
  font-weight: ${linkFontWeight};
  line-height: ${22 / btnFontSize};
  padding: ${rem(8)} ${rem(24)};
  text-transform: uppercase;
  transition-duration: ${animDur}s;
  transition-property: transform, color, background-color;
  transition-timing-function: ${animEase};

  ${btnDisabledStyles}

  ${({ primary }) => !!primary && createButtonVariant(palette.white, palette.themeAccentLight)}
  ${({ secondary }) => !!secondary && createButtonVariant(palette.white, palette.themeAccentDark)}
`;
