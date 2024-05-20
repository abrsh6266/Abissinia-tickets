import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

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
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setShowNotification(state, action) {
      state.showNotification = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      Cookies.remove('token');
      localStorage.removeItem("user");
      toast.success("user logout successfully");
    },
  },
});

export const { loginUser, logoutUser,setShowNotification } = userSlice.actions;

export default userSlice.reducer;
