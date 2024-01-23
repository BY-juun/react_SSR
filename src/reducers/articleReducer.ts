import { FETCH_ARTICES } from "../actions";

export default function (state = {}, action: any) {
  switch (action.type) {
    case FETCH_ARTICES:
      return action.payload;
    default:
      return state;
  }
}
