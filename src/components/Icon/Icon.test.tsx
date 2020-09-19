import { render } from '@testing-library/react';
import React from 'react';

import Icon from './Icon';
import fixture from './Icon.fixture';

describe('Components', () => {
  describe('Icon', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<Icon {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
