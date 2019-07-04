import { FormikProps } from '../types';

// Style

export interface Invalid {
  invalid: boolean;
}

export interface TextHelperProps extends Invalid {
  focussed: boolean;
}

// Components

export interface Props extends FormikProps<string, HTMLInputElement> {
  label: string;
  autoComplete?: 'off' | 'on';
}
