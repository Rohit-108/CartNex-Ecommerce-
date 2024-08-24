
const PersonalInfo = () => {
  return (
  <>
    <div className="flex flex-col w-full space-y-2 mb-5">
                      <div className="grid grid-cols-2 gap-x-5 w-full">
                        <div>
                          <div className="flex flex-col gap-y-2 pb-4">
                            <lable className="input-label capitalize block  text-gray-500  text-[15px] font-normal">First Name*</lable>
                            <div className="border border-qgray w-full h-full overflow-hidden relative">
                              <input type="text"
                                id="fname" placeholder="Demo Name" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full bg-white font-normal focus:ring-0 focus:outline-none h-[50px]"></input>
                            </div>

                          </div>
                          <div className="flex flex-col gap-y-2 pb-4">
                            <lable className="input-label capitalize block  text-gray-500  text-[15px] font-normal">Phone*</lable>
                            <div className="border border-qgray w-full h-full overflow-hidden relative">
                              <input type="number" placeholder="+91 **********" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full  bg-white font-normal focus:ring-0 focus:outline-none h-[50px]"></input>
                            </div>

                          </div>

                        </div>
                        <div>
                          <div className="flex flex-col gap-y-2 pb-4">
                            <lable className="input-label capitalize block text-gray-500  text-[15px] font-normal">Last Name*</lable>
                            <div className="border border-qgray w-full h-full overflow-hidden relative">
                              <input type="text" placeholder="Demo Name" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full  bg-white font-normal focus:ring-0 focus:outline-none h-[50px]"></input>
                            </div>

                          </div>
                          <div className="flex flex-col gap-y-2 pb-4">
                            <lable className="input-label capitalize block  text-gray-500  text-[15px]  font-normal">Email Address*</lable>
                            <div className="border border-qgray w-full h-full overflow-hidden relative">
                              <input type="email" placeholder="demo@gmail.com" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full bg-white font-normal focus:ring-0 focus:outline-none h-[50px]"></input>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-col gap-y-2 pb-4">
                          <lable className="input-label capitalize block  text-gray-500  text-[15px]  font-normal">Country*</lable>
                          <div className="border border-qgray w-full h-full overflow-hidden relative" > <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                            <span className="text-[13px] text-gray-400">Select Country</span>
                            <span>
                              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z" fill="#222222"></path>
                              </svg>
                            </span>
                          </div></div>

                        </div>
                        <div className="flex flex-col gap-y-2 pb-4">
                          <lable className="input-label capitalize block m text-gray-500  text-[15px]font-normal">Address*</lable>
                          <div className="border border-qgray w-full h-full overflow-hidden relative"> <input type="text" placeholder="Your Address Here" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full  bg-white font-normal focus:ring-0 focus:outline-none h-[50px]"></input></div>

                        </div>
                      </div>

                    </div>
  </>
  )
}

export default PersonalInfo