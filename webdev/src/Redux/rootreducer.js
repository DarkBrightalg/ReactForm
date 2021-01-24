import { combineReducers } from "redux"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { UserRed } from "./User"
import { CartRed } from "./Cart"
import { ShopSectionsRed } from "./Shop"
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Cart", "Shop"],
}

const rootreducer = combineReducers({
  /* reducers */
  User: UserRed,
  Cart: CartRed,
  Shop: ShopSectionsRed,
})
export default persistReducer(persistConfig, rootreducer)
