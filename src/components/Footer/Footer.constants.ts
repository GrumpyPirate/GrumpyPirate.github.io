import styled from 'styled-components';

import { noUnderline, palette } from 'styles';

export const Tech = styled.p`
  margin-bottom: 0;
`;

export const Copyright = styled.p`
  margin-bottom: 0;
`;

export const FooterLink = styled.a`
  ${noUnderline}

  color: inherit;
  font: inherit;

  &:hover,
  &:focus {
    color: ${palette.themeAccentLight};
  }
`;

export const FooterLinkWithIcon = styled(FooterLink)`
  font-size: 1.75em;
  vertical-align: middle;
`;
