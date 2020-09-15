import { useQuery } from '@apollo/client';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Page from 'components/Page/Page';
import PageContent from 'components/PageContent/PageContent';
import PageHeader from 'components/PageHeader/PageHeader';
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle';
import PortfolioList from 'components/PortfolioList/PortfolioList';
import Spinner from 'components/Spinner/Spinner';
import { GET_PORTFOLIO_ITEM_LIST, GetPortfolioItemsResponse } from 'queries';
import { PropsWithClassName } from 'types/common';

const PortfolioPage: FunctionComponent<PropsWithClassName> = function ({ className }) {
  const { loading } = useQuery<GetPortfolioItemsResponse>(GET_PORTFOLIO_ITEM_LIST);

  return (
    <Page className={className}>
      <PageHeader title="Portfolio">
        <PageHeaderSubtitle>Projects I&apos;ve worked on</PageHeaderSubtitle>
      </PageHeader>

      <PageContent>
        {loading && <Spinner />}
        <PortfolioList />
      </PageContent>
    </Page>
  );
};

export default styled(PortfolioPage)`
  ${PageContent} {
    padding-top: 0;
  }
`;
