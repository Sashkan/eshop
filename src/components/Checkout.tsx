"use client";

import React from "react";
import { useCart } from "~/contexts/CartContext";

const processCheckout = async (value: number) => {
  await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value,
    }),
  });
};

const Checkout = () => {
  const { getCartTotal, clearCart } = useCart();

  const cartTotal = getCartTotal();

  const payCheckout = () => {
    processCheckout(cartTotal);
    clearCart();
  };

  return (
    <div>
      <button onClick={payCheckout}>Pay</button>
    </div>
  );
};

export default Checkout;
