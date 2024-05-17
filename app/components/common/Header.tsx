'use client'
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import { RootState } from "../../store/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userState.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/");
  };
  return (
    <header className=" bg-neutral py-2 text-neutral-content ">
      <div className="align-element flex justify-center sm:justify-end ">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs rounded-lg"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link href="/login" className="link link-hover text-xs sm:text-sm">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="link link-hover text-xs sm:text-sm"
            >
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
