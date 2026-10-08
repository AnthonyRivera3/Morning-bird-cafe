function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
}) {

  return (
    <article className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />


      <div className="cart-item-info">

        <h3>
          {item.name}
        </h3>

        <p>
          ${item.price.toFixed(2)}
        </p>

        <p className="cart-item-subtotal">
          Subtotal: $
          {(item.price * item.quantity).toFixed(2)}
        </p>

      </div>


      <div className="quantity-controls">

        <button
          type="button"
          className="quantity-button"
          onClick={() =>
            decreaseQuantity(item.id)
          }
          aria-label={`Decrease ${item.name} quantity`}
        >
          −
        </button>


        <span className="quantity-number">
          {item.quantity}
        </span>


        <button
          type="button"
          className="quantity-button"
          onClick={() =>
            increaseQuantity(item.id)
          }
          aria-label={`Increase ${item.name} quantity`}
        >
          +
        </button>

      </div>

    </article>
  );
}

export default CartItem;