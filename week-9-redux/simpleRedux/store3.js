const login = async (username, password) => {
  const response = await fetch("http://localhost:8000", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    return true;
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};

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

  dispatch(action) {
    if (typeof action === "function") {
      action(this.dispatch.bind(this)); // pass dispatch to action creator
    } else {
      console.log("received an action:", action.type);
      this.state = this.reducer(this.state, action);
    }
  }
}

const DEFAULT_STATE = { user: {}, contacts: [] };

const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state, action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload];
  return state;
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return merge(state, { token: "fakeToken" });
    case UPDATE_USER:
      return merge(state, action.payload);
    case UPDATE_CONTACT:
      return merge(state, { recentlyAddedContact: action.payload });
    default:
      return state;
  }
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

// async action creator
const logInUser = (username, password) => (dispatch) => {
  dispatch({ type: "LOG_IN_SENT" });
  login(username, password)
    .then(() => {
      dispatch({ type: "LOG_IN_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "LOG_IN_ERROR" });
    });
};

const store = new Store(reducer, DEFAULT_STATE);
store.dispatch(logInUser("username", "password"));
console.log(store.getState());

// store.dispatch(updateUser({ foo: "foo" }));
//

// store.dispatch(updateUser({ bar: "bar" }));
// console.log(store.getState());

// store.dispatch(updateUser({ foo: "baz" }));
// console.log(store.getState());

// store.dispatch(addContact({ name: "foulen b", number: "1234567890" }));
// console.log(store.getState());

// store.dispatch(addContact({ name: "foulen b", number: "1234567890" })); // adds new contact but does not replace old contact even with same name
// console.log(store.getState());

// store.dispatch(addContact({ name: "david m", number: "9876543210" })); // adds new contact but does not replace old contact even with same name
// console.log(store.getState());
