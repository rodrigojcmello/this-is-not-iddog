import { History } from 'history';

export function postSignup(email: string, history: History): Promise<void> {
  return new Promise((): void => {
    if (email) {
      history.push('/feed');
    }
  });
}
