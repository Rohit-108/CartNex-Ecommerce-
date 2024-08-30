/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import ProductCardRating from "./ProductCardRating";
import { addItemToWishlist } from "../store/wishlistSlice";

const ProductCard = ({ product }) => {
  const { mainImage, price, rating, title, id } = product;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(product));
  };
  const handleAddItemWish = () => {
    dispatch(addItemToWishlist(product));
  };

  return (
    <div className="flex flex-col items-center gap-y-2">
      <Link to={`/product/${id}`}>
        <img
          src={mainImage}
          className="w-auto h-[300px]"
          alt={title}
        />
      </Link>
      <Link to={`/product/${id}`} className="text-white">
        {title}
      </Link>
      <p className="text-white">₹{price}</p>
      <ProductCardRating productRating={rating} />
      <button
        className="flex justify-center items-center w-full uppercase bg-white px-0 py-2 text-base border border-gray-300 font-bold text-blue-600 shadow-sm hover:bg-black focus:outline-none focus:ring-2"
        onClick={handleAddItem}
      >
        Add to Cart
      </button>
      <button
        className="flex justify-center items-center w-full uppercase bg-white px-0 py-2 text-base border border-gray-300 font-bold text-blue-600 shadow-sm hover:bg-black focus:outline-none focus:ring-2"
        onClick={handleAddItemWish}
      >
        Add to wishlist
      </button>
    </div>
  );
};

export default ProductCard;