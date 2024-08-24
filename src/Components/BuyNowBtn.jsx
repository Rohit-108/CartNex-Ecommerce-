import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addItem } from "../utils/cartSlice"; // Import your cartSlice's addItem action

const BuyNowBtn = ({ product }) => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const dispatch = useDispatch();

  // Handle adding the product to the cart and navigating to the checkout page
  const handleAddToCart = () => {
    dispatch(addItem(product));
    toast.success("Product added to the cart");
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn w-[200px] text-lg border border-blue-500 hover:border-blue-500 border-1 font-normal bg-blue-500 text-white hover:bg-white hover:scale-110 hover:text-blue-500 transition-all uppercase ease-in max-[500px]:w-full rounded-lg"
    >
      Buy Now
    </button>
  );
};

export default BuyNowBtn;
