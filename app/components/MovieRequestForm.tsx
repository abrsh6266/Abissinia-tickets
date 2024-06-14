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

interface FormData {
  title: string;
  duration: string;
  releaseDate: string;
  poster: File | null;
  posterURL: string;
  description: string;
  yourName: string;
  yourEmail: string;
}

const MovieRequestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    duration: "",
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
        setFormData((prevData) => ({ ...prevData, posterURL: reader.result as string }));
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

      const requestBody = {
        title: formDataWithPosterURL.title,
        duration: parseInt(formDataWithPosterURL.duration),
        releaseDate: new Date(formDataWithPosterURL.releaseDate),
        posterURL: formDataWithPosterURL.posterURL,
        description: formDataWithPosterURL.description,
        yourName: formDataWithPosterURL.yourName,
        yourEmail: formDataWithPosterURL.yourEmail,
      };

      const response = await customFetch2.post(`/movie-requests`, requestBody);

      toast.success("Form submitted successfully!");
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
              "https://firebasestorage.googleapis.com/v0/b/abissinia-tickets.appspot.com/o/images%2Favatar2.png?alt=media&token=e591a9bd-aeb6-4cbc-ba31-2c286f6f6f1c"
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
            Duration
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="grow input input-bordered"
              placeholder="Enter duration in minutes"
              required
            />
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
