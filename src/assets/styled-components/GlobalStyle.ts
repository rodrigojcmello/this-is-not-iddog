import { createGlobalStyle } from './index';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }): string => theme.font.family.primary};
    overflow: hidden;
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;
