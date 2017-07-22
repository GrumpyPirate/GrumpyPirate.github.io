// React
import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Components
import PageContainer from 'components/PageContainer/PageContainer'
import PageHeader from 'components/PageHeader/PageHeader'
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle'

// Define HTTPNotFound
const HTTPNotFound = () => (
  <div>
    <PageHeader title="404">
      <PageHeaderSubtitle>Not Found</PageHeaderSubtitle>
    </PageHeader>

    <PageContainer>
      <section className="404">
        <p>That page doesn't exist. （╯°□°）╯︵( .o.)</p>

        <p>
          <Link to="/" className="btn btn-primary">Home</Link>
        </p>
      </section>
    </PageContainer>
  </div>
) // /const HTTPNotFound

export default HTTPNotFound
