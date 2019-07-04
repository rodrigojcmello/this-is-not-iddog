import React from 'react';
import {
  Redirect,
  Route,
  RouteProps,
  Switch,
  withRouter
} from 'react-router-dom';
import { RouteConfigComponentProps } from 'react-router-config';
import fs from 'local-storage';
import routes from './routes';
import styled from '../assets/styled-components';

const TelaContainer = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`;

function Routes(props: RouteProps): JSX.Element {
  const { location } = props;
  return (
    <Route
      render={(): JSX.Element => (
        <TelaContainer>
          <Switch location={location}>
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
                      !isPrivate || (isPrivate && fs('token')) ? (
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
        </TelaContainer>
      )}
    />
  );
}

export default withRouter(Routes);
