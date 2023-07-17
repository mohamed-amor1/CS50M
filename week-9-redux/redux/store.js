import { createStore } from "redux";

import reducer from "./reducer";

const store = createStore(reducer);

// store.dispatch(updateUser({ foo: "foo" }));
// console.log(store.getState());

// store.dispatch(updateUser({ bar: "bar" }));
// console.log(store.getState());

// store.dispatch(updateUser({ foo: "baz" }));
// console.log(store.getState());

store.dispatch(addContact({ name: "foulen b", number: "1234567890" }));
console.log(store.getState());

store.dispatch(addContact({ name: "foulen b", number: "1234567890" })); // adds new contact but does not replace old contact even with same name
console.log(store.getState());

store.dispatch(addContact({ name: "david m", number: "9876543210" })); // adds new contact but does not replace old contact even with same name
console.log(store.getState());

export default store;
