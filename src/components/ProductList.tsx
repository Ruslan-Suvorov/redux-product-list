import { Fragment } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeProduct, updateAmount, toggleComplete } from "../app/productSlice";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const products = useAppSelector(state => state.products.list);
  const dispatch = useAppDispatch();

  return (
    <ul>
      {products.map((product) => (
        <Fragment key={product.id} >
          <ProductItem
          {...product}
          onAmountChange={ (amount) => dispatch(updateAmount({ id: product.id, amount })) }
          onToggleComplete={ () => dispatch(toggleComplete(product.id)) }
          onRemove={ () => dispatch(removeProduct(product.id)) }
          />
        </Fragment>
      ))}
    </ul>
  )
}
