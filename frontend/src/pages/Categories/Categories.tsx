import "./Categories.css";


const categories = [
  {
    id: 1,
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  },
  {
    id: 2,
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 3,
    name: "Hair Care",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
  },
  {
    id: 4,
    name: "Perfumes",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
  },
  {
    id: 5,
    name: "Body Care",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
  },
];

interface Props {
  limit?: number;
}


const Categories = ({ limit }: Props) => {

  const displayedCategories = limit
    ? categories.slice(0, limit)
    : categories;


  return (
    <section className="categories-section">

      <div className="section-header">

        <span>
          Categories
        </span>

        <h2>
          Explore Our Collections
        </h2>

      </div>


      <div className="categories-grid">

        {displayedCategories.map((category)=>(
          
          <div 
            className="category-card"
            key={category.id}
          >

            <div className="category-image">

              <img
                src={category.image}
                alt={category.name}
              />

            </div>

            <h3>
              {category.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
};


export default Categories;