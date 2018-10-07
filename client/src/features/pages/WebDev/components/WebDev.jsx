import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import PageHeader from '../../../../components/PageHeader/PageHeader'
import PageHeaderSubtitle from '../../../../components/PageHeaderSubtitle/PageHeaderSubtitle'
import PortfolioList from '../../../../components/Portfolio/PortfolioList/PortfolioList'

import './WebDev.scss'

class WebDev extends PureComponent {
  componentDidMount () {
    this.props.requestPortfolioItems()
  }

  render () {
    return (
      <Fragment>
        <PageHeader title="Portfolio">
          <PageHeaderSubtitle>
            {`Stuff I've worked on`}
          </PageHeaderSubtitle>
        </PageHeader>

        <section className="portfolio">
          {!!this.props.portfolioItems.length &&
            <PortfolioList items={this.props.portfolioItems}/>
          }
        </section>
      </Fragment>
    )
  }
}

WebDev.propTypes = {
  requestPortfolioItems: PropTypes.func.isRequired,
  portfolioItems: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WebDev
