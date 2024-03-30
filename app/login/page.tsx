"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";

const login = () => {
  return (
    <div className="py-26 bg-black text-gray-100">
      <div className="container px-4 mx-auto ">
        <div className="max-w-lg mx-auto bg-gradient-to-t from-black via-gray-500 to-black bg-opacity-40">
          <div className="text-center mb-8">
            <a className="inline-block mx-auto mb-6" href="#">
              <Image
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          <form action="" className="m-8">
            <div className="mb-6">
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-500 bg-white shadow border-2 border-gray-500 rounded"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="mb-6">
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-gray-500 bg-white shadow border-2 border-gray-500 rounded"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label htmlFor="">
                  <input type="checkbox" />
                  <span className="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4">
                <a
                  className="inline-block font-extrabold hover:underline text-blue-500"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-gray-400 hover:bg-gray-600 border-3 border-indigo-900 shadow rounded transition duration-200">
              Login
            </button>
            <p className="text-center font-extrabold">
              Don&rsquo;t have an account yet?{" "}
              <a className="text-blue-500 hover:underline" href="/signup">
                Click here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
