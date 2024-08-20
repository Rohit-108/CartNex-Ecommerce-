
import login from "../assets/login.png"
import { useState } from "react";


const Registrationpage = () => {

    const countries = [
        { name: 'India', value: 'india', cities: ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'] },
        { name: 'USA', value: 'usa', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'] },
        
      ];
    
      const [selectedCountry, setSelectedCountry] = useState('');
      const [cities, setCities] = useState([]);
      const [selectedRole, setSelectedRole] = useState('');
    
      
      const handleCountryChange = (e) => {
        const selected = e.target.value;
        setSelectedCountry(selected);
        
        const country = countries.find(country => country.value === selected);
        
        if (country) {
          setCities(country.cities);
        } else {
          setCities([]);
        }
      };


      const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
      };

  return (
    <>
          <section className="w-full pt-0 pb-0 bg-blue-50">
        <div className="container flex justify-center pt-10">
        <div className="lg:flex items-center relative gap-x-5">
         <div className="lg:w-[572px] w-full lg:h-[900px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
      <div className="w-full">
        <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
          <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
            Create Account
          </h1>
          <div className="shape -mt-6">
            <svg
              width="354"
              height="30"
              viewBox="0 0 354 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                stroke="#FFBB38"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className="input-area">
          <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
            <div className="input-com w-full h-full">
              <label
                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                htmlFor="fname"
              >
                First Name*
              </label>
              <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                  placeholder="Enter First Name"
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                  type="text"
                  id="fname"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="input-com w-full h-full">
              <label
                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                htmlFor="lname"
              >
                Last Name*
              </label>
              <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                  placeholder="Enter Last Name"
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                  type="text"
                  id="lname"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
            <div className="input-com w-full h-full">
              <label
                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                htmlFor="email"
              >
                Email Address*
              </label>
              <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                  placeholder="Demo@gmail.com"
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                  type="email"
                  id="email"
                />
              </div>
            </div>
            <div className="input-com w-full h-full">
              <label
                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                htmlFor="phone"
              >
                Phone*
              </label>
              <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                  placeholder="+91 *********"
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full  font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                  type="text"
                  id="phone"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
                    <h6 className="capitalize text-sm font-normal block mb-2">
                      User Role*
                    </h6>
                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                      <select
                        className="w-full h-full text-[13px] text-gray-400 bg-white focus:ring-0 focus:outline-none"
                        id="role"
                        value={selectedRole}
                        onChange={handleRoleChange}
                      >
                        <option value="" disabled>Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>


          <div className="input-item mb-5">
            <div className="input-com w-full h-full">
              <label
                className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                htmlFor="address"
              >
                Address*
              </label>
              <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                  placeholder="Your address Here"
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                  type="text"
                  id="address"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h6 className="capitalize text-sm font-normal block mb-2">
              Country*
            </h6>
            <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
            <select
                  className="w-full h-full text-[13px] text-gray-400 bg-white focus:ring-0 focus:outline-none"
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="" disabled>Select Country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.name}
                    </option>
                  ))}
                </select>
              
            </div>
          </div>

          <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
          <div className="w-1/2">
  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2">
    Town / City*
  </h6>
  <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex items-center mb-2">
    <select
      className="w-full h-full text-[13px] text-gray-500 bg-white focus:ring-0 focus:outline-none"
      id="city"
    >
      <option value="" disabled>Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
   
  </div>
</div>

            <div className="flex-1">
              <div className="w-full h-[50px] mb-5 sm:mb-0">
                <div className="input-com w-full h-full">
                  <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                    Postcode / ZIP*
                  </label>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                    <input
                      placeholder="00000"
                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-full"
                      type="text"
                      spellCheck="false"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="forgot-password-area mb-7">
          <div className="remember-checkbox flex items-center space-x-2.5">
  <input
    type="checkbox"
    id="terms-checkbox"
    className="w-5 h-5 text-qblack border border-light-gray rounded"
  />
  <label htmlFor="terms-checkbox" className="text-base text-black">
    I agree to all{" "}
    <span className="text-qblack">terms and conditions</span> in CartNex.
  </label>
</div>
          </div>
          <div className="signin-area mb-3">
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-black text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
              >
                <span>Create Account</span>
              </button>
            </div>
          </div>
          <div className="signup-area flex justify-center">
            <p className="text-base text-qgraytwo font-normal">
              Already have an Account?
              <a href="/login" className="ml-2 text-qblack">
                Log In
              </a>
            </p>
          </div>
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

export default Registrationpage