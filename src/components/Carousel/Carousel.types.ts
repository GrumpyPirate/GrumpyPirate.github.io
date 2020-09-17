import { ReactChild } from 'react';

export interface CarouselProps {
  showStatus: boolean;
  showThumbs: boolean;
  infiniteLoop: boolean;
  useKeyboardArrows: boolean;
  transitionTime: number;
  dynamicHeight: boolean;
  showArrows: false;
  emulateTouch: boolean;
  swipeScrollTolerance: number;
  children: ReactChild[];
}
