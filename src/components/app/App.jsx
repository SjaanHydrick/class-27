import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllCats from './AllCats';
import CatDetail from './CatDetail';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={(routerProps) => <AllCats {...routerProps} />}
          />

          <Route
            exact path="/:id"
            render={(routerProps) => <CatDetail {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
