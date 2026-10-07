import { useState } from "react";

import "./Menu.css";
import "./Menu-mobile.css";

import MenuItem from "./MenuItem.jsx";
import MenuCategoryFilter from "./MenuCategoryFilter.jsx";

import menuItems from "../../data/menuItems.js";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState([]);

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];


  // Show every item when All is selected.
  // Otherwise, only show items from the selected category.
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        );


  // Add the selected menu item to the cart.
  function addToCart(item) {
    setCart([...cart, item]);
  }


  return (
    <section id="menu" className="menu-section">

      <div className="menu-container">

        {/* =========================
            MENU HEADING
            ========================= */}

        <div className="menu-heading">

          <p className="menu-eyebrow">
            Fresh from Morning Bird
          </p>

          <h1>Our Menu</h1>

          <p className="menu-description">
            Find your morning favorite and add it to your order.
          </p>

        </div>


        {/* =========================
            CART COUNT
            ========================= */}

        <div className="menu-cart-count">
          Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
        </div>


        {/* =========================
            CATEGORY FILTER
            ========================= */}

        <MenuCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />


        {/* =========================
            MENU ITEMS
            ========================= */}

        <div className="menu-grid">

          {filteredItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Menu;