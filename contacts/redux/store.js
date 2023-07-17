import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { addContact } from "./actions";
import reducer from "./reducer";

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }
//   return next(action);
// };

const store = createStore(reducer, applyMiddleware(thunk));

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
*/

store.dispatch(addContact({ name: "jordan h", phone: "1234567890" }));
store.dispatch(addContact({ name: "jordan h", phone: "1234567890" }));
store.dispatch(addContact({ name: "david m", phone: "5050505050" }));

console.log(store.getState());

export default store;
