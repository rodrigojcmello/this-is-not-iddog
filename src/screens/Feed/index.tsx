import React, { EffectCallback, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import update from 'immutability-helper';
import { config, useTransition } from 'react-spring';
import { getFeed } from '../../request/services/feed';
import {
  Content,
  InfinityScroll,
  InfinityScrollWrapper,
  Menu,
  MenuList,
  ModalContent,
  Thumb
} from './style';
import Modal from '../../components/Modal';
import { history } from '../../utils/history';
import { useModalValue } from '../../store/modal/context';

function Feed(props: RouteChildrenProps): JSX.Element {
  const [feedAll, setFeedAll] = useState([]);
  const [feedById, setFeedById] = useState([]);
  const [page, setPage] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [modal, setModal] = useModalValue();

  const params = new URLSearchParams(props.location.search);

  const [category, setCategory] = useState(params.get('category') || 'husky');

  useEffect((): void => {
    if (params.get('category') && params.get('category') !== category) {
      setCategory(params.get('category'));
    }
  }, [props]);

  useEffect((): void => {
    if (params.get('id')) {
      setModal({
        type: 'ADD_MODAL',
        modal: 'zoomIn'
      });
    }
  }, [props]);

  useEffect((): void => {
    (async (): Promise<void> => {
      const resFeed = await getFeed(category);
      if ('category' in resFeed) {
        const byId = [];
        const all = [];
        resFeed.list.forEach((image): void => {
          const id = image
            .split('/')
            .reverse()[0]
            .split('.')[0];
          byId[id] = image;
          all.push(id);
        });
        setFeedAll(
          update(feedAll, {
            [category]: { $set: all }
          })
        );
        setFeedById({ ...feedById, ...byId });
        setPageList(
          update(pageList, {
            [category]: { $set: all.slice(0, 30) }
          })
        );
        setPage(0);
      }
    })();
  }, [category]);

  const handleScroll = useCallback((): void => {
    const rest =
      document.body.scrollHeight - window.innerHeight - window.scrollY;
    if (rest < 500) {
      setPage(page + 1);
    }
  }, [page]);

  useEffect((): void => {
    if (feedAll && feedAll[category]) {
      setPageList(
        update(pageList, {
          [category]: { $set: feedAll[category].slice(0, 30 * (page + 1)) }
        })
      );
    }
  }, [page]);

  useEffect((): EffectCallback => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  const transition = useTransition(pageList && [pageList[category]], category, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      zIndex: 0
    },
    enter: {
      opacity: 1,
      zIndex: 1
    },
    leave: { opacity: 0, zIndex: 0 },
    unique: true,
    config: config.default
  });

  return (
    <Content>
      <Menu>
        <MenuList activeCategory={category === 'husky'}>
          <Link to={{ pathname: '/feed', search: '?category=husky' }}>
            husky
          </Link>
        </MenuList>
        <MenuList activeCategory={category === 'labrador'}>
          <Link to={{ pathname: '/feed', search: '?category=labrador' }}>
            labrador
          </Link>
        </MenuList>
        <MenuList activeCategory={category === 'hound'}>
          <Link to={{ pathname: '/feed', search: '?category=hound' }}>
            hound
          </Link>
        </MenuList>
        <MenuList activeCategory={category === 'pug'}>
          <Link to={{ pathname: '/feed', search: '?category=pug' }}>pug</Link>
        </MenuList>
      </Menu>
      <InfinityScrollWrapper>
        {transition.map(
          ({ item, key, props: p }): JSX.Element => {
            return (
              <InfinityScroll key={key} style={p}>
                {item &&
                  item.map(
                    (id): JSX.Element => {
                      return (
                        <Link
                          key={id}
                          to={{
                            pathname: '/feed',
                            search: `?category=${params.get('category') ||
                              'husky'}&id=${id}`
                          }}
                        >
                          <Thumb
                            style={{
                              backgroundImage: `url(${feedById[id]})`
                            }}
                          />
                        </Link>
                      );
                    }
                  )}
              </InfinityScroll>
            );
          }
        )}
      </InfinityScrollWrapper>

      {modal.indexOf('zoomIn') > -1 && (
        <Modal
          title={params.get('id')}
          id="zoomIn"
          afterClose={(): void => {
            history.push(`/feed?category=${params.get('category')}`);
          }}
          content={
            <ModalContent
              style={{
                backgroundImage: `url(${feedById[params.get('id')]})`
              }}
            />
          }
        />
      )}
    </Content>
  );
}

export default Feed;
