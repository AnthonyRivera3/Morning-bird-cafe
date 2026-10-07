import { useState } from "react";

import "./Order.css";
import "./Order-mobile.css";

import OrderTypeSelector from "./OrderTypeSelector.jsx";
import LocationSelector from "./LocationSelector.jsx";
import DeliveryForm from "./DeliveryForm.jsx";

import locations from "../../data/locations.js";

function Order() {
    const [orderType, setOrderType] = useState("");

    const [selectedLocation, setSelectedLocation] = useState("");

    const [deliveryAddress, setDeliveryAddress] = useState({
        street: "",
        city: "",
        zip: "",
    });

    // Check if all delivery fields have something entered.
    const addressComplete =
        deliveryAddress.street.trim() !== "" &&
        deliveryAddress.city.trim() !== "" &&
        deliveryAddress.zip.trim() !== "";

    // Change between pickup and delivery.
    function handleOrderTypeChange(type) {
        setOrderType(type);

        // Clear old store choice when switching order type.
        setSelectedLocation("");
    }

    return (
        <section
            id="order"
            className="order-section"
        >
            <div className="order-container">

                <h1>Start Your Order</h1>

                <p className="order-intro">
                    How would you like to receive your order?
                </p>

                <OrderTypeSelector
                    orderType={orderType}
                    onOrderTypeChange={handleOrderTypeChange}
                />


                {/* =========================
            PICKUP
            ========================= */}

                {orderType === "pickup" && (
                    <LocationSelector
                        title="Choose your pickup location"
                        locations={locations}
                        selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation}
                    />
                )}


                {/* =========================
            DELIVERY
            ========================= */}

                {orderType === "delivery" && (
                    <>
                        <DeliveryForm
                            deliveryAddress={deliveryAddress}
                            setDeliveryAddress={setDeliveryAddress}
                        />

                        {addressComplete && (
                            <LocationSelector
                                title="Choose the Morning Bird location closest to you"
                                locations={locations}
                                selectedLocation={selectedLocation}
                                setSelectedLocation={setSelectedLocation}
                            />
                        )}
                    </>
                )}


                {/* =========================
            CONTINUE BUTTON
            ========================= */}

                {selectedLocation && (
                    <a
                        href="#menu"
                        className="continue-order-button"
                    >
                        Continue to Menu
                    </a>
                )}

            </div>
        </section>
    );
}

export default Order;