// React
import React, { Component } from 'react'

// Routing
import { NavLink } from 'react-router-dom'

// Components
import PageContainer from 'components/PageContainer/PageContainer'
import PageContent from 'components/PageContent/PageContent'
import PageHeader from 'components/PageHeader/PageHeader'
import AboutSection from 'components/AboutSection/AboutSection'
import AboutIcon from 'components/AboutIcon/AboutIcon'

// SCSS
import './About.scss'

class About extends Component {
  render () {
    return (
      <div>
        <PageHeader title="Hello" />

        <PageContainer>
          <PageContent>
            <p>
              I'm a Frontend developer from Essex, working in London. I like coffee, video games, and cheese.
            </p>

            <p className="mb-3">
              Now that's out of the way, <NavLink to="/webdev">check out my portfolio</NavLink>.
            </p>

            {/* <AboutSection title="Languages I work with" icon="code"> */}
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
                    I care about creating accessible, quality web apps. More recently I've been working in <strong>ES6</strong> JS, using a variety of build tools. I use <strong>Babel</strong> to transpile ES6 into ES5.
                  </p>

                  <p>
                    I love <a href="http://sass-lang.com/" target="_blank">SASS</a>, but have worked with <strong>LESS</strong> and <strong>Stylus</strong>.
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* <AboutSection title="Design software I use" icon="palette"> */}
            <AboutSection title="Design software">
              <figure className="about__section__graphic about__section__graphic--design">
                <AboutIcon iconName="photoshop" />
                <AboutIcon iconName="illustrator" />
                <AboutIcon iconName="sketch" />
              </figure>

              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <p>
                    I'm comfortable using the industry standard software suites - <strong>Photoshop</strong>, <strong>Illustrator</strong> and <strong>Sketch</strong> - though given a choice, I prefer to use <strong>Illustrator</strong> when editing/exporting SVGs.
                  </p>

                  <p>
                    I've used <a href="https://zeplin.io/" target="_blank">Zeplin</a> on a few projects.
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* <AboutSection title="Build tools I make apps with" icon="settingsApplications"> */}
            <AboutSection title="Build tools">
              <figure className="about__section__graphic about__section__graphic--design">
                <AboutIcon iconName="code" />
                <AboutIcon iconName="webpack" />
                <AboutIcon iconName="gulp" />
                <AboutIcon iconName="grunt" />
              </figure>

              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <p>
                    I've worked with a variety of build tools and suites, having worked extensively with <a href="http://gulpjs.com/" target="_blank">Gulp</a>, and <a href="https://webpack.js.org/" target="_blank">Webpack</a> for React projects.
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* <AboutSection title="CSS frameworks I like" icon="palette"> */}
            <AboutSection title="CSS frameworks">
              <figure className="about__section__graphic about__section__graphic--design">
                <AboutIcon iconName="bootstrap" />
                <AboutIcon iconName="foundation" />
                <AboutIcon iconName="bulma" />
              </figure>

              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <p>
                    <strong>Bootstrap</strong> and <strong>Foundation</strong> are personal faves. I'm a huge fan of <strong>Bootstrap 4</strong>, and I incorporate it into my SASS build when given the chance. Of course, I only <code>@import</code> what's necessary!
                  </p>

                  <p>
                    Having said that, I'm confident in scaffolding my own CSS framework depending on the application needs and limitations.
                  </p>

                  <p>
                    I'm looking to give <a href="http://bulma.io/" target="_blank">Bulma</a> a go in the future.
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* <AboutSection title="Application framework experience" icon="code"> */}
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
                    I've have a good number of <strong>Django/Django CMS</strong> projects under my belt, and have assisted development with <strong>React</strong> apps.
                  </p>

                  <p>
                    In the past, I've dabbled in <strong>Laravel (as well as Lumen)</strong>, and once made a few small <strong>Angular</strong> (v1) apps.
                  </p>
                </div>
              </div>
            </AboutSection>

            {/* <AboutSection title="Currently learning" icon="code"> */}
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
                        I'm currently learning how to develop web apps with <strong>React</strong>, and find it wonderfully refreshing. It's a hefty gear-shift, but one that makes a ton of sense.
                      </p>

                      <p>
                        I'm looking forward to creating some more complex React apps in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AboutSection>
          </PageContent>
        </PageContainer>
      </div>
    )
  } // /render ()
} // /class About extends Component

export default About
