import { useState } from "react";

import "./App.css";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Order from "./components/order/Order.jsx";
import Hero from "./components/hero/Hero.jsx";
import Menu from "./components/menu/Menu.jsx";
import Cart from "./components/cart/Cart.jsx";
import Merch from "./components/merch/Merch.jsx";
import Info from "./components/info/Info.jsx";

function App() {
  const [cart, setCart] = useState([]);


  // Add item to cart.
  // If item already exists, increase its quantity.
  function addToCart(item) {
    const itemAlreadyInCart = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (itemAlreadyInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }
  }


  // Increase quantity by 1.
  function increaseQuantity(itemId) {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  }


  // Decrease quantity by 1.
  // If quantity reaches 0, remove the item.
  function decreaseQuantity(itemId) {
    const item = cart.find(
      (cartItem) => cartItem.id === itemId
    );

    if (item.quantity === 1) {
      setCart(
        cart.filter(
          (cartItem) => cartItem.id !== itemId
        )
      );
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === itemId
            ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
            : cartItem
        )
      );
    }
  }


  // Total number of items in cart.
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  return (
    <>
      <Navbar />

      {/* Only show cart button when cart has items */}
      {cartCount > 0 && (
        <a
          href="#cart"
          className="floating-cart-button"
        >
          Cart ({cartCount})
        </a>
      )}

      <main>
        <Hero />

        <Order />

        <Menu
          cart={cart}
          cartCount={cartCount}
          addToCart={addToCart}
        />

        <Merch
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </main>
      <Info />
      <Footer />
    </>
  );
}

export default App;