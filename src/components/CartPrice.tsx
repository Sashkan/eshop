"use client";

import { useCart } from "~/contexts/CartContext";

export const CartPrice = () => {
  const { getCartTotal } = useCart();

  return <p>Total price: {getCartTotal()}</p>;
};
