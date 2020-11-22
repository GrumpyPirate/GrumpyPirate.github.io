import { render } from '@testing-library/react';
import React from 'react';

import Heading from './Heading';
import fixture from './Heading.fixture';
import { HeadingLevel } from './Heading.types';

describe('Components', () => {
  describe('Heading', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<Heading {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    describe('props: level', () => {
      it('should render an h5 element, by default', () => {
        const { container } = render(<Heading {...props} />);

        expect(container.querySelectorAll('h5')).toHaveLength(1);
      });

      it('should render appropriate heading elements, when given level props of 1-6', () => {
        ([1, 2, 3, 4, 5, 6] as HeadingLevel[]).forEach((level) => {
          const { container } = render(<Heading {...{ ...props, level }} />);

          expect(container.querySelectorAll(`h${level}`)).toHaveLength(1);
        });
      });
    });
  });
});
