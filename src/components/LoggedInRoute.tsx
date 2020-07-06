import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { RouteProps } from 'react-router-dom';

interface LoggedInRouteProps extends RouteProps {}

export const LoggedInRoute: React.FC<LoggedInRouteProps> = ({
  children,
  ...rest
}) => {
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.userSessionSlice
  );
  const location = useLocation();

  return isLoggedIn ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};
