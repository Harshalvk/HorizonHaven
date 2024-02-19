import { useSelector } from "react-redux";
export default function Profile() {
  const inputStyle = "p-3 bg-slate-100 rounded focus:outline-none";
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="max-w-lg mx-auto p-3">
        <h1 className="text-center text-3xl font-semibold my-7">Profile</h1>

        <form className="flex flex-col gap-3">
          <img
            src={currentUser.avatar}
            alt="profile"
            className="rounded-full max-h-28 max-w-28 object-cover cursor-pointer self-center mb-5"
          />

          <input type="text" id="username" placeholder="Username" className={inputStyle}/>
          <input type="text" id="email" placeholder="Email" className={inputStyle}/>
          <input type="text" id="password" placeholder="Password" className={inputStyle}/>

          <button className="bg-slate-700 rounded-md p-3 text-xl uppercase text-white hover:opacity-95 disabled:opacity-80">
            Update
          </button>
          <button className="bg-green-700 rounded-md p-3 text-xl uppercase text-white hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </form>
        <div className="flex justify-between p-3 font-semibold text-md text-red-700">
        <span>Delete Account</span>
        <span>Sign Out</span>
        </div>
      </div>
    </>
  );
}
