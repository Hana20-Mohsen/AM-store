import "./Product.css";
import { Link } from "react-router-dom";
import { FiHeart, FiEye } from "react-icons/fi";
import { useState } from "react";

import type { ProductType } from "../../data/products";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <div className="product-media">
        <img
          src={product.image}
          alt={product.name}
        />

        {/* Wishlist */}

        <button
          className={`wishlist-btn ${
            isInWishlist(product.id) ? "active" : ""
          }`}
          onClick={() => toggleWishlist(product)}
        >
          <FiHeart />
        </button>

        {/* View Details */}

        <div className="product-overlay">
          <Link
            to={`/products/${product.id}`}
            className="view-btn"
          >
            <FiEye />
          </Link>
        </div>
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <div className="price">
          <span className="new-price">
            ${product.price}
          </span>

          <span className="old-price">
            ${product.oldPrice}
          </span>
        </div>

        <button
          className={`cart-btn ${
            added ? "added" : ""
          }`}
          onClick={handleAddToCart}
        >
          {added ? "✓ Added" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;