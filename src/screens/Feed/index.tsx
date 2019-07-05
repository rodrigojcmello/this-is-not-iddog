import React, { memo, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { getFeed } from '../../request/services/feed';
import { SuccessResFeed } from '../../request/services/feed/types';
import { Content, Thumb } from './style';

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
    <Content>
      {feed.map(
        ({ id, image }): JSX.Element => {
          return (
            <Thumb key={id} style={{ backgroundImage: `url(${image})` }} />
          );
        }
      )}
    </Content>
  );
}

export default memo(Feed);
