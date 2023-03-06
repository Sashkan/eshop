"use client";

import { type Product } from "@prisma/client";
import { createContext, useContext, useState } from "react";

interface CartContextProps {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {
    // handle add to cart
  },
  removeFromCart: () => {
    // handle remove from cart
  },
  clearCart: () => {
    // handle clear cart
  },
  getCartTotal: () => 0,
});

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    console.log("Adding to cart", item);
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCart = () => useContext(CartContext);
