import { ChangeEvent, FocusEvent, Ref } from 'react';

export interface FormikProps<Value, Element> {
  name: string;
  value: Value;
  onChange: (event: ChangeEvent<Element>) => void;
  onBlur: (event: FocusEvent<Element>) => void;
  error: string | undefined;
  touched: boolean | undefined;
  ref?: Ref<Element>;
}
