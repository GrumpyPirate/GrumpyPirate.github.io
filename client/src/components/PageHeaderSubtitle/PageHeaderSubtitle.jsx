import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Layout/Container/Container';
import Row from 'components/Layout/Row/Row';
import Column from 'components/Layout/Column/Column';

import classes from './PageHeaderSubtitle.scss';

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
