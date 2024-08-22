
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ProductCardRating from "./ProductCardRating";

const ProductCard = ({ product }) => {
  const { mainImage, price, rating, slug, title } = product;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="flex flex-col items-center gap-y-2">
      <Link to={`/product/${slug}`}>
        <img
          src={mainImage ? `/${mainImage}` : "/product_placeholder.jpg"}
          className="w-auto h-[300px]"
          alt={title}
        />
      </Link>
      <Link to={`/product/${slug}`} className="text-white">
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
    </div>
  );
};

export default ProductCard;
