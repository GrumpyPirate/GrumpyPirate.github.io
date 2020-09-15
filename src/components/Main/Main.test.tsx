import { render } from '@testing-library/react';
import React from 'react';

import withMockRouter from 'utils/testing';

import Main from './Main';

describe('Components', () => {
  describe('Main', () => {
    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(<Main />));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
