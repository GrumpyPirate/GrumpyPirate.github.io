import { render } from '@testing-library/react';
import React from 'react';

import PageHeaderSubtitle from './PageHeaderSubtitle';
import fixture from './PageHeaderSubtitle.fixture';

describe('Components', () => {
  describe('PageHeaderSubtitle', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<PageHeaderSubtitle {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
