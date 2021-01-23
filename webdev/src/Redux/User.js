import { createSelector } from "reselect"

//selectors
const selUser = (state) => state.User
export const selCurrentUser = createSelector(
  [selUser],
  (User) => User.currentUser
)
//user action
export const setCurrentUser = (user) => ({
  type: "SETCURRENTUSER",
  payload: user,
})

//user reducer
export const UserRed = (currentState = {}, action) => {
  switch (action.type) {
    case "SETCURRENTUSER":
      return {
        ...currentState,
        currentUser: action.payload,
      }
    default:
      return currentState
  }
}
