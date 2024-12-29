import React from 'react';

function contactPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="w-[100%] h-[286px] bg-[#F6F5FF] justify-center flex flex-col mb-6 sm:mb-0">
        <h1 className="flex text-[#151875] text-[42px] ml-[275px] sm:ml-[400px] font-bold">My Account</h1>
        <span className="flex items-center mb-[30px] ml-[275px] sm:ml-[400px]">
          <p className="flex text-black text-[12px] flex-col justify-center items-center">Home .</p>
          <p className="text-black text-[12px] flex justify-center items-center">Pages .</p>
          <p className="text-[#FB2E86] text-[12px] flex justify-center items-center">About Us</p>
        </span>
      </div>

      {/* Login Section */}
      <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:w-96">
          <h1 className="text-center text-2xl font-bold text-black mb-2">Login</h1>
          <p className="text-center text-gray-600 mb-6">
            Please login using account detail below.
          </p>
          <form>
            {/* Email Address Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300
                 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300
                 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            {/* Forgot Password Link */}
            <div className="text-right mb-6">
              <a href="#" className="text-sm text-pink-400 hover:underline">
                Forgot your password?
              </a>
            </div>
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none"
            >
              Sign In
            </button>
          </form>
          {/* Footer Section */}
          <p className="text-center text-gray-600 mt-4">
            Don&apos;t have an Account?{" "}
            <a href="#" className="text-pink-400 hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default contactPage;
