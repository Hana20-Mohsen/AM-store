import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

import "./ProductDetails.css";

import { products } from "../../data/products";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  const [quantity, setQuantity] = useState(1);

  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product, quantity);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <section className="product-details">

      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>/</span>

        <Link to="/products">
          Products
        </Link>

        <span>/</span>

        <span>{product.category}</span>

        <span>/</span>

        <strong>{product.name}</strong>

      </div>

      {/* Main */}

      <div className="details-container">

        {/* Images */}

        <div className="details-images">

          <div className="small-images">

            {product.images.map((image, index) => (

              <img
                key={index}
                src={image}
                alt={product.name}
                className={
                  selectedImage === image
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedImage(image)
                }
              />

            ))}

          </div>

          <div className="main-image">

            <img
              src={selectedImage}
              alt={product.name}
            />

          </div>

        </div>

        {/* Content */}

        <div className="details-content">

          <span className="category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="rating">

            <div className="stars">
              ★★★★★
            </div>

            <span>
              {product.rating}
            </span>

            <span>
              ({product.reviews} Reviews)
            </span>

          </div>

          <div className="price">

            <span className="new-price">
              ${product.price}
            </span>

            <span className="old-price">
              ${product.oldPrice}
            </span>

            <span className="discount">

              Save{" "}
              {Math.round(
                ((product.oldPrice -
                  product.price) /
                  product.oldPrice) *
                  100
              )}
              %

            </span>

          </div>

          <p className="description">
            {product.description}
          </p>

          <div className="product-info">

            <div>

              <span>Brand</span>

              <strong>
                {product.brand}
              </strong>

            </div>

            <div>

              <span>Category</span>

              <strong>
                {product.category}
              </strong>

            </div>

            <div>

              <span>Availability</span>

              <strong>
                In Stock ({product.stock})
              </strong>

            </div>

            <div>

              <span>SKU</span>

              <strong>
                VB-{product.id}00
              </strong>

            </div>

          </div>

          <div className="actions">

            <div className="quantity">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

            <button
              className={`wishlist ${
                isInWishlist(product.id)
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleWishlist(product)
              }
            >
              <FiHeart />
            </button>

          </div>

          <button
            className={`add-cart ${
              added ? "added" : ""
            }`}
            onClick={handleAddToCart}
          >
            {added ? "✓ Added" : "Add To Cart"}
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;