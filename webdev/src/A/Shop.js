import ShopList from "../B/ShopList"
import { connect } from "react-redux"
import { selShopItems } from "../Redux/Shop"
import { createStructuredSelector } from "reselect"

const Shop = ({ ShopItems }) => {
  return (
    <div>
      {ShopItems.map((section) => (
        <ShopList key={section.id} {...section} />
      ))}
    </div>
  )
}
const mapstate = createStructuredSelector({ ShopItems: selShopItems })

export default connect(mapstate)(Shop)
//styling
