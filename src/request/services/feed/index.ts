import api from '../../index';
import { ParamFeed, ResFeed } from './types';

export const getFeed = async (category: string): Promise<ResFeed> => {
  return api<ResFeed, ParamFeed>('get', 'feed', {
    category
  });
};
