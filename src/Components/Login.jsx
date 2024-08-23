
import login from "../assets/login.png"
import { Link } from "react-router-dom";
import googleicon from "../assets/googleicon.png"



const Login = () => {
  return (
   <>
    <section className="w-full pt-0 pb-7 bg-blue-50">
        <div className="container flex justify-center pt-10">
        <div className="lg:flex items-center relative gap-x-5">
        <div className="lg:w-[572px] w-full h-[783px] flex  bg-white justify-center sm:p-10 p-5 border border-[#E0E0E0]">
            <div className="w-full pt-16  p-0 m-0">
                <div className="flex flex-col justify-center items-center relative text-center mb-7">
                    <h1 className="text-[34px] font-bold leading-[74px] text-black">Log In</h1>
                    <div className="shape -mt-6">
                    <svg width="172" height="29" viewBox="0 0 172 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727" stroke="#FFBB38"></path></svg>
                    </div>
                </div>
                <div className="flex flex-col pt-4 w-full  gap-y-5">
                    <div className="flex flex-col  pl-0">
                    <label className=" capitalize bolck mb-2 text-gray-400 text-lg font-normal">Email*</label>
                        <div className="border border-qgray w-full h-full overflow-hidden relative">
                                                        <input type="text" placeholder="Enter Your Email Here" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full  bg-white font-normal focus:ring-0 focus:outline-none h-[50px]" />
                                                    </div>
                    </div>
                    <div className="flex flex-col  h-full w-full">
                    <label className=" capitalize bolck mb-2 text-gray-400 text-lg font-normal">Password*</label>
                    <div className="border border-qgray w-full h-full overflow-hidden relative">
                                                        <input type="text" placeholder="Enter  Your Password Here" className="placeholder:text-sm text-sm px-6 text-dark-gray w-full  bg-white font-normal focus:ring-0 focus:outline-none h-[50px]" />
                                                    </div>
                    </div>
                    <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center space-x-2.5">
                    <button type="button" className="w-5 h-5 text-black flex justify-center items-center border border-light-gray" ></button>
                    <span className="text-base text-black">Remember me</span></div>
                    <Link to="/"  className="text-yellow-700">
                        <div>Forgot password</div></Link>  
                    </div>
                    <div className="">
                    <Link to="/sellerdashboard">
                        <div className="flex justify-center">
                            <button type="button" className="bg-black mb-6 text-md text-white w-full h-12 font-bold flex justify-center  items-center"><span>Log In</span></button>
                        </div>
                        </Link>
                        <Link to="/" className="w-full border border-gray-400 h-[50px] flex space-x-3 justify-center bg-[#FAFAFA]ites-center" >
                        <div className="flex justify-between items-center"> <img src={googleicon} alt="google"  className="w-[30px] h=[30px]"/>
                        <span className="text-lg text-gray-400 font-semibold">Sign In with Google</span></div>
                           
                        </Link>
                    </div>
                    <div className="flex justify-center">
                    <p className="text-gray-400 font-semibold ">Don't have an account ?
                    <Link to="/registration" className="ml-2 text-black font-semibold" >Sign up free</Link></p></div>
                    
                </div>
            </div>
        </div>
        <div className = "lg:w-[572px] w-full h-[783px] flex  bg-blue-50 justify-center sm:p-10 p-5 flex-1 lg:flex  transform scale-60 xl:scale-100 xl:justify-center">
        <div className="absolute xl:-right-20 -right-[138px] pt-24" >
            <img src={login} alt="login" />
        </div>
        </div>
        </div>
        
        </div>
    </section>
   </>
  )
}

export default Login