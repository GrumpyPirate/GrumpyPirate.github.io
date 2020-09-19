import Color from 'color';
import styled from 'styled-components';

import { palette } from 'styles';

/**
 * Renders a Page component.
 *
 * @param {PageProps} props
 *
 * @returns {ReactNode}
 */
const Page = styled.div`
  background-color: ${Color(palette.white).darken(0.05).string()};
`;

export default Page;
