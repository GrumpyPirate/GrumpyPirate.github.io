import React, { FunctionComponent } from 'react';

import Icon from 'components/Icon/Icon';

import { Image, Text, Wrapper } from './Spinner.constants';

const Spinner: FunctionComponent = () => (
  <Wrapper>
    <Image>
      <Icon glyph="loader" altText="Loading..." />
    </Image>

    <Text>Loading...</Text>
  </Wrapper>
);

export default Spinner;
