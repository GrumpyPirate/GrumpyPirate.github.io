import React, { FunctionComponent } from 'react';

import Button from 'components/Layout/Button/Button';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Heading from 'components/Typography/Heading/Heading';

import classes from './HTTPNotFoundPage.scss';

const HTTPNotFoundPage: FunctionComponent = () => (
  <Page>
    <PageHeader title="404">
      <PageHeaderSubtitle>Not Found</PageHeaderSubtitle>
    </PageHeader>

    <PageContent>
      <section className={classes['http-not-found-page']}>
        <div className={classes['http-not-found-page__heading']}>
          <Heading level={4} text="That page doesn&#039;t exist." />
        </div>
        <div className={classes['http-not-found-page__heading']}>
          <Heading
            level={5}
            text="&#xff08;&#x256f;&deg;&#x25a1;&deg;&#xff09;&#x256f;&#xfe35;( .o.)"
          />
        </div>

        <div>
          <Button to="/">Home</Button>
        </div>
      </section>
    </PageContent>
  </Page>
);

export default HTTPNotFoundPage;
