import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { ProductType } from "../data/products";

export interface CartItem extends ProductType {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];

addToCart: (
  product: ProductType,
  quantity?: number
) => void;
  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  cartCount: number;

  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const STORAGE_KEY = "cart_items";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

const addToCart = (
  product: ProductType,
  quantity = 1
) => {

  setCartItems((prev) => {

    const existing = prev.find(
      (item) => item.id === product.id
    );

    if (existing) {

      return prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                item.quantity + quantity,
            }
          : item
      );

    }

    return [
      ...prev,
      {
        ...product,
        quantity,
      },
    ];

  });

};
  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}