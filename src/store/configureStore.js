import { createStore } from 'redux';
import reducers from 'reducers/index';

export default function configureStore() {
  const store = createStore(
    reducers
  )
  return store;
}