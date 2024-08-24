import WishlistData from "./WishlistData";

const Cart = () => {
 
  return (
    <div className="container-max py-8 pb-16 w-[1080px] h-[850] mx-40">
      <h1 className="text-2xl my-4 font-semibold">Cart</h1>
      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        <WishlistData />
        
      </div>
    </div>
  );
};

export default Cart;
