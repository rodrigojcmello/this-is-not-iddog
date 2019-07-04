import React, { createContext, useContext, useReducer } from 'react';
import { Provider, UseThemeReducer } from './types';
import { ThemeProvider } from '../../assets/styled-components';
import theme from '../../assets/styled-components/theme';
import themeLight from '../../assets/styled-components/theme-light';
import themeDark from '../../assets/styled-components/theme-dark';

export const ThemeContext = createContext<UseThemeReducer>(null);

export const ThemeModeProvider = ({
  reducer,
  initialState,
  children
}: Provider): JSX.Element => {
  const [mode, dispatch] = useReducer(reducer, initialState);
  const newTheme = {
    ...theme,
    colors: mode === 'light' ? themeLight : themeDark
  };
  return (
    <ThemeContext.Provider value={[mode, dispatch]}>
      <ThemeProvider theme={newTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeValue = (): UseThemeReducer => useContext(ThemeContext);
