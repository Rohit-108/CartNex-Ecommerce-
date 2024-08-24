

const PaymentMethods = () => {
  return (
    <div className="item-body dashboard-wrapper w-full">
      <div className="items-wrapper-bank-payment w-full">
        <ul className="items">
          {[
            { src: "/assets/images/card-1.svg", alt: "payment", id: "b26bpg" },
            { src: "/assets/images/card-2.svg", alt: "payment", id: "ny3hlk" },
            { src: "/assets/images/card-3.svg", alt: "payment", id: "0tkqro" },
            { src: "/assets/images/card-4.svg", alt: "payment", id: "di37o" },
          ].map((card, index) => (
            <li
              key={index}
              className="sm:flex justify-between items-center w-full py-[30px] border-b border-light-purple"
            >
              <div className="flex space-x-5 items-center mb-3 sm:mb-0">
                <div className="sm:w-[120px] sm:h-[120px] flex items-center justify-center rounded-full sm:bg-[#F2F2F2]">
                  <img src={card.src} alt={card.alt} />
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="sm:text-xl text-lg tracking-wide text-qblack font-bold">
                    Datch Bangla Bank Ltd
                  </p>
                  <p className="text-thin-light-gray sm:text-18 text-sm tracking-wide">
                    Bank **********5535
                  </p>
                  <p className="sm:text-18 text-sm tracking-wide text-green-500">
                    Verified
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-[116px] sm:h-[46px] h-[40px] bg-qyellow text-qblack font-medium sm:text-18 text-sm tracking-wide"
                  // Add an onClick handler if needed
                >
                  <span>Manage</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <button
            type="button"
            className="text-white bg-qblack w-[126px] h-[50px] text-sm font-semibold"
            // Add an onClick handler if needed
          >
            Add Card
          </button>
          <button
            type="button"
            className="text-qblack w-[126px] h-[50px] text-sm font-semibold border border-qblack"
            // Add an onClick handler if needed
          >
            Add Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
