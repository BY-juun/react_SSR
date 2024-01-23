import { FETCH_MOVIE_DETAIL } from "../actions";
import { MovieType } from "../types";

type Action = {
  type: typeof FETCH_MOVIE_DETAIL;
  payload: MovieType;
};

export default function (state = {}, action: Action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
