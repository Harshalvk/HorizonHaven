import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignOut() {
  const inputStyle = "p-3 bg-slate-100 rounded focus:outline-none";

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-4">Sign UP</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className={inputStyle}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="Password"
            placeholder="Password"
            className={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
