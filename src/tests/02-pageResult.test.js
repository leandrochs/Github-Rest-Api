import React from 'react';
import { screen } from '@testing-library/react';

import { Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import SearchPage from '../pages/searchPage/SearchPage';
import PageResult from '../pages/pageResult/PageResult';
import Provider from '../context/Provider';

describe('2. Teste do componente <PageResult /> .', () => {
  it('A rota "/pageresult" leva para a página de resultados', async () => {
    const history = createMemoryHistory();
    history.push('/pageresult');
    render(
      <Router history={history}>
        <Switch>
          <Provider>
            <Route exact path='/' component={SearchPage} />
            <Route exact path='/pageresult' component={PageResult} />
          </Provider>
        </Switch>
      </Router>,
    );

    const followers = screen.getByText(/followers/i);
    const following = screen.getByText(/following/i);

    expect(followers).toBeDefined();
    expect(following).toBeDefined();
  });
});
