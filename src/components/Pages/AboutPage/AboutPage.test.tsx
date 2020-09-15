import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import React from 'react';

import { GET_ABOUT_SECTIONS } from 'queries';
import withMockRouter from 'utils/testing';

import AboutPage from './AboutPage';
import mockGetAboutSectionsResponse from './AboutPage.fixture';

describe('Components', () => {
  describe('About', () => {
    it('should render as expected, without crashing', async () => {
      const { container, getByText } = render(
        withMockRouter(
          <MockedProvider
            mocks={[
              {
                request: { query: GET_ABOUT_SECTIONS },
                result: { data: mockGetAboutSectionsResponse },
              },
            ]}
            addTypename={false}
          >
            <AboutPage />
          </MockedProvider>,
        ),
      );

      await waitFor(() =>
        expect(
          getByText(mockGetAboutSectionsResponse.aboutPageSectionCollection.items[0].title),
        ).toBeTruthy(),
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
