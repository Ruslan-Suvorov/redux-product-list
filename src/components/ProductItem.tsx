import { Product } from "../app/productSlice";

type ProductItemType = Product & {
  onRemove: () => void;
  onAmountChange: (newAmount: number) => void;
  onToggleComplete: () => void;
}

export const ProductItem: React.FC<ProductItemType> = ({ 
  id,
  title,
  amount,
  completed,
  onAmountChange,
  onToggleComplete,
  onRemove
}) => {
  return (
    <li> 
      <div className="form-checkbox">     
        <input 
          className='checkbox'
          type='checkbox'
          checked={completed}
          onChange={() => onToggleComplete()}
        />
        <label>{title}</label>
      </div>
      <div className="form-checkbox"> 
      <div className='counter'>
        <button
          className='button'
          aria-label="Decrement value"
          onClick={() => onAmountChange(amount-1)}
        >
          -
        </button>
        <p className='value'>{amount}</p>
        <button
          className='button'
          aria-label="Increment value"
          onClick={() => onAmountChange(amount+1)}
        >
          +
        </button>
      </div>
        <span onClick={() => onRemove()}>&times;</span>
      </div>
    </li>
  )
}
