import { InputProps } from '../types';

// Components

export interface Props extends InputProps<string, HTMLInputElement> {
  label: string;
  type: 'text' | 'number' | 'email';
  autoComplete?: 'on' | 'off';
}
