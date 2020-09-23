import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Column, Container, Row } from 'components/Grid';
import Icon from 'components/Icon/Icon';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Heading from 'components/Typography/Heading/Heading';
import { AppDispatch, RootState } from 'store';
import { getAboutSections } from 'store/about';
import { AboutSectionIcon } from 'types/common';

import { AboutIcon, AboutSection, PageHeaderDivider, SectionGraphic } from './AboutPage.constants';

const AboutPage: FunctionComponent = () => {
  const { aboutSections, hasFetched } = useSelector((state: RootState) => ({
    aboutSections: state.about.aboutSections,
    hasFetched: state.about.hasFetched,
  }));
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!hasFetched && aboutSections.length === 0) {
      dispatch(getAboutSections());
    }
  }, [aboutSections.length, dispatch, hasFetched]);

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
        <section>
          <Container>
            <Row xAlign="center">
              <Column xs={12} sm={10} lg={12} xl={10}>
                {aboutSections.map(({ content, icons = [], id, title }) => {
                  const iconContent: ReactElement = (
                    <>
                      {icons.map((icon: AboutSectionIcon) => (
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
                                <ReactMarkdown source={content} />
                              </Column>
                            </Row>
                          </Column>
                        </Row>
                      ) : (
                        <>
                          {icons.length > 0 && <SectionGraphic>{iconContent}</SectionGraphic>}

                          <Row xAlign="center">
                            <Column md={8}>
                              <ReactMarkdown source={content} />
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
