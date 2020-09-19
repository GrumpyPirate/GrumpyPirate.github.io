import { render } from '@testing-library/react';
import React from 'react';

import { withMockRouter, withMockStore } from 'utils/testing';

import Main from './Main';

describe('Components', () => {
  describe('Main', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(withMockStore(<Main />)));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
