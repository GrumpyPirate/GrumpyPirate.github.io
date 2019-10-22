import { ChildrenProps } from 'types';

interface CarouselProps extends ChildrenProps {
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

export { CarouselProps };
