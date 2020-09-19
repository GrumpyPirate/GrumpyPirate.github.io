import { render } from '@testing-library/react';
import React from 'react';

import { withMockRouter, withMockStore } from 'utils/testing';

import Sidebar from './Sidebar';

describe('Components', () => {
  describe('Sidebar', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(withMockStore(<Sidebar />)));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
