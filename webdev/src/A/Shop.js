import ShopList from "../B/ShopList"
import SHOP_DATA from "../Data/ShopItemsData"

const Shop = () => {
  console.log("SHOP", SHOP_DATA)
  return (
    <div>
      {SHOP_DATA.map((section) => (
        <ShopList key={section.id} {...section} />
      ))}
    </div>
  )
}

export default Shop
//styling
