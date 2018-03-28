import React from 'react';
import ReactDOM from 'react-dom';
// import { hot } from 'react-hot-loader'

import {red} from '../style.css';
import IMAGE from 'constant'
const {
  CHORO
} = IMAGE;


class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={red}>
        <h1>Helaaalo</h1>
      </div>
    );
  }
}

export default Hello;