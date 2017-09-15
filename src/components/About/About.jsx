// React
import React from 'react'

// Routing
import { NavLink } from 'react-router-dom'

// Components
import PageContainer from 'components/PageContainer/PageContainer'
import PageHeader from 'components/PageHeader/PageHeader'
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle'
import AboutSection from 'components/AboutSection/AboutSection'
import AboutIcon from 'components/AboutIcon/AboutIcon'

// SCSS
import './About.scss'

const About = () => (
  <div>
    <PageHeader title="Hello">
      <PageHeaderSubtitle>
        I&#039;m a Frontend developer from Maidstone, working in London. I like coffee and video games.
      </PageHeaderSubtitle>

      <PageHeaderSubtitle>
        <hr className="mt-0 mb-1 mb-md-2"/>
        Now that&#039;s out of the way, <NavLink to="/webdev">check out my portfolio</NavLink>.
      </PageHeaderSubtitle>
    </PageHeader>

    <PageContainer>
      <section className="about">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-12 col-xl-10">
              <AboutSection title="Languages">
                <figure className="about__section__graphic about__section__graphic--languages">
                  <AboutIcon iconName="html5" />
                  <AboutIcon iconName="javascript" />
                  <AboutIcon iconName="babel" />
                  <AboutIcon iconName="sass" />
                </figure>

                <div className="row justify-content-center">
                  <div className="col-12 col-md-8">
                    <p>
                      I care about creating accessible, quality web apps. More recently I&#039;ve been working in <strong>ES6</strong> JS, using a variety of build tools. I use <strong>Babel</strong> to transpile ES6 into ES5.
                    </p>

                    <p>
                      I love <a href="http://sass-lang.com/" target="_blank" rel="noreferrer noopener">SASS</a>, but have worked with <strong>LESS</strong> and <strong>Stylus</strong>.
                    </p>
                  </div>
                </div>
              </AboutSection>

              <AboutSection title="Design software">
                <figure className="about__section__graphic about__section__graphic--design">
                  <AboutIcon iconName="photoshop" />
                  <AboutIcon iconName="illustrator" />
                  <AboutIcon iconName="sketch" />
                </figure>

                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    <p>
                      I&#039;m comfortable using the industry standard software suites - <strong>Photoshop</strong>, <strong>Illustrator</strong> and <strong>Sketch</strong> - though given a choice, I prefer to use <strong>Illustrator</strong> when editing/exporting SVGs.
                    </p>

                    <p>
                      I&#039;ve used <a href="https://zeplin.io/" target="_blank" rel="noreferrer noopener">Zeplin</a> on a few projects.
                    </p>
                  </div>
                </div>
              </AboutSection>

              <AboutSection title="Build tools">
                <figure className="about__section__graphic about__section__graphic--design">
                  <AboutIcon iconName="hash" altText="Code" />
                  <AboutIcon iconName="webpack" altText="Webpack" />
                  <AboutIcon iconName="gulp" altText="Gulp" />
                  <AboutIcon iconName="grunt" altText="Grunt" />
                </figure>

                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    <p>
                      I&#039;ve worked with a variety of build tools and suites, having worked extensively with <a href="http://gulpjs.com/" target="_blank" rel="noreferrer noopener">Gulp</a>, and <a href="https://webpack.js.org/" target="_blank" rel="noreferrer noopener">Webpack</a> for React projects.
                    </p>
                  </div>
                </div>
              </AboutSection>

              <AboutSection title="CSS frameworks">
                <figure className="about__section__graphic about__section__graphic--design">
                  <AboutIcon iconName="bootstrap" />
                  <AboutIcon iconName="foundation" />
                  <AboutIcon iconName="bulma" />
                </figure>

                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    <p>
                      <strong>Bootstrap</strong> and <strong>Foundation</strong> are personal faves. I&#039;m a huge fan of <strong>Bootstrap 4</strong>, and I incorporate it into my SASS build when given the chance. Of course, I only <code>@import</code> what&#039;s necessary!
                    </p>

                    <p>
                      Having said that, I&#039;m confident in scaffolding my own CSS framework depending on the application needs and limitations.
                    </p>

                    <p>
                      I&#039;m looking to give <a href="http://bulma.io/" target="_blank" rel="noreferrer noopener">Bulma</a> a go in the future.
                    </p>
                  </div>
                </div>
              </AboutSection>

              <AboutSection title="App frameworks">
                <figure className="about__section__graphic about__section__graphic--design">
                  <AboutIcon iconName="django" />
                  <AboutIcon iconName="react" />
                  <AboutIcon iconName="laravel" />
                  <AboutIcon iconName="angular" />
                </figure>

                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-6">
                    <p>
                      I&#039;ve have a good number of <strong>Django/Django CMS</strong> projects under my belt, and have assisted development with <strong>React</strong> apps.
                    </p>

                    <p>
                      In the past, I&#039;ve dabbled in <strong>Laravel (as well as Lumen)</strong>, and once made a few small <strong>Angular</strong> (v1) apps.
                    </p>
                  </div>
                </div>
              </AboutSection>

              <AboutSection title="Currently learning">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8">
                    <div className="row align-items-md-center">
                      <div className="col-12 col-md-4 push-md-8">
                        <figure className="about__section__graphic about__section__graphic--design">
                          <AboutIcon iconName="react" largeIcon={true} />
                        </figure>
                      </div>
                      <div className="col-12 col-md-8 pull-md-4">
                        <p>
                          I&#039;m currently learning how to develop web apps with <strong>React</strong>, and find it wonderfully refreshing. It&#039;s a hefty gear-shift, but one that makes a ton of sense.
                        </p>

                        <p>
                          I&#039;m looking forward to creating some more complex React apps in the future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AboutSection>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  </div>
) // /const About

export default About
