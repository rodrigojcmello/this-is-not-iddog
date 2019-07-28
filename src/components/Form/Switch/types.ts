import { InputProps } from '../types';

// Style

interface Checked {
  checked: boolean;
}

export interface LabelFocus extends Checked {
  focus: boolean;
}

// Component

export interface Props extends InputProps<boolean, HTMLInputElement> {
  label: string;
}
