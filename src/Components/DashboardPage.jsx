import { RiLuggageCartFill } from "react-icons/ri";

const DashboardPage = () => {
  return (
    <>
         <div className="item-body dashboard-wrapper w-auto">
                            
                            <div className="welcome-msg w-full">
                                <div>
                                    <p className="text-black text-lg">Hello, User</p>
                                    <h1 className="font-bold text-[25px] text-black">Wellcome to Your Profile</h1>
                                </div>
                            </div>
                            <div className="w-full flex gap-x-10 items-center mt-3">
                                <div className="w-[255px] h-[205px] bg-black group hover:bg-yellow-500 transition-all duration-300 ease-in-out p-6 hover:cursor-pointer">
                                    <div className="w-[60px] h-[60px] rounded bg-white flex justify-center items-center">
                                        <span > <RiLuggageCartFill className="h-[60px]w-[60px]" /></span>
                                    </div>
                                    <p className="text-xl text-white group-hover:text-black mt-5">New Orders</p>
                                    <span className="text-[40px] text-white group-hover:text-black font-bold leading-none mt-1 block">656</span>
                                </div>
                                <div className="w-[255px] h-[205px] bg-black group hover:bg-green-500 transition-all duration-300 hover:cursor-pointer ease-in-out p-6">
                                <div className="w-[60px] h-[60px] rounded bg-white flex justify-center items-center">
                                        <span></span>
                                    </div>
                                    <p className="text-xl text-white group-hover:text-black mt-5">New Orders</p>
                                    <span className="text-[40px] text-white group-hover:text-black font-bold leading-none mt-1 block">656</span>
                                </div>
                                <div className="w-[255px] h-[205px] bg-black group hover:bg-blue-500 transition-all duration-300 ease-in-out p-6"><div className="w-[60px] h-[60px] rounded bg-white flex justify-center items-center">
                                        <span></span>
                                    </div>
                                    <p className="text-xl text-white group-hover:text-black mt-5">New Orders</p>
                                    <span className="text-[40px] text-white group-hover:text-black font-bold leading-none mt-1 block">656</span></div>
                            </div>
                            <div className="dashboard-info mt-8 flex  items-center gap-x-12 bg-blue-50 px-7 py-7 w-full">
<div>
<p className="title text-[22px] font-semibold">Personal Information</p>
<div className="mt-5">
  <table>
    <tbody className="flex flex-col">
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>Name:</div>
        </td>
        <td className="text-base text-black font-medium">Rohit Sharma </td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>Email:</div>
        </td>
        <td className="text-base text-qblack font-medium">testeteyertyt@gmail.com</td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>Phone:</div>
        </td>
        <td className="text-base text-qblack font-medium">9027748842</td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>City:</div>
        </td>
        <td className="text-base text-qblack font-medium">Delhi, India</td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>Zip:</div>
        </td>
        <td className="text-base text-qblack font-medium">201009</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

<div className="w-[1px] h-[164px] bg-[#E4E4E4]"></div>


<div className="">
<p className="title text-[22px] font-semibold">Shop Info</p>
<div className="mt-5">
  <table>
    <tbody className="flex flex-col">
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>Name:</div>
        </td>
        <td className="text-base text-qblack font-medium">Rohit Shop</td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>Email:</div>
        </td>
        <td className="text-base text-qblack font-medium">tesfdsgdsfhgfjst@gmail.com</td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>Phone:</div>
        </td>
        <td className="text-base text-qblack font-medium">9027748842</td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600 w-[100px] block">
          <div>City:</div>
        </td>
        <td className="text-base text-qblack font-medium">Delhi, India</td>
      </tr>
      <tr className="inline-flex mb-5">
        <td className="text-base text-gray-600w-[100px] block">
          <div>Zip:</div>
        </td>
        <td className="text-base text-qblack font-medium">201009</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

</div>
                        </div>
    </>
  )
}

export default DashboardPage