import React, { Fragment } from 'react';

import { Link, withRouter } from 'react-router-dom';

import PageContainer from 'components/PageContainer/PageContainer';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';

const HTTPNotFound = () => (
  <Fragment>
    <PageHeader title="404">
      <PageHeaderSubtitle>Not Found</PageHeaderSubtitle>
    </PageHeader>

    <PageContainer>
      <section className="404">
        <h4 className="mb-2">That page doesn&#039;t exist.</h4>
        <h5 className="mb-2">&#xff08;&#x256f;&deg;&#x25a1;&deg;&#xff09;&#x256f;&#xfe35;( .o.)</h5>

        <p>
          <Link to="/" className="btn btn-primary">Home</Link>
        </p>
      </section>
    </PageContainer>
  </Fragment>
);

export default withRouter(HTTPNotFound);
