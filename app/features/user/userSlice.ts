import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const getUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const userString = localStorage.getItem('user');
      return userString ? JSON.parse(userString) : null;
    }
    return null;
  };
  

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("user logout successfully");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
