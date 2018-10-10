import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import marked from 'marked'
import isEmpty from 'lodash/isEmpty'

import PortfolioPageHeader from 'components/Portfolio/PortfolioPageHeader/PortfolioPageHeader'
import PortfolioPageContent from 'components/Portfolio/PortfolioPageContent/PortfolioPageContent'
import PortfolioCarousel from 'components/Portfolio/PortfolioCarousel/PortfolioCarousel'
import PortfolioDeviceLineup from 'components/Portfolio/PortfolioDeviceLineup/PortfolioDeviceLineup'

import './PortfolioPage.scss'

class PortfolioPage extends Component {
  fetchPortfolioItems () {
    const shouldFetchItems = Boolean(isEmpty(this.props.portfolioItem) && !this.props.hasFetched)

    if (shouldFetchItems) {
      return this.props.requestPortfolioItems()
    }
  }

  componentDidMount () {
    this.fetchPortfolioItems()
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.hasFetched && isEmpty(this.props.portfolioItem)) {
      return <Redirect to="/404" />
    }
  }

  render () {
    if (!this.props.portfolioItem) return null

    return (
      <div className="pf-page">
        <Fragment>
          <PortfolioPageHeader
            bgImage={this.props.portfolioItem.headerImgSrc}
            title={this.props.portfolioItem.title}
            tech={this.props.portfolioItem.tech}
          />

          <PortfolioPageContent>
            <div className="container-fluid">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-sm-10">
                  {this.props.portfolioItem.supportingImageSrc
                    ? (
                      <div className="row align-items-lg-center">
                        <div
                          className="col-12 col-md col-xl-6"
                          dangerouslySetInnerHTML={{ __html: marked(this.props.portfolioItem.description, { sanitize: true }) }}
                        />

                        <div className="col-12 col-md-6 col-xl-5 push-xl-1">
                          <hr className="mt-1 hidden-md-up"/>
                          <figure className="mb-0">
                            <img
                              src={this.props.portfolioItem.supportingImageSrc}
                              alt=""
                              className="pf-page__supporting-image w-100"
                            />
                          </figure>
                        </div>
                      </div>
                    )
                    : (
                      <div
                        dangerouslySetInnerHTML={{ __html: marked(this.props.portfolioItem.description, { sanitize: true }) }}
                      />
                    )
                  }

                  <hr/>

                  <div className="hidden-md-up">
                    <PortfolioCarousel
                      desktop={this.props.portfolioItem.previews.desktop}
                      tablet={this.props.portfolioItem.previews.tablet}
                      mobile={this.props.portfolioItem.previews.mobile}
                    />
                  </div>

                  <div className="hidden-sm-down">
                    <PortfolioDeviceLineup
                      desktop={this.props.portfolioItem.previews.desktop}
                      tablet={this.props.portfolioItem.previews.tablet}
                      mobile={this.props.portfolioItem.previews.mobile}
                    />
                  </div>

                  <hr/>

                  <div className="text-center mt-2 mt-md-4">
                    <a
                      href={this.props.portfolioItem.url}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Visit {this.props.portfolioItem.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </PortfolioPageContent>
        </Fragment>
      </div>
    )
  }
}

PortfolioPage.propTypes = {
  portfolioItem: PropTypes.shape({
    description: PropTypes.string.isRequired,
    headerImgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.shape({

    })).isRequired,
    supportingImageSrc: PropTypes.string,
    url: PropTypes.string.isRequired,
    previews: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired
    }).isRequired
  }),
  hasFetched: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  requestPortfolioItems: PropTypes.func.isRequired
}

PortfolioPage.defaultProps = {
  portfolioItem: null
}

export default withRouter(PortfolioPage)
