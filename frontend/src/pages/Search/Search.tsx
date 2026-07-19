import { useSearchParams } from "react-router-dom";

import { products } from "../../data/products";

import Product from "../../pages/Product/Product";

import "./Search.css";

function Search() {

  const [searchParams] = useSearchParams();

  const query =
    searchParams.get("q")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <section className="search-page">

      <h1>

        Search Results

      </h1>

      <p>

        {filteredProducts.length} Products Found

      </p>

      <div className="search-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <Product

              key={product.id}

              product={product}

            />

          ))

        ) : (

          <h2>

            No products found.

          </h2>

        )}

      </div>

    </section>
  );
}

export default Search;