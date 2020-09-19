import { ClassNameProps, PortfolioItemTech } from 'types/common';

export interface PortfolioPageHeaderProps extends ClassNameProps {
  bgImage: string;
  title: string;
  tech?: PortfolioItemTech[];
}
