import { ResFeed, SuccessResFeed } from '../request/services/feed/types';

const successFeed: SuccessResFeed = {
  category: 'labrador',
  list: ['string', 'string2']
};

export function getFeed(category: string): Promise<ResFeed> {
  return new Promise((resolve): void => {
    if (category) {
      resolve(successFeed);
    }
  });
}
