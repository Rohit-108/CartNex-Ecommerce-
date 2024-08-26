import a from "../assets/a.png"
import b from "../assets/b.png"
const ChangePassword = () => {
  return (
    <>
      <div className="item-body dashboard-wrapper w-full">
        <div className="w-full changepassword">
          <div className="w-full flex xl:flex-row flex-col-reverse space-x-1 xl:items-center">
            <div className="w-[397px] mb-10 ">
              <div className="input-field mb-6">
                <label className="input-label text-gray-400 text-sm block  mb-2.5 font-semibold" >Old Password*</label>
                <div className="input-wrapper border border-[#E8E8E8] w-full h-[58px] overflow-hidden relative">
                  <input placeholder="...." className="input-field placeholder:text-8xl text-base px-4 text-gray-700 w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none" type="password" />
                  <div className="absolute right-6 bottom-[17px] z-9999 cursor-pointer">
                    <img src={a} alt="showpassword" />
                  </div>
                </div>
              </div>
              <div className="input-field mb-6">
                <label className="input-label text-gray-400 font-semibold text-sm block  mb-2.5" >New Password*</label>
                <div className="input-wrapper border border-[#E8E8E8] w-full h-[58px] overflow-hidden relative">
                  <input placeholder="...." className="input-field placeholder:text-8xl text-base px-4 text-gray-700 w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none" type="password" />
                  <div className="absolute right-6 bottom-[17px] z-9999 cursor-pointer">
                    <img src={a} alt="showpassword" />
                  </div>
                </div>
              </div>
              <div className="input-field mb-6">
                <label className="input-label text-gray-400 font-semibold text-sm block  mb-2.5" >Re-Enter Password*</label>
                <div className="input-wrapper border border-[#E8E8E8] w-full h-[58px] overflow-hidden relative">
                  <input placeholder="...." className="input-field placeholder:text-8xl text-base px-4 text-gray-700 w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none" type="password" />
                  <div className="absolute right-6 bottom-[17px] z-9999 cursor-pointer">
                    <img src={a} alt="showpassword" />
                  </div>
                </div>
              </div>
              <div className="w-full mt-[30px] flex justify-start">
                <div className="sm:flex sm:space-x-[30px] items-center">
                  <div className="w-[180px] h-[50px]">
                    <button type="button" className="items-center flex text-[13px] font-semibold h-[100%] justify-center w-[100%] bg-blue-500 text-white">
                      <div className="w-full text-sm font-semibold">Update Password</div>
                    </button>
                  </div>
                  <button type="button">
                    <div className="w-full text-sm font-semibold text-black mb-5 sm:mb-0">Cancel</div>
                  </button>
                </div>
              </div>

            </div>
            <div className="flex-1 sm:flex hidden justify-end">
              <img src={b} alt="background" className="h-[320px] w-[311px]" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword;