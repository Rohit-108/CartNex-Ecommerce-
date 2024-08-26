import toast from "react-hot-toast";
import { addItem } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BuyNowBtn } from "./index";
import { increaseItemQuantity, decreaseItemQuantity, selectItemsInCart } from "../store/cartSlice";

const SingleProductionDynamic = ({ product }) => {

  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product))
    toast.success("Product added to the cart");
  };

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
          <button
            onClick={handleAddToCart}
            className="btn w-[200px] text-lg border border-gray-300 border-1 font-normal bg-white text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 transition-all uppercase ease-in max-[500px]:w-full rounded-lg"
          >
            Add to cart
          </button>
          <BuyNowBtn

          />
        </div>
      </div>
    </>
  );
};

export default SingleProductionDynamic;