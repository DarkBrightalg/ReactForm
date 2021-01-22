import { combineReducers } from "redux"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { UserRed } from "./User"
import { CartRed } from "./Cart"
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
}

const rootreducer = combineReducers({
  /* reducers */
  User: UserRed,
  Cart: CartRed,
})
export default persistReducer(persistConfig, rootreducer)
