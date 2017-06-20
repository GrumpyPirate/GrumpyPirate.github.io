// React
import React, { Component } from 'react'
import ClassNames from 'classnames'

// Routing
import { NavLink } from 'react-router-dom'

// Components
import PageContainer from '../PageContainer/PageContainer'
import PageContent   from '../PageContent/PageContent'
import PageHeader    from '../PageHeader/PageHeader'
import AboutSection  from '../AboutSection/AboutSection'
import Icon          from '../Icons/Icons'

// SCSS
import './About.scss'

const AboutIcon = ({ iconName, largeIcon }) => {
  const iconClass = ClassNames({
    'about__section__graphic__icon--large': largeIcon ? true : false,
    'about__section__graphic__icon': true,
  })

  return (
    <div className={iconClass}>
      <Icon glyph={iconName} />
    </div>
  )
} // /const AboutIcon = (iconName)

class About extends Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render() {
    return (
      <PageContainer>
        <PageContent>
          <PageHeader title="Hello" />
          <p>
            I'm a Frontend developer from Essex, working in London. I like coffee, video games, and cheese.
          </p>

          <p className="mb-3">
            Now that's out of the way, <NavLink to="/webdev">check out my portfolio</NavLink>.
          </p>

          {/*<AboutSection title="Languages I work with" icon="code">*/}
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
                  I care about creating accessible, quality web apps. More recently I've been working in ES6 JS, using a variety of build tools. I use Babel to transpile ES6 into ES5.
                </p>

                <p>
                  I love <a href="http://sass-lang.com/" target="_blank">SASS</a>, but have worked with LESS and Stylus.
                </p>
              </div>
            </div>
          </AboutSection>

          {/*<AboutSection title="Design software I use" icon="palette">*/}
          <AboutSection title="Design software">
            <figure className="about__section__graphic about__section__graphic--design">
              <AboutIcon iconName="photoshop" />
              <AboutIcon iconName="illustrator" />
              <AboutIcon iconName="sketch" />
            </figure>

            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <p>
                  I'm comfortable using the industry standard software suites - though given a choice, I prefer to use Illustrator when editing/exporting SVGs.
                </p>

                <p>
                  I've used <a href="https://zeplin.io/" target="_blank">Zeplin</a> on a few projects.
                </p>
              </div>
            </div>
          </AboutSection>

          {/*<AboutSection title="Build tools I make apps with" icon="settingsApplications">*/}
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

          {/*<AboutSection title="CSS frameworks I like" icon="palette">*/}
          <AboutSection title="CSS frameworks">
            <figure className="about__section__graphic about__section__graphic--design">
              <AboutIcon iconName="bootstrap" />
              <AboutIcon iconName="foundation" />
              <AboutIcon iconName="bulma" />
            </figure>

            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <p>
                  Bootstrap and Foundation are personal faves. I'm a huge fan of Bootstrap 4, and I incorporate it into my SASS build when given the chance. Of course, I only <code>@import</code> what's necessary!
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

          {/*<AboutSection title="Application framework experience" icon="code">*/}
          <AboutSection title="Application frameworks">
            <figure className="about__section__graphic about__section__graphic--design">
              <AboutIcon iconName="django" />
              <AboutIcon iconName="react" />
              <AboutIcon iconName="laravel" />
              <AboutIcon iconName="angular" />
            </figure>

            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nemo modi odit ex ipsum distinctio, aspernatur voluptate ut, vero asperiores tempora quidem incidunt eligendi?
                </p>
              </div>
            </div>
          </AboutSection>

          {/*<AboutSection title="Currently learning" icon="code">*/}
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur excepturi quam, reiciendis eos optio, ipsam aliquid ex eveniet sunt. Eaque libero blanditiis dolorum. Voluptas enim tenetur alias doloribus debitis! Amet quos, sapiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AboutSection>
        </PageContent>
      </PageContainer>
    )
  } // /render()
} // /class About extends Component

export default About
