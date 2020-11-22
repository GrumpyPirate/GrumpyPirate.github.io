import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mediaQueries } from 'styles';
import { PropsWithClassName } from 'types/common';

import { Item, navItems } from './Sitenav.constants';

const Sitenav: FunctionComponent<PropsWithClassName> = ({ className }) => {
  return (
    <ul className={className} role="navigation">
      {navItems.map(({ key, label, to }) => (
        <Item key={`sitenav__nav-item__${key}`}>
          <NavLink to={to} exact={to === '/'}>
            {label}
          </NavLink>
        </Item>
      ))}
    </ul>
  );
};

export default styled(Sitenav)`
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${mediaQueries.mdOnly} {
    align-items: stretch;
    display: flex;
  }
`;
