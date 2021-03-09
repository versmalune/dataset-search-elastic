import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <div className="app">
      <Container>
        <Switch>
          <Route path="/search">
            <MainPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Container>
      </div>
    </Router>
  );
}

export default App;
