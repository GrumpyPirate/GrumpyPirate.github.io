// React
import React, { Component } from 'react'

// Routing
import { Link } from 'react-router-dom'

// Components
import PageContainer from '../PageContainer/PageContainer'
import PageHeader from '../PageHeader/PageHeader'

// Define HTTPNotFound
class HTTPNotFound extends Component {
  render () {
    return (
      <div>
        <PageHeader title="404 - Not Found" subtitle="That page doesn't seem to exist." />

        <PageContainer>
          <section className="404">
            <p>
              <Link to="/" className="btn btn-primary">Home</Link>
            </p>
          </section>
        </PageContainer>
      </div>
    )
  } // /render ()
} // /class HTTPNotFound extends React.Component

export default HTTPNotFound
