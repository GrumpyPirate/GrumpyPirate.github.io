import Color from 'color';
import styled, { keyframes } from 'styled-components';

import { animDur, gridGutterWidthBase, palette, rem } from 'styles';

// Animations
export const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(${rem(16)});
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Components
export const Image = styled.figure`
  bottom: 0;
  left: 0;
  margin: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform ${animDur}s ease;

  img {
    bottom: 0;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

export const Details = styled.div`
  background-image: linear-gradient(
    to top,
    ${Color(palette.themeDarkShades).alpha(0.8).string()},
    ${Color(palette.themeDarkShades).alpha(0.4).string()} 40%,
    ${Color(palette.themeDarkShades).alpha(0).string()}
  );
  color: ${palette.white};
  padding: 15vmax ${rem(gridGutterWidthBase / 2)} ${rem(gridGutterWidthBase / 2)};
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const Description = styled.p`
  margin-bottom: 0;
`;
