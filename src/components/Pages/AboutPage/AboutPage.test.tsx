import { render } from '@testing-library/react';
import React from 'react';

import { initialRootState, RootState } from 'store';
import { withMockRouter, withMockStore } from 'utils/testing';

import AboutPage from './AboutPage';
import aboutSections from './AboutPage.fixture';

describe('Components', () => {
  describe('About', () => {
    const mockState: RootState = {
      ...initialRootState,
      about: {
        ...initialRootState.about,
        aboutSections,
      },
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(withMockStore(<AboutPage />, mockState)));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
