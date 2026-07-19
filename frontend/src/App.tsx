import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Order from "./pages/Order/Order";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Contact from "./pages/Contact/Contact";
import Signup from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import SignIn from "./pages/SignIn/SignIn";
import Search from "./pages/Search/Search";
import Checkout from "./pages/Checkout/Checkout";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/contact" element={<Contact />} />
<Route
    path="/search"
    element={<Search />}
/>
        <Route path="/cart" element={<Cart />} />
        {<Route path="/wishlist" element={<Wishlist />} />}
        <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<SignIn />} />

        <Route
          path="/order"
          element={<Order />}
        />

<Route
  path="/checkout"
  element={<Checkout />}
/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
