import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from 'components/Icon/Icon';
import LoadableImage from 'components/LoadableImage/LoadableImage';
import { ContentService } from 'services/ContentService';
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

const PortfolioPageHeader: FunctionComponent<PortfolioPageHeaderProps> = function ({
  bgImage,
  className,
  tech = [],
  title,
}) {
  return (
    <header className={className}>
      <BackgroundImage>
        <picture>
          {/* Tablet */}
          <source
            media={mediaQueries.md}
            type="image/webp"
            srcSet={`${ContentService.getResizedImage(bgImage, {
              format: 'webp',
              width: 768,
            })} 768w, ${ContentService.getResizedImage(bgImage, {
              format: 'webp',
              width: 1536,
            })} 1536w`}
            sizes="768px"
          />
          <source
            media={mediaQueries.md}
            type="image/jpeg"
            srcSet={`${ContentService.getResizedImage(bgImage, {
              format: 'jpg',
              width: 768,
            })} 768w, ${ContentService.getResizedImage(bgImage, {
              format: 'jpg',
              width: 1536,
            })} 1536w`}
            sizes="768px"
          />
          {/* Large mobile */}
          <source
            media={mediaQueries.sm}
            type="image/webp"
            srcSet={`${ContentService.getResizedImage(bgImage, {
              format: 'webp',
              width: 480,
            })} 480w, ${ContentService.getResizedImage(bgImage, {
              format: 'webp',
              width: 720,
            })} 720w`}
            sizes="480px"
          />
          <source
            media={mediaQueries.sm}
            type="image/jpeg"
            srcSet={`${ContentService.getResizedImage(bgImage, {
              format: 'jpg',
              width: 480,
            })} 480w, ${ContentService.getResizedImage(bgImage, {
              format: 'jpg',
              width: 720,
            })} 720w`}
            sizes="480px"
          />
          {/* Mobile */}
          <source
            type="image/webp"
            srcSet={`${ContentService.getResizedImage(bgImage, {
              format: 'webp',
              width: 360,
              height: 450,
              resizeBehavior: 'thumb',
            })} 360w, ${ContentService.getResizedImage(bgImage, {
              format: 'webp',
              width: 720,
              height: 900,
              resizeBehavior: 'thumb',
            })} 720w`}
            sizes="360px"
          />
          <source
            type="image/jpeg"
            srcSet={`${ContentService.getResizedImage(bgImage, {
              format: 'jpg',
              width: 360,
              height: 900,
              resizeBehavior: 'thumb',
            })} 360w, ${ContentService.getResizedImage(bgImage, {
              format: 'jpg',
              width: 720,
              height: 900,
              resizeBehavior: 'thumb',
            })} 720w`}
            sizes="360px"
          />
          <LoadableImage src={bgImage} alt="" />
        </picture>
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
};

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
