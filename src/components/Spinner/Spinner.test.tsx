import { render } from '@testing-library/react';
import React from 'react';

import { withMockStore } from 'utils/testing';

import Spinner from './Spinner';

describe('Components', () => {
  describe('Spinner', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(withMockStore(<Spinner />));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
