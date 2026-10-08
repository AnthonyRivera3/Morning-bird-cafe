import "./Cart.css";
import "./Cart-mobile.css";

import CartItem from "./CartItem.jsx";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  return (
    <section
      id="cart"
      className="cart-section"
    >

      <div className="cart-container">

        <h1>Your Cart</h1>


        {cart.length === 0 ? (

          <p className="empty-cart">
            Your cart is empty.
          </p>

        ) : (

          <>
            <div className="cart-items">

              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              ))}

            </div>


            <div className="cart-summary">

              <h2>
                Total: ${total.toFixed(2)}
              </h2>

              <button
                type="button"
                className="checkout-button"
              >
                Continue to Checkout
              </button>

            </div>
          </>

        )}

      </div>

    </section>
  );
}

export default Cart;