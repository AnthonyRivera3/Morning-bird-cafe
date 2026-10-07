function OrderTypeSelector({
  orderType,
  onOrderTypeChange,
}) {
  return (
    <div className="order-type-selector">

      <button
        type="button"
        className={
          orderType === "pickup"
            ? "order-type-button active"
            : "order-type-button"
        }
        onClick={() => onOrderTypeChange("pickup")}
      >
        Pickup
      </button>


      <button
        type="button"
        className={
          orderType === "delivery"
            ? "order-type-button active"
            : "order-type-button"
        }
        onClick={() => onOrderTypeChange("delivery")}
      >
        Delivery
      </button>

    </div>
  );
}

export default OrderTypeSelector;