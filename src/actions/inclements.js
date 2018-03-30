import {
  INCREMENTS
} from 'constant/action';

export default {
  increment: () => {
    return { type: INCREMENTS }
  }
}