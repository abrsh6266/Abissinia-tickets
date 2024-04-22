"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/FormInput";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-gradient-to-t bg-opacity-40 shadow sm:rounded-lg flex justify-center flex-1 flex-col md:flex-row">
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
          <form
            method="post"
            className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
          >
            <h4 className="text-center text-3xl font-bold">Register</h4>
            <FormInput
              type={"text"}
              label={"username"}
              name={"username"}
              defaultValue={""}
            />
            <FormInput
              type={"email"}
              label={"email"}
              name={"email"}
              defaultValue={""}
            />
            <FormInput
              type={"password"}
              label={"password"}
              name={"password"}
              defaultValue={""}
            />
            <div className="mt-4">
              <SubmitBtn text={"register"} />
            </div>
            <p className="text-center">
              Already a member?
              <Link
                className="'ml-2 link link-hover link-primary capitalize"
                href={"/login"}
              >
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
