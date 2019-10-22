import { ReactNode } from 'react';

interface ChildrenProps {
  children: ReactNode;
}

interface AboutSectionIcon {
  name: string;
  large?: boolean;
}

interface AboutSectionFormatted {
  id: string;
  title: string;
  icons?: AboutSectionIcon[];
  slug: string;
  content: string;
  order: number;
}

interface PortfolioItemTech {
  icon: string;
  name: string;
}

interface PortfolioItemFormatted {
  id: string;
  slug: string;
  title: string;
  descriptionShort: string;
  description: string;
  url: string;
  tech: PortfolioItemTech[];
  supportingImageSrc: string;
  headerImgSrc: string;
  previews: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  createdAt: string;
}

export {
  AboutSectionIcon,
  AboutSectionFormatted,
  ChildrenProps,
  PortfolioItemTech,
  PortfolioItemFormatted,
};
