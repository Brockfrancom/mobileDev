import UUID from 'uuid-js';

export default (store) => (next) => (action) => {
console.log("dispatching: ", action.type);
console.log(action.payload);
if (action.payload){
  action.payload.id = UUID.create().toString();
}
const result = next(action);
console.log("store done updating")
return result;
}
