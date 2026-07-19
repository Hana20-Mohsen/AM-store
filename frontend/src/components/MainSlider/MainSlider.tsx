import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./MainSlider.css";

export const slides = [
  {
    id: 1,
    subtitle: "velvet beauty",
    title: "Original Style",
    description:
      "Discover premium beauty products that enhance your natural elegance with our exclusive beauty collection.",
    button: "View More",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    subtitle: "luxury collection",
    title: "Beauty Essentials",
    description:
      "Premium skincare and makeup products crafted for every skin type.",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    subtitle: "new arrival",
    title: "Natural Glow",
    description: "Find everything you need for a complete beauty routine.",
    button: "Explore",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=1200&q=80",
  },
];

function MainSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="hero">
      <button
        type="button"
        className="hero-nav hero-nav-prev"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <span className="hero-nav-arrow">‹</span> Prev
      </button>

      <button
        type="button"
        className="hero-nav hero-nav-next"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
      >
        Next <span className="hero-nav-arrow">›</span>
      </button>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        speed={900}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-wrapper">
              <div className="hero-left">
                <span className="hero-subtitle">{slide.subtitle}</span>

                <h1>{slide.title}</h1>

                <p>{slide.description}</p>

                <button type="button" className="hero-cta">
                  {slide.button}
                </button>
              </div>

              <div className="hero-right">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MainSlider;