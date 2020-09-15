import { useQuery } from '@apollo/client';
import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { Column, Container, Row } from 'components/Grid';
import Icon from 'components/Icon/Icon';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Spinner from 'components/Spinner/Spinner';
import Heading from 'components/Typography/Heading/Heading';
import { GET_ABOUT_SECTIONS, GetAboutSectionsResponse } from 'queries';

import { AboutIcon, AboutSection, PageHeaderDivider, SectionGraphic } from './AboutPage.constants';

const AboutPage: FunctionComponent = function () {
  const { data, loading } = useQuery<GetAboutSectionsResponse>(GET_ABOUT_SECTIONS);

  const formattedAboutSections = useMemo(
    () =>
      !data ? [] : [...data.aboutPageSectionCollection.items].sort((a, b) => a.order - b.order),
    [data],
  );

  return (
    <Page>
      <PageHeader title="Hello" scrollLabel="More" isFullscreen>
        <PageHeaderSubtitle>
          I&apos;m a Frontend developer from Kent, working in London.
        </PageHeaderSubtitle>

        <PageHeaderSubtitle>
          <PageHeaderDivider />
          <Link to="/portfolio">Portfolio</Link>
        </PageHeaderSubtitle>
      </PageHeader>

      <PageContent>
        {loading && <Spinner />}
        <section>
          <Container>
            <Row xAlign="center">
              <Column xs={12} sm={10} lg={12} xl={10}>
                {formattedAboutSections.map(({ sys: { id }, content, icons = [], title }) => {
                  const iconContent: ReactElement = (
                    <>
                      {icons.map((icon) => (
                        <AboutIcon key={`${id}__icon--${icon.name}`} large={icon.large}>
                          <Icon glyph={icon.name} />
                        </AboutIcon>
                      ))}
                    </>
                  );

                  return (
                    <AboutSection key={`about-section--${id}`}>
                      <Heading level={2} displayLevel={3} text={title} />

                      {icons.length === 1 ? (
                        <Row xAlign="center">
                          <Column md={8}>
                            <Row yAlign="center">
                              <Column xs={12} md={4} pushMd={8}>
                                <SectionGraphic single>{iconContent}</SectionGraphic>
                              </Column>
                              <Column xs={12} md={8} pullMd={4}>
                                <ReactMarkdown>{content}</ReactMarkdown>
                              </Column>
                            </Row>
                          </Column>
                        </Row>
                      ) : (
                        <>
                          {icons.length > 0 && <SectionGraphic>{iconContent}</SectionGraphic>}

                          <Row xAlign="center">
                            <Column md={8}>
                              <ReactMarkdown>{content}</ReactMarkdown>
                            </Column>
                          </Row>
                        </>
                      )}
                    </AboutSection>
                  );
                })}
              </Column>
            </Row>
          </Container>
        </section>
      </PageContent>
    </Page>
  );
};

export default AboutPage;
