import React from 'react';
import './App.css';
import { NotePage } from '../features/notePage/NotePage';
import { Login } from '../features/login/Login';
import { useSelector } from 'react-redux';
import { RootState } from './rootReducer';

function App() {
  const { isLoggedIn } = useSelector((state: RootState) => {
    return state.userSessionSlice;
  });

  return <div className="App">{isLoggedIn ? <Login /> : <NotePage />}</div>;
}

export default App;
