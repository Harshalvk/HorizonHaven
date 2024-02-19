import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
