import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';

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

const About = ({ aboutSections, hasFetched, aboutSectionsRequest }) => {
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
                {aboutSections.map(section => (
                  <AboutSection key={`about-section--${section.id}`} title={section.title}>
                    {/* If 1 icon, house content in columns */}
                    {section.icons.length === 1 ? (
                      <Row justify="center">
                        <Column spanMD={8}>
                          <Row alignMD="middle">
                            {!!section.icons.length && (
                              <Column span={12} spanMD={4} pushMD={8}>
                                <figure
                                  className={classnames(
                                    classes['about__section-graphic'],
                                    classes[`about__section-graphic--${section.slug}`],
                                    classes['about__section-graphic--single'],
                                  )}
                                >
                                  {section.icons.map(icon => (
                                    <AboutIcon
                                      key={`${section.key}__icon--${icon.name}`}
                                      iconName={icon.name}
                                      large={icon.large}
                                    />
                                  ))}
                                </figure>
                              </Column>
                            )}
                            <Column span={12} spanMD={8} pullMD={4}>
                              <ReactMarkdown source={section.content} />
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                    ) : (
                      <>
                        {section.icons.length > 0 && (
                          <figure
                            className={classnames(
                              classes['about__section-graphic'],
                              classes[`about__section-graphic--${section.slug}`],
                            )}
                          >
                            {section.icons.map(icon => (
                              <AboutIcon
                                key={`${section.key}__icon--${icon.name}`}
                                iconName={icon.name}
                                large={icon.large}
                              />
                            ))}
                          </figure>
                        )}

                        <Row justify="center">
                          <Column spanMD={8}>
                            <ReactMarkdown source={section.content} />
                          </Column>
                        </Row>
                      </>
                    )}
                  </AboutSection>
                ))}
              </Column>
            </Row>
          </Container>
        </section>
      </PageContent>
    </Page>
  );
};

About.propTypes = {
  aboutSections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icons: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          large: PropTypes.bool,
        }),
      ),
      slug: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
    }),
  ).isRequired,
  hasFetched: PropTypes.bool.isRequired,
  aboutSectionsRequest: PropTypes.func.isRequired,
};

export default About;
