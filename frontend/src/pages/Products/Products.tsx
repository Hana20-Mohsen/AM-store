import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { products } from "../../data/products";
import Product from "../Product/Product";

import "swiper/css";
import "swiper/css/navigation";

import "./Products.css";



interface Props {
  limit?: number;
  showButton?: boolean;
}

function Products({
  limit,
  showButton = false,
}: Props) {
  const displayedProducts = limit
    ? products.slice(0, limit)
    : products;

  const [prevEl, setPrevEl] =
    useState<HTMLButtonElement | null>(null);

  const [nextEl, setNextEl] =
    useState<HTMLButtonElement | null>(null);

  return (
    <section className="featured">
      <div className="featured-title">
        <span>Our Collection</span>
        <h2>Featured Products</h2>
      </div>

      {limit ? (
        <>
          <div className="featured-carousel">
            <button
              ref={setPrevEl}
              className="featured-nav featured-nav-prev"
            >
              ❮
            </button>

            <button
              ref={setNextEl}
              className="featured-nav featured-nav-next"
            >
              ❯
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl,
                nextEl,
              }}
              spaceBetween={25}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {displayedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <Product product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {showButton && (
            <div className="featured-btn">
              <Link to="/products">
                View All Products →
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="products-grid">
          {displayedProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;