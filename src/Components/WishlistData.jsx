import { useDispatch, useSelector } from "react-redux";
import { removeItemFromWishlist, wishlist} from "../utils/cartSlice";

const WishlistData = () => {
  const cartItems = useSelector(wishlist);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromWishlist({ id }));
  };


  if (cartItems.length === 0) {
    return (
      <div className="flex grow min-h-[60vh] justify-center items-center">
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
    <ul className="basis-7/12">
      {cartItems.map((item) => (
        <li key={item.id} className="flex gap-4 justify-between max-w-[600px] my-4">
          <div className="basis-3/12">
            <img
              src={`/${item.image || 'placeholder.jpg'}`} // Handle if item.image is undefined
              alt={item.title}
              className="w-36 h-36 md:h-auto object-cover block rounded-md aspect-square"
            />
          </div>
          <div className="basis-9/12">
            <p className="text-lg font-semibold text-black">{item.title}</p>
            <p className="hidden md:block">
              {item.description.length > 50
                ? `${item.description.slice(0, 50)}...`
                : item.description}
            </p>
            <p className="my-2 space-x-1">
              <span className="font-semibold">
                ₹
                {parseFloat((item.quantity * parseFloat(item.price)).toFixed(2))}
              </span>
              <span className="text-gray-800 font-normal">
                ({item.price} × {item.quantity})
              </span>
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <p className="font-bold w-8 h-8 flex justify-center items-center">
                  {item.quantity}
                </p>
               
              </div>
              <button
                className="border border-blue-500 text-xs font-semibold text-blue-500 p-2 px-4 rounded-md"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WishlistData;
