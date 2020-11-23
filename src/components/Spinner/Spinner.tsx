import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon/Icon';
import { pageBg, palette } from 'styles';
import { PropsWithClassName } from 'types/common';

import { Image, Text } from './Spinner.constants';

const Spinner: FunctionComponent<PropsWithClassName> = ({ className }) => (
  <div className={className}>
    <Image>
      <Icon glyph="loader" altText="Loading..." />
    </Image>

    <Text>Loading...</Text>
  </div>
);

export default styled(Spinner)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${pageBg};
  color: ${palette.themeDarkShades};
  user-select: none;
  z-index: 2;
`;
