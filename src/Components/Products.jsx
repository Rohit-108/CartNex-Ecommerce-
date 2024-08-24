import ProductCard from "./ProductCard";
import { productList } from "../constant";
import { Link
  
 } from "react-router-dom";

const Products = () => {
  return (
    <>
     <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
          {productList.length > 0 ? (
            productList.map((product) => (
              <Link key={product?.id} to={`/product/${product?.id}`}>
            <ProductCard {...product} color="black" />
          </Link>
            ))
          ) : (
            <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
              No products found for specified query
            </h3>
          )}
        </div>
    </>
  );
};

export default Products;
