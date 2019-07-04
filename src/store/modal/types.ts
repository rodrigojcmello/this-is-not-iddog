import { Dispatch } from 'react';

export type ModalState = readonly string[];

export interface AddModalAction {
  type: 'ADD_MODAL';
  modal: string;
}

export interface RemoveModalAction {
  type: 'REMOVE_MODAL';
  modal: string;
}

export type ModalAction = AddModalAction | RemoveModalAction;

export type Reducer = (state: ModalState, action: ModalAction) => ModalState;

export interface Provider {
  initialState: ModalState;
  reducer: Reducer;
  children: JSX.Element;
}

export type UseModalReducer = [ModalState, Dispatch<ModalAction>];
