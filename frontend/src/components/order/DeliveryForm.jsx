function DeliveryForm({
  deliveryAddress,
  setDeliveryAddress,
}) {

  function handleChange(event) {
    const { name, value } = event.target;

    setDeliveryAddress({
      ...deliveryAddress,

      [name]: value,
    });
  }


  return (
    <div className="delivery-form">

      <h2>Delivery Address</h2>

      <label>
        Street Address

        <input
          type="text"
          name="street"
          value={deliveryAddress.street}
          onChange={handleChange}
          placeholder="2800 Victory blvd"
        />
      </label>


      <label>
        City

        <input
          type="text"
          name="city"
          value={deliveryAddress.city}
          onChange={handleChange}
          placeholder="Staten Island"
        />
      </label>


      <label>
        ZIP Code

        <input
          type="text"
          name="zip"
          value={deliveryAddress.zip}
          onChange={handleChange}
          placeholder="10314"
        />
      </label>

    </div>
  );
}

export default DeliveryForm;