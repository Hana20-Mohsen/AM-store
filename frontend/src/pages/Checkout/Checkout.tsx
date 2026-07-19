import "./Checkout.css";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Checkout() {

  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const placeOrder = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    clearCart();

    navigate("/order");

  };

  return (

    <section className="checkout">

      <div className="checkout-title">

        <h1>Checkout</h1>

        <p>Complete your order</p>

      </div>

      <div className="checkout-container">

        {/* Billing */}

        <form
          className="checkout-form"
          onSubmit={placeOrder}
        >

          <h2>Billing Details</h2>

          <div className="form-grid">

            <input
              type="text"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <input
              type="text"
              placeholder="Country"
              required
            />

            <input
              type="text"
              placeholder="City"
              required
            />

            <input
              className="full-width"
              type="text"
              placeholder="Street Address"
              required
            />

            <input
              type="text"
              placeholder="ZIP Code"
              required
            />

          </div>

          <div className="payment">

            <h3>Payment Method</h3>

            <label>

              <input
                type="radio"
                name="payment"
                defaultChecked
              />

              Cash On Delivery

            </label>

            <label>

              <input
                type="radio"
                name="payment"
              />

              Credit Card

            </label>

            <label>

              <input
                type="radio"
                name="payment"
              />

              PayPal

            </label>

          </div>

          <button
            type="submit"
            className="place-order"
          >
            Place Order
          </button>

        </form>

        {/* Order Summary */}

        <div className="order-summary">

          <h2>Your Order</h2>

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="order-item"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="order-info">

                <h4>{item.name}</h4>

                <p>
                  Qty: {item.quantity}
                </p>

              </div>

              <span>

                $
                {(item.price * item.quantity).toFixed(2)}

              </span>

            </div>

          ))}

          <div className="summary">

            <div>

              <span>Subtotal</span>

              <span>
                ${totalPrice.toFixed(2)}
              </span>

            </div>

            <div>

              <span>Shipping</span>

              <span>Free</span>

            </div>

            <div className="total">

              <span>Total</span>

              <span>
                ${totalPrice.toFixed(2)}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Checkout;