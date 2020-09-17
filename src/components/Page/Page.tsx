import React, { FunctionComponent } from 'react';

import { ChildrenProps } from 'types/common';

import classes from './Page.scss';

/**
 * Renders a Page component.
 *
 * @param {PageProps} props
 *
 * @returns {ReactNode}
 */
const Page: FunctionComponent<ChildrenProps> = ({ children }) => (
  <div className={classes['page']}>{children}</div>
);

export default Page;
