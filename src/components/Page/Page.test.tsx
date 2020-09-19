import { render } from '@testing-library/react';
import React from 'react';

import Page from './Page';
import fixture from './Page.fixture';

describe('Components', () => {
  describe('Page', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<Page {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
