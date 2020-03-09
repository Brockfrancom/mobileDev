import UUID from 'uuid-js';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case "CREATE_LIST":
      const newList = {
        ...action.payload,
        id: UUID.create().toString(),
      }
      return [...state, newList];
    default:
      return state;
  }
  return state;
}
