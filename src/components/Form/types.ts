import { ChangeEvent, FocusEvent, Ref } from 'react';

interface FormData {
  label: string;
  value: string;
}

export interface InputProps<Value, Element> {
  name: string;
  value: Value;
  onChange: (event: ChangeEvent<Element>) => void;
  onBlur: (event: FocusEvent<Element>) => void;
  ref?: Ref<Element>;
  validation?: {
    error: string;
    touched: boolean;
  };
}
