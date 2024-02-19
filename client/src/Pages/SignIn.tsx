import axios from "axios";
import React, { useState } from "react"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const inputStyle = "p-3 bg-slate-100 rounded focus:outline-none";

  const navigate = useNavigate()

  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      await axios.post('/api/user/signin', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(()=> {
        toast.success("Login Successfull!", {
          position: 'top-right'
        })
        navigate('/')
      })
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    setLoading(false)
  }

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
      <button disabled={loading} className="bg-slate-700 rounded-md p-3 text-xl uppercase text-white hover:bg-slate-600">
        {loading ? 'Loading...': 'Login'}
      </button>
    </form>
    <p className="text-center mt-4">
      Create an account?{" "}
      <span className="text-blue-700 hover:underline">
        <Link to={"/sign-up"}>Sign Up</Link>
      </span>
    </p>
  </div>
    </>
  )
}

export default SignIn
