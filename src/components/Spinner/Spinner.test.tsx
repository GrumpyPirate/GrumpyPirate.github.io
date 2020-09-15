import { render } from '@testing-library/react';
import React from 'react';

import Spinner from './Spinner';

describe('Components', () => {
  describe('Spinner', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(<Spinner />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
