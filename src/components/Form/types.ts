import { ChangeEvent, FocusEvent, Ref } from 'react';

interface FormData {
  label: string;
  value: string;
}

export type FormikProps<Value, Element> = {
  name: string;
  value: Value;
  onChange: (event: ChangeEvent<Element>) => void;
  onBlur: (event: FocusEvent<Element>) => void;
  ref?: Ref<Element>;
} & (
  | { type: 'radio' | 'select'; data: FormData[] }
  | { type: 'text' | 'email' | 'number' }) &
  ({ error: string; touched: boolean } | { error?: never; touched?: never });

const x: FormikProps<string, string> = {
  name: 'F',
  value: 'v',
  onChange: e => console.log(e),
  onBlur: e => console.log(e),
  type: 'select',
  data: [{ value: '1', label: 'rodrigo' }]
  // error: 'ok',
  // touched: true
};

console.log(x);
