import {
  INCREMENTS
} from 'constant/action';

// 初期ステート設定
const initialState = {
  count: 0
}

// actionに応じてステート変更
const increments = (state = initialState, action)=> {
  switch (action.type) {
    case INCREMENTS : {
      return { count: state.count + 1 }
    }
    default:
      return state
  }
}
 
export default increments;