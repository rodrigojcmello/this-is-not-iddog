import { FormikProps } from '../types';

// Style

interface Checked {
  checked: boolean;
}

export interface LabelFocus extends Checked {
  focus: boolean;
}

// Component

export interface Props extends FormikProps<boolean, HTMLInputElement> {
  label: string;
}
