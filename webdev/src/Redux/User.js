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
