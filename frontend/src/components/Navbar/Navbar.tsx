import "./Navbar.css";

import { useState } from "react";

import {
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiUser,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useSearch } from "../../context/SearchContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const { setSearchValue } = useSearch();

  const [openSearch, setOpenSearch] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <span>biagiottitheme@gmail.com</span>
        </div>

        <div className="top-center">
          Free shipping on international orders of $150+
        </div>

        <div className="top-right">
          <FiUser />

          {user ? (
            <>
              <span>Hi, {user.name}</span>

              <button
                onClick={logout}
                className="logout-btn"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">Log In</Link>

              <span>/</span>

              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        {/* Left */}
 

        {/* Center */}
        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>

            <li>
              <Link to="/products">PRODUCTS</Link>
            </li>

            <li className="logo">
              <Link to="/">AM Store</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
      <div className="nav-right">
  <button
    className="search-btn"
    onClick={() => setOpenSearch(!openSearch)}
  >
    <FiSearch />
  </button>

  <Link to="/wishlist">
    <FiHeart />
  </Link>

  <Link to="/cart">
    <FiShoppingBag />
  </Link>

  <button
    className="menu-btn"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <FiMenu />
  </button>
</div>
      </nav>

      {/* Search */}
      {openSearch && (
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/categories"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>

          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>

        

          

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>

         
        </div>
      )}
    </>
  );
};

export default Navbar;