import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './userSessionSlice';

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => logIn()}>Log In</button>
    </div>
  );

  function logIn() {
    dispatch(
      setCurrentUser({ email: 'test', id: 1, name: 'test', username: 'test' })
    );
  }
};
