import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('Components', () => {
  describe('App', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(<App />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
