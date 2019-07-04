import * as styledComponents from 'styled-components';
import theme from './theme';

const {
  default: styled,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  typeof theme
>;

export default styled;

export { createGlobalStyle, keyframes, ThemeProvider, ThemeContext };
