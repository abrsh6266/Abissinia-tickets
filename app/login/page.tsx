"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import axios from "axios";

const login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "https://strapi-store-server.onrender.com/api/auth/local",
        formData
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(loginUser({ user: data.user, jwt: data.jwt }));
        router.push("/");
        toast.success("Login successful");
      } else {
        toast.error("Invalid identifier or password");
      }
    } catch (error) {
      toast.error("An error occurred during login");
    }
  };
  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="card w-96 gap-y-4 shadow-lg flex flex-col bg-base-100 p-4"
      >
        <Image
          style={{
            maxWidth: "100%  ",
            height: "auto",
          }}
          src={logo}
          alt="logo"
        />
        <h4 className="text-center  text-3xl font-bold">Login</h4>
        <FormInput
          type={"email"}
          label={"email"}
          name={"identifier"}
          handleChange={handleChange}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name={"password"}
          handleChange={handleChange}
        />
        <div className="mt-4">
          <SubmitBtn text={"login"} />
        </div>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            href={"/signup"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default login;
