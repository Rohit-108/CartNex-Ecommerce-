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






const Header = () => {


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartItem = useSelector(store => store.cart.items)
  const wishItem = useSelector(store => store.wishlist.items)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <header className=" bg-white  sticky max-[1320px]:px-16  z-[99999] lg:max-w-[1600px] --sm-max-width:[480px] --md-max-width:[996px]" >
      <div className="bg-blue-500 sticky">
        <div className="h-10 text-white ml-12 max-lg:px-5 max-lg:h-16 max-[573px]:px-0">
          <div className="flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0">
            <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
              <li className="flex items-center gap-x-2 font-semibold">
                <FaHeadphones className="text-white" />
                <span>+91 9027748842</span>
              </li>
              <li className="flex items-center gap-x-2 font-semibold">
                <FaRegEnvelope className="text-white text-xl" />
                <span>test@email.com</span>
              </li>
            </ul>
            <ul className="flex items-center gap-x-5 h-full max-[370px]:text-sm max-[370px]:gap-x-2 font-semibold">

              <li className="flex items-center">
                <Link to="/login" className="flex items-center gap-x-2 font-semibold">
                  <FaRegUser className="text-white" />
                  <span>Login</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/registration" className="flex items-center gap-x-2 font-semibold">
                  <FaRegUser className="text-white" />
                  <span>Register</span>
                </Link>
              </li>


              <span className="ml-10 text-base"></span>


            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center w-full justify-around h-28">
        <div className="flex items-center ml-24 gap-12 w-1/2">
          <div className="flex justify-center
          items-center">
            <p className=" w-[160px]"><Link to="#" className="items-center text-3xl ">Cart<span className="text-blue-500">Nex</span></Link></p>
          </div>


          <div className="w-full rounded-[8px] h-10 pl-5 text-xl flex items-center gap-2 justify-start bg-[#f0f5ff] text-gray-700">
            <GoSearch />
            <input type="text"
              placeholder="Search for products, Brands and More" className="bg-[#f0f5ff] w-full pr-5 text-gray-800 font-[400] input input-bordered rounded-r-none outline-none focus:outline-none max-sm:w-full" />
            <button className="btn h-full font-[400] px-2 justify-center items-center bg-blue-500 text-white rounded-l-none rounded-r-xl hover:bg-blue-600">
              Search
            </button>
          </div>

        </div>
        <div className="flex items-center w-1/2 justify-evenly text-md">
          <div className="text-black text-center text-[16px] leading-6">
            <Link to="/sellerdashboard" className="flex justify-evenly gap-1 items-center cursor-pointer hover:bg-blue-700 text-lg hover:rounded-lg hover:text-white px-2 py-2" onClick={toggleDropdown} >
              <div><HiOutlineUserCircle /></div>
              <div>Account</div>
              <div><MdKeyboardArrowDown /></div>
            </Link>




          </div>

          <div><Link to="" className="flex justify-center items-center gap-1 cursor-pointer">
            <div><MdOutlineAssignmentReturned /></div>
            <div>Returns & Orders</div>
          </Link></div>
          <div>
            <Link to="/seller-registration" className="flex justify-center items-center gap-1 cursor-pointer">
              <div>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="seller" />
              </div>
              <div>Become a Seller</div>
            </Link>
          </div>
          <div className="flex">
            <Link to="/cart" className="flex justify-center  gap-1 cursor-pointer p-2 relative md:px-4 hover:bg-gray-50 rounded-md  items-center">
              <div className="text-2xl"><FiShoppingCart />
                {
                  <p className='absolute -top-1 -right-1.5 bg-blue-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                    {cartItem.length}
                  </p>
                }</div>



            </Link>
            <Link to="/wishlistpage" className="flex justify-center  gap-1 cursor-pointer p-2 relative md:px-4 hover:bg-gray-50 rounded-md  items-center">
              <div className="text-2xl"><FaRegHeart />
                {
                  <p className='absolute -top-1 -right-1.5 bg-blue-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                    {wishItem.length}
                  </p>
                }</div>



            </Link>
          </div>

        </div>

      </div>

    </header>
  )
}

export default Header