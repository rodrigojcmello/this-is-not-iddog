import React, { memo, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { getFeed } from '../../request/services/feed';
import { SuccessResFeed } from '../../request/services/feed/types';

function Feed(): JSX.Element {
  const [feed, setFeed] = useState([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      const list = await getFeed('pug');
      if ((list as SuccessResFeed).category) {
        const newList = (list as SuccessResFeed).list.map((image: string): {
          image: string;
          id: string;
        } => {
          return {
            id: uniqid(),
            image
          };
        });
        setFeed(newList);
      }
    })();
  });

  return (
    <div>
      {feed.map(
        ({ id, image }): JSX.Element => {
          return (
            <div key={id}>
              <img src={image} />
            </div>
          );
        }
      )}
    </div>
  );
}

export default memo(Feed);
