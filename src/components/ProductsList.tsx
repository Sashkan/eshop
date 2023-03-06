import { type Product } from "@prisma/client";

interface Props {
  products: Product[];
}

const ProductsList = ({ products }: Props) => {
  return (
    <div>
      <p>Products List</p>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
