import React, { useEffect, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';

import { AboutSectionFormatted, AboutSectionIcon } from 'types';

import Container from 'components/Layout/Container/Container.component';
import Row from 'components/Layout/Row/Row.component';
import Column from 'components/Layout/Column/Column.component';
import Page from 'components/Page/Page.component';
import PageContent from 'components/PageContent/PageContent.component';
import PageHeader from 'components/PageHeader/PageHeader.component';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle.component';
import AboutSection from 'components/AboutSection/AboutSection.component';
import AboutIcon from 'components/AboutIcon/AboutIcon.component';

import classes from './About.component.scss';
import { AboutProps } from './About.component.d';

const About: FunctionComponent<AboutProps> = ({
  aboutSections,
  aboutSectionsRequest,
  hasFetched,
}: AboutProps) => {
  useEffect(() => {
    if (!hasFetched && aboutSections.length === 0) {
      aboutSectionsRequest();
    }
  }, [hasFetched, aboutSections, aboutSectionsRequest]);

  return (
    <Page>
      <PageHeader title="Hello" scrollLabel="Scroll for about" isFullscreen>
        <PageHeaderSubtitle>
          I'm a Frontend developer from Kent, working in London.
        </PageHeaderSubtitle>

        <PageHeaderSubtitle>
          <hr className={classes['about__page-header__divider']} />
          <Link to="/portfolio">Check out my portfolio</Link>
        </PageHeaderSubtitle>
      </PageHeader>

      <PageContent>
        <section className={classes['about__page-content']}>
          <Container>
            <Row justify="center">
              <Column spanSM={10} spanLG={12} spanXL={10}>
                {aboutSections.map(
                  ({ content, icons = [], id, slug, title }: AboutSectionFormatted) => (
                    <AboutSection key={`about-section--${id}`} title={title}>
                      {/* If 1 icon, house content in columns */}
                      {icons.length === 1 ? (
                        <Row justify="center">
                          <Column spanMD={8}>
                            <Row alignMD="middle">
                              {!!icons.length && (
                                <Column span={12} spanMD={4} pushMD={8}>
                                  <figure
                                    className={classnames(
                                      classes['about__section-graphic'],
                                      classes[`about__section-graphic--${slug}`],
                                      classes['about__section-graphic--single'],
                                    )}
                                  >
                                    {icons.map((icon: AboutSectionIcon) => (
                                      <AboutIcon
                                        key={`${id}__icon--${icon.name}`}
                                        iconName={icon.name}
                                        large={icon.large}
                                      />
                                    ))}
                                  </figure>
                                </Column>
                              )}
                              <Column span={12} spanMD={8} pullMD={4}>
                                <ReactMarkdown source={content} />
                              </Column>
                            </Row>
                          </Column>
                        </Row>
                      ) : (
                        <>
                          {icons.length > 0 && (
                            <figure
                              className={classnames(
                                classes['about__section-graphic'],
                                classes[`about__section-graphic--${slug}`],
                              )}
                            >
                              {icons.map((icon: AboutSectionIcon) => (
                                <AboutIcon
                                  key={`${id}__icon--${icon.name}`}
                                  iconName={icon.name}
                                  large={icon.large}
                                />
                              ))}
                            </figure>
                          )}

                          <Row justify="center">
                            <Column spanMD={8}>
                              <ReactMarkdown source={content} />
                            </Column>
                          </Row>
                        </>
                      )}
                    </AboutSection>
                  ),
                )}
              </Column>
            </Row>
          </Container>
        </section>
      </PageContent>
    </Page>
  );
};

export default About;
