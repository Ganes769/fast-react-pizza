import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="item-center flex gap-1  md:gap-3">
      <Button onClick={() => dispatch(increaseQuantity(pizzaId))} type="round">
        +
      </Button>
      <span>{currentQuantity}</span>
      <Button onClick={() => dispatch(decreaseQuantity(pizzaId))} type="round">
        -
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
