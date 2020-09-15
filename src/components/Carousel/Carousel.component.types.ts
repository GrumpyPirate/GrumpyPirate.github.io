import { ChildrenProps } from 'types/common';

export interface CarouselProps extends ChildrenProps {
  showStatus: boolean;
  showThumbs: boolean;
  infiniteLoop: boolean;
  useKeyboardArrows: boolean;
  transitionTime: number;
  dynamicHeight: boolean;
  showArrows: false;
  emulateTouch: boolean;
  swipeScrollTolerance: number;
}
