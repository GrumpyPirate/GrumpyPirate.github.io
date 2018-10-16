import React from 'react';
import Column from './Column';

describe('<Column />', () => {
  const props = {
    children: <div>Test children</div>,
  };

  it('should exist', () => {
    expect(Column).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof Column).toBe('function');
  });

  it('should render as expected, without crashing', () => {
    const wrapper = (<Column {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
