import React, { EffectCallback, useCallback, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { RouteChildrenProps } from 'react-router';
import { getFeed } from '../../request/services/feed';
import { SuccessResFeed } from '../../request/services/feed/types';
import { Content, InfinityScroll, Thumb } from './style';
import { history } from '../../utils/history';

function Feed(props: RouteChildrenProps<{ category: string }>): JSX.Element {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(0);
  const [pageList, setPageList] = useState([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      const { category } = props.match.params;
      const list = await getFeed(category || 'husky');
      if ((list as SuccessResFeed).category) {
        const newList = (list as SuccessResFeed).list.map((image): {
          image: string;
          id: string;
        } => {
          return {
            id: uniqid(),
            image
          };
        });
        setFeed(newList);
        setPageList(newList.slice(0, 30));
      }
    })();
  }, [props]);

  const handleScroll = useCallback((): void => {
    const rest =
      document.body.scrollHeight - window.innerHeight - window.scrollY;
    if (rest < 500) {
      setPage(page + 1);
    }
  }, [page]);

  useEffect((): void => {
    setPageList(feed.slice(0, 30 * (page + 1)));
  }, [page]);

  useEffect((): EffectCallback => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (
    <Content>
      <ul>
        <li>
          <button
            type="button"
            onClick={(): void => {
              history.push('/feed/husky');
            }}
          >
            husky
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(): void => {
              history.push('/feed/labrador');
            }}
          >
            labrador
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(): void => {
              history.push('/feed/hound');
            }}
          >
            hound
          </button>
        </li>
        <li>
          <button type="button" onClick={(): void => history.push('/feed/pug')}>
            pug
          </button>
        </li>
      </ul>
      <InfinityScroll>
        {pageList.map(
          ({ id, image }): JSX.Element => {
            return (
              <Thumb
                key={id}
                style={{
                  backgroundImage: `url(${image})`
                }}
              />
            );
          }
        )}
      </InfinityScroll>
    </Content>
  );
}

export default Feed;
