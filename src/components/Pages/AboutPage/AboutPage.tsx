import classnames from 'classnames';
import React, { FunctionComponent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AboutIcon from 'components/AboutIcon/AboutIcon';
import AboutSection from 'components/AboutSection/AboutSection';
import Column from 'components/Layout/Column/Column';
import Container from 'components/Layout/Container/Container';
import Row from 'components/Layout/Row/Row';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import { AppDispatch, RootState } from 'store';
import { aboutSectionsRequest } from 'store/about/about.actions';
import { AboutSectionFormatted, AboutSectionIcon } from 'types/common';

import classes from './AboutPage.scss';

const AboutPage: FunctionComponent = () => {
  const { aboutSections, hasFetched } = useSelector((state: RootState) => ({
    aboutSections: state.about.aboutSections,
    hasFetched: state.about.hasFetched,
  }));
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!hasFetched && aboutSections.length === 0) {
      dispatch(aboutSectionsRequest());
    }
  }, [aboutSections.length, dispatch, hasFetched]);

  return (
    <Page>
      <PageHeader title="Hello" scrollLabel="Scroll for about" isFullscreen>
        <PageHeaderSubtitle>
          I&apos;m a Frontend developer from Kent, working in London.
        </PageHeaderSubtitle>

        <PageHeaderSubtitle>
          <hr className={classes['about-page__page-header__divider']} />
          <Link to="/portfolio">Portfolio</Link>
        </PageHeaderSubtitle>
      </PageHeader>

      <PageContent>
        <section className={classes['about-page__page-content']}>
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
                                      classes['about-page__section-graphic'],
                                      classes[`about__section-graphic--${slug}`],
                                      classes['about-page__section-graphic--single'],
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
                                classes['about-page__section-graphic'],
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

export default AboutPage;
