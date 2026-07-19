import { FiTrash2, FiShoppingBag } from "react-icons/fi";

import "./Wishlist.css";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import type { ProductType } from "../../data/products";


function Wishlist() {


  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();



  const {
    addToCart,
  } = useCart();



  const moveToCart = (product: ProductType) => {

    addToCart(product);

    removeFromWishlist(product.id);

  };



  return (

    <div className="wishlist-page">


      <h1>
        My Wishlist
      </h1>



      {
        wishlistItems.length === 0 ?


        (

          <div className="empty-wishlist">


            <FiShoppingBag size={50} />


            <h2>
              Your wishlist is empty
            </h2>


            <p>
              Save your favorite products here
            </p>


          </div>

        )


        :


        (

          <div className="wishlist-grid">


            {
              wishlistItems.map((product: ProductType) => (


                <div
                  className="wishlist-card"
                  key={product.id}
                >



                  <img
                    src={product.image}
                    alt={product.name}
                  />



                  <h3>
                    {product.name}
                  </h3>



                  <p>
                    ${product.price}
                  </p>



                  <div className="wishlist-actions">


                    <button
                      onClick={() => moveToCart(product)}
                    >
                      Move To Cart
                    </button>



                    <button
                      className="remove"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                    >

                      <FiTrash2 />

                    </button>


                  </div>



                </div>


              ))
            }



          </div>

        )

      }



    </div>

  );

}


export default Wishlist;