import { render } from '@testing-library/react';
import React from 'react';

import { Column } from 'components/Grid';

import Row from '../Row';

describe('Components/Grid/Row', () => {
  const props = {
    children: (
      <>
        <Column>Column 1</Column>
        <Column>Column 2</Column>
        <Column>Column 3</Column>
      </>
    ),
  };

  test('should render as expected, without crashing', () => {
    const { container } = render(<Row {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('xAlign', () => {
    test('should honour an xAlign of "center"', () => {
      const { container } = render(<Row {...props} xAlign="center" />);

      expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should honour an xAlign of "right"', () => {
      const { container } = render(<Row {...props} xAlign="right" />);

      expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-end');
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('yAlign', () => {
    test('should honour a yAlign of "top"', () => {
      const { container } = render(<Row {...props} yAlign="top" />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should honour a yAlign of "center"', () => {
      const { container } = render(<Row {...props} yAlign="center" />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'center');
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should honour a yAlign of "bottom"', () => {
      const { container } = render(<Row {...props} yAlign="bottom" />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'flex-end');
      expect(container.firstChild).toMatchSnapshot();
    });

    test('should honour a yAlign of "stretch"', () => {
      const { container } = render(<Row {...props} yAlign="stretch" />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'stretch');
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
