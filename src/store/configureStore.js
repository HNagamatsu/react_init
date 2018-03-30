import { createStore } from 'redux';
import increments from 'reducers/increments';

export default function configureStore() {
  const store = createStore(
    increments
  )
  return store;
}