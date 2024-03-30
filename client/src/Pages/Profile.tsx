import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutUserStart,
  signoutUserSuccess,
  signoutUserFailure,
} from "../redux/user/userSlice.js";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const inputStyle = "p-3 bg-slate-100 rounded focus:outline-none";
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [fileUploadPercentage, setFileUploadPercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleFileUpload = (file: Blob | ArrayBuffer) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFileUploadPercentage(Math.floor(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log("formdata", formData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      const { data } = await axios.post(
        `/api/user/update/${currentUser._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      console.log("Data you want to print", data);

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.response.data.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());

      const { data } = await axios.delete(
        `/api/user/delete/${currentUser._id}`
      );

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.response.data.message));
    }
  };

  const handleSignout = async () => {
    try {
      dispatch(signoutUserStart());
      const { data } = await axios.get("/api/user/signout");

      if (data.success === false) {
        dispatch(signoutUserFailure(data.message));
        return;
      }
      dispatch(signoutUserSuccess(data));
    } catch (error) {
      dispatch(signoutUserFailure(error.response.data.message));
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-3">
        <h1 className="text-center text-3xl font-semibold my-7">Profile</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            accept="image/*"
            hidden
          />
          <img
            src={formData.avatar || currentUser.avatar}
            alt="profile"
            className="rounded-full max-h-28 max-w-28 object-cover cursor-pointer self-center mb-5"
            onClick={() => fileRef.current.click()}
          />
          <p className="self-center">
            {fileUploadError ? (
              <span className="text-red-700 text-center">
                Error Image upload (Image size should be less than 2MB)
              </span>
            ) : fileUploadPercentage > 0 && fileUploadPercentage < 100 ? (
              <span className="text-slate-700 text-center">{`Uploading ${fileUploadPercentage}%`}</span>
            ) : fileUploadPercentage === 100 ? (
              <span className="text-green-700 text-center">
                Image Successfully Uploaded!
              </span>
            ) : (
              ""
            )}
          </p>

          <input
            type="text"
            id="username"
            placeholder="Username"
            defaultValue={currentUser.username}
            className={inputStyle}
            onChange={handleChange}
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            defaultValue={currentUser.email}
            className={inputStyle}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={inputStyle}
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="bg-slate-700 rounded-md p-3 text-xl uppercase text-white hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Update"}
          </button>
          <Link to={'/create-listing'} className="bg-green-700 text-center rounded-md p-3 text-xl uppercase text-white hover:opacity-95 disabled:opacity-80">
            Create Listing
          </Link>
        </form>
        <div className="flex justify-between p-3 font-semibold text-md text-red-700">
          <span
            onClick={handleDeleteUser}
            className="hover:underline  cursor-pointer"
          >
            Delete Account
          </span>
          <span
            onClick={handleSignout}
            className="hover:underline  cursor-pointer"
          >
            Sign Out
          </span>
        </div>

        <p className="text-red-700 font-semibold text-center">
          {error ? error : ""}
        </p>
        <p className="text-green-700 font-semibold text-center">
          {updateSuccess ? "Update Successful" : ""}
        </p>
      </div>
    </>
  );
}
