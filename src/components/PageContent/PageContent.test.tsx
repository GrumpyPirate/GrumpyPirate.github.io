import { render } from '@testing-library/react';
import React from 'react';

import PageContent from './PageContent';
import fixture from './PageContent.fixture';

describe('Components', () => {
  describe('PageContent', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<PageContent {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
