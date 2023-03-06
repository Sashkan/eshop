"use client";

import { type Product } from "@prisma/client";
import { useCart } from "~/contexts/CartContext";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Adding to cart", product);

    addToCart(product);
  };

  return <button onClick={handleAddToCart}>Add to cart</button>;
};
