import { storage } from "@/app/firebase/firebaseConfig";
import { RootState } from "@/app/store/store";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Image from "next/image";

const PublicProfile = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [avatarURL, setAvatarURL] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.userState.user);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
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
          setLoading(false);
          toast.success("Successfully uploaded");
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setAvatarURL(downloadURL); // Update the avatar URL
        }
      );
    }
  };
  useEffect(() => {
    const fetchAvatar = async () => {
      if (user) {
        const avatarRef = ref(storage, `images/${user.id}.jpg`); // Path to the user's avatar image
        try {
          const url = await getDownloadURL(avatarRef);
          setAvatarURL(url);
        } catch (error) {
          console.error("Error fetching avatar:", error);
          // Handle error (e.g., set a default avatar URL)
        }
      }
    };

    fetchAvatar();
  }, [user]);
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
                  avatarURL ||
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
                  type="button"
                  className="btn text-base font-medium focus:outline-none  rounded-lg border border-red-700"
                >
                  Delete picture
                </button>
              </div>
            </div>

            <div className="items-center mt-8 sm:mt-14 ">
              <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your first name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="input input-bordered w-full max-w-xs border"
                    placeholder="Your first name"
                    value="Helina"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="input input-bordered w-full max-w-xs border"
                    placeholder="Your last name"
                    value="Bikes"
                    required
                  />
                </div>
              </div>

              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full border"
                  placeholder="Helina@gmail.com"
                  value={"Helina@gmail.com"}
                  required
                />
              </div>

              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="input input-bordered w-full border"
                  value={"hilu2121"}
                  placeholder="your username"
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  old password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full border"
                  placeholder="******"
                  required
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  new password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full border"
                  placeholder="******"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PublicProfile;
