"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/common/FormInput";
import { customFetch } from "../utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await customFetch.post("/auth/local/register", formData);
      const data = response.data;
      toast.success("account created successfully");
      return router.push("/login");
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };
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
            onSubmit={handleSubmit}
            className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
          >
            <h4 className="text-center text-3xl font-bold">Register</h4>
            <FormInput
              type={"text"}
              label={"username"}
              name={"username"}
              handleChange={handleChange}
            />
            <FormInput
              type={"email"}
              label={"email"}
              name={"email"}
              handleChange={handleChange}
            />
            <FormInput
              type={"password"}
              label={"password"}
              name={"password"}
              handleChange={handleChange}
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
