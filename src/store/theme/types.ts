import { Dispatch } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeToggleAction {
  type: 'TOGGLE_THEME';
}

export type ThemeAction = ThemeToggleAction;

export type Reducer = (state: Theme, action: ThemeAction) => Theme;

export interface Provider {
  initialState: Theme;
  reducer: Reducer;
  children: JSX.Element;
}

export type UseThemeReducer = [Theme, Dispatch<ThemeAction>];
