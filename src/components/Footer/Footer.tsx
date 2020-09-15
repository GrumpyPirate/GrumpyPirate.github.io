import Color from 'color';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Container } from 'components/Grid';
import Icon from 'components/Icon/Icon';
import REPO_URL from 'config/urls';
import { mediaQueries, palette, rem } from 'styles';
import { PropsWithClassName } from 'types/common';

import { Copyright, FooterLink, FooterLinkWithIcon, Tech } from './Footer.constants';

const Footer: FunctionComponent<PropsWithClassName> = function ({ className }) {
  const creationYear = 2017;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={className}>
      <Container>
        <Tech>
          Made with{' '}
          <FooterLinkWithIcon
            href="https://facebook.github.io/react/"
            target="_blank"
            rel="noopener noreferrer"
            title="React"
          >
            <Icon glyph="react" altText="React" />
          </FooterLinkWithIcon>{' '}
          ,{' '}
          <FooterLinkWithIcon
            href="https://webpack.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Webpack"
          >
            <Icon glyph="webpack" altText="Webpack" />
          </FooterLinkWithIcon>{' '}
          and{' '}
          <FooterLinkWithIcon
            href="https://www.contentful.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Contentful"
          >
            <Icon glyph="contentful" altText="Contentful" />
          </FooterLinkWithIcon>
          .{' '}
          <FooterLink href={REPO_URL} target="_blank" rel="noreferrer noopener">
            Source code
          </FooterLink>
          .
        </Tech>

        <Copyright>
          &copy;{' '}
          <span>
            {currentYear > creationYear && <>{creationYear} &mdash; </>}
            {currentYear}
          </span>{' '}
          <FooterLink
            href="https://github.com/grumpypirate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stephanie Cobbold
          </FooterLink>
          .
        </Copyright>
      </Container>
    </footer>
  );
};

export default styled(Footer)`
  background-color: ${palette.themeDarkShades};
  color: ${Color(palette.themeLightShades).alpha(0.5).string()};
  font-size: ${rem(12)};
  padding: ${rem(24)} 0;
  text-align: center;

  @media ${mediaQueries.md} {
    padding: 2rem 0;
  }
`;
