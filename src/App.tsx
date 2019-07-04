import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import GlobalStyle from './assets/styled-components/GlobalStyle';
import Routes from './routes/Route';
import { history } from './utils/history';
import { ModalProvider } from './store/modal/context';
import modalReducer from './store/modal/reducer';
import { ThemeModeProvider } from './store/theme/context';
import themeReducer from './store/theme/reducer';
import { Theme } from './store/theme/types';

const initialTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
  .matches
  ? 'dark'
  : 'light';

function App(): JSX.Element {
  return (
    <ModalProvider initialState={[]} reducer={modalReducer}>
      <ThemeModeProvider initialState={initialTheme} reducer={themeReducer}>
        <>
          <Router history={history}>
            <Routes />
          </Router>
          <GlobalStyle />
        </>
      </ThemeModeProvider>
    </ModalProvider>
  );
}

render(<App />, document.getElementById('app'));
