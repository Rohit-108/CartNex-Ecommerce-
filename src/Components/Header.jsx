import { Link } from "react-router-dom"
import { GoSearch } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdOutlineAssignmentReturned } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";






const Header = () => {


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartItem = useSelector(store =>store.cart.items)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <header className="h-32 bg-white flex items-center sticky top-0 w-[100vw]  box-border px-16 max-[1320px]:px-16 py-3 z-[99999] lg:max-w-[1600px] " >
        <div className="flex flex-row items-center w-full justify-around">
          <div className="flex items-center ml-24 gap-12 w-1/2">
          <div className="flex justify-center
          items-center">
          <p className=" w-[160px
        ]  h-10 m-0 p-0"><Link to="#">CartNex</Link></p>
          </div>
            
           
            <div className="w-full rounded-[8px] h-10 pl-5 text-xl flex items-center gap-2 justify-start bg-[#f0f5ff] text-gray-700">
              <GoSearch />
              <input type="text" 
              placeholder="Search for products, Brands and More" className="bg-[#f0f5ff] w-full pr-5 text-gray-800 font-[400] input input-bordered rounded-r-none outline-none focus:outline-none max-sm:w-full"/>
              <button  className="btn h-full font-[400] px-2 justify-center items-center bg-blue-500 text-white rounded-l-none rounded-r-xl hover:bg-blue-600">
        Search
      </button>
            </div>
            
            </div>
          <div className="flex items-center w-1/2 justify-evenly text-md">
            <div className="text-black text-center text-[16px] leading-6">
            <Link to="/registration" className="flex justify-evenly gap-1 items-center cursor-pointer hover:bg-blue-700 text-lg hover:rounded-lg hover:text-white px-2 py-2" onClick={toggleDropdown} >
            <div><HiOutlineUserCircle /></div> 
            <div>Login</div>
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
            <div>
            <Link to="/cart" className="flex justify-center  gap-1 cursor-pointer p-2 relative md:px-4 hover:bg-gray-50 rounded-md  items-center">
            <div><PiShoppingCartLight /></div>
            <div className=' md:block'>Cart:{
                <p className='absolute -top-1 -right-1 bg-blue-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
                  {cartItem.length}
                </p>
              }
            </div>
            
           
            </Link>
            </div>
            
          </div>

</div>
       
    </header>
  )
}

export default Header