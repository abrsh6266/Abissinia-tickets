import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  }
  return null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  showNotification: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setUser: (state, action) => {
      const user = { ...action.payload.user };
      state.user.avatar = user.avatar;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setShowNotification(state, action) {
      state.showNotification = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      Cookies.remove("token");
      localStorage.removeItem("user");
      toast.success("logged out");
    },
  },
});

export const { loginUser, logoutUser, setShowNotification, setUser } =
  userSlice.actions;

export default userSlice.reducer;
