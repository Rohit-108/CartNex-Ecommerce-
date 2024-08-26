import { MdDashboard } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { useState } from "react";
import { PersonalInfo, DashboardPage, PaymentMethod, Review, ChangePassword, Order } from "../Components/index"
import AddressManage from "./AddressManage";
import Logout from "../SellerDashboard/Logout"
import { useNavigate } from 'react-router-dom';
import AddProductPage from "../SellerDashboard/AddProductPage"


import { Link } from "react-router-dom"




const SellerDashboard = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState('DashboardPage');
    const handleLogout = () => {
        setShowPopup(true);
        setTimeout(() => {
            // Simulate logout process (you would actually handle authentication/logout here)
            navigate('/login'); // Redirect to the login page using navigate
        }, 2000); // Redirect after 2 seconds to show the popup animation
    };

    const renderComponent = () => {
        switch (activeComponent) {

            case 'DashboardPage':
                return <DashboardPage />;
            case 'PersonalInfo':
                return <PersonalInfo />;
            case 'Order':
                return <Order />;
            case 'PaymentMethod':
                return <PaymentMethod />;
            case 'Review':
                return <Review />;
            case 'ChangePassword':
                return <ChangePassword />;
            case 'AddressManage':
                return <AddressManage />;
            case 'Logout':
                return <Logout />;
            case 'AddProductPage':
                return <AddProductPage />;

            // default:
            // return <DashboardPage />;
        }
    };


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
                        <div className="w-[1200px] bg-white px-10 py-9">
                            <div className="w-full flex justify-between items-center">
                                <h1 className="text-[22px] font-bold text-black">Your Dashboard</h1>
                            </div>
                            <div className="w-full mt-8 flex space-x-10">
                                <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                                    <div className="flex flex-col space-y-10">
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('DashboardPage')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black cursor-pointer">
                                                    <span className="text-lg"><MdDashboard /></span>
                                                    <span className="font-normal text-base">Dashboard</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('PersonalInfo')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><BsFillPersonFill /></span>
                                                    <span className="font-normal text-base">Personal Info</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('PaymentMethod')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><MdPayments /></span>
                                                    <span className="font-normal text-base">Payment Method</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('Order')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><MdShoppingCart /></span>
                                                    <span className="font-normal text-base">Order</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('AddProductPage')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><FaHeart /></span>
                                                    <span className="font-normal text-base">Add Product</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('Review')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><MdReviews /></span>
                                                    <span className="font-normal text-base">Reviews</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('AddressManage')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><FaAddressCard /></span>
                                                    <span className="font-normal text-base">Address</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('ChangePassword')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><FaLock /></span>
                                                    <span className="font-normal text-base">Change Password</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="#" onClick={() => setActiveComponent('Logout')}>
                                                <div className="flex space-x-3 items-center text-gray-600 hover:text-black">
                                                    <span className="text-lg"><RiLogoutCircleRFill /></span>
                                                    <span className="font-normal text-base " onClick={handleLogout}>Logout</span>
                                                    {showPopup && (
                                                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                                            <div className="text-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 scale-100 opacity-100 animate-popup bg-blue-500">
                                                                <h2 className="text-lg font-semibold mb-4">Logging out...</h2>
                                                                <p className="text-white">You will be redirected to the login page shortly.</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="flex-1">
                                    {renderComponent()}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SellerDashboard