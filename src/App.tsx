import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './assets/styled-components/GlobalStyle';
import Routes from './routes/Route';
import { ModalProvider } from './store/modal/context';
import modalReducer from './store/modal/reducer';
import { ThemeModeProvider } from './store/theme/context';
import themeReducer from './store/theme/reducer';
import { Theme } from './store/theme/types';
import Logo from './components/Logo';

const initialTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
  .matches
  ? 'dark'
  : 'light';

function App(): JSX.Element {
  return (
    <ThemeModeProvider initialState={initialTheme} reducer={themeReducer}>
      <ModalProvider initialState={[]} reducer={modalReducer}>
        <>
          <Router>
            <Routes />
          </Router>
          <GlobalStyle />
        </>
      </ModalProvider>
    </ThemeModeProvider>
  );
}

render(<App />, document.getElementById('app'));
