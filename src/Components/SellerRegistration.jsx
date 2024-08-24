import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg"
import logoimage from "../assets/logoimage.jpg"
import coverimage from "../assets/coverimage.jpg"
const Registration = () => {
  return (
    <>
      <section className="w-full ">
        <div className="flex flex-col">
          <div className=" bg-blue-200 w-full h-[173px] flex justify-center items-center">
            <div className="container-x mx-auto">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl font-semibold text-white">
                  Seller Application
                </h1></div>
            </div>
          </div>


          <div className="container w-full bg-blue-100 mb-10 ">
            <div className="container-x mx-44  bg-white mt-10 h-auto  ">
              <div className="w-full bg:white sm:p-[30px] p-3   ">
                <div className="flex xl:flex-row flex-col-reverse gap-x-2">
                  <div className="xl:w-[824px] ">
                    <div className="w-full mb-4">
                      <h1 className="text-[22px] font-semibold text-qblack mb-1">Seller Information</h1>
                      <p className="text-[15px] text-gray-400 font-semibold">Fill the form below or write us. We will help you as soon as possible</p>
                    </div>
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
                    <div className="w-full mb-4">
                      <h1 className="text-[22px] font-semibold text-qblack mb-1">Shop Information</h1>
                      <p className="text-[15px] text-gray-400 font-medium">Fill the form below or write us .We will help you as soon as possible.</p>
                    </div>
                    <div className="flex  flex-col space-y-2  mb-5">
                      <div className="">
                        <div className="flex flex-col  pb-3">
                          <label className="input-label capitalize block mb-2 text-gray-500  text-[15px] font-normal">Shop Name*</label>
                          <div className="border border-qgray w-full h-full overflow-hidden relative">
                            <input type="text" placeholder="Demo Name" className="placeholder:text-sm font-normal  text-sm px-6 text-gray-400 w-full  bg-white  focus:ring-0 focus:outline-none h-[50px]" />
                          </div>

                        </div>
                        <div className="flex flex-col pb-3">
                          <label className="input-label capitalize block mb-2 text-gray-500  text-[15px] font-normal">Address*</label>
                          <div className="border border-qgray w-full h-full overflow-hidden relative">
                            <input type="text" placeholder="Your Address Here" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full  bg-white font-normal focus:ring-0 focus:outline-none h-[50px]" />
                          </div>

                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-x-5 w-full">

                        <div className="flex flex-col  pb-3">
                          <label className="input-label capitalize block mb-2 text-gray-500  text-[15px] font-normal">password*</label>
                          <div className="border border-qgray w-full h-full overflow-hidden relative">
                            <input type="password" placeholder="● ● ● ● ● ●"
                              className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" />
                          </div>

                        </div>
                        <div className="flex flex-col  pb-3">
                          <label className="input-label capitalize block mb-2 text-gray-500  text-[15px] font-normal">Re-Enter password*</label>
                          <div className="border border-qgray w-full h-full overflow-hidden relative">
                            <input type="password" placeholder="● ● ● ● ● ●"
                              className="placeholder:text-sm text-sm px-6 text-dark-gray w-full bg-white font-normal focus:ring-0 focus:outline-none h-[50px]" />
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <button type="button" className="bg-black text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center bg-purple items-center
                                                " ><span>Create Seller Account</span></button>
                      </div>
                    </div>
                    <div className="signup-area flex justify-center">
                      <p className="text-sm text-gray-500 font-medium">
                        Already have an Account?
                        <Link to="/login" className="ml-2 text-black">Log In</Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 mb-10 xl:mb-0 ml-10">
                    <div className="update-profile w-full mb-9">
                      <h1 className="text-xl tracking-wide font-bold text-black flex items-center mb-2">
                        Update Profile
                        <span></span>
                      </h1>
                      <p className="text-sm text-gray-400 mb-5">
                        Profile of at least Size
                        <span className="ml-1 text-black">300*300</span>. Gifs work too.
                        <span className="ml-1 text-black">Max 5mb</span>.
                      </p>
                      <div className="flex xl:justify-center justify-start">
                        <div className="relative">
                          <img
                            src="/src/assets/profile.jpg"
                            alt="Profile"
                            className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full object-cover"
                          />
                          <input type="file" className="hidden" />
                          <div className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px] hover:bg-[#F539F8] bg-[#F539F8] cursor-pointer rounded-full"><svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                              fill="white"
                            />
                            <path
                              d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                              fill="white"
                            />
                          </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="update-logo w-full mb-9">
                      <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                        Update Logo
                        <span className="ml-1">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                              fill="#374557"
                              fillOpacity="0.6"
                            />
                          </svg>
                        </span>
                      </h1>
                      <p className="text-sm text-gray-400 mb-5">
                        Cover photo of at least Size
                        <span className="ml-1 text-black">300x300</span>. Gifs work too.
                        <span className="ml-1 text-black">Max 5mb</span>.
                      </p>
                      <div className="flex xl:justify-center justify-start">
                        <div className="relative">
                          <img
                            src={logoimage}
                            alt="Logo"
                            className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover"
                          />
                          <input type="file" className="hidden" />
                          <div className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px] hover:bg-[#F539F8] bg-[#F539F8] rounded-full cursor-pointer">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                                fill="white"
                              />
                              <path
                                d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="update-cover w-full">
                      <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                        Update Cover
                        <span className="ml-1">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                              fill="#374557"
                              fillOpacity="0.6"
                            />
                          </svg>
                        </span>
                      </h1>
                      <p className="text-sm text-gray-400 mb-5">
                        Cover of at least Size
                        <span className="ml-1 text-black">1170x920</span>.
                      </p>
                      <div className="flex justify-center">
                        <div className="w-full relative">
                          <img
                            src={coverimage}
                            alt="Cover"
                            className="w-full h-[120px] rounded-lg overflow-hidden object-cover"
                          />
                          <input type="file" className="hidden" />
                          <div className="w-[32px] h-[32px] absolute -bottom-4 right-4 bg-[#F539F8] hover:bg-[#F539F8] rounded-full cursor-pointer">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                                fill="white"
                              />
                              <path
                                d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Registration