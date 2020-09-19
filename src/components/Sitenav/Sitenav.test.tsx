import { render } from '@testing-library/react';
import React from 'react';

import { withMockRouter, withMockStore } from 'utils/testing';

import Sitenav from './Sitenav';

describe('Components', () => {
  describe('Sitenav', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(withMockStore(<Sitenav />)));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
