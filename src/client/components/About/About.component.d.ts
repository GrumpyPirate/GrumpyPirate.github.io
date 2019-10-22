import { AboutSectionFormatted } from 'store/about/about.d';

interface AboutProps {
  aboutSections: AboutSectionFormatted[];
  aboutSectionsRequest: () => void;
  hasFetched: boolean;
}

export { AboutProps };
