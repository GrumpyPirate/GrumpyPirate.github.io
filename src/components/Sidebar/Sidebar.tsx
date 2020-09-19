import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ScreenreaderOnlyText from 'components/Accessibility/ScreenreaderOnlyText/ScreenreaderOnlyText';
import { Container } from 'components/Grid';
import Sitenav from 'components/Sitenav/Sitenav';
import { AppDispatch, RootState } from 'store';
import { toggleMobileNavigation } from 'store/ui/ui.actions';
import { mediaQueries, palette, rem, sidebarWidth, sidebarWidthXl } from 'styles';
import { ClassNameProps } from 'types/common';

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

const Sidebar: FunctionComponent<ClassNameProps> = ({ className }) => {
  const isMobileNavigationOpen = useSelector((state: RootState) => state.ui.isMobileNavigationOpen);
  const dispatch: AppDispatch = useDispatch();

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
                dispatch(toggleMobileNavigation());
              }}
              aria-expanded={isMobileNavigationOpen}
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

      <MobileSitenavWrapper isClosed={!isMobileNavigationOpen}>
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
