import ls from 'local-storage';
import { History } from 'history';
import api from '../../index';
import { ParamSignup, ResSignup } from './types';

export const postSignup = async (
  email: string,
  history: History
): Promise<void> => {
  const res = await api<ResSignup, ParamSignup>('post', 'signup', { email });
  try {
    const { token } = res.user;
    ls('token', token);
    history.push('/feed');
  } catch (e) {
    // TODO: Tratar erros
  }
};
