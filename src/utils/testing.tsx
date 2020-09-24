import React, { ReactElement, ReactNode } from 'react';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

const withMockRouter = (
  children: ReactNode,
  initialEntries?: MemoryRouterProps['initialEntries'],
): ReactElement => {
  return (
    <MemoryRouter initialEntries={initialEntries || [{ pathname: '/', key: 'a-static-key' }]}>
      {children}
    </MemoryRouter>
  );
};

export default withMockRouter;
