import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity, selectItemsInCart } from "../utils/cartSlice";

const CartData = () => {

  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();


  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseItemQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity({ id }));
  };


  if (cartItems.length === 0) {
    return (
      <div className='flex grow min-h-[60vh] justify-center items-center'>
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (


    <div className="basics-7/12">
      {cartItems.map((item) => (
        <div key={item.id} className="flex  justify-between max-w-[600px] items-center gap-4">
          <div className="basics-3/12">
            <img
              src={`/${item.image}`}
              alt={item.title}
              className="w-32 h-32 md:h-auto object-cover block rounded-md aspect-square"
            /></div>
          <div className="basics-9/12">

            <p className="text-lg font-semibold text-black">{item.title}</p>

            <p className='my-2 space-x-1'>
              <span className='font-semibold'>
                ₹
                {parseFloat(
                  (
                    item.quantity * parseFloat(item.price)
                  ).toFixed(2)
                )}
              </span>
              <span className='text-gray-800 font-normal'>
                ({item.price} × {item.quantity})
              </span>
            </p>


            <p className=" md:block">Quantity: {item.quantity}</p>
          </div>



          <div className="flex justify-between items-center mt-2 gap-x-5">
            <div className="flex items-center">
              <button
                className={
                  'bg-blue-500 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md'
                }
                disabled={item?.quantity === 1}
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                -
              </button>
              <p className='font-bold w-8 h-8 flex justify-center items-center'>
                {item.quantity}
              </p>
              <button
                className='bg-blue-500 text-white font-bold w-8 h-8 rounded-md'
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                +
              </button>
            </div>


            <button
              className='border border-blue-500 text-xs font-semibold text-blue-500 p-2 px-4 rounded-md'

              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartData;
