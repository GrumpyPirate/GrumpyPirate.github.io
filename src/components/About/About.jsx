// React
import React, { Component } from 'react'

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

class About extends Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render() {
    return (
      <PageContainer>
        <PageContent>
          <PageHeader title="About" />
          <h2 className="h5">
            Frontend developer from Essex, working in London.
          </h2>

          <h3 className="h5 mb-3">
            Check out my <NavLink to="/webdev">portfolio</NavLink>.
          </h3>

          <AboutSection title="Languages I work with" icon="code">
            <figure className="about__section__graphic about__section__graphic--languages">
              <div className="about__section__graphic__icon">
                <Icon glyph="html5" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="javascript" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="babel" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="sass" />
              </div>
            </figure>

            <p>
              I care about creating accessible, quality web apps. More recently I've been working in ES6 JS, using a variety of build tools. I use Babel to transpile ES6 into ES5.
            </p>

            <p>
              <a href="http://sass-lang.com/" target="_blank">SASS</a> is my CSS preprocessor of choice, though I've also worked with LESS and Stylus.
            </p>
          </AboutSection>

          <AboutSection title="Design software I use" icon="palette">
            <figure className="about__section__graphic about__section__graphic--design">
              <div className="about__section__graphic__icon">
                <Icon glyph="photoshop" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="illustrator" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="sketch" />
              </div>
            </figure>

            <p>
              I'm comfortable using the industry standard software suites - though given a choice, I prefer to use Illustrator when editing/exporting SVGs.
            </p>

            <p>
              <a href="https://zeplin.io/" target="_blank">Zeplin</a> is also something I've worked with.
            </p>
          </AboutSection>

          <AboutSection title="Build tools I build with" icon="settingsApplications">
            <figure className="about__section__graphic about__section__graphic--design">
              <div className="about__section__graphic__icon">
                <Icon glyph="code" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="webpack" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="gulp" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="grunt" />
              </div>
            </figure>

            <p>
              I've worked with a variety of build tools and suites, having worked extensively with <a href="http://gulpjs.com/" target="_blank">Gulp</a>, and <a href="https://webpack.js.org/" target="_blank">Webpack</a> for React projects.
            </p>
          </AboutSection>

          <AboutSection title="CSS frameworks I like" icon="palette">
            <figure className="about__section__graphic about__section__graphic--design">
              <div className="about__section__graphic__icon">
                <Icon glyph="bootstrap" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="foundation" />
              </div>
            </figure>

            <p>
              Bootstrap and Foundation are big personal faves. I'm a huge fan of Bootstrap 4, and I incorporate it into my SASS build when given the chance. Of course, I only <code>@import</code> what's necessary!
            </p>
          </AboutSection>

          <AboutSection title="Application framework experience" icon="code">
            <figure className="about__section__graphic about__section__graphic--design">
              <div className="about__section__graphic__icon">
                <Icon glyph="django" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="react" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="laravel" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="angular" />
              </div>
            </figure>

            <p>

            </p>
          </AboutSection>

          <AboutSection title="Nihil magni ipsa maxime recusandae" icon="code">
            <div className="row align-items-md-center">
              <div className="col-12 col-md-4 push-md-8">
                <figure className="about__section__graphic about__section__graphic--design">
                  <div className="about__section__graphic__icon about__section__graphic__icon--large">
                    <Icon glyph="react" />
                  </div>
                </figure>
              </div>
              <div className="col-12 col-md-8 pull-md-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur excepturi quam, reiciendis eos optio, ipsam aliquid ex eveniet sunt. Eaque libero blanditiis dolorum. Voluptas enim tenetur alias doloribus debitis! Amet quos, sapiente.
                </p>
              </div>
            </div>
          </AboutSection>
        </PageContent>
      </PageContainer>
    )
  } // /render()
} // /class About extends Component

export default About
