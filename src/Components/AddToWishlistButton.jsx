import { FaHeart } from "react-icons/fa6";
import { addItemToWishlist } from "../utils/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AddToWishlistBtn = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // Sync the wishlist with localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = () => {
    dispatch(addItemToWishlist(product));
  };

  return (
    <p className="flex items-center gap-x-2 cursor-pointer" onClick={addToWishlist}>
      <FaHeart className="text-xl text-custom-black" />
      <span className="text-lg">ADD TO WISHLIST</span>
    </p>
  );
};

export default AddToWishlistBtn;
