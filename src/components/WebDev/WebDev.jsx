// React
import React from 'react'

import PageContainer from '../PageContainer/PageContainer.jsx'
import TestPortfolioItem from '../TestPortfolioItem/TestPortfolioItem.jsx'

// Style
import './WebDev.scss'

// Component - PortfolioList
// ---------------------------------------------------------------------------------------------------------------------
const PortfolioList = (props) => {
    // NEEDTO: Trigger Modal Content for each PortfolioListItem
    return (
        <ul className="portfolio__list list-unstyled">
            <TestPortfolioItem {...props} />
            <TestPortfolioItem {...props} />
        </ul>
    ) // /return
} // /const PortfolioList

// Component - WebDev page
// ---------------------------------------------------------------------------------------------------------------------
class WebDev extends React.Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
            <PageContainer>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <header className="page-header last-child-mb-0">
                                <h1 className="page-header__title">Doloremque</h1>
                                <hr className="my-2"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aspernatur, ipsa rerum. Cum reprehenderit nostrum voluptates tempore, rem illum dolor ad, quisquam omnis laudantium.
                                </p>
                            </header>

                            <section className="portfolio">
                                <PortfolioList {...this.props} />
                            </section>
                        </div>
                    </div>
                </div>
            </PageContainer>
        )
    } // /render()
} // /class WebDev extends React.Component

export default WebDev
