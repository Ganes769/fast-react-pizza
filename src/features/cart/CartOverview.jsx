import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { totalCartPrice, totalCartQuantity } from './cartSlice';
function CartOverview() {
  const gettotalCartQuantity = useSelector(totalCartQuantity);
  const getTotalCartprice = useSelector(totalCartPrice);
  if (!gettotalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{gettotalCartQuantity} pizzas</span>
        <span>$ {getTotalCartprice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
