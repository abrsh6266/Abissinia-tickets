    "use client";
    import Image from "next/image";
    import logo from "/public/images/logo.png";
    import FormInput from "../components/common/FormInput";
    import SubmitBtn from "../components/SubmitBtn";
    import Link from "next/link";
    import { useDispatch } from "react-redux";
    import { useRouter } from "next/navigation";
    import { useState } from "react";
    import { toast } from "react-toastify";
    import { loginUser } from "../features/user/userSlice";
    import { customFetch } from "../utils";
    import Cookies from "js-cookie";

    const Login = () => {
      const dispatch = useDispatch();
      const router = useRouter();

      const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          const response = await customFetch.post("/login", formData);
          const data = response.data;
          Cookies.set("token", data.jwt);
          dispatch(loginUser({ user: data.user }));
          router.push("/");
          toast.success("Logged in");
        } catch (error: any) {
          const errorMessage =
            error?.response?.data?.error?.message ||
            "please double check your credentials";

          toast.error(errorMessage);
          return null;
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

    export default Login;
