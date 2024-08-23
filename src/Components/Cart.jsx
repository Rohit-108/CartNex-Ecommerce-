import CartData from "./CartData";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);

  return (
    <div className="container-max py-8 pb-16 w-[1080px] h-[850] mx-40">
      <h1 className="text-2xl my-4 font-semibold">Cart</h1>
      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        <CartData />
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default Cart;
