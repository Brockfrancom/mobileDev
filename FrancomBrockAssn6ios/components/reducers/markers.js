import { constants } from '../actions/markers';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get("ADD_MARKER"):
      return [...state, action.payload.marker];
    case constants.get('GET_MARKERS_DONE'):
      return action.payload;
    default:
      return state;
  }
  return state;
}
