import { useSelector } from 'react-redux';
import { selectItemsInCart, selectTotalPrice } from '../utils/cartSlice';
import { Link } from 'react-router-dom';


const OrderSummary = () => {
  const cartItems = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPrice);
  const discount = totalPrice * 0.1; 
  const deliveryCharges = totalPrice * 0.05;
  const totalAmt = totalPrice - discount + deliveryCharges;

  return (
    <div className='w-[437px] h-[435px] sticky top-40 p-8 rounded-md border shadow-md my-8 md:m-0'>
      <h2 className='text-xl font-bold border-b pb-4'>Order Summary</h2>
      <div className='py-4 text-lg space-y-4 border-b'>
        <div className='flex justify-between items-center font-semibold'>
          <p className='font-normal'>Price ({cartItems.length} items)</p>
          <p>₹ {totalPrice}</p>
        </div>
        <div className='flex justify-between items-center font-semibold'>
          <p className='font-normal'>Discount (10%)</p>
          <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
        </div>
        <div className='flex justify-between items-center font-semibold'>
          <p className='font-normal'>Delivery charges (5%)</p>
          <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
        </div>
        <p className='text-sm my-2'>
        You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
        </p>
      </div>

      {/* Total Amount */}
      <div className='py-4 border-b'>
        <div className='md:flex justify-between items-center font-bold text-lg md:text-2xl'>
          <h1>Total Amount</h1>
          <h1 className='text-orange-500'>₹ {totalAmt.toFixed(2)}</h1>
        </div>
      </div>

      <Link to="checkout"><button className='w-full block mt-4 uppercase font-bold text-lg bg-blue-600 text-white text-center p-4 rounded-md'>
        Place Order
      </button></Link>
      
    </div>
  );
};

export default OrderSummary;
