import { ModalAction, ModalState } from './types';

export default function modalReducer(
  state: ModalState = [],
  action: ModalAction
): ModalState {
  switch (action.type) {
    case 'ADD_MODAL':
      return [...state, action.modal];

    case 'REMOVE_MODAL':
      const newState = [...state];
      const index = newState.indexOf(action.modal);
      if (index > -1) newState.splice(index, 1);
      return newState;

    default:
      return state;
  }
}
