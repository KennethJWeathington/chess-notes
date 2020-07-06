import React from 'react';
import './App.css';
import { NotePage } from '../features/notePage/NotePage';
import { Login } from '../features/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoggedInRoute } from '../components/LoggedInRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <LoggedInRoute path={['/', '/note']}>
            <NotePage />
          </LoggedInRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
