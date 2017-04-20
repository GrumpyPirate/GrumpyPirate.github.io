// React
import React, { Component } from 'react'

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
          <PageHeader title="Sapiente" />
          <h2 className="h5 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nisi dolorum, necessitatibus neque minima, non voluptatibus quo corrupti deserunt pariatur iusto nostrum reiciendis molestias.
          </h2>

          <AboutSection title="Iste quibusdam" icon="laptopMac">
            <figure className="about__section__graphic about__section__graphic--editor">
              <div className="about__section__graphic__icon about__section__graphic__icon--atom">
                <Icon glyph="atom" />
              </div>
              <div className="about__section__graphic__icon about__section__graphic__icon--sublime">
                <Icon glyph="sublime" />
              </div>
              <div className="about__section__graphic__icon about__section__graphic__icon--apple">
                <Icon glyph="apple" />
              </div>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quisquam repellendus libero, ab dolore labore. Amet consectetur, blanditiis consequatur debitis sint tempore sit animi!
            </p>
          </AboutSection>

          <AboutSection title="Nihil magni ipsa maxime recusandae" icon="code">
            <figure className="about__section__graphic about__section__graphic--languages">
              <div className="about__section__graphic__icon">
                <Icon glyph="html5" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="javascript" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="sass" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="less" />
              </div>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur excepturi quam, reiciendis eos optio, ipsam aliquid ex eveniet sunt. Eaque libero blanditiis dolorum. Voluptas enim tenetur alias doloribus debitis! Amet quos, sapiente.
            </p>
          </AboutSection>

          <AboutSection title="Nihil magni ipsa maxime recusandae" icon="palette">
            <figure className="about__section__graphic about__section__graphic--design">
              <div className="about__section__graphic__icon">
                <Icon glyph="photoshop" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="illustrator" />
              </div>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur excepturi quam, reiciendis eos optio, ipsam aliquid ex eveniet sunt. Eaque libero blanditiis dolorum. Voluptas enim tenetur alias doloribus debitis! Amet quos, sapiente.
            </p>
          </AboutSection>

          <AboutSection title="Nihil magni ipsa maxime recusandae" icon="settingsApplications">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur excepturi quam, reiciendis eos optio, ipsam aliquid ex eveniet sunt. Eaque libero blanditiis dolorum. Voluptas enim tenetur alias doloribus debitis! Amet quos, sapiente.
            </p>
          </AboutSection>

          <AboutSection title="Nihil magni ipsa maxime recusandae" icon="palette">
            <figure className="about__section__graphic about__section__graphic--design">
              <div className="about__section__graphic__icon">
                <Icon glyph="bootstrap" />
              </div>
              <div className="about__section__graphic__icon">
                <Icon glyph="foundation" />
              </div>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur excepturi quam, reiciendis eos optio, ipsam aliquid ex eveniet sunt. Eaque libero blanditiis dolorum. Voluptas enim tenetur alias doloribus debitis! Amet quos, sapiente.
            </p>
          </AboutSection>

          <AboutSection title="Nihil magni ipsa maxime recusandae" icon="code">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur excepturi quam, reiciendis eos optio, ipsam aliquid ex eveniet sunt. Eaque libero blanditiis dolorum. Voluptas enim tenetur alias doloribus debitis! Amet quos, sapiente.
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
