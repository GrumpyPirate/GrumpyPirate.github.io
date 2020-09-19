import { render } from '@testing-library/react';
import React from 'react';

import PageHeader from './PageHeader';
import fixture from './PageHeader.fixture';

describe('Components', () => {
  describe('PageHeader', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<PageHeader {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
