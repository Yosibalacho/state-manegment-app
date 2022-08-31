import { UP_ACTION } from "../actions/counter-actions";
import { DOWN_ACTION } from "../actions/counter-actions";
import { RESET_ACTION } from "../actions/counter-actions";
export const counterReducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION.type:
      return state + 1;
    case DOWN_ACTION.type:
      return state - 1;
    case RESET_ACTION.type:
      return 0;
    default:
      return state;
  }
};
