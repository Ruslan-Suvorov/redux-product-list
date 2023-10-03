import { useAppDispatch } from "../app/hooks";
import { toggleComplete, removeProduct } from "../app/productSlice";

interface ProductItemProps {
  id: string,
  title: string,
  completed: boolean,
}

export const ProductItem: React.FC<ProductItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li>      
      <input 
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <label>{title}</label>
      <span onClick={() => dispatch(removeProduct(id))}>&times;</span>
    </li>
  )
}
