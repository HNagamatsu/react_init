import { combineReducers } from 'redux';

import increments from 'reducers/increments';
import todoList from 'reducers/todoList';


const reducers = combineReducers({
  increments,
  todoList
});

export default reducers;