function MenuItem({ item, addToCart }) {
  return (
    <article className="menu-item">
      <div className="menu-item-info">
        <h3>{item.name}</h3>

        <p className="menu-item-description">
          {item.description}
        </p>

        <p className="menu-item-price">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <button
        type="button"
        className="add-to-cart-button"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default MenuItem;