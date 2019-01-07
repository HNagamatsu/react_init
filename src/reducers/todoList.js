import {
  TODOLIST__ADD
} from 'actions/todoList';

// 初期ステート設定
const initialState = {
  count: 0,
  text: "test"
}

// actionに応じてステート変更
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case TODOLIST__ADD: {
      console.log(action)
      return Object.assign({}, state, {
        text: action.payload
      });
    }
    default:
      return state
  }
}

export default todoList;