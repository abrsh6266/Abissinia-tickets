"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="mx-auto p-8 bg-white border-4 border-gray-600 rounded-lg flex">
        <div className="text-center px-8 py-12">
          <a className="mb-6" href="#">
            <Image
              style={{
                maxWidth: "100%",
                height: "100%",
              }}
              src={logo}
              alt="logo"
            />
          </a>
        </div>
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
              placeholder="password"
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-500 bg-white shadow border-2 border-gray-500 rounded"
              type="password"
              placeholder="confirm Password"
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
  );
};

export default SignUp;
