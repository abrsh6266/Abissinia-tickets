"use client";
import { useEffect } from "react";
import MovieRequestForm from "../components/MovieRequestForm";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Page = () => {
  const user = useSelector((state: RootState) => state.userState.user);
  const router = useRouter();
  useEffect(() => {
    if (user?.role !== "Filmmaker") {
      router.push("/");
    }
  }, []);
  return (
    <div className="container mx-auto p-6">
      <MovieRequestForm />
    </div>
  );
};

export default Page;
