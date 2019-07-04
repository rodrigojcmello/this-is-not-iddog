import React, { FocusEvent, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Checkbox, Container, Label, Legend, SwitchContainer } from './style';
import { Props } from './types';

function Switch({ label, name, onBlur, onChange, value }: Props): JSX.Element {
  const [focus, setFocus] = useState(false);

  return (
    <SwitchContainer>
      <Legend>{label}</Legend>
      <Container>
        <Checkbox
          id={name}
          type="checkbox"
          checked={value}
          onFocus={(): void => setFocus(true)}
          onBlur={(e: FocusEvent<HTMLInputElement>): void => {
            onBlur(e);
            setFocus(false);
          }}
          onChange={onChange}
        />
        <CSSTransition timeout={300} classNames="fake-checkbox" in={focus}>
          <Label htmlFor={name} checked={value} focus={focus} />
        </CSSTransition>
      </Container>
    </SwitchContainer>
  );
}

export default Switch;
