import "./Cart.css";
import { Link } from "react-router-dom";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";

function Cart() {

  const {

    cartItems,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart,

    totalPrice,

  } = useCart();

  if (cartItems.length === 0) {

    return (

      <section className="cart-page">

        <div className="empty-cart">

          <h2>Your Cart is Empty</h2>

          <p>
            Looks like you haven't added anything yet.
          </p>

          <Link to="/products">
            Continue Shopping
          </Link>

        </div>

      </section>

    );

  }

  return (

    <section className="cart-page">

      <div className="cart-title">

        <h1>Shopping Cart</h1>

        <p>
          {cartItems.length} Products
        </p>

      </div>

      <div className="cart-container">

        <div className="cart-items">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="cart-item"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="item-info">

                <h3>{item.name}</h3>

                <span>{item.category}</span>

              </div>

              <div className="item-price">

                ${item.price}

              </div>

              <div className="item-quantity">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >

                  <FiMinus />

                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >

                  <FiPlus />

                </button>

              </div>

              <div className="item-total">

                $
                {(
                  item.price *
                  item.quantity
                ).toFixed(2)}

              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >

                <FiTrash2 />

              </button>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div>

            <span>Subtotal</span>

            <strong>
              ${totalPrice.toFixed(2)}
            </strong>

          </div>

          <div>

            <span>Shipping</span>

            <strong>Free</strong>

          </div>

          <div className="summary-total">

            <span>Total</span>

            <strong>
              ${totalPrice.toFixed(2)}
            </strong>

          </div>
<Link
  to="/checkout"
  className="checkout-btn"
>
  Proceed To Checkout
</Link>

        </div>

      </div>

    </section>

  );

}

export default Cart;