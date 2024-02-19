import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className=" bg-slate-200 shadow-sm">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <h1 className="font-bold text-md sm:text-xl flex flex-wrap">
          <span className="text-slate-900">Horizon</span>
          <span className="text-slate-500">Haven</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-md flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-2 items-center">
          <li className="hidden sm:inline font-semibold hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hidden sm:inline font-semibold hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <Link to={"/profile"}>
            {currentUser ? (<img className="max-h-10 rounded-full object-cover" src={currentUser.avatar} alt="profile"/>) : ( <li className="text-slate-700 hover:underline">Sign In</li>)}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
