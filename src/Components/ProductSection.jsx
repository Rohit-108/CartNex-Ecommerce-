import ProductCard from "./ProductCard";
import { productList } from "../constant"; 
import Heading from "./Heading";


const ProductSection = () => {
  return (
    <div className="bg-blue-500 border-t-4 border:white">
      <div className="max-w-screen-2xl mx-auto pt-20">
      <Heading title="FEATURED PRODUCTS" />
        <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
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
