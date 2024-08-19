import { Link } from "react-router-dom";
import ProductCardRating from "./ProductCardRating";

const ProductCard = ({ product }) => {
  const { mainImage, price, rating, slug, title } = product;

  return (
    <div className="flex flex-col items-center gap-y-2">
    <Link>
      <img 
        src={mainImage ? `/${mainImage}` : "/product_placeholder.jpg"} 
        width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-[300px]"
          alt={title} 
      /></Link>
      <Link
        to={`/product/${slug}`}
        className="text-white"
      >
        {title}
      </Link>
      <p className="text-white">
        ${price}
      </p>
      <ProductCardRating productRating={rating} />
      <Link
        to={`/product/${slug}`}
        className="block flex justify-center items-center w-full uppercase bg-white px-0 py-2 text-base border border-black border-gray-300 font-bold text-blue-600 shadow-sm hover:bg-black hover:bg-gray-100 focus:outline-none focus:ring-2"
      >
        View product
      </Link>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
