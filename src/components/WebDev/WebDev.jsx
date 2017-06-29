// React
import React from 'react'

import PageContainer from '../PageContainer/PageContainer.jsx'
import PageContent from '../PageContent/PageContent.jsx'
import PageHeader from '../PageHeader/PageHeader.jsx'
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle'

// Style
import './WebDev.scss'

// Component - WebDev page
class WebDev extends React.Component {
  render () {
    return (
      <div>
        {/* <PageHeader title="Web Dev" subtitle="Stuff I've worked on" /> */}
        <PageHeader title="Quis iure">
          <PageHeaderSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </PageHeaderSubtitle>
        </PageHeader>

        <PageContainer>
          <PageContent>
            <section className="portfolio">
              <div className="portfolio-list">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id, dignissimos excepturi veritatis saepe omnis, similique nesciunt, soluta ullam impedit dolore? Facere, quam dolore.
                </p>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis assumenda, ipsa! Cumque facere, soluta beatae delectus veritatis labore repellendus ad recusandae sint id sit ipsa dignissimos perspiciatis asperiores maiores quis sunt in quos repellat nam et! Quisquam architecto perspiciatis quaerat, quam corporis.
                </p>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sapiente alias reprehenderit fugit, veritatis sed expedita eos natus! A, ab natus. Delectus temporibus at iure tempora eaque perspiciatis quas deserunt a voluptas.
                </p>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt qui ipsam, eos atque sequi consectetur porro!
                </p>
              </div>
            </section>
          </PageContent>
        </PageContainer>
      </div>
    )
  } // /render ()
} // /class WebDev extends React.Component

export default WebDev
