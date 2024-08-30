/* eslint-disable react/prop-types */
import { StockAvailability, ProductCardRating, SingleProductionDynamic, AddToWishlistButton } from "./index";
import { FaSquareTwitter, FaSquarePinterest } from "react-icons/fa6";
const SingleProductPage = ({ product }) => {

  console.log("product Name : ", product);

  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-center gap-x-16 pt-10 max-lg:flex-col items-center gap-y-5 px-5">
          <div>
            <img
              src={product?.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg"}
              width={500}
              height={500}
              alt="main image"
              className="w-auto h-auto"
            />
            <div className="flex justify-around mt-5 flex-wrap gap-y-1 max-[500px]:justify-center max-[500px]:gap-x-1">
              {product?.images?.map((imageItem, index) => (
                <img
                  key={index}
                  src={`/${imageItem}`}
                  width={100}
                  height={100}
                  alt={`product image ${index}`}
                  className="w-auto h-auto"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-7 text-black max-[500px]:text-center">
            <ProductCardRating rating={product?.rating} />
            <h1 className="text-3xl">{product?.title}</h1>
            <p className="text-xl font-semibold">{product?.price}</p>
            <StockAvailability stock={94} inStock={product?.inStock} />
            <SingleProductionDynamic product={product} />
            <div className="flex flex-col gap-y-2 max-[500px]:items-center">
              <AddToWishlistButton product={product} slug={product?.slug} />
              <p className="text-lg">
                SKU: <span className="ml-1">abccd-18</span>
              </p>
              <div className="text-lg flex gap-x-2">
                <span>Share:</span>
                <div className="flex items-center gap-x-1 text-2xl">

                  <FaSquareTwitter />
                  <FaSquarePinterest />
                </div>
              </div>
              <div className="flex gap-x-2">
                <img
                  src="/visa.svg"
                  width={50}
                  height={50}
                  alt="visa icon"
                  className="w-auto h-auto"
                />
                <img
                  src="/mastercard.svg"
                  width={50}
                  height={50}
                  alt="mastercard icon"
                  className="h-auto w-auto"
                />
                <img
                  src="/ae.svg"
                  width={50}
                  height={50}
                  alt="american express icon"
                  className="h-auto w-auto"
                />
                <img
                  src="/paypal.svg"
                  width={50}
                  height={50}
                  alt="paypal icon"
                  className="w-auto h-auto"
                />
                <img
                  src="/dinersclub.svg"
                  width={50}
                  height={50}
                  alt="diners club icon"
                  className="h-auto w-auto"
                />
                <img
                  src="/discover.svg"
                  width={50}
                  height={50}
                  alt="discover icon"
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
