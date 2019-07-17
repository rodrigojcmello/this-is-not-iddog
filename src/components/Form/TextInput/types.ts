import { FormikProps } from '../types';

// Components

export Type Props = {
  label: string;
  autoComplete?: 'off' | 'on';
} & FormikProps<string, HTMLInputElement>;
