// React
import React, { Component } from 'react'

// Routing
import { Link } from 'react-router-dom'

// Components
import PageContainer from '../PageContainer/PageContainer'
import PageContent   from '../PageContent/PageContent'
import PageHeader    from '../PageHeader/PageHeader'

// Define HTTPNotFound
class HTTPNotFound extends Component {
    constructor(props) {
        super(props)
    } // /constructor(props)

    render() {
        return (
			<PageContainer>
				<PageContent>
					<section className="404">
						<PageHeader title="404 - Not Found" subtitle="That page doesn't seem to exist." />

						<p>
							<Link to="/" className="btn btn-primary">Home</Link>
						</p>
					</section>
				</PageContent>
			</PageContainer>
    	)
    } // /render()
} // /class HTTPNotFound extends React.Component

export default HTTPNotFound;
