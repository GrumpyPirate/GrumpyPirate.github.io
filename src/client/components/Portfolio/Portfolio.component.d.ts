import { PortfolioItemData } from 'store/portfolio/portfolio.d';

interface PortfolioProps {
  requestPortfolioItems: () => void;
  portfolioItems: PortfolioItemData[];
}

export { PortfolioProps };
