// React
import React from 'react'

import PageContainer     from '../PageContainer/PageContainer.jsx'
import PageContent       from '../PageContent/PageContent.jsx'
import PageHeader        from '../PageHeader/PageHeader.jsx'
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
                <PageContent>
                    <section className="portfolio">
                        <PageHeader title="Libero Aspernatur" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aspernatur, ipsa rerum. Cum reprehenderit nostrum voluptates tempore, rem illum dolor ad, quisquam omnis laudantium." />

                        <PortfolioList {...this.props} />
                    </section>
                </PageContent>
            </PageContainer>
        )
    } // /render()
} // /class WebDev extends React.Component

export default WebDev
