const reducer = (state, update) => ({
  ...state,
  ...update,
});

let state = {};
state = reducer(state, { foo: "foo" });
console.log(state);

state = reducer(state, { bar: "bar" });
console.log(state);

state = reducer(state, { foo: "baz" });
console.log(state);
