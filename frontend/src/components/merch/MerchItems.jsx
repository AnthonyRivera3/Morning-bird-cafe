function MerchItem({
  item,
  addToCart,
}) {
  return (
    <article className="merch-item">

      <img
        src={item.image}
        alt={item.name}
        className="merch-item-image"
      />

      <div className="merch-item-info">

        <h3>
          {item.name}
        </h3>

        <p className="merch-item-description">
          {item.description}
        </p>

        <p className="merch-item-price">
          ${item.price.toFixed(2)}
        </p>

      </div>

      <button
        type="button"
        className="merch-cart-button"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>

    </article>
  );
}

export default MerchItem;