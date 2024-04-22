"use client";
import Image from "next/image";
import logo from "/public/images/logo2.png";
import Link from "next/link";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

const login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <form
        method="post"
        className="card w-96 gap-y-4 shadow-lg flex flex-col bg-base-100 p-4"
      >
        <h4 className="text-center  text-3xl font-bold">Login</h4>
        <FormInput
          type={"email"}
          label={"email"}
          name={"identifier"}
          defaultValue={"test@test.com"}
        />
        <FormInput
          type={"password"}
          label={"password"}
          defaultValue={"secret"}
          name={"password"}
        />
        <div className="mt-4">
          <SubmitBtn text={"login"} />
        </div>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            href={"/register"}
            className="ml-2 link link-hover link-primary capitalize"
          >Register</Link>
        </p>
      </form>
    </section>
  );
};

export default login;
