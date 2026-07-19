import MainSlider from "../../components/MainSlider/MainSlider";
import BestSellers from "../BestSellers/BestSellers";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
 import "./Home.css";

function Home() {
  return (
    <>
      <MainSlider />
    
     {/* About Brand */}



 
<section className="about">

    <div className="about-image">

        <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200"
            alt=""
        />

    </div>

    <div className="about-content">

        <span className="subtitle">
            OUR STORY
        </span>

        <h2>
            Beauty Begins With
            Healthy Skin
        </h2>

        <p>
            At Velvet Beauty, we believe skincare is more than a routine.
            Every product is created with carefully selected ingredients to
            nourish, protect, and enhance your natural beauty.
        </p>

        <ul>

            <li>Natural Ingredients</li>

            <li>Dermatologist Approved</li>

            <li>Free Shipping Worldwide</li>

        </ul>

        <button>
            Discover More
        </button>

    </div>

</section>
<Categories limit={4}/>
<Products
  limit={4}
  showButton={true}
/>      {/* offer-banner */}


    <section className="offer-banner">
      <div className="offer-overlay">
        <p className="offer-small">NEW COLLECTION</p>

        <h2>
          Discover Your <br />
          Beauty Essentials
        </h2>

        <p className="offer-desc">
          Premium skincare and beauty products made for your daily routine.
        </p>

        <button className="offer-btn">
          SHOP NOW
        </button>
      </div>
    </section>

  <BestSellers/>
        {/* Gallery Section */}
      <section className="gallery-section">

        <div className="section-header">
          <p>Explore Our World</p>
          <h2>Gallery</h2>
        </div>


        <div className="gallery-grid">

          {galleryImages.map((item)=>(
            <div 
              className="gallery-item"
              key={item.id}
            >
              <img 
                src={item.image}
                alt="gallery"
              />
            </div>
          ))}

        </div>

      </section>
<section className="newsletter-section">

  <div className="newsletter-content">

    <p className="newsletter-subtitle">
      Stay Connected
    </p>

    <h2>
      Subscribe & Get 10% OFF
    </h2>

    <span>
      Be the first to know about new collections, exclusive offers, and beauty tips.
    </span>


    <div className="newsletter-form">

      <input
        type="email"
        placeholder="Enter your email address"
      />

      <button>
        Subscribe
      </button>

    </div>

  </div>

</section>
      
      </>
  );}
  

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a",
  },
];
 

 
export default Home;