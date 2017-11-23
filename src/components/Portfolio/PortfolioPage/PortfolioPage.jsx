// React
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { EventEmitter } from 'fbemitter'

// Vendor
import marked from 'marked'

// Styles
import './PortfolioPage.scss'

// Components
import PortfolioPageHeader from 'components/Portfolio/PortfolioPageHeader/PortfolioPageHeader.jsx'
import PortfolioPageContent from 'components/Portfolio/PortfolioPageContent/PortfolioPageContent.jsx'
import PortfolioCarousel from 'components/Portfolio/PortfolioCarousel/PortfolioCarousel.jsx'
import PortfolioDeviceLineup from 'components/Portfolio/PortfolioDeviceLineup/PortfolioDeviceLineup.jsx'

// Services
import ContentService from 'services/ContentService'

class PortfolioPage extends PureComponent {
  constructor (props) {
    super(props)

    // Service instances
    this.contentService = new ContentService()

    this.state = {
      portfolioItem: null
    } // /state
  } // /constructor

  getDescription (markdownDescription) {
    const markedOptions = { sanitize: true }
    return marked(this.state.portfolioItem.description, markedOptions)
  } // /getDescription

  getPortfolioItem (slug) {
    return this.contentService.getSinglePortfolioItem(slug)
  } // /getPortfolioItem

  // Lifecycle
  componentWillMount () {
    this.props.emitter.emit('startLoading')

    this.getPortfolioItem(this.props.match.params.portfolioItemSlug)
      .then(item => {
        this.setState({
          portfolioItem: item
        })

        this.props.emitter.emit('stopLoading')
      })
      .catch((e) => {
        console.error(e)
        this.props.emitter.emit('stopLoading')
      })
  } // /componentWillMount

  render () {
    return (
      <div className="pf-page">
        {this.state.portfolioItem &&
          <div>
            <PortfolioPageHeader
              bgImage={this.state.portfolioItem.headerImgSrc}
              title={this.state.portfolioItem.title}
              tech={this.state.portfolioItem.tech}
            />

            {/* Content */}
            <PortfolioPageContent>
              <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-sm-10">
                    {this.state.portfolioItem.supportingImageSrc
                      ? (
                        <div className="row align-items-lg-center">
                          <div
                            className="col-12 col-md col-xl-6"
                            dangerouslySetInnerHTML={{
                              __html: this.getDescription(this.state.portfolioItem.description)
                            }}
                          />

                          <div className="col-12 col-md-6 col-xl-5 push-xl-1">
                            {/* Supporting image 1 */}
                            <hr className="mt-1 hidden-md-up"/>
                            <figure className="mb-0">
                              <img src={this.state.portfolioItem.supportingImageSrc} alt="" className="pf-page__supporting-image w-100" />
                            </figure>
                          </div>
                        </div>
                      )
                      : (
                        <div dangerouslySetInnerHTML={{
                          __html: this.getDescription(this.state.portfolioItem.description)}}
                        />
                      )
                    }

                    <hr/>

                    {/* Device Carousel, for mobile (sm-) only */}
                    <div className="hidden-md-up">
                      <PortfolioCarousel
                        desktop={this.state.portfolioItem.previews.desktop}
                        tablet={this.state.portfolioItem.previews.tablet}
                        mobile={this.state.portfolioItem.previews.mobile} />
                    </div>

                    {/* Device Lineup, for tablet up */}
                    <div className="hidden-sm-down">
                      <PortfolioDeviceLineup
                        desktop={this.state.portfolioItem.previews.desktop}
                        tablet={this.state.portfolioItem.previews.tablet}
                        mobile={this.state.portfolioItem.previews.mobile} />
                    </div>

                    <hr/>

                    <div className="text-center mt-2 mt-md-4">
                      <a href={this.state.portfolioItem.url} className="btn btn-secondary" target="_blank">Visit {this.state.portfolioItem.title}</a>
                    </div>
                  </div>
                </div>
              </div>
            </PortfolioPageContent>
          </div>
        }
      </div>
    )
  } // /render()
} // /class PortfolioPage extends Component

PortfolioPage.propTypes = {
  emitter: PropTypes.instanceOf(EventEmitter).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      portfolioItemSlug: PropTypes.string.isRequired
    })
  })
}

export default PortfolioPage
