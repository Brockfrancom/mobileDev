import { constants } from '../actions/lists';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get("CREATE_LIST"):
      return [...state, action.payload];
    case constants.get("ADD_ITEM"):
      items = [...action.payload.list.items, action.payload.item];
      return [...state, action.payload.list.items=items];
    case constants.get('GET_LISTS_DONE'):
      return action.payload;
    default:
      return state;
  }
  return state;
}
