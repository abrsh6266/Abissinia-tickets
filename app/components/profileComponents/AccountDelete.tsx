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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AccountDelete = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const user = useSelector((state: RootState) => state.userState.user);
  const dispatch = useDispatch();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  return (
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4">
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl font-bold sm:text-xl">
            Account Setting
          </h2>

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
                <button
                  onClick={() => openModal()}
                  type="button"
                  className="btn text-base font-medium focus:outline-none  rounded-lg border border-red-700"
                >
                  Delete Account
                  {loading2 && (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog ref={dialogRef} id="my_modal_1" className="modal">
        <div className="modal-box border-2 rounded-md">
          <h3 className="font-bold text-lg">Attention!</h3>
          <p className="py-4">Are you sure you want to delete this account?</p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn mr-4"
                onClick={() => dialogRef.current?.close()}
              >
                No
              </button>
              <button
                className="btn ml-4"
                onClick={() => dialogRef.current?.close()}
              >
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
};

export default AccountDelete;
