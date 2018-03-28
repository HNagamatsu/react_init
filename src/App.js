import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import 'react-hot-loader/patch';
// components
import Hello from 'components/Hello';


if (module.hot) {
  module.hot.accept();
  console.log("hot true");
  ReactDOM.render(
    <AppContainer>
      <Hello />
    </AppContainer>,
    document.getElementById('root')
  )
} else {
  ReactDOM.render(
    <AppContainer>
      <Hello />
    </AppContainer>
    , document.getElementById('root')
  )
}