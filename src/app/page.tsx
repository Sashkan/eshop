import Link from "next/link";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const products = await getData();

  return (
    <div>
      <p>Products List</p>
      <ul>
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <li>{product.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
