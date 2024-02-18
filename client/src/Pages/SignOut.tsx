import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-hot-toast'

export default function SignOut() {
  const inputStyle = "p-3 bg-slate-100 rounded focus:outline-none";

  const [formData, setFormData] = useState({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/user/signup', {formData}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        toast.success('User created successfully!', {
          position: 'top-right',
          
        })
      })
    } catch (error) {
      console.log(error)
      toast.error('User not created', {
        position: 'top-right'
      })
    }
  };

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-4">Sign UP</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className={inputStyle}
            id="username"
            onChange={handleOnChange}
          />
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
          <button className="bg-slate-700 rounded-md p-3 text-xl uppercase text-white hover:bg-slate-600">
            Sign Up
          </button>
          <button className="bg-red-700 rounded-md p-3 text-xl uppercase text-white hover:bg-red-600">
            Continue with google
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span className="text-blue-700 hover:underline">
            <Link to={"/sign-in"}>Sign In</Link>
          </span>
        </p>
      </div>
    </>
  );
}
