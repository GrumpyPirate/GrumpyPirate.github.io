import React, { Fragment } from 'react';

import { Link, withRouter } from 'react-router-dom';

import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';

const HTTPNotFound = () => (
  <Page>
    <PageHeader title="404">
      <PageHeaderSubtitle>Not Found</PageHeaderSubtitle>
    </PageHeader>

    <PageContent>
      <section className="404">
        <h4 className="mb-2">That page doesn&#039;t exist.</h4>
        <h5 className="mb-2">&#xff08;&#x256f;&deg;&#x25a1;&deg;&#xff09;&#x256f;&#xfe35;( .o.)</h5>

        <p>
          <Link to="/" className="btn btn-primary">Home</Link>
        </p>
      </section>
    </PageContent>
  </Page>
);

export default withRouter(HTTPNotFound);
