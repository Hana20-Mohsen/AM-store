import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext"; // <-- ضيفي ده
import { SearchProvider } from "./context/SearchContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
<AuthProvider>
  <SearchProvider>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </SearchProvider>
</AuthProvider>
    </BrowserRouter>
  </StrictMode>
);