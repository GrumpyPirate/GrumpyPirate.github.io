import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Layout/Container/Container.component';
import Row from 'components/Layout/Row/Row.component';
import Column from 'components/Layout/Column/Column.component';

import classes from './PageHeaderSubtitle.component.scss';

const PageHeaderSubtitle = ({ children }) => (
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

PageHeaderSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeaderSubtitle;
