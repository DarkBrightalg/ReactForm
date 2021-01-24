import sections from "../Data/ShopSectionData"
import ShopItems from "../Data/ShopItemsData"
import { createSelector } from "reselect"

const selShop = (state) => state.Shop

export const selShopSections = createSelector(
  [selShop],
  (selShop) => selShop.sections
)
export const selShopItems = createSelector(
  [selShop],
  (selShop) => selShop.ShopItems
)

//reducers
export const ShopSectionsRed = (
  currentState = { sections, ShopItems },
  action
) => {
  switch (action.type) {
    default:
      return currentState
  }
}
