import { PropsWithClassName } from 'types/common';

export type PortfolioListingProps = PropsWithClassName<{
  description: string;
  headerImageUrl: string;
  id: string;
  index: number;
  slug: string;
  title: string;
}>;
