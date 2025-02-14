import { loginUser, setUser } from "@/app/features/user/userSlice";
import { storage } from "@/app/firebase/firebaseConfig";
import { RootState } from "@/app/store/store";
import { customFetch } from "@/app/utils";
import Cookies from "js-cookie";

import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const PublicProfile = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const user = useSelector((state: RootState) => state.userState.user);
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    email: user?.email || "",
    username: user?.username || "",
    oldPassword: "",
    newPassword: "",
  });
  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await customFetch.put(
        `/user/${user.id}`,
        {
          email: formData.email,
          username: formData.username,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const data = response.data.data;
      if (data.id) {
        dispatch(setUser({ user: data }));
        toast.success("Profile updated successfully");
      } else {
        toast.error("Please try again");
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error?.message || "Please try again";
      toast.error(errorMessage);
      console.error(error?.response);
    }
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const deletePicture = async () => {
    try {
      setLoading2(true);
      const response = await customFetch.put(
        `/user/${user.id}`,
        {
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/abissinia-tickets.appspot.com/o/images%2Favatar2.png?alt=media&token=e591a9bd-aeb6-4cbc-ba31-2c286f6f6f1c",
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const data = response.data.data;
      if (data.id) {
        dispatch(setUser({ user: data }));
        toast.success("Successfully deleted");
      } else {
        toast.error("Please try again");
      }
      setLoading2(false);
    } catch (error: any) {
      setLoading2(false);
      const errorMessage =
        error?.response?.data?.error?.message || "Please try again";

      toast.error(errorMessage);
      console.error(error?.response);
      return null;
    }
  };
  const handleUpload = () => {
    if (image && user) {
      const fileName = `${user.id}.jpg`; // User's ID is appended to the file name
      const storageRef = ref(storage, `images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot: UploadTaskSnapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setLoading(true);
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong, please try again");
          console.error(error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          try {
            const response = await customFetch.put(
              `/user/${user.id}`,
              {
                avatar: downloadURL,
              },
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get("token")}`,
                },
              }
            );
            const data = response.data.data;
            if (data.id) {
              dispatch(setUser({ user: data }));
              toast.success("Successfully uploaded");
            } else {
              toast.error("Please try again");
            }
            setLoading(false);
          } catch (error: any) {
            setLoading(false);
            const errorMessage =
              error?.response?.data?.error?.message || "Please try again";
            toast.error(errorMessage);
            console.error(error?.response);
            return null;
          }
        }
      );
    }
  };
  return (
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4">
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                src={
                  user?.avatar ||
                  "https://firebasestorage.googleapis.com/v0/b/abissinia-tickets.appspot.com/o/images%2Favatar2.png?alt=media&token=e591a9bd-aeb6-4cbc-ba31-2c286f6f6f1c"
                }
                alt="Bordered avatar"
              />

              <div className="flex flex-col space-y-5 sm:ml-8">
                <input
                  onChange={handleChange}
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
                <button
                  onClick={handleUpload}
                  type="button"
                  className="text-base font-medium  focus:outline-none btn focus:ring-4 rounded-lg border border-blue-700"
                >
                  Change picture
                  {loading && (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                </button>
                <button
                  onClick={deletePicture}
                  type="button"
                  className="btn text-base font-medium focus:outline-none  rounded-lg border border-red-700"
                >
                  Delete picture
                  {loading2 && (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid max-w-2xl mx-auto mt-8">
              <div className="mb-2 sm:mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full border"
                  value={formData.email}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="input input-bordered w-full border"
                  value={formData.username}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium">
                  Old password
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  className="input input-bordered w-full border"
                  placeholder="******"
                  value={formData.oldPassword}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label htmlFor="newPassword" className="block mb-2 text-sm font-medium">
                  New password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="input input-bordered w-full border"
                  placeholder="******"
                  value={formData.newPassword}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PublicProfile;
