import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteConfigComponentProps } from 'react-router-config';
import ls from 'local-storage';
import { animated, useTransition } from 'react-spring';
import { __RouterContext } from 'react-router';
import * as H from 'history';
import routes from './routes';
import styled from '../assets/styled-components';

const ScreenContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const ScreenAnimated = styled(animated.div)`
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

declare global {
  interface Window {
    firstAnimationScreen: boolean;
  }
}

(window as Window).firstAnimationScreen = false;

function Routes(): JSX.Element {
  const { location } = useContext(__RouterContext);

  useEffect((): void => {
    window.firstAnimationScreen = true;
  }, []);

  const transitions = useTransition(
    location,
    (l: H.Location): string => l.pathname,
    {
      from: {
        opacity: 0,
        transform: window.firstAnimationScreen
          ? 'translate3d(50%,0,0)'
          : 'translate3d(0%,0,0)',
        zIndex: 0
      },
      enter: {
        opacity: 1,
        transform: 'translate3d(0%,0,0)',
        zIndex: 1
      },
      leave: {
        opacity: 0,
        transform: window.firstAnimationScreen
          ? 'translate3d(-30%,0,0)'
          : 'translate3d(0%,0,0)',
        zIndex: 0
      }
    }
  );
  return (
    <Route
      render={(): JSX.Element => (
        <ScreenContainer>
          {transitions.map(
            ({ item, props, key }): JSX.Element => (
              <ScreenAnimated key={key} style={props}>
                <Switch location={item}>
                  <Route
                    path="/"
                    exact
                    render={(): JSX.Element => <Redirect to="/signup" />}
                  />
                  {routes.map(
                    ({
                      component: Component,
                      isPrivate,
                      id,
                      ...rest
                    }): JSX.Element => {
                      return (
                        <Route
                          key={id}
                          render={(
                            routeProps: RouteConfigComponentProps
                          ): JSX.Element =>
                            !isPrivate || (isPrivate && ls('token')) ? (
                              <Component {...routeProps} />
                            ) : (
                              <Redirect to="/signup" />
                            )
                          }
                          {...rest}
                        />
                      );
                    }
                  )}
                </Switch>
              </ScreenAnimated>
            )
          )}
        </ScreenContainer>
      )}
    />
  );
}

export default Routes;
