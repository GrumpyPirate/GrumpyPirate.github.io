import React, { FunctionComponent } from 'react';

import Column from 'components/Layout/Column/Column';
import Container from 'components/Layout/Container/Container';
import Row from 'components/Layout/Row/Row';
import { ChildrenProps } from 'types/common';

import classes from './PageHeaderSubtitle.scss';

const PageHeaderSubtitle: FunctionComponent<ChildrenProps> = ({ children }) => (
  <h2 className={classes['page-header-subtitle']}>
    <Container>
      <Row justify="center">
        <Column spanSM={10} spanMD={8}>
          {children}
        </Column>
      </Row>
    </Container>
  </h2>
);

export default PageHeaderSubtitle;
