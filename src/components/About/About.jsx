// React
import React, { Component } from 'react'

// Components
import PageContainer from '../PageContainer/PageContainer'
import PageContent   from '../PageContent/PageContent'
import PageHeader    from '../PageHeader/PageHeader'
// import AboutSection  from '../AboutSection/AboutSection'

class About extends React.Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render() {
    return (
      <PageContainer>
        <PageContent>
          <PageHeader title="Hello"/>
        </PageContent>
      </PageContainer>
    )
  } // /render()
} // /class About extends Component

export default About
