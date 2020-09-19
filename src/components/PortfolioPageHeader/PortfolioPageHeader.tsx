import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from 'components/Icon/Icon';
import { mediaQueries, palette, rem } from 'styles';
import { PortfolioItemTech } from 'types/common';

import {
  Back,
  BackgroundImage,
  Content,
  Tech,
  TechHeading,
  TechList,
  TechListItem,
  Title,
} from './PortfolioPageHeader.constants';
import { PortfolioPageHeaderProps } from './PortfolioPageHeader.types';

const PortfolioPageHeader: FunctionComponent<PortfolioPageHeaderProps> = ({
  bgImage,
  className,
  tech = [],
  title,
}) => (
  <header className={className}>
    <BackgroundImage>
      <img src={bgImage} alt={title} />
    </BackgroundImage>

    <Content>
      <Back>
        <Link to="/portfolio">
          <Icon glyph="chevron-left" />
          Portfolio
        </Link>
      </Back>

      <div>
        <Title level={1} text={title} />
      </div>

      <Tech>
        <TechHeading level={2} displayLevel={5} text="Technologies" />

        {tech.length > 0 && (
          <TechList>
            {tech.map(({ icon, name }: PortfolioItemTech) => (
              <TechListItem key={`tech-item__${name}`}>
                <Icon glyph={icon} altText={name} />
              </TechListItem>
            ))}
          </TechList>
        )}
      </Tech>
    </Content>
  </header>
);

export default styled(PortfolioPageHeader)`
  background-color: ${palette.themeDarkShades};
  border-bottom: solid ${rem(6)} ${palette.themeAccentLight};
  min-height: ${rem(360)};
  position: relative;
  padding: ${rem(48)} 0 ${rem(32)};

  @media ${mediaQueries.lg} {
    border-bottom-width: ${rem(8)};
  }
`;
