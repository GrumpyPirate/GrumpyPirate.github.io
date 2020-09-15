import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Button from 'components/Button/Button';
import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import Heading from 'components/Typography/Heading/Heading';

const Title = styled(Heading)`
  margin-bottom: 2rem;
`;

const HTTPNotFoundPage: FunctionComponent = function () {
  return (
    <Page>
      <PageHeader title="404">
        <PageHeaderSubtitle>Not Found</PageHeaderSubtitle>
      </PageHeader>

      <PageContent>
        <section>
          <Title level={4} text="That page doesn&#039;t exist." />
          <Title
            level={5}
            text="&#xff08;&#x256f;&deg;&#x25a1;&deg;&#xff09;&#x256f;&#xfe35;( .o.)"
          />

          <div>
            <Button to="/">Home</Button>
          </div>
        </section>
      </PageContent>
    </Page>
  );
};

export default HTTPNotFoundPage;
