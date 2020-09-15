import { render } from '@testing-library/react';
import React from 'react';

import { Column, Row } from 'components/Grid';

import Container from '../Container';

describe('Components/Grid/Container', () => {
  const props = {
    children: (
      <>
        <Row>
          <Column>Column 1</Column>
          <Column>Column 2</Column>
          <Column>Column 3</Column>
        </Row>
      </>
    ),
  };

  test('should render as expected, without crashing', () => {
    const { container } = render(<Container {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
