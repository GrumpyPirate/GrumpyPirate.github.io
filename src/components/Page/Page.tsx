import styled from 'styled-components';

import { pageBg } from 'styles';

/**
 * Renders a Page component.
 *
 * @param {PageProps} props
 *
 * @returns {ReactNode}
 */
const Page = styled.div`
  background-color: ${pageBg};
  min-height: 100vh;
  position: relative;
`;

export default Page;
