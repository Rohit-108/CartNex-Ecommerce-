
const CheckOut = () => {
  return (
    <div className="checkout-main-content w-[1000px] h-[1000px]">
      <div className="container-x mx-auto">
        <div className="w-full sm:mb-10 mb-5">
          <div className="sm:flex sm:space-x-[18px] s">
            <div className="sm:w-1/2 w-full mb-5 h-[70px]">
              <a href="#">
                <div className="w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center">
                  <span className="text-[15px] font-medium">Log into your Account</span>
                </div>
              </a>
            </div>
            <div className="flex-1 h-[70px]">
              <a href="#">
                <div className="w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center">
                  <span className="text-[15px] font-medium">Enter Coupon Code</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex lg:space-x-[30px]">
          <div className="lg:w-1/2 w-full">
            <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">Billing Details</h1>
            <div className="form-area">
              <form>
                <div className="sm:flex sm:space-x-5 items-center mb-6">
                  <div className="sm:w-1/2 mb-5 sm:mb-0">
                    <div className="input-com w-full h-full">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        First Name*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder="Demo Name"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                          value=""
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="input-com w-full h-full">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        Last Name*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder="Demo Name"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                          value=""
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-5 items-center mb-6">
                  <div className="w-1/2">
                    <div className="input-com w-full h-full">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        Email Address*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder="demoemial@gmail.com"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                          value=""
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="input-com w-full h-full">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        Phone Number*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder="012 3 *******"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                          value=""
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                    Country*
                  </h1>
                  <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                    <span className="text-[13px] text-qgraytwo">Select Country</span>
                    <span>
                      <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z" fill="#222222"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-full">
                    <div className="input-com w-full h-full">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        Address*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder="your address here"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                          value=""
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-5 items-center mb-6">
                  <div className="w-1/2">
                    <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                      Town / City*
                    </h1>
                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center">
                      <span className="text-[13px] text-qgraytwo">Miyami Town</span>
                      <span>
                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z" fill="#222222"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="input-com w-full h-full">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        Postcode / ZIP*
                      </label>
                      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                        <input
                          placeholder=""
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                          value=""
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 items-center mb-10">
                  <div>
                    <input type="checkbox" name="" id="create" />
                  </div>
                  <label htmlFor="create" className="text-qblack text-[15px] select-none">
                    Create an account?
                  </label>
                </div>
                <div>
                  <h1 className="text-2xl text-qblack font-medium mb-3">Billing Details</h1>
                  <div className="flex space-x-2 items-center mb-10">
                    <div>
                      <input type="checkbox" name="" id="address" />
                    </div>
                    <label htmlFor="address" className="text-qblack text-[15px] select-none">
                      Ship to a different address
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">Order Summary</h1>
            <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
              <div className="flex mb-7">
                <div className="flex-1">
                  <h1 className="text-[15px] text-qblack">Product Name</h1>
                </div>
                <div className="flex-1 flex justify-end">
                  <h1 className="text-[15px] text-qblack text-right">Price</h1>
                </div>
              </div>
              <div className="flex mb-7">
                <div className="flex-1">
                  <h1 className="text-[15px] text-qblack">Product Name</h1>
                </div>
                <div className="flex-1 flex justify-end">
                  <h1 className="text-[15px] text-qblack text-right">Price</h1>
                </div>
              </div>
              <div className="flex mb-7">
                <div className="flex-1">
                  <h1 className="text-[15px] text-qblack">Product Name</h1>
                </div>
                <div className="flex-1 flex justify-end">
                  <h1 className="text-[15px] text-qblack text-right">Price</h1>
                </div>
              </div>
              <div className="flex mb-7">
                <div className="flex-1">
                  <h1 className="text-[15px] text-qblack">Product Name</h1>
                </div>
                <div className="flex-1 flex justify-end">
                  <h1 className="text-[15px] text-qblack text-right">Price</h1>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-[15px] text-qblack font-medium">Total:</h1>
                <h1 className="text-[15px] text-qblack font-medium">$Price</h1>
              </div>
              <div>
                <button className="w-full text-white text-[15px] py-[13px] px-6 bg-primary-orange rounded-md border border-[#d07a20]">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
