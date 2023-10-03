import { useAppSelector } from "../app/hooks";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const products = useAppSelector(state => state.products.list);

  return (
    <ul>
      {products.map((product) => (
        <ProductItem
        key={product.id} 
        {...product}
        />
      ))}
    </ul>
  )
}
