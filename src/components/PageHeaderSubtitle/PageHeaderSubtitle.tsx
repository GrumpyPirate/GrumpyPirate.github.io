import Color from 'color';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Column, Container, Row } from 'components/Grid';
import { createHeading, createLinkStyle, mediaQueries, palette } from 'styles';
import { PropsWithClassName } from 'types/common';

const PageHeaderSubtitle: FunctionComponent<PropsWithClassName> = function ({
  children,
  className,
}) {
  return (
    <h2 className={className}>
      <Container>
        <Row xAlign="center">
          <Column sm={10} md={8}>
            {children}
          </Column>
        </Row>
      </Container>
    </h2>
  );
};

export default styled(PageHeaderSubtitle)`
  ${createHeading(4)}

  color: ${Color(palette.themeLightShades).alpha(0.5).string()};
  margin: 0;
  padding-bottom: 1rem;
  text-transform: uppercase;

  @media ${mediaQueries.md} {
    padding-bottom: 2rem;
  }

  a {
    ${createLinkStyle({
      color: palette.themeAccentLight,
      lighten: true,
    })}
  }
`;
