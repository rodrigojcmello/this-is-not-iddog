export type Method = 'get' | 'post';

export interface ParamSignup {
  email: string;
}

export interface ResSignup {
  user: {
    createdAt: string;
    token: string;
    updatedAt: string;
  };
}
