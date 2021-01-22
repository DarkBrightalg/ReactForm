import { combineReducers } from "redux"
//don't forget to import reducers
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { UserRed } from "./User"
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
}

const rootreducer = combineReducers({
  /* reducers */
  User: UserRed,
})
export default persistReducer(persistConfig, rootreducer)
