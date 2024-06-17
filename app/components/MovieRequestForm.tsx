import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";
import { storage } from "@/app/firebase/firebaseConfig";
import { toast } from "react-toastify";
import { customFetch2 } from "../utils";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

interface FormData {
  userId: string;
  title: string;
  durationHours: string;
  durationMinutes: string;
  releaseDate: string;
  poster: File | null;
  posterURL: string;
  description: string;
  yourName: string;
  yourEmail: string;
}

const MovieRequestForm = () => {
  const user = useSelector((state: RootState) => state.userState.user);
  const [formData, setFormData] = useState<FormData>({
    userId: user.id,
    title: "",
    durationHours: "",
    durationMinutes: "",
    releaseDate: "",
    poster: null,
    posterURL: "",
    description: "",
    yourName: "",
    yourEmail: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList | null;
    if (files && files.length > 0) {
      const file = files[0];
      setFormData((prevData) => ({ ...prevData, poster: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          posterURL: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (formData.poster) {
        const storageRef = ref(storage, `posters/${formData.poster.name}`);
        const uploadTask = uploadBytesResumable(storageRef, formData.poster);
        uploadTask.on(
          "state_changed",
          (snapshot: UploadTaskSnapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setLoading(true);
          },
          (error) => {
            setLoading(false);
            toast.error("Image upload failed. Please try again.");
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setLoading(false);
            resolve(downloadURL);
          }
        );
      } else {
        reject(new Error("No file selected"));
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const posterURL = await handleUpload();
      const formDataWithPosterURL = { ...formData, posterURL };

      const durationInMinutes =
        parseInt(formDataWithPosterURL.durationHours) * 60 +
        parseInt(formDataWithPosterURL.durationMinutes);

      const requestBody = {
        userId: formData.userId,
        title: formDataWithPosterURL.title,
        duration: durationInMinutes,
        releaseDate: new Date(formDataWithPosterURL.releaseDate),
        posterURL: formDataWithPosterURL.posterURL,
        description: formDataWithPosterURL.description,
        yourName: formDataWithPosterURL.yourName,
        yourEmail: formDataWithPosterURL.yourEmail,
      };

      const response = await customFetch2.post(`/movie-requests`, requestBody);

      toast.success("Form submitted successfully!");

      // Reset form data to initial values
      setFormData({
        userId: user.id,
        title: "",
        durationHours: "",
        durationMinutes: "",
        releaseDate: "",
        poster: null,
        posterURL: "",
        description: "",
        yourName: "",
        yourEmail: "",
      });
    } catch (error) {
      toast.error("Form submission failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Movie Screening Request Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
          <img
            className="object-cover w-40 h-40 p-1 ring-indigo-300 dark:ring-indigo-500"
            src={
              formData.posterURL ||
              "https://firebasestorage.googleapis.com/v0/b/abissinia-tickets.appspot.com/o/posters%2Fsample.jpg?alt=media&token=627881fa-b6cc-48ef-b679-e797e07f254f"
            }
            alt="Bordered avatar"
          />
          <div className="flex flex-col space-y-5 sm:ml-8">
            <input
              type="file"
              name="poster"
              onChange={handleFileChange}
              required
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            Movie Title
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="grow input input-bordered"
              placeholder="Enter movie title"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            Duration (Hours and Minutes)
            <div className="flex space-x-2">
              <input
                type="number"
                name="durationHours"
                value={formData.durationHours}
                onChange={handleChange}
                className="input input-bordered w-24"
                placeholder="Hours"
                required
              />
              <input
                type="number"
                name="durationMinutes"
                value={formData.durationMinutes}
                onChange={handleChange}
                className="input input-bordered w-24"
                placeholder="Minutes"
                required
              />
            </div>
          </label>
        </div>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            Release Date
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              className="grow input input-bordered"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="grow textarea textarea-bordered"
              placeholder="Enter movie description"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            Your Name
            <input
              type="text"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              className="grow input input-bordered"
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            Your Email
            <input
              type="email"
              name="yourEmail"
              value={formData.yourEmail}
              onChange={handleChange}
              className="grow input input-bordered"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Submit Request
            {loading && (
              <span className="loading loading-spinner loading-md ml-2"></span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieRequestForm;
