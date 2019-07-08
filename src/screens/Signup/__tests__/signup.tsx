import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Signup from '..';

import { createBrowserHistory } from 'history';

jest.mock('../__mocks__/signup');

const history = createBrowserHistory();

afterEach(cleanup);

it('calls onSubmit', (): void => {
  // const handleSubmit = jest.fn();
  const { asFragment } = render(<Signup history={history} />);
  // expect(asFragment()).toMatchSnapshot();
});
