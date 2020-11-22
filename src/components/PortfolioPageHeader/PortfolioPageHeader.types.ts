import { PortfolioItemTech, PropsWithClassName } from 'types/common';

export type PortfolioPageHeaderProps = PropsWithClassName<{
  bgImage: string;
  title: string;
  tech?: PortfolioItemTech[];
}>;
