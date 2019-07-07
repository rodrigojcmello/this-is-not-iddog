import { FormikProps } from '../types';

// Components

export interface Props extends FormikProps<string, HTMLInputElement> {
  label: string;
  autoComplete?: 'off' | 'on';
}
