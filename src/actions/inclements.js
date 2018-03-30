import {
  INCREMENTS
} from 'constant/action';

export const increments = (text) => ({
    type: INCREMENTS,
    payload: text
})