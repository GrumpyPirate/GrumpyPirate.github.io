import { render } from '@testing-library/react';
import React from 'react';

import ScreenreaderOnlyText from './ScreenreaderOnlyText';
import fixture from './ScreenreaderOnlyText.fixture';

describe('Components', () => {
  describe('ScreenreaderOnlyText', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<ScreenreaderOnlyText {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
