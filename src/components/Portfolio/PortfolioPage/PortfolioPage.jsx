// React
import React, { PureComponent } from 'react'

// Vendor
import marked from 'marked'

// Styles
// import './PortfolioPage.scss'

// Components
import PortfolioPageHeader from 'components/Portfolio/PortfolioPageHeader/PortfolioPageHeader.jsx'
import PortfolioPageContent from 'components/Portfolio/PortfolioPageContent/PortfolioPageContent.jsx'
import PortfolioCarousel from 'components/Portfolio/PortfolioCarousel/PortfolioCarousel.jsx'
import Loader from 'components/Loader/Loader'

// Services
import ContentService from 'services/ContentService'

class PortfolioPage extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      contentService: new ContentService(),
      portfolioItemSlug: this.props.match.params.portfolioItemSlug,
      isLoading: false
    }
  }

  getDescription (markdownDescription) {
    const markedOptions = {
      sanitize: true
    }

    return marked(this.state.portfolioItem.description, markedOptions)
  }

  componentWillMount () {
    this.setState({
      isLoading: true
    })

    this.state.contentService
      .getSinglePortfolioItem(this.state.portfolioItemSlug)
      .then((item) => {
        this.setState({
          portfolioItem: item,
          isLoading: false
        })
      })
      .catch((e) => {
        console.error(e)
      })
  } // /componentWillMount

  render () {
    return (
      <div className="pf-page">
        {this.state.isLoading
          ? (
             <div className="container-fluid">
              <Loader />
             </div>
          )
          : (
            <div>
              <PortfolioPageHeader bgImage={this.state.portfolioItem.headerImgSrc} title={this.state.portfolioItem.title} tech={this.state.portfolioItem.tech}/>

              {/* Content */}
              <PortfolioPageContent>
                <div className="container-fluid">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-10">
                      {this.state.portfolioItem.supportingImageSrc
                        ? (
                          <div className="row align-items-lg-center">
                            <div className="col-12 col-md" dangerouslySetInnerHTML={{__html: this.getDescription(this.state.portfolioItem.description)}}></div>

                            <div className="col-12 col-md-6 col-xl-5">
                              {/* Supporting image 1 */}
                              <hr className="mt-1 hidden-md-up"/>
                              <figure className="mb-0">
                                <img src={this.state.portfolioItem.supportingImageSrc} alt="" className="w-100" />
                              </figure>
                            </div>
                          </div>
                        )
                        : (
                          <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae enim quisquam exercitationem doloremque porro veritatis repellat ea, mollitia maxime, ullam aliquam! Deleniti, blanditiis nostrum.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, deserunt. Iste reiciendis magnam temporibus quidem, quis hic libero molestiae. Cum facere, recusandae reiciendis corrupti ipsa placeat quas explicabo rem debitis quod magnam sequi. Minus pariatur totam, maxime deleniti a ullam cum rem praesentium, minima reiciendis, ad quaerat repudiandae.
                            </p>
                          </div>
                        )
                      }

                      <hr/>

                      {/* Device Carousel */}
                      <PortfolioCarousel desktop={this.state.portfolioItem.previews.desktop} tablet={this.state.portfolioItem.previews.tablet} mobile={this.state.portfolioItem.previews.mobile} />

                      <hr/>

                      <div className="text-center mt-2 mt-md-4">
                        <a href={this.state.portfolioItem.url} className="btn btn-secondary" target="_blank">Visit {this.state.portfolioItem.title}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </PortfolioPageContent>
            </div>
          )
        }
      </div>
    )
  } // /render()
} // /class PortfolioPage extends Component

export default PortfolioPage
