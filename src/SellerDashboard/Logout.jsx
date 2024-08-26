import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` for React Router v6

const LogoutComponent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate(); // Use `useNavigate` hook

    const handleLogout = () => {
        setShowPopup(true);
        setTimeout(() => {
            // Simulate logout process (you would actually handle authentication/logout here)
            navigate('/login'); // Redirect to the login page using navigate
        }, 2000); // Redirect after 2 seconds to show the popup animation
    };

    return (
        <div className="relative">
            <button
                onClick={handleLogout}
                className=" hidden bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
                Logout
            </button>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 scale-100 opacity-100 animate-popup">
                        <h2 className="text-lg font-semibold mb-4">Logging out...</h2>
                        <p className="text-gray-600">You will be redirected to the login page shortly.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LogoutComponent;
