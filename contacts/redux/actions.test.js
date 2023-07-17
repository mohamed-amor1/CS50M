import * as actions from "./actions";

test("updateUser returns an action", () => {
  expect(actions.updateUser({ name: "test name" })).toStrictEqual({
    type: actions.UPDATE_USER,
    payload: { name: "test name" },
  });
  expect(actions.updateUser({ phone: "1234567890" })).toStrictEqual({
    type: actions.UPDATE_USER,
    payload: { phone: "1234567890" },
  });
});
