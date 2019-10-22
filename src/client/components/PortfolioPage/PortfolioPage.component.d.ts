import { RouteComponentProps } from 'react-router';
import { PortfolioItemFormatted } from 'types';

interface PortfolioPageProps extends RouteComponentProps {
  hasFetched: boolean;
  portfolioItem: PortfolioItemFormatted;
  requestPortfolioItems: () => void;
}

export { PortfolioPageProps };
