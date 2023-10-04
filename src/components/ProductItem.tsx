import { useAppDispatch } from "../app/hooks";
import { toggleComplete, removeProduct } from "../app/productSlice";
import { increment, decrement } from "../app/counterSlice";
import { Counter } from "./Counter";

interface ProductItemProps {
  id: string,
  title: string,
  counter: number,
  completed: boolean,
}

export const ProductItem: React.FC<ProductItemProps> = ({ id, title, counter, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li> 
      <div className="form-checkbox">     
        <input 
          className='checkbox'
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleComplete(id))}
        />
        <label>{title}</label>
      </div>
      <div className="form-checkbox"> 
      <Counter/>
      {/* <div className='counter'>
        <button
          className='button'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className='value'>{counter}</span>
        <button
          className='button'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div> */}
        <span onClick={() => dispatch(removeProduct(id))}>&times;</span>
      </div>
    </li>
  )
}
