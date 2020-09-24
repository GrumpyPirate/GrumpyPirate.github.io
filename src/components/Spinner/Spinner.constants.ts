import styled, { keyframes } from 'styled-components';

import Icon from 'components/Icon/Icon';
import { createHeading, pageBg, palette, paragraphMarginBottom, rem } from 'styles';

const spin = keyframes`
  from {
    transform: rotateZ(0);
  }

  to {
    transform: rotateZ(1turn);
  }
`;

export const Image = styled.figure`
  margin: 0 0 ${paragraphMarginBottom};

  ${Icon} {
    animation: ${spin} 2.25s linear 0s infinite;
    display: block;
    height: ${rem(48)};
    margin: auto;
    width: ${rem(48)};
  }
`;

export const Text = styled.h6`
  ${createHeading(4)}

  left: ${rem(6)};
  margin: 0;
  position: relative;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${pageBg};
  color: ${palette.themeDarkShades};
  user-select: none;
  z-index: 2;
`;
