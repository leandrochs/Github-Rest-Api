import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import SearchPage from './pages/searchPage/SearchPage';
import PageResult from './pages/pageResult/PageResult';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path='/' component={SearchPage} />
        <Route exact path='/pageresult' component={PageResult} />
      </Provider>
    </Switch>
  );
}

export default App;
