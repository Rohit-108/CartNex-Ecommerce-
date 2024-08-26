import { ProductCardRating } from "../Components";
import { productList } from "../utils/constant";

const Review = () => {
    return (
        <div className="item-body dashboard-wrapper w-full">
            <div className="review-tab-wrapper w-full">
                <div className="grid grid-cols-2 gap-8">
                    {productList.length > 0 ? (
                        productList.slice(0, 6).map((product) => (
                            <div key={product.id} className="item">
                                <div className="product-row-card-style-one w-full h-[170px] bg-white group relative overflow-hidden">
                                    <div className="flex space-x-2 items-center w-full h-full p-2">
                                        <div className="w-1/3 h-full">
                                            <img
                                                src={product.mainImage}
                                                alt={product.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center h-full">
                                            <div>
                                                <span className="text-qgray text-sm mb-1.5 block">Aug 22, 2024</span>
                                                <div className="flex mb-1.5">
                                                    <span className="text-yellow-400"><ProductCardRating productRating={product?.rating} /></span>
                                                </div>
                                                <a href="/single-product">
                                                    <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600">
                                                        {product.title}
                                                    </p>
                                                </a>
                                                <p className="price mb-[26px] text-sm text-qgray line-clamp-2">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Review;
