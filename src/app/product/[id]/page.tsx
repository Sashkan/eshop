import { AddToCart } from "~/components/AddToCart";

async function getData(productId: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/product/${productId}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params: { id } }: Props) {
  const product = await getData(id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price} euros</p>
      <AddToCart product={product} />
    </div>
  );
}
