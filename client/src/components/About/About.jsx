import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { uniqueId } from 'lodash-es';
import classnames from 'classnames';

import Container from 'components/Layout/Container/Container';
import Row from 'components/Layout/Row/Row';
import Column from 'components/Layout/Column/Column';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import AboutSection from 'components/AboutSection/AboutSection';
import AboutIcon from 'components/AboutIcon/AboutIcon';

import classes from './About.scss';

const sections = [
  {
    key: `about-section--${uniqueId()}`,
    title: 'Languages',
    slug: 'languages',
    icons: [
      { name: 'javascript', large: false },
      { name: 'html5', large: false },
      { name: 'babel', large: false },
      { name: 'sass', large: false },
    ],
    paragraphs: [
      (
        <Fragment>
          I care about creating accessible, quality web apps. More recently I&#039;ve
          {' '}
          been working in <strong>ES6</strong> JS, using a variety of build tools. I use
          {' '}
          <strong>Babel</strong> to transpile ES6 into ES5.
        </Fragment>
      ),
      (
        <Fragment>
          I love writing styles in
          {' '}
          <a href="http://sass-lang.com/" target="_blank" rel="noreferrer noopener">
            SASS
          </a>,
          {' '}
          but am also proficient in <strong>LESS</strong> and <strong>Stylus</strong>.
        </Fragment>
      ),
    ],
  },
  {
    key: `about-section--${uniqueId()}`,
    title: 'Design Software',
    slug: 'design',
    icons: [
      { name: 'photoshop', large: false },
      { name: 'illustrator', large: false },
      { name: 'sketch', large: false },
    ],
    paragraphs: [
      (
        <Fragment>
          I&#039;m comfortable using the industry standard software suites -
          {' '}
          <strong>Photoshop</strong>, <strong>Illustrator</strong> and
          {' '}
          <strong>Sketch</strong> - though given a choice, I prefer to use
          {' '}
          <strong>Illustrator</strong> when editing/exporting SVGs.
        </Fragment>
      ),
      (
        <Fragment>
          I&#039;ve used
          {' '}
          <a href="https://zeplin.io/" target="_blank" rel="noreferrer noopener">
            Zeplin
          </a>
          {' '}
          on a few projects.
        </Fragment>
      ),
    ],
  },
  {
    key: `about-section--${uniqueId()}`,
    title: 'Build Tools',
    slug: 'build-tools',
    icons: [
      { name: 'hash', large: false },
      { name: 'webpack', large: false },
      { name: 'gulp', large: false },
      { name: 'grunt', large: false },
    ],
    paragraphs: [
      (
        <Fragment>
          I&#039;ve worked with a variety of build tools and suites, having worked
          {' '}
          extensively with
          {' '}
          <a href="http://gulpjs.com/" target="_blank" rel="noreferrer noopener">
            Gulp
          </a>,
          {' '}
          and
          {' '}
          <a href="https://webpack.js.org/" target="_blank" rel="noreferrer noopener">
            Webpack
          </a>
          {' '}
          for React projects.
        </Fragment>
      ),
    ],
  },
  {
    key: `about-section--${uniqueId()}`,
    title: 'CSS Frameworks',
    slug: 'css-frameworks',
    icons: [
      { name: 'bootstrap', large: false },
      { name: 'foundation', large: false },
      { name: 'bulma', large: false },
    ],
    paragraphs: [
      (
        <Fragment>
          <strong>Bootstrap</strong> and <strong>Foundation</strong> are personal faves.
          {' '}
          I&#039;m a huge fan of <strong>Bootstrap 4</strong>, and I incorporate it into
          {' '}
          my SASS build when given the chance. Of course, I only <code>@import</code>
          {' '}
          what&#039;s necessary!
        </Fragment>
      ),
      (
        <Fragment>
          I&#039;m always open to trying out new CSS frameworks, and seeing what each
          {' '}
          does differently/better. I&#039;ve used
          {' '}
          <a href="http://bulma.io/" target="_blank" rel="noreferrer noopener">
            Bulma
          </a>
          {' '}
          on a couple of projects, but I don&#039;t think I&#039;d use it again.
        </Fragment>
      ),
      (
        <Fragment>
          Having said that, I&#039;m confident in scaffolding my own CSS framework
          {' '}
          depending on the application needs and limitations.
        </Fragment>
      ),
    ],
  },
  {
    key: `about-section--${uniqueId()}`,
    title: 'App Frameworks',
    slug: 'app-frameworks',
    icons: [
      { name: 'django', large: false },
      { name: 'react', large: false },
      { name: 'laravel', large: false },
      { name: 'angular', large: false },
    ],
    paragraphs: [
      (
        <Fragment>
          I&#039;ve have a good number of <strong>Django/Django CMS</strong> projects
          {' '}
          under my belt, and have created a few <strong>React</strong> apps of varying
          {' '}
          complexity and size.
        </Fragment>
      ),
      (
        <Fragment>
          In the past, I&#039;ve dabbled in <strong>Laravel (as well as Lumen)</strong>,
          {' '}
          and once made a few small <strong>Angular</strong> (v1) apps.
        </Fragment>
      ),
    ],
  },
  {
    key: `about-section--${uniqueId()}`,
    title: 'Currently learning',
    slug: 'currently-learning',
    icons: [
      { name: 'redux', large: true },
    ],
    paragraphs: [
      (
        <Fragment>
          I&#039;m currently learning how to develop React apps with a number of key
          {' '}
          third-party libraries - particularly
          {' '}
          <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          {' '}
          for application state management, and
          {' '}
          <a
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            styled components
          </a>
          {' '}
          for managing component styles.
        </Fragment>
      ),
    ],
  },
];

const About = () => (
  <Page>
    <PageHeader
      title="Hello"
      scrollLabel="Scroll for about"
      isFullscreen
    >
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
              {sections.map(section => (
                <AboutSection
                  key={section.key}
                  title={section.title}
                >
                  {/* If 1 icon, house content in columns */}
                  {!!section.icons.length && section.icons.length === 1
                    ? (
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
                                  <AboutIcon iconName="redux" large />
                                </figure>
                              </Column>
                            )}
                            <Column span={12} spanMD={8} pullMD={4}>
                              {section.paragraphs.map(paragraph => (
                                <p key={`${section.key}__paragraph--${uniqueId()}`}>{paragraph}</p>
                              ))}
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                    )
                    : (
                      <Fragment>
                        {!!section.icons.length && (
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

                        {!!section.paragraphs.length && (
                          <Row justify="center">
                            <Column spanMD={8}>
                              {section.paragraphs.map(paragraph => (
                                <p key={`${section.key}__paragraph--${uniqueId()}`}>{paragraph}</p>
                              ))}
                            </Column>
                          </Row>
                        )}
                      </Fragment>
                    )
                  }
                </AboutSection>
              ))}
            </Column>
          </Row>
        </Container>
      </section>
    </PageContent>
  </Page>
);

export default About;
