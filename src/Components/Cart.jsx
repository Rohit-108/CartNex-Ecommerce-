import CartData from "./CartData"
import OrderDetails from "./OrderDetails";
import { useSelector } from 'react-redux';
import { selectItemsInCart } from '../utils/cartSlice';

const cart = () => {
  const cartItems = useSelector(selectItemsInCart);
  return (
    <>
      <div className="container-max py-8 pb-16 w-full ">
        <h1 className="text-2xl my-4 font-semibold">Cart</h1>
        <div className="min-h-[60vh] pb-8 md:flex gap-8 mx-10 w-full">
          <CartData />
          {cartItems && cartItems.length !== 0 && <OrderDetails />}
        </div>
      </div>
    </>
  )
}

export default cart