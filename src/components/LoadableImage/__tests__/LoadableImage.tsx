import { act, fireEvent, render } from '@testing-library/react';
import React, { ImgHTMLAttributes } from 'react';

import testImageSrc from 'images/portfolio/supporting-images/39mc.jpg';

import LoadableImage from '../LoadableImage';

describe('Components/LoadableImage', () => {
  const props: ImgHTMLAttributes<{}> = {
    src: testImageSrc,
  };

  test('should render as expected, without crashing', () => {
    const { container } = render(<LoadableImage {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should fade the image in, when the load event fires', () => {
    const testProps: ImgHTMLAttributes<{}> = {
      ...props,
      alt: 'Test img element',
    };
    const { container, getByAltText } = render(<LoadableImage {...testProps} />);

    expect(getByAltText('Test img element')).toHaveStyleRule('opacity', '0');
    expect(getByAltText('Test img element')).toHaveStyleRule('visibility', 'hidden');

    act(() => {
      fireEvent.load(getByAltText('Test img element'));
    });

    expect(getByAltText('Test img element')).toHaveStyleRule('opacity', '1');
    expect(getByAltText('Test img element')).toHaveStyleRule('visibility', 'visible');

    expect(container.firstChild).toMatchSnapshot();
  });

  test("should fade the image in, if the image is already cached in the user's browser", () => {
    const spy = jest
      .spyOn(HTMLImageElement.prototype, 'complete', 'get')
      .mockImplementation(() => true);

    const testProps: ImgHTMLAttributes<{}> = {
      ...props,
      src: testImageSrc,
      alt: 'Test img element',
    };
    const { container, getByAltText } = render(<LoadableImage {...testProps} />);

    expect(getByAltText('Test img element')).toHaveStyleRule('opacity', '1');
    expect(getByAltText('Test img element')).toHaveStyleRule('visibility', 'visible');

    expect(container.firstChild).toMatchSnapshot();

    spy.mockRestore();
  });
});
