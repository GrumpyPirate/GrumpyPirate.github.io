import { render } from '@testing-library/react';
import React from 'react';

import withMockRouter from 'utils/testing';

import HTTPNotFoundPage from './HTTPNotFoundPage';

describe('Components', () => {
  describe('HTTPNotFoundPage', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(<HTTPNotFoundPage />));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
