import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../Components/OAuth";

function SignIn() {
  const inputStyle = "p-3 bg-slate-100 rounded focus:outline-none";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await axios.post("/api/user/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      toast.success("Login Successful!", {
        position: "top-right",
      });

      dispatch(signInSuccess(data));
      navigate("/");

      if (data.success === false) {
        signInFailure(data.message);
        return;
      }
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
      toast.error(error.response.data.message, {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-4">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className={inputStyle}
            id="email"
            onChange={handleOnChange}
          />
          <input
            type="Password"
            placeholder="Password"
            className={inputStyle}
            id="password"
            onChange={handleOnChange}
          />
          <button
            disabled={loading}
            className="bg-main rounded-md p-3 text-xl uppercase text-white hover:opacity-95"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <OAuth />
        </form>
        <p className="text-center mt-4">
          Create an account?{" "}
          <span className="text-secondary hover:underline">
            <Link to={"/sign-up"}>Sign Up</Link>
          </span>
        </p>
        <p>{error}</p>
      </div>
    </>
  );
}

export default SignIn;
