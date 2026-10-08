import "./Merch.css";
import "./Merch-mobile.css";

import MerchItem from "./MerchItems.jsx";

import merchItems from "../../data/merchItems.js";
function Merch({ addToCart }) {
  return (
    <section
      id="merch"
      className="merch-section"
    >

      <div className="merch-container">

        <div className="merch-heading">

          <p className="merch-eyebrow">
            Take Morning Bird Home
          </p>

          <h1>
            Morning Bird Merch
          </h1>

          <p className="merch-description">
            Rep your favorite cafe with Morning Bird gear and drinkware.
          </p>

        </div>


        <div className="merch-grid">

          {merchItems.map((item) => (
            <MerchItem
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

export default Merch;