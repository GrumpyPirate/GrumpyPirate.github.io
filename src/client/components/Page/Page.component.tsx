import React, { FunctionComponent } from 'react';

import { ChildrenProps } from 'types';

import classes from './Page.component.scss';

/**
 * Renders a Page component.
 *
 * @param {PageProps} props
 *
 * @returns {ReactNode}
 */
const Page: FunctionComponent<ChildrenProps> = ({ children }: ChildrenProps) => (
  <div className={classes['page']}>{children}</div>
);

export default Page;
