import { useQuery } from '@apollo/client';
import React, { Fragment, FunctionComponent, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'components/Button/Button';
import { Column, Container, Row } from 'components/Grid';
import LoadableImage from 'components/LoadableImage/LoadableImage';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PortfolioCarousel from 'components/PortfolioCarousel/PortfolioCarousel';
import PortfolioDeviceLineup from 'components/PortfolioDeviceLineup/PortfolioDeviceLineup';
import PortfolioPageHeader from 'components/PortfolioPageHeader/PortfolioPageHeader';
import Spinner from 'components/Spinner/Spinner';
import { GET_PORTFOLIO_ITEM_BY_SLUG, GetPortfolioItemBySlugResponse } from 'queries';
import { ContentService } from 'services/ContentService';
import { PropsWithClassName } from 'types/common';

import {
  ContentDivider,
  ExternalLinkWrapper,
  SupportingImage,
} from './PortfolioItemPage.constants';

const PortfolioItemPage: FunctionComponent<PropsWithClassName> = function ({ className }) {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, loading } = useQuery<GetPortfolioItemBySlugResponse>(
    GET_PORTFOLIO_ITEM_BY_SLUG,
    {
      variables: { slug },
    },
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate('/404');
    }
  }, [error, navigate]);

  const [portfolioItem] = useMemo(() => (!data ? [] : data.portfolioItemCollection.items), [data]);
  const [mobilePreviewImage, tabletPreviewImage, desktopPreviewImage] = useMemo(() => {
    const {
      devicePreviewsCollection: {
        items: [
          { url: mobileImageUrl = '' } = {},
          { url: tabletImageUrl = '' } = {},
          { url: desktopImageUrl = '' } = {},
        ] = [],
      } = {},
    } = portfolioItem || {};

    return [mobileImageUrl, tabletImageUrl, desktopImageUrl];
  }, [portfolioItem]);

  return (
    <Page className={className}>
      {loading || !portfolioItem ? (
        <Spinner />
      ) : (
        <>
          <PortfolioPageHeader
            bgImage={portfolioItem.headerImage.url}
            title={portfolioItem.title}
            tech={portfolioItem.tech}
          />
          <PageContent>
            <Container>
              <Row xAlign="center">
                <Column sm={10}>
                  {portfolioItem.supportingImage.url ? (
                    <Row yAlign="top">
                      <Column xs={12} md={6} xl={6}>
                        <ReactMarkdown>{portfolioItem.description}</ReactMarkdown>
                      </Column>

                      <Column xs={10} md={6} xl={5} push={1} pushMd={0} pushXl={1}>
                        <SupportingImage>
                          <picture>
                            {[290, 336, 380].map((imageSize) => (
                              <Fragment key={`supporting-image--size-${imageSize}`}>
                                <source
                                  type="image/webp"
                                  srcSet={`${ContentService.getResizedImage(
                                    portfolioItem.supportingImage.url,
                                    { format: 'webp', width: imageSize },
                                  )} ${imageSize}w, ${ContentService.getResizedImage(
                                    portfolioItem.supportingImage.url,
                                    { format: 'webp', width: imageSize * 2 },
                                  )} ${imageSize * 2}w`}
                                  sizes={`${imageSize}px`}
                                />
                                <source
                                  type="image/jpeg"
                                  srcSet={`${ContentService.getResizedImage(
                                    portfolioItem.supportingImage.url,
                                    { format: 'jpg', width: imageSize },
                                  )} ${imageSize}w, ${ContentService.getResizedImage(
                                    portfolioItem.supportingImage.url,
                                    { format: 'jpg', width: imageSize * 2 },
                                  )} ${imageSize * 2}w`}
                                  sizes={`${imageSize}px`}
                                />
                              </Fragment>
                            ))}
                            <LoadableImage
                              loading="lazy"
                              src={portfolioItem.supportingImage.url}
                              alt=""
                            />
                          </picture>
                        </SupportingImage>
                      </Column>
                    </Row>
                  ) : (
                    <ReactMarkdown>{portfolioItem.description}</ReactMarkdown>
                  )}

                  <ContentDivider />

                  <PortfolioCarousel
                    desktopImage={desktopPreviewImage}
                    tabletImage={tabletPreviewImage}
                    mobileImage={mobilePreviewImage}
                  />

                  <PortfolioDeviceLineup
                    desktopImage={desktopPreviewImage}
                    tabletImage={tabletPreviewImage}
                    mobileImage={mobilePreviewImage}
                  />

                  <ContentDivider />

                  <ExternalLinkWrapper>
                    <Button to={portfolioItem.url} external secondary>
                      Visit {portfolioItem.title}
                    </Button>
                  </ExternalLinkWrapper>
                </Column>
              </Row>
            </Container>
          </PageContent>
        </>
      )}
    </Page>
  );
};

export default styled(PortfolioItemPage)`
  ${PageContent} {
    text-align: left;
  }
`;
