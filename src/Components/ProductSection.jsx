import { productList } from "../utils/constant";
import Heading from "./Heading";
import ProductCard from "./ProductCard";


const ProductSection = () => {
  return (
    <div className="bg-blue-500 border-t-4 border:white">
      <div className="max-w-screen-2xl mx-auto pt-20">
        <Heading title="FEATURED PRODUCTS" />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center max-w-screen-2xl mx-auto py-10 xl:gap-[30px] px-10 gap-5   ">
          {productList.length > 0 ? (
            productList.map((product) => (
              <ProductCard key={product.id} product={product} color="black" />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;