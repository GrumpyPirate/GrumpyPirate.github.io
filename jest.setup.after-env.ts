import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import 'cross-fetch/polyfill';

// Make `resizeTo` event available to all tests.
// Credit and thanks go to: https://gist.github.com/javierarques/d95948ac7e9ddc8097612866ecc63a4b
const resizeEvent = document.createEvent('Event');
resizeEvent.initEvent('resize', true, true);
const scrollEvent = document.createEvent('Event');
scrollEvent.initEvent('scroll', true, true);

window.resizeTo = (width?: number, height?: number): void => {
  Object.defineProperties(window, {
    innerWidth: {
      value: width || window.innerWidth,
      writable: true,
    },
    innerHeight: {
      value: height || window.innerHeight,
      writable: true,
    },
  });

  window.dispatchEvent(resizeEvent);
};

Object.defineProperty(window, 'scrollTo', {
  value: (options?: ScrollToOptions): void => {
    Object.defineProperties(window, {
      scrollY: {
        value: options ? options.top : window.scrollY,
        writable: true,
      },
      scrollX: {
        value: options ? options.left : window.scrollX,
        writable: true,
      },
    });

    window.dispatchEvent(scrollEvent);
  },
  writable: true,
});
