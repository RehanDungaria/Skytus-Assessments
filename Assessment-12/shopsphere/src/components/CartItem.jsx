function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.title}
      />

      <div className="cart-info">
        <h3>{item.title}</h3>

        <p>
          Price: $
          {item.price}
        </p>

        <div className="quantity-box">
          <button
            className="qty-btn"
            onClick={() =>
              decreaseQuantity(item.id)
            }
          >
            -
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            className="qty-btn"
            onClick={() =>
              increaseQuantity(item.id)
            }
          >
            +
          </button>
        </div>
      </div>

      <div>
        <h3>
          $
          {(
            item.price *
            item.quantity
          ).toFixed(2)}
        </h3>

        <button
          className="remove-btn"
          onClick={() =>
            removeFromCart(item.id)
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;