import "./Order.css";

import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

function Order() {
  return (
    <section className="order-page">

      <div className="order-card">

        <FiCheckCircle className="order-icon" />

        <h1>Thank You!</h1>

        <h2>Your Order Has Been Placed Successfully</h2>

        <p className="order-message">
          Thank you for shopping with <strong>AM Store</strong>.
          <br />
          Your order has been received and will be processed shortly.
        </p>

        <div className="order-info">

          <div className="info-row">
            <span>Order Number</span>
            <strong>#AM10245</strong>
          </div>

          <div className="info-row">
            <span>Order Status</span>
            <strong className="pending">
              Pending
            </strong>
          </div>

          <div className="info-row">
            <span>Payment Method</span>
            <strong>Cash On Delivery</strong>
          </div>

          <div className="info-row">
            <span>Estimated Delivery</span>
            <strong>3 - 5 Business Days</strong>
          </div>

        </div>

        <div className="email-box">

          A confirmation email has been sent to your email address.

        </div>

        <div className="order-actions">

          <Link
            to="/products"
            className="order-btn"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="home-btn"
          >
            Back To Home
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Order;