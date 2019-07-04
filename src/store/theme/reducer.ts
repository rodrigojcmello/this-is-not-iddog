import { Theme, ThemeAction } from './types';

export default function themeReducer(
  state: Theme = 'light',
  action: ThemeAction
): Theme {
  if (action.type === 'TOGGLE_THEME') {
    return state === 'light' ? 'dark' : 'light';
  }
  return state;
}
