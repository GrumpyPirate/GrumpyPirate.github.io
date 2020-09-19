import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { AppDispatch } from 'store';
import { closeMobileNavigation } from 'store/ui/ui.actions';
import { mediaQueries } from 'styles';
import { ClassNameProps } from 'types/common';

import { Item, navItems } from './Sitenav.constants';

const Sitenav: FunctionComponent<ClassNameProps> = ({ className }) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ul className={className} role="navigation">
      {navItems.map(({ key, label, to }) => (
        <Item key={`sitenav__nav-item__${key}`}>
          <NavLink
            to={to}
            exact={to === '/'}
            onClick={() => {
              dispatch(closeMobileNavigation());
            }}
          >
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
