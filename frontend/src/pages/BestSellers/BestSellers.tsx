import "./BestSellers.css";

import Product from "../Product/Product";

import { products } from "../../data/products";


function BestSellers() {


const bestSellerProducts = [...products]
.sort(
(a,b)=> b.sold - a.sold
)
.slice(0,4);



return (

<section className="best-sellers">


<div className="section-header">

<p>
Our Favorites
</p>

<h2>
Best Sellers
</h2>

<span className="section-rule"/>

</div>



<div className="products-grid">


{
bestSellerProducts.map(product=>(

<Product
key={product.id}
product={product}
/>

))
}


</div>


</section>

);

}


export default BestSellers;