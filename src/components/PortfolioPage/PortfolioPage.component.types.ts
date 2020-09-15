import { RouteComponentProps } from 'react-router';
import { PortfolioItemFormatted } from 'types/common';

export interface PortfolioPageProps extends RouteComponentProps {
  hasFetched: boolean;
  portfolioItem: PortfolioItemFormatted;
  requestPortfolioItems: () => void;
}
