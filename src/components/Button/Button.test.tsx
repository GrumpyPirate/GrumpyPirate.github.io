import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';
import fixture from './Button.fixture';

describe('Components', () => {
  describe('Button', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<Button {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
