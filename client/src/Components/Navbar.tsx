import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import logo from "../../public/logo.svg";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromURL = urlParams.get("searchTerm");
    if (searchTermFromURL) {
      setSearchTerm(searchTermFromURL);
    }
  }, [location.search]);

  return (
    <header className=" bg-[#ECF2F9] shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="w-8 fill-main" />
          <h1 className="font-bold text-main text-2xl flex flex-wrap">
            HorizonHeaven
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-md flex items-center gap-3"
        >
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-700" />
          </button>
        </form>
        <ul className="flex gap-4 items-center">
          <li className="hidden sm:inline font-semibold hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hidden sm:inline font-semibold hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="max-h-10 rounded-full object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-slate-700 hover:underline">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
