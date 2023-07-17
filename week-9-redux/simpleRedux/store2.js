// storing action types as constans to avoid typos
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CONTACT = "UPDATE_CONTACT";

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}

const DEFAULT_STATE = { user: {}, contacts: [] };

const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state, action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload];
  return state;
};

const userReducer = (state, action) => {
  if (action.type === UPDATE_USER) return merge(state, action.payload);
  if (action.type === UPDATE_CONTACT)
    return merge(state, { recentlyAddedContact: action.payload });
  return state;
};

const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contacts, action),
});

// action creators
const updateUser = (update) => ({ type: UPDATE_USER, payload: update });

const addContact = (newContact) => ({
  type: UPDATE_CONTACT,
  payload: newContact,
});

const store = new Store(reducer, DEFAULT_STATE);

store.dispatch(updateUser({ foo: "foo" }));
console.log(store.getState());

store.dispatch(updateUser({ bar: "bar" }));
console.log(store.getState());

store.dispatch(updateUser({ foo: "baz" }));
console.log(store.getState());

store.dispatch(addContact({ name: "foulen b", number: "1234567890" }));
console.log(store.getState());

store.dispatch(addContact({ name: "foulen b", number: "1234567890" })); // adds new contact but does not replace old contact even with same name
console.log(store.getState());

store.dispatch(addContact({ name: "david m", number: "9876543210" })); // adds new contact but does not replace old contact even with same name
console.log(store.getState());
