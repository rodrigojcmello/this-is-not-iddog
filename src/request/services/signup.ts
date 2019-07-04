import ls from 'local-storage';
import api from '../index';
import { ParamSignup, ResSignup } from '../types';
import { history } from '../../utils/history';

export const signup = async (email: string): Promise<void> => {
  const res = await api<ResSignup, ParamSignup>('post', 'signup', { email });
  try {
    const { token } = res.user;
    ls('token', token);
    history.push('/feed');
  } catch (e) {
    // TODO: Tratar erros
  }
};
