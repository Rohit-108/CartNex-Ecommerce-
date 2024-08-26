import { useEffect, useState } from "react";
import { productList } from "../utils/constant"; // Import the hardcoded JSON data

const useResData = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        try {
            const resData = checkJsonData(productList);

            setAllProducts(resData);
            setFilteredProducts(resData);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
    function checkJsonData(jsonData) {
        return jsonData;
    }

    return [allProducts, filteredProducts];
};

export default useResData;
