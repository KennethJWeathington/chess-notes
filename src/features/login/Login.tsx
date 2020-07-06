import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './userSessionSlice';
import { useHistory, Link, useLocation } from 'react-router-dom';

interface LoginProps {}

interface LocationStateProps {
  from: string;
}

export const Login: React.FC<LoginProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<LocationStateProps>();

  const { from: redirectPath } = location.state || { from: '/' };

  return (
    <div>
      <button onClick={() => logIn()}>Log In</button>
    </div>
  );

  function logIn() {
    dispatch(
      setCurrentUser({ email: 'test', id: 1, name: 'test', username: 'test' })
    );
    history.push(redirectPath);
  }
};
