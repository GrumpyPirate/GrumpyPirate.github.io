import styled, { keyframes } from 'styled-components';

import Icon from 'components/Icon/Icon';
import { createHeading, paragraphMarginBottom, rem } from 'styles';

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
