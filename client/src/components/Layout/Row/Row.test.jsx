import React from 'react';
import Row from './Row';

describe('<Row />', () => {
  const props = {
    children: <div>Test children</div>,
  };

  it('should exist', () => {
    expect(Row).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof Row).toBe('function');
  });

  it('should render as expected, without crashing', () => {
    expect(<Row {...props} />).toMatchSnapshot();
  });
});
