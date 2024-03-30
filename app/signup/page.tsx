"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-gray-700 bg-opacity-40 shadow sm:rounded-lg flex justify-center flex-1 flex-col md:flex-row">
        <div className="md:w-1/2 md:h-1/2 lg:h-full p-6 sm:p-12 flex justify-center">
          <div className="text-center px-8 py-12">
            <a className="mb-6" href="#">
              <Image
                style={{
                  width: "auto",
                  height: "100%",
                }}
                src={logo}
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-6 md:p-12">
          <form action="" className="flex flex-col justify-center px-8 py-6">
            <div className="mb-6">
              <input
                className="w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-500 bg-white shadow border-2 border-gray-500 rounded"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-500 bg-white shadow border-2 border-gray-500 rounded"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-500 bg-white shadow border-2 border-gray-500 rounded"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-500 bg-white shadow border-2 border-gray-500 rounded"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button className="py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-black hover:bg-gray-600 border-3 border-indigo-900 shadow rounded transition duration-200">
              Sign Up
            </button>
            <p className="text-center font-extrabold">
              Already have an account?{" "}
              <a className="text-blue-500 hover:underline" href="/login">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
