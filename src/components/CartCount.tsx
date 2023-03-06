"use client";

import Link from "next/link";
import { useCart } from "~/contexts/CartContext";

const CartCount = () => {
  const { cart } = useCart();

  return (
    <Link href="/cart">
      <div className="bg-red-500 p-2">Cart: {cart.length}</div>
    </Link>
  );
};
export default CartCount;
