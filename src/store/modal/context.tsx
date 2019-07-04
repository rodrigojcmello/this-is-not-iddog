import React, { createContext, useContext, useReducer } from 'react';
import { Provider, UseModalReducer } from './types';

export const ModalContext = createContext<UseModalReducer>(null);

export const ModalProvider = ({
  reducer,
  initialState,
  children
}: Provider): JSX.Element => (
  <ModalContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ModalContext.Provider>
);

export const useModalValue = (): UseModalReducer => useContext(ModalContext);
