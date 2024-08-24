
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";



const AddToCartSingleProductBtn = ({ product } ) => {
    const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product))
    toast.success("Product added to the cart");
  };
  return (
    <button
      onClick={handleAddToCart}
      className="btn w-[200px] text-lg border border-gray-300 border-1 font-normal bg-white text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 transition-all uppercase ease-in max-[500px]:w-full rounded-lg"
    >
      Add to cart
    </button>
  );
};

export default AddToCartSingleProductBtn;
