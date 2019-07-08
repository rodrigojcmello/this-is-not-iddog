import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import TextInput from '..';

afterEach(cleanup);

test('Text input', (): void => {
  const handleChange = jest.fn();
  const { asFragment } = render(
    <TextInput
      label="email"
      name="email"
      value="name@email.com"
      onBlur={handleChange}
      onChange={handleChange}
      error="some error"
      touched={false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
