
const Order= () => {
  const orders = [
    { id: '#354', date: 'Feb 05, 2021', status: 'Completed', amount: '$757' },
    // Add more order data here if needed
  ];

  return (

      <div className="item-body dashboard-wrapper w-full">
        <div className="relative w-full overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom">
                <th className="py-4 block whitespace-nowrap text-center">Order</th>
                <th className="py-4 whitespace-nowrap text-center">Date</th>
                <th className="py-4 whitespace-nowrap text-center">Status</th>
                <th className="py-4 whitespace-nowrap text-center">Amount</th>
                <th className="py-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="text-center py-4">
                    <span className="text-lg text-qgray font-medium">{order.id}</span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-qgray whitespace-nowrap">{order.date}</span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">{order.status}</span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-qblack whitespace-nowrap px-2">{order.amount}</span>
                  </td>
                  <td className="text-center py-4">
                    <button type="button" className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
   
  );
};

export default Order;
