import { Link } from "react-router-dom"
import { GoSearch } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAssignmentReturned } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { productList } from "../utils/constant";





const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const cartItem = useSelector((store) => store.cart.items);
  const wishItem = useSelector((store) => store.wishlist.items);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = () => {
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <header className="bg-white sticky top-0 z-[99999]">
      {/* Top Bar */}
      <div className="bg-blue-500">
        <div className="h-10 text-white px-4 flex items-center justify-between lg:px-12 max-lg:flex-col max-lg:h-auto">
          <ul className="flex items-center gap-x-5 text-sm max-[370px]:gap-x-2">
            <li className="flex items-center gap-x-2">
              <FaHeadphones className="text-white" />
              <span>+91 9027748842</span>
            </li>
            <li className="flex items-center gap-x-2">
              <FaRegEnvelope className="text-white" />
              <span>test@email.com</span>
            </li>
          </ul>
          <ul className="flex items-center gap-x-5 text-sm mt-2 max-lg:mt-4">
            <li>
              <Link to="/login" className="flex items-center gap-x-2">
                <FaRegUser className="text-white" />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to="/registration" className="flex items-center gap-x-2">
                <FaRegUser className="text-white" />
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-4 lg:px-12 lg:py-6">
        {/* Logo and Search Bar */}
        <div className="flex flex-wrap items-center w-full lg:w-1/2 gap-4">
          <Link to="#" className="text-3xl font-bold">
            Cart<span className="text-blue-500">Nex</span>
          </Link>
          <div className="flex items-center w-full lg:w-2/3 bg-gray-100 rounded-md p-2">
            <GoSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products, Brands and More"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow bg-transparent text-gray-700 outline-none pl-2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-evenly w-full lg:w-1/2 gap-4 mt-4 lg:mt-0">
          <Link
            to="/sellerdashboard"
            className="flex items-center gap-x-2 text-lg hover:text-blue-500"
            onClick={toggleDropdown}
          >
            <HiOutlineUserCircle />
            <span>Account</span>
            <MdKeyboardArrowDown />
          </Link>
          <Link
            to=""
            className="flex items-center gap-x-2 text-lg hover:text-blue-500"
          >
            <MdOutlineAssignmentReturned />
            <span>Returns & Orders</span>
          </Link>
          <Link
            to="/seller-registration"
            className="flex items-center gap-x-2 text-lg hover:text-blue-500"
          >
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt="seller"
              className="w-6"
            />
            <span>Become a Seller</span>
          </Link>
          <div className="flex items-center gap-x-4">
            <Link
              to="/cart"
              className="relative text-xl hover:text-blue-500"
            >
              <FiShoppingCart />
              {cartItem.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItem.length}
                </span>
              )}
            </Link>
            <Link
              to="/wishlistpage"
              className="relative text-xl hover:text-blue-500"
            >
              <FaRegHeart />
              {wishItem.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishItem.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/* Search Results */}
      {filteredProducts.length > 0 && (
        <div className="bg-white shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">Search Results:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <li key={product.id} className="border p-4 rounded-md">
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-full h-32 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500">Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
