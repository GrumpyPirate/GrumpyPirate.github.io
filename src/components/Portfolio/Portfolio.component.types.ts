import { PortfolioItemFormatted } from 'types/common';

export interface PortfolioProps {
  requestPortfolioItems: () => void;
  portfolioItems: PortfolioItemFormatted[];
}
