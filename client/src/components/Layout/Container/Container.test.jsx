import React from 'react';
import Container from './Container';

describe('<Container />', () => {
  const props = {
    children: <div>Test children</div>,
  };

  it('should exist', () => {
    expect(Container).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof Container).toBe('function');
  });

  it('should render as expected, without crashing', () => {
    expect(<Container {...props} />).toMatchSnapshot();
  });
});
