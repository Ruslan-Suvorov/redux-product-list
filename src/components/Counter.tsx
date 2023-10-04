import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, decrement } from '../app/counterSlice'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
      <div className='counter'>
        <button
          className='button'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className='value'>{count}</span>
        <button
          className='button'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
  )
}