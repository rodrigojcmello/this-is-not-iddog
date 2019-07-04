import React, { FocusEvent, memo, useContext, useState } from 'react';
import { config, useSpring, useTransition } from 'react-spring';
import { Props } from './types';
import { Input, Label, TextHelper, TextInputContainer } from './style';
import { convertHex } from '../../../utils';
import { ThemeContext } from '../../../assets/styled-components';

function TextInput({
  autoComplete,
  error,
  label,
  name,
  onBlur,
  onChange,
  touched,
  value
}: Props): JSX.Element {
  const { colors } = useContext(ThemeContext);
  const [focus, setFocus] = useState(false);

  const borderBottomColor =
    error && touched ? colors.warning.bg : colors.contrast[3].bg;

  const inputStyle = useSpring({
    config: config.stiff,
    borderTopColor: focus
      ? convertHex(colors.primary.bg, 40)
      : colors.contrast[1].bg,
    borderRightColor: focus
      ? convertHex(colors.primary.bg, 40)
      : colors.contrast[1].bg,
    borderBottomColor: focus
      ? convertHex(colors.primary.bg, 75)
      : borderBottomColor,
    borderLeftColor: focus
      ? convertHex(colors.primary.bg, 40)
      : colors.contrast[1].bg,
    boxShadow: focus
      ? `0 0 0 3px ${convertHex(colors.primary.bg, 20)}`
      : `0 0 0 0px ${convertHex(colors.primary.bg, 20)}`
  });

  const transition = useTransition(touched && error, null, {
    from: {
      transform: 'translate3d(0,-30px,0)',
      color: focus ? colors.primary.text : colors.warning.text
    },
    update: {
      color: focus ? colors.primary.text : colors.warning.text
    },
    enter: {
      transform: 'translate3d(0,0,0)'
    },
    leave: { transform: 'translate3d(0,-30px,0)' },
    unique: true,
    config: config.stiff
  });

  return (
    <TextInputContainer>
      <Label htmlFor={name}>
        {label}
        <Input
          type="text"
          name={name}
          id={name}
          style={inputStyle}
          autoComplete={autoComplete || 'off'}
          onFocus={(): void => setFocus(true)}
          onBlur={(e: FocusEvent<HTMLInputElement>): void => {
            setFocus(false);
            onBlur(e);
          }}
          onChange={onChange}
          value={value}
        />
      </Label>
      {transition.map(
        ({ item, props }): JSX.Element => (
          <TextHelper key={item} style={props}>
            {item}
          </TextHelper>
        )
      )}
    </TextInputContainer>
  );
}

export default memo(TextInput);
