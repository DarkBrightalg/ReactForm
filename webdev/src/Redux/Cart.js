//user action
export const AddItemToCart = (item) => ({
  type: "ADDITEMTOCART",
  payload: item,
})

//user reducer
export const CartRed = (Cart = { CartItems: [] }, action) => {
  switch (action.type) {
    case "ADDITEMTOCART":
      return {
        ...Cart,
        CartItems: addItemsUtils(Cart.CartItems, action.payload),
      }
    default:
      return Cart
  }
}

//Cart Utility fonction

const addItemsUtils = (CartItems, CartItemToAdd) => {
  const existingCartItems = CartItems.find(
    (CartItem) => CartItem.id === CartItemToAdd.id
  )
  if (existingCartItems) {
    return CartItems.map((CartItem) =>
      CartItem.id === CartItemToAdd.id
        ? { ...CartItem, quantity: CartItem.quantity + 1 }
        : CartItem
    )
  }
  return [...CartItems, { ...CartItemToAdd, quantity: 1 }]
}