import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import ScreenreaderOnlyText from 'components/Accessibility/ScreenreaderOnlyText/ScreenreaderOnlyText';
import { Container } from 'components/Grid';
import Sitenav from 'components/Sitenav/Sitenav';
import { mediaQueries, palette, rem, sidebarWidth, sidebarWidthXl } from 'styles';
import { PropsWithClassName } from 'types/common';

import {
  Brand,
  BrandLogo,
  BrandName,
  BurgerButton,
  BurgerButtonBar,
  BurgerButtonWrapper,
  Content,
  DesktopSitenavWrapper,
  Divider,
  JobTitle,
  MobileSitenavWrapper,
} from './Sidebar.constants';

const Sidebar: FunctionComponent<PropsWithClassName> = ({ className }) => {
  const [isTouchNavigationOpen, setIsTouchNavigationOpen] = useState(false);
  const history = useHistory();

  /**
   * Use a side-effect to:
   *  - Close the touch navigation, when the route changes
   */
  useEffect(() => {
    const clearHistoryListener = history.listen(() => {
      if (isTouchNavigationOpen) {
        setIsTouchNavigationOpen(false);
      }
    });

    return () => {
      clearHistoryListener();
    };
  }, [history, isTouchNavigationOpen]);

  return (
    <aside className={className}>
      <Container>
        <Content>
          <Brand>
            <Link to="/">
              <BrandLogo />
              <BrandName>Edward Cobbold</BrandName>
            </Link>
          </Brand>
          <JobTitle>Frontend Developer</JobTitle>

          <Divider />

          <BurgerButtonWrapper>
            <BurgerButton
              type="button"
              onClick={() => {
                setIsTouchNavigationOpen(!isTouchNavigationOpen);
              }}
              aria-expanded={isTouchNavigationOpen}
            >
              <BurgerButtonBar />
              <ScreenreaderOnlyText text="Toggle menu" />
            </BurgerButton>
          </BurgerButtonWrapper>

          <DesktopSitenavWrapper>
            <Sitenav />
          </DesktopSitenavWrapper>
        </Content>
      </Container>

      <MobileSitenavWrapper isOpen={isTouchNavigationOpen}>
        <Container>
          <Sitenav />
        </Container>
      </MobileSitenavWrapper>
    </aside>
  );
};

export default styled(Sidebar)`
  background-color: ${palette.themeMainBrand};
  color: ${palette.themeLightShades};
  left: 0;
  position: fixed;
  right: 0;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 11;

  @media ${mediaQueries.lg} {
    align-items: center;
    border: 0;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    padding: 0;
    position: fixed;
    text-align: right;
    width: ${rem(sidebarWidth)};
  }

  @media ${mediaQueries.xl} {
    width: ${rem(sidebarWidthXl)};
  }
`;
