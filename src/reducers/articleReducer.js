import { FETCH_ARTICES } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICES:
      return action.payload;
    default:
      return state;
  }
};
