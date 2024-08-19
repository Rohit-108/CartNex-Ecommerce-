import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCardRating = ({ productRating }) => {
  const clampedRating = Math.min(5, Math.max(0, productRating));

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          {index < clampedRating ? (
            <AiFillStar className="text-yellow-400 text-xl" />
          ) : (
            <AiOutlineStar className="text-yellow-400 text-xl" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCardRating;
