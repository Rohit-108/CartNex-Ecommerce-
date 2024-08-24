
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import BuyNowBtn from "./BuyNowBtn";
import { increaseItemQuantity, decreaseItemQuantity, selectItemsInCart } from "../utils/cartSlice";

const SingleProductionDynamic = ({ product }) => {

  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseItemQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity({ id }));
  };
  return (
    <>
     <div className="flex items-center">
     {cartItems.map((item) => (
      <li key={item.id} className="flex gap-4 justify-between max-w-[600px] my-4">
      <div className="flex items-center">
                <button
                  className="bg-blue-500 ${item.quantity === 1 ? 'bg-blue-500/50 cursor-not-allowed' : '' text-white font-bold w-8 h-8 rounded-md"
                  disabled={item.quantity === 1}
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <p className="font-bold w-8 h-8 flex justify-center items-center">
                  {item.quantity}
                </p>
                <button
                  className="bg-blue-500 text-white font-bold w-8 h-8 rounded-md"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              </li>
     ))}
        <div className="flex gap-x-5 max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-y-1 h-12">
          <AddToCart
           
          />
          <BuyNowBtn
            
          />
        </div>
        </div>
    </>
  );
};

export default SingleProductionDynamic;