import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LoadableImage from 'components/LoadableImage/LoadableImage';
import Heading from 'components/Typography/Heading/Heading';
import { ContentService } from 'services/ContentService';
import {
  animDur,
  bodyFontWeight,
  forceAspectRatio,
  gutterWidths,
  mediaQueries,
  palette,
  rem,
} from 'styles';

import { cardIn, Description, Details, Image } from './PortfolioListing.constants';
import { PortfolioListingProps } from './PortfolioListing.types';

const PortfolioListing: FunctionComponent<PortfolioListingProps> = function ({
  className,
  description,
  headerImageUrl,
  id,
  index,
  slug,
  title,
}) {
  return (
    <li
      className={className}
      style={{
        animationDelay: `${animDur * index * 0.25}s`,
      }}
      data-testid="portfolio-page__list__item"
    >
      <Link to={`/portfolio/${slug}`} role="listitem">
        <Image>
          <picture>
            {[360, 600].map((imageSize) => (
              <Fragment key={`list-item--${id}__image--size-${imageSize}`}>
                <source
                  type="image/webp"
                  srcSet={`${ContentService.getResizedImage(headerImageUrl, {
                    format: 'webp',
                    width: imageSize,
                  })} ${imageSize}w, ${ContentService.getResizedImage(headerImageUrl, {
                    format: 'webp',
                    width: imageSize * 2,
                  })} ${imageSize * 2}w`}
                  sizes={`${imageSize}px`}
                />
                <source
                  type="image/jpeg"
                  srcSet={`${ContentService.getResizedImage(headerImageUrl, {
                    format: 'jpg',
                    width: imageSize,
                  })} ${imageSize}w, ${ContentService.getResizedImage(headerImageUrl, {
                    format: 'jpg',
                    width: imageSize * 2,
                  })} ${imageSize * 2}w`}
                  sizes={`${imageSize}px`}
                />
              </Fragment>
            ))}

            <LoadableImage loading="lazy" src={headerImageUrl} alt="" />
          </picture>
        </Image>

        <Details>
          <Heading level={3} displayLevel={5} text={title} />
          <Description>{description}</Description>
        </Details>
      </Link>
    </li>
  );
};

export default styled(PortfolioListing)`
  display: block;

  @media ${mediaQueries.md} {
    opacity: 0;
    animation: ${cardIn} 0.15s ease 0s 1 forwards;
  }

  a {
    ${forceAspectRatio(16, 9)}
    position: relative;
    display: flex;
    flex: 1 1 calc(100% - ${rem(gutterWidths.xs / 2)});
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;
    overflow: hidden;
    font-weight: ${bodyFontWeight};
    border: ${rem(gutterWidths.xs / 4)} solid ${palette.themeAccentDark};
    border-style: none none solid;
    border-radius: ${rem(4)};
    background-color: ${palette.greyDark};
    transition-property: transform;
    transition-duration: 0.15s;

    @media ${mediaQueries.lg} {
      border-bottom-width: ${rem(gutterWidths.md / 4)};
    }

    &:hover,
    &:focus {
      transform: translateY(${rem(-4)});
      transition-duration: 0s;
    }
  }
`;
