import CartItem from "../components/CartItem";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    totalPrice,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>
          Your Cart Is Empty
        </h2>

        <p>
          Add some amazing
          products.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>
        Shopping Cart
      </h1>

      <br />

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={
            increaseQuantity
          }
          decreaseQuantity={
            decreaseQuantity
          }
          removeFromCart={
            removeFromCart
          }
        />
      ))}

      <div className="cart-summary">
        <div className="summary-row">
          <span>
            Total Items
          </span>

          <strong>
            {totalItems}
          </strong>
        </div>

        <div className="summary-row">
          <span>
            Sub Total
          </span>

          <strong>
            $
            {totalPrice.toFixed(
              2
            )}
          </strong>
        </div>

        <hr />

        <br />

        <div className="summary-row grand-total">
          <span>
            Grand Total
          </span>

          <span>
            $
            {totalPrice.toFixed(
              2
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;