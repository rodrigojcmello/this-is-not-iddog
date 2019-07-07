import React, { EffectCallback, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import { getFeed } from '../../request/services/feed';
import {
  Content,
  InfinityScroll,
  Menu,
  MenuLink,
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
    if (params.get('category') !== category) {
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
        setFeedAll(all);
        setFeedById(byId);
        setPageList(all.slice(0, 30));
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
    setPageList(feedAll.slice(0, 30 * (page + 1)));
  }, [page]);

  useEffect((): EffectCallback => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  return (
    <Content>
      <Menu>
        <MenuList>
          <MenuLink
            active={category === 'husky'}
            to={{ pathname: '/feed', search: '?category=husky' }}
          >
            husky
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink
            active={category === 'labrador'}
            to={{ pathname: '/feed', search: '?category=labrador' }}
          >
            labrador
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink
            active={category === 'hound'}
            to={{ pathname: '/feed', search: '?category=hound' }}
          >
            hound
          </MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink
            active={category === 'pug'}
            to={{ pathname: '/feed', search: '?category=pug' }}
          >
            pug
          </MenuLink>
        </MenuList>
      </Menu>
      <InfinityScroll>
        {pageList.map(
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
