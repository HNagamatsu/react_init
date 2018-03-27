import React from 'react';
import ReactDOM from 'react-dom';

import {red} from '../style.css';


const Hello = () => {
  let [a, b, ...c] = [1, 2, 3, 4, 5];
  return (
    <div className={red}>Hello + {a,b,c}</div>  
  )
}


export default Hello;