import { MdDashboard } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { MdPayments } from "react-icons/md";


import { Link } from "react-router-dom"


const SellerDashboard = () => {
  return (
    <>
        <div className="w-full pt-2 pb-0 bg-blue-50">
                <div className="container-x mx-24 ">
                    <div className="w-full my-4">
                    <div className="font-400 text-[13px] text-black mb-[23px]">
                        <span><Link><span className="mx-1 capitalize">home</span></Link>
                        <span className="">/</span></span>
                        <span><Link><span className="mx-1 capitalize">Profile</span></Link>
                        <span className="">/</span></span>
                    </div>
                    <div className="w-full bg-white px-10 py-9">
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-[22px] font-bold text-black">Your Dashboard</h1>
                        </div>
                        <div className="w-full mt-8 flex space-x-10">
                            <div className="w-[236px] min-h-[600px] border-[rgba(0, 0, 0, 0.1)]">
                            <div className="flex flex-col space-y-10">
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black cursor-pointer">
                                        <span className="text-lg"><MdDashboard /></span>
                                            <span className="font-normal text-base">Dashboard</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><BsFillPersonFill /></span>
                                            <span className="font-normal text-base">Personal Info</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><MdPayments /></span>
                                            <span className="font-normal text-base">Payment Method</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><MdShoppingCart /></span>
                                            <span className="font-normal text-base">Order</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><FaHeart /></span>
                                            <span className="font-normal text-base">Wishlist</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><MdReviews /></span>
                                            <span className="font-normal text-base">Reviews</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><FaAddressCard /></span>
                                            <span className="font-normal text-base">Address</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><FaLock/></span>
                                            <span className="font-normal text-base">Change Password</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"><RiLogoutCircleRFill /></span>
                                            <span className="font-normal text-base">Logout</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="">
                                        <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                            <span className="text-lg"></span>
                                            <span className="font-normal text-base">Dashboard</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            </div>
                            <div className="flex-1"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default SellerDashboard