const CartSection = ({ cartItems }) => {
  return (
    <div className="cart-section w-full">
      {cartItems.length === 0 ? (
        <div className="cart-empty text-center py-16">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <p>Cart has items</p>
      )}
    </div>
  )
}

export default CartSection