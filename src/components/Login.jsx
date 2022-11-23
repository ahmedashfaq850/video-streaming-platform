import React from "react";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/9518fc37-ab92-4b32-a8f9-6b6f69a5dd80/PK-en-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed px-4 py-24 w-full z-50">
        <div className="bg-black/75 text-white mx-auto max-w-[450px] h-[500px]">
          <div className="mx-auto max-w-[332px] py-16">
            <h1 className="text-3xl font-bold mb-4">Sign In</h1>
            <form className="w-full">
              <input
                className="w-full p-2 mb-4 bg-gray-700 rounded"
                type="email"
                placeholder="Enter your email or phone"
              />
              <input
                className="w-full p-2 mb-4 bg-gray-700 rounded"
                type="password"
                placeholder="Enter your password"
              />
              <Link to="/">
                <button className="bg-red-600 text-white w-full py-2 mt-4">
                  Sign In
                </button>
              </Link>
              <div className="flex justify-between text-sm mt-4 text-gray-500">
                <div className="flex">
                  <input className="mr-2" type="checkbox" />
                  <p>Remember me</p>
                </div>
                <p>Need help?</p>
              </div>
              <p className="text-sm mt-4 text-gray-500">
                Already have an account?{" "}
                <Link to="/signup">
                  <spna className="text-white text-xl">Sign Up</spna>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
