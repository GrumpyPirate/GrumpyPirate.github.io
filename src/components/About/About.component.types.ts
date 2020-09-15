import { AboutSectionFormatted } from 'types/common';

export interface AboutProps {
  aboutSections: AboutSectionFormatted[];
  aboutSectionsRequest: () => void;
  hasFetched: boolean;
}
