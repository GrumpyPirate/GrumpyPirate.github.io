import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import Icon from 'components/Icon/Icon';
import { RootState } from 'store';

import { Image, Text, Wrapper } from './Spinner.constants';

const Spinner: FunctionComponent = () => {
  const isLoading = useSelector((state: RootState) => state.portfolio.isFetching);

  return (
    <Wrapper isLoading={isLoading}>
      <Image>
        <Icon glyph="loader" altText="Loading..." />
      </Image>

      <Text>Loading...</Text>
    </Wrapper>
  );
};
export default Spinner;
