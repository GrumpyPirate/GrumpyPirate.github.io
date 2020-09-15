import { render } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

describe('Components', () => {
  describe('Footer', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(<Footer />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
