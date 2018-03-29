import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();

// components
import Hello from 'components/Hello';
import Hello2 from 'components/Hello2';


if (module.hot) {
  module.hot.accept();
}
ReactDOM.render(
  <Router history={history}>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/hello2" component={Hello2} />
      </Switch>
  </Router>,
  document.body
);